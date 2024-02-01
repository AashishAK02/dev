const firebaseConfig = {
    apiKey: "AIzaSyBmE-YXeuFAFgFjCWM2E91DVeO_JHuIabg",
    authDomain: "portfolio-self-28e95.firebaseapp.com",
    databaseURL: "https://portfolio-self-28e95-default-rtdb.firebaseio.com",
    projectId: "portfolio-self-28e95",
    storageBucket: "portfolio-self-28e95.appspot.com",
    messagingSenderId: "161055597652",
    appId: "1:161055597652:web:6ee07cfc32b8a715a3b9c1"
  };





// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var mobile = getElementVal("mobile");

  saveMessages(name, emailid, msgContent, mobile);

  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent, mobile) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    mobile: mobile,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};