//---------------elements(HTML)
let signIn = document.querySelector('.sign-in');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let container = document.querySelector('.sign-container');
let body = document.querySelector('body');
let warningEmailPassword = document.querySelector('.warningEmailPassword')

//--------------all addEventListeners

signIn.addEventListener('click',SignInFunc);

//----------function for addEventListener

function SignInFunc(){
    let getItem = JSON.parse(localStorage.getItem(`${email.value}`))

    if(getItem != null && getItem[2] == password.value){
        container.style.display="none";
        body.innerHTML+=`
        <div class="customer-container">
        <div>
            <div class="img-container"><img src="../style/free-icon-man-236832.png" class="img-icon">
            </div>
            <h1 class="h1-customer-name">${getItem[0]} ${getItem[1]}</h1>
            <p class="p-customer-email">${email.value}</p>
            <p class="p-customer-job">Designer & Web Developing</p>
        </div>
        <button type="button" class="btn btn-success sign-out" onClick="document.location='../html/sign-up.html'">Sign out</button>
    </div>
        `
    }
    else{
        warningEmailPassword.style.display = "block";
        warningEmailPassword.innerHTML = "invalid email or password";
    }
}

