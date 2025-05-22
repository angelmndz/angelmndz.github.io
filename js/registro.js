  document.getElementById("registerBtn").addEventListener("click", function () {
    const usuario = document.getElementById("nuevoUsuario").value.trim();
    const email = document.getElementById("nuevoCorreo").value.trim();
    const password = document.getElementById("nuevaContraseña").value.trim();
    const confirmPassword = document.getElementById("confirmarContraseña").value.trim();

    if (!usuario || !email || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    for (let key in localStorage) {
      try {
        const user = JSON.parse(localStorage.getItem(key));
        if (user) {
          if (user.email === email) {
            alert("Este correo ya está registrado.");
            return;
          }
          if (key === usuario) {
            alert("Este usuario ya está registrado.");
            return;
          }
        }
      } catch (e) {}
    }

    const userData = {
      usuario: usuario,
      email: email,
      password: password
    };

    localStorage.setItem(usuario, JSON.stringify(userData));
    alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
    window.location.href = "index.html";
  });

