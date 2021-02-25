const auth = firebase.auth();
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e)=>{
    
    e.preventDefault();
    auth.signOut()
    window.location = '../index.html'
});
