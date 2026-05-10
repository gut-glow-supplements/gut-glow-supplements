const yearEl = document.getElementById('year');
const form = document.getElementById('signup-form');
const messageEl = document.getElementById('form-message');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    if (!emailInput || !emailInput.value) {
      messageEl.textContent = 'Please enter a valid email address.';
      return;
    }

    messageEl.textContent = `Thanks, ${emailInput.value}! You're on the list.`;
    form.reset();
  });
}
