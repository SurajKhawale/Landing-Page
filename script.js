const leadForm = document.getElementById('lead-form');
const formNote = document.getElementById('form-note');

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Thank you. Your request has been received. Our deal team will contact you within 1 business day.';
  formNote.style.color = '#86ffcf';
  leadForm.reset();
});
