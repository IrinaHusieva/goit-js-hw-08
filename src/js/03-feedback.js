import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
 const formData = {
        email:'',
        message:'',
 };

 function saveFormData() {
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
 
 
 refs.input.addEventListener('input', throttle(onEmailInput,500));
 refs.textarea.addEventListener('input', throttle(onMessage,500));
refs.form.addEventListener('submit', onFormSubmit);
window.addEventListener("DOMContentLoaded", populateTextarea);
 
 
 function onEmailInput(event) {
     const value = event.target.value;
     formData.email = value;
     saveFormData();
    };

function onMessage(event) {
    const message = event.target.value;
     formData.message = message;
   saveFormData();
};

function populateTextarea() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
    refs.input.value = email;
    refs.textarea.value = message;
    }

};

function onFormSubmit(event) {
    event.preventDefault();
    const email = refs.input.value;
    const message = refs.textarea.value;
   
    if (email && message) {
        console.log(formData);
        localStorage.removeItem(STORAGE_KEY);
        refs.form.reset();
    }
};

