function validateForm() {
    let formMessage = document.getElementById("formMessage");
    formMessage.innerHTML = ""; // Üzenet törlése
  
    // Név validálás (minimum 10 karakter)
    let name = document.getElementById("name").value;
    if (name.length < 10) {
      wrongDataStyle("name");
      formMessage.innerHTML = "A névnek legalább 10 karakternek kell lennie!";
      return false;
    } else{
      rightDataStyle("name");
    }
  
    // E-mail validálás
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      wrongDataStyle("email");
      formMessage.innerHTML = "Kérlek, érvényes e-mail címet adj meg!";
      return false;
    } else{
      rightDataStyle("email");
    }
  
    // Üzenet validálás (minimum 10 karakter)
    let message = document.getElementById("message").value;
    if (message.length < 10) {
      wrongDataStyle("message");
      formMessage.innerHTML = "Az üzenetnek legalább 10 karakternek kell lennie!";
      return false;
    } else{
      rightDataStyle("message");
    }
  
    // Telefonszám validálás
    let phone = document.getElementById("phone").value;
    if (phone.trim() === "") {
      wrongDataStyle("phone");
      formMessage.innerHTML = "A telefonszám megadása kötelező!";
      return false;
    } else{
      rightDataStyle("phone");
    }
  
    // Cím validálás
    let address = document.getElementById("address").value;
    if (address.trim() === "" || address.length < 10) {
      wrongDataStyle("address");
      formMessage.innerHTML = "A címnek legalább 10 karakternek kell lennie!";
      return false;
    } else{
      rightDataStyle("address");
    }
  
    // Ha minden rendben van, a formot elküldjük
    alert("Az üzenet sikeresen elküldve!");
    return true;
  }
  function wrongDataStyle(elementId){
    let element = document.getElementById(elementId);
    element.style.backgroundColor = "rgba(255, 0, 0, 0.316)";
  }
  function rightDataStyle(elementId){
    let element = document.getElementById(elementId);
    element.style.backgroundColor = "white";
  }