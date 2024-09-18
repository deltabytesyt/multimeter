// script.js

document.addEventListener('DOMContentLoaded', function() {
  const donateForm = document.getElementById('donate-form');
  const submitForm = document.getElementById('submit-form');

  if (donateForm) {
    donateForm.addEventListener('submit', handleDonation);
  }

  if (submitForm) {
    submitForm.addEventListener('submit', handleSubmission);
  }
});

function handleDonation(event) {
  event.preventDefault();
  const amount = document.getElementById('donation-amount').value;
  const method = document.getElementById('donation-method').value;

  // Here you would typically integrate with a payment processor
  alert(`Thank you for your donation of $${amount} via ${method}!`);

  // Reset the form
  event.target.reset();
}

async function handleSubmission(event) {
  event.preventDefault();
  const url = document.getElementById('website-url').value;
  const category = document.getElementById('category').value;
  const comments = document.getElementById('comments').value;

  try {
    const response = await fetch('/api/submit-website', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, category, comments }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Website submitted successfully!');
    } else {
      throw new Error(data.message || 'An error occurred while submitting the website.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert(error.message);
  }

  // Reset the form
  event.target.reset();
}