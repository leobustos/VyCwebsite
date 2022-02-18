document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "56920616813";
  
    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let resp = document.querySelector("#respuesta");

  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *[DESDE WEB VYC]*%0A
          *NOMBRE:*%0A
          ${nombre}%0A
          *CORREO:*%0A
          ${email}%0A
          *MENSAJE:*%0A
          ${message}%0A
          `;
  
    if (nombre === "" || email === "" || message === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${nombre}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${nombre}`;
  
    window.open(url);
  });