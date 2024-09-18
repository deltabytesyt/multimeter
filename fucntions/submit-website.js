const { Octokit } = require("@octokit/rest");
const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { url, category, comments } = JSON.parse(event.body);

  // Initialize Octokit with your GitHub Personal Access Token
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  try {
    // Fetch the current blocked_sites.json file
    const { data: fileData } = await octokit.repos.getContent({
      owner: "deltabytesyt",
      repo: "multimeter",
      path: "blocked_sites.json",
    });

    const currentContent = Buffer.from(fileData.content, 'base64').toString();
    const blockedSites = JSON.parse(currentContent);

    // Add the new site to the list
    blockedSites.defaultBlockedSites.push(url);

    // Update the file in the repository
    await octokit.repos.createOrUpdateFileContents({
      owner: "deltabytesyt",
      repo: "multimeter",
      path: "blocked_sites.json",
      message: `Add ${url} to blocked sites`,
      content: Buffer.from(JSON.stringify(blockedSites, null, 2)).toString('base64'),
      sha: fileData.sha,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Website submitted successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error submitting website" }),
    };
  }
};