document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const recipient = document.getElementById('email-link').getAttribute('href').slice(7);
  const status = document.getElementById('form-status');
  if (recipient === 'your-email@example.com') {
    status.textContent = 'The contact email has not been added yet. Please check back when the portfolio is updated.';
    return;
  }
  const data = new FormData(this);
  const subject = encodeURIComponent('Portfolio message from ' + data.get('name'));
  const body = encodeURIComponent(data.get('message') + '\n\nFrom: ' + data.get('name') + '\nReply to: ' + data.get('email'));
  window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
  status.textContent = 'Your email app will open with your message. Send it there to complete your message.';
});
