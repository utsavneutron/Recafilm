//Panel for the Landing page
const panel = document.querySelectorAll('.panel');
panel.forEach((panel)=> {

    panel.addEventListener('click', () =>{
        removeActiveClasses()

        panel.classList.add('active')
    }
    
    )

})

function removeActiveClasses() {
    panel.forEach(panel =>{
        panel.classList.remove('active')
    })
}

// function stringlength(inputtxt, minlength, maxlength)
// { 
// var field = inputtxt.value; 
// var mnlen = minlength;
// var mxlen = maxlength;

// if(field.length<mnlen || field.length> mxlen)
// { 
// alert("The password must be at least " +mnlen+ "characters long");
// return false;
// }
// else
// { 
// return true;
// }
// }

// var check = function() {
//     if (document.getElementById('signup-password').value ==
//       document.getElementById('confirm_password').value) {
//       document.getElementById('message').style.color = 'green';
//       document.getElementById('message').innerHTML = '<i class="fas fa-check"></i>';
//     } else {
//       document.getElementById('message').style.color = 'red';
//       document.getElementById('message').innerHTML = '<i class="fas fa-times"></i>';
//     }
//   }

// Firebase Login page

//   firebase.auth.Auth.Persistence.LOCAL;


//   $("#btn-login").click(function()
//   {
//     var email = $("#email").val();
//     var password = $("#password").val();

//     if(email != "" && password != "")
//     {  
//         var result = firebase.auth().signInWithEmailAndPassword(email, password);

//         result.catch(function(error){
//             var errorCode = error.code;
//             var errorMessage = error.message;
            
//             console.log(errorCode);
//             console.log(errorMessage);
//             window.alert("Message: " + errorMessage);
//         }
//         );
//     }
//     else
//     {
//         window.alert("Please input Email and Password")
//     }
//   });