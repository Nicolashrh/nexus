function iniciarSesion() {
  var usuario = document.getElementById("usuario-ingreso").value;

  if (usuario != "") {
    alert("Bienvenido a nexus " + usuario);
  }
}

function registrarUsuario() {
  var nuevoUsuario = document.getElementById("usuario-registro").value;
  var correo = document.getElementById("correo-registro").value;
  var contraseña = document.getElementById("contraseña-registro").value;

  if (nuevoUsuario != "") {
    alert(
      "Usuario registrado con éxito, ¡Bienvenido a Nexus " + nuevoUsuario + "!",
    );
  }
}
