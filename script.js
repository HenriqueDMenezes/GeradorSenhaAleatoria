var alertBox = document.querySelector('.alertBox');


function getPassword(){
  var chars ="0123456789asdfghjklçmnbvcxzqwertyuiop!@#$%&*()<>{}[]"
  var passwordLength = 16;
  var password = "";

  for(var i = 0;i<17;i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }
  document.getElementById("password").value = password;
}

function copia(){
  var copiaDaSenha = document.getElementById("password");
  copiaDaSenha.Select();
  copiaDaSenha.setSelectionRange(0,9999);
  document.execCommand('copia');
  alertBox.classList.toggle('active');
}


