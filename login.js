// import { firebase } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import firebase from "firebase/app";



function authRegister(event) {


  var registerForm = $("form[name='registerForm']");
  var email = document.getElementById('signupEmail').value;
  var password = document.getElementById('signupPassword').value;
  var fname = document.getElementById("fName").value;
  var lname = document.getElementById("lName").value;
  console.log(email.value)
  console.log(password.value)
  console.log(fName)
  console.log(lName)
  debugger;
  

  firebaseAuth.createUserWithEmailAndPassword(firebaseAuth.auth, email, password)
  .then(function signUpHandler() {
    let fName = document.getElementById('fName').value;
    alert("welcome " + fName)
    })
    .catch(function(err) {
      alert(err.message);
    })
}


// the sign in part
function authLogin(event) {
  var loginForm = $("form[name='loginForm']");
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  console.log(email.value)
  console.log(password.value)
  debugger;

  firebaseAuth.signInWithEmailAndPassword(firebaseAuth.auth, email, password)
    .then(function signUpHandler() {
      let email = document.getElementById('email').value;
      alert("you are succesfuly signed in as " + email )
      document.location.href="cart.html";

    })
    .catch(function(err) {
      alert(err.message);
    });
}



function outputFirebaseData() {
  this.firebaseToken.innerHTML = "Hello";
}