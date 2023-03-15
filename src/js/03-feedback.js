import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener("input", throttle(onInputData, 500));

let formData = {};

const KEY_FEEDBACK_FORM = "feedback-form-state";

function onFormSubmit(event) {
  event.preventDefault();
  console.log(event.currentTarget)
    
  
  if (email.value === "" || message.value === "") {
    return alert("Увага! Всі поля мають бути заповненні!");
  }

  feedbackForm.reset();
  localStorage.removeItem(KEY_FEEDBACK_FORM);
  console.log(formData);
  // formData = {};
}
 

function onInputData(event) {
  formData[event.target.name] = event.target.value;
  const formDataJson = JSON.stringify(formData);
  localStorage.setItem(KEY_FEEDBACK_FORM, formDataJson);
}

const formValue = localStorage.getItem(KEY_FEEDBACK_FORM);

if(formValue) {
  const parseFormValue = JSON.parse(formValue);
 
  
  
  if(parseFormValue.email) {
    email.value = parseFormValue.email
  }
  if(parseFormValue.message) {
    message.value = parseFormValue.message
  }
}






