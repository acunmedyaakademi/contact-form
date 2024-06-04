let names = document.querySelector("#name");
let surname = document.querySelector("#surname");
let email = document.querySelector("#email");
let userMesagge = document.querySelector("#userMesagge");
let subBtn = document.querySelector("#subBtn");
let generalRadio = document.querySelector("#generalRadio");
let supportRadio = document.querySelector("#supportRadio");
let general = document.querySelector("#general");
let support = document.querySelector("#support");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");
let e = document.querySelector(".e");
let table = document.querySelector(".table");
let queryCheckControl = document.querySelector(".queryCheckControl");
let nameControl = document.querySelector(".nameControl");
let surNameControl = document.querySelector(".surNameControl");
let emailControl = document.querySelector(".emailControl");
let messageControl = document.querySelector(".messageControl");
let checkboxControl = document.querySelector(".checkboxControl");
let checked = document.querySelector("#checked");
let sendMessage = document.querySelector('.sendMessage');
table.style.display = "none";

function generalRadioClick() {
  general.style.backgroundColor = "#0C7D69";
  support.style.backgroundColor = "transparent";
}

function supportRadioClick() {
  support.style.backgroundColor = "#0C7D69";
  general.style.backgroundColor = "transparent";
}



function handleSubmit() {
  table.style.display = "block ";
  if (names.value != "") {
    a.innerText = names.value;
    nameControl.innerText = "";
    names.style.border = "1px solid  green";
  } else if (names.value === "") {
    names.style.border = "1px solid  #D73C3C";
    a.innerText = "İsim Kısmını Boş Bıraktınız";
    nameControl.innerText = "Bu alan gereklidir";
  }

  if (surname.value != "") {
    b.innerText = surname.value;
    surNameControl.innerText = "";
    surname.style.border = "1px solid  green";
  } else if (surname.value === "") {
    surname.style.border = "1px solid  #D73C3C";
    b.innerText = "Soyisim Kısmını Boş Bıraktınız";
    surNameControl.innerText = "Bu alan gereklidir";
  }

  if (email.value != "") {
    c.innerText = email.value;
    emailControl.innerText = "";
    email.style.border = "1px solid  green";
  } else if (email.value === "") {
    email.style.border = "1px solid  #D73C3C";
    c.innerText = "E-Posta Kısmını Boş Bıraktınız";
    emailControl.innerText = "Geçerli Bir  E-Posta Adresi Girin";
  }

  if (!supportRadio.checked && !generalRadio.checked) {
    queryCheckControl.innerText = "Lütfen bir sorgu türü seçin";
  } else if (supportRadio.checked) {
    e.innerText = support.innerText;
    queryCheckControl.innerText = "";
  } else if (generalRadio.checked) {
    e.innerText = general.innerText;
    queryCheckControl.innerText = "";
  }

  if (userMesagge.value != "") {
    d.innerText = userMesagge.value;
    messageControl.innerText = "";
    userMesagge.style.border = "1px solid  green";
  } else if (userMesagge.value === "") {
    userMesagge.style.border = "1px solid  #D73C3C";
    d.innerText = "Mesaj Kısmını Boş Bıraktınız";
    messageControl.innerText = "Bu alan gereklidir";
  }

  if (!checked.checked) {
    checkboxControl.innerText =
      "Bu formu göndermek için lütfen sizinle iletişime geçilmesini kabul edin";
  } else {
    checkboxControl.innerText = "";
  }
  sendMessage.style.display ='block'
  setTimeout(()=> {
    sendMessage.style.display = 'none'
  },3000); 

}

subBtn.addEventListener("click", handleSubmit);
