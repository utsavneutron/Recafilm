//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // console.log(email,password)

    //signup the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        sendVerificationEmail();
        signupForm.reset();
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        alert("Sign-In Error: " + errorMessage);
      });
});

const sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification().then(() =>{
        alert("An email has been send to: " + email);
    })
    .catch(error => {
        console.log(error);
    })
}

auth.onAuthStateChanged(user => {
    if(user) {
        window.location = 'login.html'
    }
});