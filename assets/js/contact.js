let names = document.querySelector("#name");
let surname = document.querySelector("#surname");
let email = document.querySelector("#email");
let userMesagge = document.querySelector("#userMesagge");
let subBtn = document.querySelector("#subBtn");
let checked = document.querySelector("#checked");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");
let table = document.querySelector(".table");

table.style.display = "none";

function handleSubmit() {
  table.style.display = "block ";

  if (names.value != "") {
    a.innerText = "Adı: " + names.value;
  } else if (names.value === "") {
    a.innerText = "İsim Kısmını Boş Bıraktınız";
  }

  if (surname.value != "") {
    b.innerText = "Soyadı: " + surname.value;
  } else if (surname.value === "") {
    b.innerText = "Soyisim Kısmını Boş Bıraktınız";
  }

  if (email.value != "") {
    c.innerText = "E-Posta: " + email.value;
  } else if (email.value === "") {
    c.innerText = "E-Posta Kısmını Boş Bıraktınız";
  }

  if (userMesagge.value != "") {
    d.innerText = "Mesaj: " + userMesagge.value;
  } else if (userMesagge.value === "") {
    d.innerText = "Mesaj Kısmını Boş Bıraktınız";
  }
}

subBtn.addEventListener("click", handleSubmit);
