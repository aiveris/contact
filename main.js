// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyA2_vnzozNEH1wkvdy2S0hV6lvm7U7A8FA",
    authDomain: "contactform-a777a.firebaseapp.com",
    databaseURL: "https://contactform-a777a.firebaseio.com",
    projectId: "contactform-a777a",
    storageBucket: "contactform-a777a.appspot.com",
    messagingSenderId: "252661716216",
    appId: "1:252661716216:web:950283549720f2471c970d",
    measurementId: "G-6Y16RPSVEW"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },2000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}