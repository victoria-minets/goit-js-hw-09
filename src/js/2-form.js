const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// ---------------------FILL-------------------------

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);

  if (parsedData.email) {
    form.elements.email.value = parsedData.email;
    formData.email = parsedData.email;
  }

  if (parsedData.message) {
    form.elements.message.value = parsedData.message;
    formData.message = parsedData.message;
  }
}

// ---------------------INPUT-------------------------

form.addEventListener('input', handleInput);

function handleInput(event) {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// ---------------------SUBMIT-------------------------

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  formData = {
    email,
    message,
  };

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
}
