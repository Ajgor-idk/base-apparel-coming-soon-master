const querySelect = (elem) => document.querySelector(elem);

const email = querySelect("#email");
const submit = querySelect("#submit-btn");
const errMsg = querySelect(".err-msg");
const errIcon = querySelect(".err-icon");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener("click", () => {
  if (!emailFormat.test(email.value)) {
    email.classList.add("incorrect-email");
    errMsg.style.display = "inline-block";
    errIcon.style.display = "inline";
  }
});
