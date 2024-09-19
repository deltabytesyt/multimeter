# Multimeter - Adult Content Blocker Extension

**Multimeter** is a powerful browser extension designed to block adult content and websites, providing a safer and cleaner browsing experience for users. It is an essential tool for individuals and families looking to ensure that explicit material is kept out of their internet experience.

## Features

- **Blocks Adult Content:** Automatically blocks access to known adult websites, preventing explicit content from being displayed.
- **Customizable Blacklist/Whitelist:** Users can manually add websites to a custom blacklist or whitelist to block or allow specific sites.
- **Regular Updates:** The extension updates its blocked sites database regularly, ensuring it remains effective over time.
- **Easy to Use Interface:** With a simple and user-friendly popup, users can quickly adjust settings, view logs, or manage blocked sites.
- **Data Privacy:** All settings and custom lists are stored locally, ensuring no personal data is transmitted.

## Installation

Follow these steps to install the **Multimeter** extension manually from source:

1. **Clone or Download the Repository:**
   - Clone the repository using `git clone`:
     ```bash
     git clone https://github.com/deltabytesyt/multimeter-extension.git
     ```
   - Alternatively, download the ZIP file and extract it.

2. **Open Chrome Extensions Page:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** by toggling the switch in the top-right corner.

3. **Load the Extension:**
   - Click on **Load unpacked** and select the directory where you downloaded/cloned the extension.
   - The Multimeter extension will now appear in your extensions list.

4. **Pin the Extension (Optional):**
   - To easily access Multimeter, click on the **Extensions** icon (puzzle piece) in the toolbar and pin the Multimeter icon.

## Usage

Once installed, Multimeter will begin blocking adult content automatically. Here’s how to interact with the extension:

1. **View the Popup:**
   - Click the Multimeter icon in the toolbar to open the popup window.
   - From here, you can manage the extension settings, such as toggling blocking features or adjusting the blacklist and whitelist.

2. **Add/Remove Sites:**
   - You can manually add websites to a blacklist (sites you want to block) or whitelist (sites you want to allow even if flagged).
   
3. **Regular Updates:**
   - The extension will update the blocklist from external sources automatically. It includes blocking resources such as:
     - URLs defined in its own database
     - Contributions from users
     - Updates fetched from online sources

## Customization

Multimeter allows users to customize their experience by adjusting the block settings:

- **Custom Blacklist:** Add URLs to block specific sites not covered by the default blocklist.
- **Custom Whitelist:** If a site is being blocked unnecessarily, you can whitelist it to allow access.

### Permissions

Multimeter requires the following permissions:

- **Tabs:** To monitor and control browser tabs to prevent access to blocked sites.
- **Storage:** To store extension settings, blacklist, and whitelist data locally.
- **Web Request & Web Request Blocking:** To intercept and block requests to adult websites in real time.
- **All URLs:** To allow the extension to block any website that matches the adult content criteria.

## Development

If you want to contribute to the development of Multimeter, here’s how you can get started:

1. **Fork the Repository:** Click the “Fork” button at the top of the repository page.
2. **Clone the Forked Repository:** 
   ```bash
   git clone https://github.com/deltabytesyt/multimeter-extension.git
   ```
3. **Install Dependencies:** 
   - Multimeter is built using vanilla JavaScript, HTML, and CSS, so no additional dependencies are required.
4. **Test Locally:**
   - Make changes and load the extension locally using the steps described in the **Installation** section.

### File Structure

```
multimeter-extension/
│
├── background.js          # Background script for managing blocking
├── manifest.json          # Manifest file defining extension properties and permissions
├── popup.html             # Popup UI for user interaction
├── popup.js               # JavaScript for handling popup interactions
├── styles.css             # Extension-wide CSS styles
├── images/                # Icons used in the extension
│   ├── icon.png           # Primary icon file (used for toolbar and other locations)
├── README.md              # Documentation for the extension
```

### Icons

The extension includes a single **icon.png** file that is used for both the toolbar and extension management pages. This icon is located in the `images/` folder and is automatically scaled for different sizes:
- **48x48**: Used for the Extensions page.
- **128x128**: Used for the Chrome Web Store and extension management interface.

### Contribution Guidelines

1. **Report Bugs or Feature Requests:** If you find a bug or have an idea for a new feature, please create an issue in the GitHub repository.
2. **Create a Pull Request:** Once you’ve made your changes, open a pull request. Be sure to follow the code style used in the project.
3. **Testing:** Test your changes thoroughly before submitting a pull request.

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.



