// Menu Toggel

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = function(){
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

window.onscroll = function(){
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}

// Send Email Dom Manipulation window Location

let contactForm = document.getElementById('contact-form')
let btn = document.getElementById('btn-submit-email')

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      window.location.href = "/thankyou.html";
    })
    .catch((e) => alert("Error occured"));


  } 
  );


  const dataObject = {contactForm}
  console.table(dataObject)