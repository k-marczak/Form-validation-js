const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// add event

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});



const sendData = (usernameVal, sRate, count) => {
    if(sRate === count ){
        swal("Witamy! " + usernameVal, "Rejestracja zakończona powodzeniem", "");
    }
}


const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i; 
            sendData(usernameVal, sRate, count);
        }else{
            return false;
        }
    }


}





// more email validate 

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}




const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // USERNAME

    if(usernameVal === ''){
        setErrorMsg(username, 'pole nie może być puste');
    }else if(usernameVal.length <= 2){
        setErrorMsg(username, 'minimum 3 znaki');
    } else {
        setSuccessMsg(username);

        // EMAIL

    if(emailVal === ''){
        setErrorMsg(email, 'pole nie może być puste');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'nieprawidłowy email');
    } else {
        setSuccessMsg(email);
    }


    // PASSWORD

    if(passwordVal === ''){
        setErrorMsg(password, 'pole nie może być puste');
    }else if(passwordVal.length <= 5){
        setErrorMsg(password, 'Minimum 6 znaków');
    } else {
        setSuccessMsg(password);
    }


    // CONFIRM PASSWORD

    if(cpasswordVal === ''){
        setErrorMsg(cpassword, 'pole nie może być puste');
    }else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'hasła nie są takie same');
    } else {
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal);

}


function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success" 
}


function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errormsgs;
}


}

