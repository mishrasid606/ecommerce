// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});
document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  try {
      const response = await fetch('submit_contact.php', {
          method: 'POST',
          body: formData
      });

      const result = await response.json();

      if (result.success) {
          document.getElementById('response').innerHTML = '<p>Your message has been sent successfully!</p>';
          document.getElementById('contactForm').reset();
      } else {
          document.getElementById('response').innerHTML = '<p>There was an error sending your message. Please try again later.</p>';
      }
  } catch (error) {
      console.error('Error:', error);
      document.getElementById('response').innerHTML = '<p>There was an error sending your message. Please try again later.</p>';
  }
});
