var alertBox = document.querySelector('.alertBox');


function getPassword(){
  var chars ="0123456789asdfghjklçmnbvcxzqwertyuiop!@#$%&*()<>{}[]"
  var passwordLength = 16;
  var password = "";

  for(var i = 0;i<=passwordLength;i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }
  document.getElementById("password").value = password;
  alertBox.innerHTML = "Sua Senha foi copiada : "+ password
}

function copia(){
  var copiaDaSenha = document.getElementById("password");
  copiaDaSenha.select();
  document.execCommand('copy');
  alertBox.classList.toggle('active');
  setTimeout(function(){
    alertBox.classList.toggle('active');
  },2000)
}




