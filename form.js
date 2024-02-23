let btn = document.getElementById("btn");
btn.onclick = function () {
  let nam = document.getElementById("name").value;
  let ema = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let pho = document.getElementById("phone").value;

  let nameRegex = /^[a-z]{3,}$/gi;
  let emailRegex = /.{3,}@[a-z]{3,}\.[a-z]{2,}/gi;
  let phoneRegex = /\d/gi;
  let passwordRegex = /(?=.*[A-Z])(?=.*\d)(?=.*\W)/g;

  if (nam === "" || ema === "" || pass === "" || pho === "") {
    alert("Please enter values for every field");
  } else if (!nameRegex.test(nam)) {
    alert("Please enter valid name");
  } else if (!emailRegex.test(ema)) {
    alert("Please enter valid Email address");
  } else if (!phoneRegex.test(pho)) {
    alert("Please enter valid phone number");
  } else if (!(pass.length >= 7 && passwordRegex.test(pass))) {
    alert("Please enter valid password");
  } else {
    let user = {
      thename: nam,
      thepassword: pass,
      theemail: ema,
      thephone: pho,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("thank for signing up");
  }
};

let eyeClose = document.getElementById("eyeclose")
let eyeOpen = document.getElementById("eyeopen")
let pass = document.getElementById("password")

eyeOpen.onclick = function() {
  this.style.display = "none"
  eyeClose.style.display = "block"
  pass.setAttribute("type", "text")
}


eyeClose.onclick = function() {
  this.style.display = "none"
  eyeOpen.style.display = "block"
  pass.setAttribute("type", "password")
}