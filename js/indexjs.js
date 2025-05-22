document.getElementById("loginBtn").addEventListener("click", function () {
  const emailOrUser = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!emailOrUser || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  let accesoPermitido = false;

  for (let key in localStorage) {
    try {
      const userData = JSON.parse(localStorage.getItem(key));
      if (userData) {
        const esEmail = userData.email === emailOrUser;
        const esUsuario = key === emailOrUser;

        if ((esEmail || esUsuario) && userData.password === password) {
          accesoPermitido = true;

          // Guardar usuario activo
          localStorage.setItem('username', key);
          break;
        }
      }
    } catch (e) {}
  }

  if (accesoPermitido) {
    window.location.href = "inicio.html";
  } else {
    alert("Usuario/correo o contraseña incorrectos.");
  }
});

document.getElementById("forgotLink").addEventListener("click", function () {
  document.getElementById("recoveryModal").style.display = "flex";
});

function closeModal() {
  document.getElementById("recoveryModal").style.display = "none";
}

document.getElementById("recoverBtn").addEventListener("click", function () {
  const input = document.getElementById("recoverInput").value.trim();
  let found = false;

  for (let key in localStorage) {
    try {
      const userData = JSON.parse(localStorage.getItem(key));
      if (userData && (key === input || userData.email === input)) {
        alert("Tu contraseña es: " + userData.password);
        found = true;
        closeModal();
        break;
      }
    } catch (e) {}
  }

  if (!found) {
    alert("No se encontró una cuenta con ese correo o usuario.");
  }
});


function accedeInvitado(){
      window.location.href = "inicio.html";

}