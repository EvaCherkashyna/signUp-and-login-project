//---------------elements(HTML)
let signUp = document.querySelector(".sign-up");
let warningPassword = document.querySelector(".warningPassword");
let warningEmail = document.querySelector(".warningEmail");
let warningName = document.querySelector(".warningName");
let warningLastName = document.querySelector(".warningLastName");
let warningAboutBlankField = document.querySelector(".warningAboutBlankField")
let firstname = document.querySelector(".firstname");
let lastname = document.querySelector(".lastname");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

//---------------regular exp

let RegExpForGmail = /^[a-zA-Z][\w.]+@gmail.com$/;
let RegExpForUkrNet = /^[a-zA-Z][\w.]+@ukr.net$/;
let RegExpForName = /^[A-Z][a-z]$/;
let RegExpForPassword = /^\w.{8,}$/;

//--------------all addEventListeners
firstname.addEventListener("change", ChangeName);
lastname.addEventListener("change", ChangeLastName);
email.addEventListener("change", (event) => {
  if (
    !RegExpForGmail.test(event.target.value) &&
    !RegExpForUkrNet.test(event.target.value)
  ) {
    warningEmail.style.display = "block";
    warningEmail.innerHTML = "invalid email, write www@gmail.com or www@ukr.net";
  } else if (localStorage.getItem(`${event.target.value}`) != null) {
    warningEmail.style.display = "block";
    warningEmail.innerHTML = "email is already used";
  } else {
    warningEmail.style.display = "none";
  }
});
password.addEventListener("change", (event) => {
  if (!RegExpForPassword.test(event.target.value)) {
    console.log(1);
    warningPassword.style.display = "block";
    warningPassword.innerHTML = "invalid password at least 8 signs";
  } else {
    warningPassword.style.display = "none";
  }
});
signUp.addEventListener("click", SignUpFunc);

//----------function for addEventListener
function SignUpFunc() {
  if (
    email.value === "" ||
    password.value === "" ||
    lastname.value === "" ||
    firstname.value === ""
  ) {
      console.log(3);
      warningAboutBlankField.style.display = "block";
      warningAboutBlankField.innerHTML = "All fields are required";
  } else if (
    warningAboutBlankField.style.display != "block" &&
    warningAboutBlankField.style.display != "block"
  ) {
    let info = [firstname.value, lastname.value, password.value];
    console.log(JSON.stringify(info));
    localStorage.setItem(`${email.value}`, JSON.stringify(info));
    warningAboutBlankField.style.display = "none";
    password.value = "";
    email.value = "";
    lastname.value = "";
    firstname.value = "";
  }
}
function ChangeName() {
    if (!RegExpForName.test(firstname.value)) {
        console.log(1);
        warningName.style.display = "block";
        warningName.innerHTML = "invalid firstname";
      } 
      else{
        warningName.style.display = "none";
      }
}
function ChangeLastName() {
    if (!RegExpForName.test(lastname.value)) {
        console.log(1);
        warningLastName.style.display = "block";
        warningLastName.innerHTML = "invalid lastname";
      } 
      else{
        warningLastName.style.display = "none";
      }
}
