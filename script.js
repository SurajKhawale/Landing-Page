const leadForm = document.getElementById('lead-form');
const formNote = document.getElementById('form-note');

const setFormNote = (message, color) => {
  if (!formNote) {
    return;
  }

  formNote.textContent = message;
  formNote.style.color = color;
};

leadForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const submitButton = leadForm.querySelector('button[type="submit"]');
  const formData = new FormData(leadForm);
  const endpoint = leadForm.action;
  const method = (leadForm.method || 'POST').toUpperCase();

  if (!endpoint) {
    setFormNote('Submission is temporarily unavailable. Please email deals@channelequitydesk.com.', '#ffb4b4');
    return;
  }

  submitButton?.setAttribute('disabled', 'true');
  setFormNote('Submitting your request securely...', '#b6becc');

  try {
    const response = await fetch(endpoint, {
      method,
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Lead submission failed.');
    }

    setFormNote('Thank you. Your request has been received. Our deal team will contact you within 1 business day.', '#86ffcf');
    leadForm.reset();
  } catch (error) {
    setFormNote('We could not submit your request. Please try again or email deals@channelequitydesk.com.', '#ffb4b4');
  } finally {
    submitButton?.removeAttribute('disabled');
  }
});
