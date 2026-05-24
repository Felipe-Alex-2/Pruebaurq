const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  const usuarioError = document.getElementById("usuarioError");
  const passwordError = document.getElementById("passwordError");
  const mensaje = document.getElementById("mensaje");

  usuarioError.textContent = "";
  passwordError.textContent = "";
  mensaje.textContent = "";
  mensaje.className = "message";

  let valido = true;

  if (usuario === "") {
    usuarioError.textContent = "El usuario es obligatorio";
    valido = false;
  }

  if (password === "") {
    passwordError.textContent = "La contraseña es obligatoria";
    valido = false;
  }

  if (!valido) {
    return;
  }

  // Usuario y contraseña de prueba
  if (usuario === "admin" && password === "12345") {
    mensaje.textContent = "Inicio de sesión correcto";
    mensaje.classList.add("success");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos";
    mensaje.classList.add("fail");
  }
});