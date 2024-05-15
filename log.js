const PhoneForm = document.querySelector('.PhoneForm');
const EmailForm = document.querySelector('.EmailForm');
const Emailtextform = document.querySelector('.Emailtextform');
const Phonetextform = document.querySelector('.Phonetextform');
const hr = document.querySelector('hr');

PhoneForm.addEventListener('click', () => {
    Emailtextform.classList.remove('active');
    Phonetextform.classList.remove('active');
    hr.classList.remove('active');
});

EmailForm.addEventListener('click', () => {
    Emailtextform.classList.add('active');
    Phonetextform.classList.add('active');
    hr.classList.add('active');
});