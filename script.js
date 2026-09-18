const today = document.querySelector('#today');
if (today) today.textContent = new Intl.DateTimeFormat('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.querySelector('.signup-form');
const toast = document.querySelector('.toast');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const input = form.querySelector('input');
  if (!input.value) return;
  toast.textContent = 'धन्यवाद! आपका ईमेल सफलतापूर्वक दर्ज हो गया।';
  toast.classList.add('show');
  input.value = '';
  window.setTimeout(() => toast.classList.remove('show'), 3500);
});

document.querySelector('.search-button')?.addEventListener('click', () => {
  toast.textContent = 'खोज सुविधा जल्द उपलब्ध होगी।';
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2800);
});
