function cliqueParaValidarFormulario() {
  let inputEmailValue = document.getElementById("email").value;
  let inputSenhaValue = document.getElementById("senha").value;
  let inputEmailStyles = document.getElementById("email");
  let inputSenhaStyles = document.getElementById("senha");
  let botao = document.getElementById("botao");
  let tituloAcesso = document.getElementById("titulo-acesso");
  inputEmailStyles.addEventListener("input", function () {
    document.getElementById("email-erro-mensagem").style.display = "";
    document.getElementById("senha-erro-mensagem").style.display = "";
    document.getElementById("erro-email-senha-incorretos").style.display = "";
    document.getElementById("sucesso-login").style.display = "";
    inputEmailStyles.style.border = "";
    inputEmailStyles.style.boxShadow = "";
    inputSenhaStyles.style.border = "";
    inputSenhaStyles.style.boxShadow = "";
    botao.style.backgroundColor = "";
    tituloAcesso.style.color = "";
  });
  inputSenhaStyles.addEventListener("input", function () {
    document.getElementById("email-erro-mensagem").style.display = "";
    document.getElementById("senha-erro-mensagem").style.display = "";
    document.getElementById("erro-email-senha-incorretos").style.display = "";
    document.getElementById("sucesso-login").style.display = "";
    inputEmailStyles.style.border = "";
    inputEmailStyles.style.boxShadow = "";
    inputSenhaStyles.style.border = "";
    inputSenhaStyles.style.boxShadow = "";
    botao.style.backgroundColor = "";
    tituloAcesso.style.color = "";
  });
  if (inputEmailValue === "") {
    document.getElementById("email-erro-mensagem").style.display = "block";
    inputEmailStyles.style.border = "1px solid red";
    inputEmailStyles.style.boxShadow = "0px 0px 5px red, 0px 0px 5px inset red";
    botao.style.backgroundColor = "red";
    tituloAcesso.style.color = "red";
    return;
  } else if (inputSenhaValue === "") {
    document.getElementById("senha-erro-mensagem").style.display = "block";
    inputSenhaStyles.style.border = "1px solid red";
    inputSenhaStyles.style.boxShadow = "0px 0px 5px red, 0px 0px 5px inset red";
    botao.style.backgroundColor = "red";
    tituloAcesso.style.color = "red";
    return;
  } else if (
    inputEmailValue === "admin@gmail.com" &&
    inputSenhaValue === "admin"
  ) {
    tituloAcesso.style.color = "#008d00";
    inputEmailStyles.style.boxShadow =
      "0px 0px 5px #008d00, 0px 0px 5px inset #008d00";
    inputEmailStyles.style.border = "1px solid #008d00";
    inputSenhaStyles.style.boxShadow =
      "0px 0px 5px #008d00, 0px 0px 5px inset #008d00";
    inputSenhaStyles.style.border = "1px solid #008d00";
    botao.style.backgroundColor = "#008d00";
    document.getElementById("sucesso-login").style.display = "block";
    setTimeout(function () {
      window.location.href = "home.html";
    }, 2000);
  } else {
    document.getElementById("erro-email-senha-incorretos").style.display =
      "block";
    botao.style.backgroundColor = "red";
    tituloAcesso.style.color = "red";
    inputEmailStyles.style.boxShadow = "0px 0px 5px red, 0px 0px 5px inset red";
    inputEmailStyles.style.border = "1px solid red";
    inputSenhaStyles.style.boxShadow = "0px 0px 5px red, 0px 0px 5px inset red";
    inputSenhaStyles.style.border = "1px solid red";
    document.getElementById("exibir-container").style.display = "block";
    document.getElementById("botao-ok").addEventListener("click", function () {
      document.getElementById("exibir-container").style.display = "none";
    });
  }
}
