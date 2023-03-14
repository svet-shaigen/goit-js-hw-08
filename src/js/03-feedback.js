import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener("input", throttle(onInputData, 500));

let formData = {};

const KEY_FEEDBACK_FORM = "feedback-form-state";

function onFormSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, message }
    } = event.currentTarget;
  
    if (email.value === "" || message.value === "") {
      return alert("Увага! Всі поля мають бути заповненні!");
    }

  event.currentTarget.reset();
  localStorage.removeItem(KEY_FEEDBACK_FORM);
  console.log(formData);
  // formData = {};
}
 

function onInputData(event) {
    formData[event.target.name] = event.target.value;
    const formDataJson = JSON.stringify(formData);
  localStorage.setItem(KEY_FEEDBACK_FORM, formDataJson);
}



