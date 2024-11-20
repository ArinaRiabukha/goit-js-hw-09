let formData= { 
    email: "", 
    message: "" 
}

const storageKey= "feedback-form-state";

const form= document.querySelector('.feedback-form');
const emailInput= form.elements.email;
const messageInput= form.elements.message;

function saveToLocalStorage() {
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
function processInput(event) {
    formData[event.target.name] = event.target.value;
    saveToLocalStorage();
  }
  

  function loadFromLocalStorage() {
    const savedData= localStorage.getItem(storageKey);
    if (savedData) {
      formData= JSON.parse(savedData);
      emailInput.value= formData.email;
      messageInput.value= formData.message;
    }
  }
  
  function processSubmit(event) {
    event.preventDefault();
  
    if (!formData.email.trim() || !formData.message.trim()) {
      alert("Fill please all fields");
      return;
    }

    console.log({
        email: formData.email.trim(),
        message: formData.message.trim()
    });

    form.reset();
    formData = { email: "", message: "" };
  }

form.addEventListener("input", processInput);
form.addEventListener("submit", processSubmit);

loadFromLocalStorage();