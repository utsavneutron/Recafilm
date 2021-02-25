//login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //get user Info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        loginForm.reset();
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        alert("Sign-In Error: " + errorMessage);
      });

});

auth.onAuthStateChanged(user => {
    if(user) {
        window.location = 'home.html';
    }
    
});