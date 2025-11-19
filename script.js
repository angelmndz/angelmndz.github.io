        function openAddVehicleModal() {
            alert("Aquí se abriría el formulario o modal para agregar un nuevo vehículo.");
            // En una aplicación real, pondrías código para mostrar un modal
            // o navegar a una nueva página de formulario.
        }
        
        document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a las vistas y enlaces
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');
    
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Función para cambiar de vista
    function switchView(fromView, toView) {
        fromView.classList.remove('active');
        fromView.classList.add('hidden');
        
        toView.classList.remove('hidden');
        toView.classList.add('active');
    }

    // 2. Eventos para cambiar entre login y registro
    if (showRegisterLink && loginView && registerView) {
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(loginView, registerView);
        });
    }
})

/**
 * Este código debe estar en tu archivo 'script.js'
 */

// Función de prueba, solo para referencia
function openAddVehicleModal() {
    alert("Aquí se abriría el formulario o modal para agregar un nuevo vehículo.");
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a las vistas, enlaces y formularios
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');
    
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    const confirmPasswordInput = document.getElementById('confirm-password');
    const registerPasswordInput = document.getElementById('register-password');

    // Función para cambiar de vista
    function switchView(fromView, toView) {
        fromView.classList.remove('active');
        fromView.classList.add('hidden');
        
        toView.classList.remove('hidden');
        toView.classList.add('active');
    }

    // 2. Eventos para cambiar entre login y registro
    if (showRegisterLink && loginView && registerView) {
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(loginView, registerView);
        });
    }

    if (showLoginLink && loginView && registerView) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(registerView, loginView);
        });
    }

    // --- NUEVA LÓGICA DE REGISTRO CON LOCALSTORAGE ---

    if (registerForm && registerPasswordInput && confirmPasswordInput) {
        registerForm.addEventListener('submit', (e) => {
            // Evitar que el formulario se envíe realmente al servidor (comportamiento predeterminado)
            e.preventDefault(); 
            
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = registerPasswordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            // 1. Validar que las contraseñas coincidan
            if (password !== confirmPassword) {
                alert("Error: Las contraseñas no coinciden.");
                // Opcionalmente, puedes agregar un mensaje de error más visible en el HTML
                return; // Detiene el proceso si no coinciden
            }

            // 2. Preparar el objeto del usuario
            const userData = {
                name: name,
                email: email,
                password: password // NOTA: En un entorno de producción, la contraseña NUNCA debe almacenarse en localStorage, y mucho menos sin cifrar. Esto es solo una SIMULACIÓN.
            };

            // 3. Almacenar el objeto en localStorage
            // El email se usa como clave única para el usuario
            try {
                // Convertir el objeto JavaScript a una cadena JSON
                localStorage.setItem(`user_${email}`, JSON.stringify(userData));
                
                alert(`¡Registro exitoso para ${name}! (Datos almacenados localmente)`);

                // 4. Limpiar el formulario y volver a la vista de login
                registerForm.reset();
                switchView(registerView, loginView);

            } catch (error) {
                console.error("Error al guardar en localStorage:", error);
                alert("No se pudo completar el registro. Intenta de nuevo.");
            }
        });
    }

    // --- LÓGICA DE LOGIN (OPCIONAL, para verificar el registro) ---
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // 1. Intentar obtener el usuario de localStorage
            const storedUser = localStorage.getItem(`user_${email}`);

            if (storedUser) {
                // 2. Parsear la cadena JSON a un objeto
                const userData = JSON.parse(storedUser);
                
                // 3. Verificar la contraseña
if (userData.password === password) {

    // Guardar al usuario actual
    localStorage.setItem("currentUser", JSON.stringify(userData));

    alert(`Bienvenido, ${userData.name}! Has iniciado sesión.`);
    window.location.href = 'inicio.html';
    loginForm.reset();
}
 
                    
                else {
                    alert("Contraseña incorrecta.");
                }
            } else {
                alert("Usuario no encontrado. Por favor, regístrate.");
            }
        });
    }

});

/* NOTA: Las funciones de JavaScript permanecen iguales a la versión anterior ya que manejan la lógica, no el estilo. */

/* =================== MOSTRAR USUARIO =================== */
document.addEventListener("DOMContentLoaded", () => {
    const userInfoSpan = document.getElementById("userName");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        userInfoSpan.textContent = currentUser.name || currentUser.email;
        loadVehicles();
    } else {
        userInfoSpan.textContent = "Invitado";
    }
});

/* =================== CERRAR SESIÓN =================== */
function cerrarSesion() {
    const confirmar = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmar) {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
    }
}

/* =================== MODAL =================== */
function openAddVehicleModal() {
    document.getElementById("modalNuevoVehiculo").classList.add("active");
}

function closeAddVehicleModal() {
    document.getElementById("modalNuevoVehiculo").classList.remove("active");
    // Limpiar formulario al cerrar
    document.querySelector('.modal-form').reset();
}


/* =================== GUARDAR VEHÍCULO =================== */
function saveVehicle() {
    const marca = document.getElementById("vehiculoMarca").value.trim();
    const modelo = document.getElementById("vehiculoModelo").value.trim();
    const anio = document.getElementById("vehiculoAnio").value.trim();
    const placas = document.getElementById("vehiculoPlacas").value.trim(); 
    const kilometraje = document.getElementById("vehiculoKilometraje").value.trim(); 

    if (!name || !marca || !modelo || !anio || !kilometraje) {
        alert("Por favor, completa los campos requeridos (Nombre, Marca, Modelo, Año, Kilometraje).");
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
        alert("Error: No se encontró la sesión de usuario.");
        return;
    }
    const key = `vehicles_${currentUser.email}`;

    const vehicles = JSON.parse(localStorage.getItem(key)) || [];

    vehicles.push({
        name,
        marca,
        modelo,
        anio,
        placas, 
        kilometraje, 
        id: Date.now()
    });

    localStorage.setItem(key, JSON.stringify(vehicles));

    closeAddVehicleModal();
    loadVehicles();
}



// Se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificar sesión al cargar la página
    checkSession();
    // 2. Cargar vehículos del localStorage
    loadVehicles();
});




/**
 * Abre el modal de agregar nuevo vehículo.
 */
function openAddVehicleModal() {
    const modal = document.getElementById('modalNuevoVehiculo');
    if (modal) {
        modal.classList.add('active');
    }
}

/**
 * Cierra el modal de agregar nuevo vehículo y limpia el formulario.
 */
function closeAddVehicleModal() {
    const modal = document.getElementById('modalNuevoVehiculo');
    if (modal) {
        modal.classList.remove('active');
    }
    // Opcional: Limpiar los campos del formulario
    document.getElementById('vehiculoMarca').value = '';
    document.getElementById('vehiculoModelo').value = '';
    document.getElementById('vehiculoAnio').value = '';
    document.getElementById('vehiculoPlacas').value = '';
    document.getElementById('vehiculoKilometraje').value = '';
}


/**
 * ************************************************************
 * Funcionalidades de Almacenamiento de Vehículos (localStorage)
 * ************************************************************
 */

/**
 * Obtiene el array de vehículos almacenados para el usuario actual.
 * @returns {Array} Un array de objetos de vehículo o un array vacío si no hay datos.
 */
function getVehicles() {
    // Identificador único para almacenar los vehículos.
    // Usamos el email del usuario si está logueado, o una clave genérica si no lo está.
    const userEmail = localStorage.getItem('currentUserEmail') || 'guest_vehicles'; 
    const key = `vehicles_${userEmail}`;

    const vehiclesJson = localStorage.getItem(key);
    
    // Si hay datos, los parsea, si no, devuelve un array vacío
    return vehiclesJson ? JSON.parse(vehiclesJson) : [];
}

/**
 * Guarda el array de vehículos en el localStorage para el usuario actual.
 * @param {Array} vehicles El array de objetos de vehículo a guardar.
 */
function saveVehicles(vehicles) {
    const userEmail = localStorage.getItem('currentUserEmail') || 'guest_vehicles';
    const key = `vehicles_${userEmail}`;
    
    localStorage.setItem(key, JSON.stringify(vehicles));
}

/**
 * Captura los datos del formulario, crea un nuevo vehículo, lo guarda
 * y actualiza la lista en la interfaz.
 */
function saveVehicle() {
    // 1. Obtener valores del formulario
    const marca = document.getElementById('vehiculoMarca').value.trim();
    const modelo = document.getElementById('vehiculoModelo').value.trim();
    const anio = document.getElementById('vehiculoAnio').value.trim();
    const placas = document.getElementById('vehiculoPlacas').value.trim();
    const kilometraje = document.getElementById('vehiculoKilometraje').value.trim();

    // Comprobación básica de que los campos requeridos no estén vacíos
    if (!marca || !modelo || !anio || !kilometraje) {
        alert("Por favor, rellena todos los campos requeridos (Marca, Modelo, Año, Kilometraje).");
        return;
    }

    // 2. Crear objeto Vehículo
    const nuevoVehiculo = {
        id: Date.now(), // ID único basado en el timestamp
        marca: marca,
        modelo: modelo,
        anio: parseInt(anio),
        placas: placas.toUpperCase(),
        kilometraje: parseInt(kilometraje),
        fechaRegistro: new Date().toLocaleDateString('es-ES'),
    };

    // 3. Obtener lista actual, agregar nuevo vehículo y guardar
    const vehicles = getVehicles();
    vehicles.push(nuevoVehiculo);
    saveVehicles(vehicles);

    // 4. Cerrar modal y actualizar la lista en la interfaz
    closeAddVehicleModal();
    loadVehicles(); 
    alert(`Vehículo ${marca} ${modelo} (${anio}) guardado exitosamente.`);
}

/**
 * Carga los vehículos del localStorage y actualiza el DOM para mostrarlos.
 */
function loadVehicles() {
    const vehicles = getVehicles();
    const listContainer = document.getElementById('vehicles-list');
    
    if (!listContainer) return; // Evitar errores si el contenedor no existe

    // Limpiar el contenido actual
    listContainer.innerHTML = ''; 

    if (vehicles.length === 0) {
        // Mostrar mensaje si no hay vehículos
        listContainer.innerHTML = '<p class="info-message">No hay vehículos registrados. Haz clic en "Agregar Vehículo".</p>';
    } else {
        // Generar y agregar una tarjeta por cada vehículo
        vehicles.forEach(vehicle => {
            const vehicleCard = createVehicleCard(vehicle);
            listContainer.appendChild(vehicleCard);
        });
    }
}



/**
 * Función de ejemplo para eliminar un vehículo.
 * @param {number} vehicleId El ID del vehículo a eliminar.
 */
function deleteVehicle(vehicleId) {
    if (confirm("¿Estás seguro de que quieres eliminar este vehículo? Esta acción es irreversible.")) {
        let vehicles = getVehicles();
        // Filtra para crear un nuevo array sin el vehículo a eliminar
        vehicles = vehicles.filter(vehicle => vehicle.id !== vehicleId);
        
        saveVehicles(vehicles); // Guardar el nuevo array
        loadVehicles(); // Recargar la lista en la interfaz
        alert('Vehículo eliminado.');
    }
}

/**
 * Función de ejemplo para ver detalles (simulación).
 * @param {number} vehicleId El ID del vehículo.
 */
function viewVehicleDetails(vehicleId) {
    const vehicles = getVehicles();
    const vehicle = vehicles.find(v => v.id === vehicleId);
    
    if (vehicle) {
        alert(`Detalles de ${vehicle.marca} ${vehicle.modelo}:\nKilometraje: ${vehicle.kilometraje} km\nPlacas: ${vehicle.placas}`);
        // Normalmente, aquí redirigirías a una página de detalles o abrirías un modal.
    }
}

/**
 * Crea el elemento HTML (tarjeta) para un vehículo dado.
 * @param {Object} vehicle El objeto de vehículo.
 * @returns {HTMLElement} El elemento div que representa la tarjeta del vehículo.
 */
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.classList.add('vehicle-card-v2');
    card.setAttribute('data-id', vehicle.id);
    
    // =========================================================================
    // MODIFICACIÓN CLAVE: Agregamos el evento de clic a la tarjeta.
    // Usamos el id del vehículo para pasarlo a la nueva página.
    card.onclick = () => goToMaintenance(vehicle.id);
    // =========================================================================

    card.innerHTML = `
        <div class="card-content-v2">
            <h3 class="card-title-v2">
                ${vehicle.marca} ${vehicle.modelo} (${vehicle.anio})
            </h3>
            <p class="card-placas-v2">${vehicle.placas || 'Sin Placas'}</p>

            <div class="card-info-v2">
                <p>
                    <strong>Kilometraje:</strong> ${vehicle.kilometraje.toLocaleString('es-ES')} km
                </p>
                <p>
                    <strong>Registrado:</strong> ${vehicle.fechaRegistro}
                </p>
            </div>

            <div class="card-actions-v2">
                <button class="btn-detail-v2" onclick="event.stopPropagation(); openEditVehicleModal(${vehicle.id})">Editar Información</button>
                
                <button class="btn-delete-v2" onclick="event.stopPropagation(); deleteVehicle(${vehicle.id})">Eliminar</button>

            </div>
        </div>
    `;
    return card;
}


function openEditVehicleModal(vehicleId) {
    const vehicles = getVehicles();
    const vehicle = vehicles.find(v => v.id === vehicleId);

    if (vehicle) {
        // En un entorno real se abriría un modal con el formulario
        // prellenado. Aquí usamos 'prompt' para una simulación simple.

        // Simulación: Pedir el nuevo kilometraje.
        const newKilometraje = prompt(
            `Editando: ${vehicle.marca} ${vehicle.modelo} (${vehicle.anio})\n` +
            `Kilometraje actual: ${vehicle.kilometraje} km\n\n` +
            'Por favor, ingresa el nuevo kilometraje (solo números):', 
            vehicle.kilometraje
        );

        // Si el usuario presiona Cancelar o deja el campo vacío
        if (newKilometraje === null || newKilometraje.trim() === "") {
            alert("Edición cancelada.");
            return;
        }

        // 1. Validar que sea un número entero
        const parsedKilometraje = parseInt(newKilometraje.trim());
        if (isNaN(parsedKilometraje) || parsedKilometraje < 0) {
            alert("Error: El kilometraje debe ser un número válido y positivo.");
            return;
        }

        // 2. Llamar a la función para guardar el vehículo editado
        saveEditedVehicle(vehicleId, parsedKilometraje);

    } else {
        alert("Error: Vehículo no encontrado.");
    }
}


/**
 * Guarda los cambios realizados en un vehículo (solo kilometraje en esta simulación).
 * @param {number} vehicleId El ID del vehículo a editar.
 * @param {number} newKilometraje El nuevo valor de kilometraje.
 */

function saveEditedVehicle(vehicleId, newKilometraje) {
    let vehicles = getVehicles();
    
    // Busca el índice del vehículo a editar
    const index = vehicles.findIndex(v => v.id === vehicleId);

    if (index !== -1) {
        // Actualiza el campo
        vehicles[index].kilometraje = newKilometraje;
        
        // **IMPORTANTE:** En un caso real, podrías querer actualizar otros campos aquí.
        // Por ahora, solo actualizamos el kilometraje.

        saveVehicles(vehicles); // Guardar el array modificado
        loadVehicles(); // Recargar la lista en la interfaz
        alert(`Información de ${vehicles[index].marca} ${vehicles[index].modelo} actualizada exitosamente (Nuevo Kilometraje: ${newKilometraje} km).`);
    } else {
        alert("Error al guardar: Vehículo no encontrado.");
    }
}

/**
 * Redirige a la página de gestión de mantenimiento para un vehículo específico.
 * Simula pasar los datos por la URL (query parameters) o usando localStorage.
 * @param {number} vehicleId El ID del vehículo.
 */
function goToMaintenance(vehicleId) {
    const vehicles = getVehicles();
    const vehicle = vehicles.find(v => v.id === vehicleId);

    if (vehicle) {
        // Opción 1: Pasar el ID en la URL (más simple, pero requiere buscar el vehículo en la otra página)
        // window.location.href = `mantenimiento.html?id=${vehicleId}`;
        
        // Opción 2: Guardar el objeto completo o ID en localStorage y redirigir
        localStorage.setItem("currentVehicleId", vehicleId);
        
        // Redirigir a la página de mantenimiento
        window.location.href = 'mantenimiento.html';
    } else {
        alert("Error: No se puede gestionar el mantenimiento. Vehículo no encontrado.");
    }
}

/* =================== GESTIÓN DE VISTAS (SPA) =================== */

/**
 * Muestra la vista de Mis Vehículos y oculta la de Mantenimiento.
 */
function showVehiclesList() {
    document.getElementById('vehicles-list').classList.remove('hidden-view');
    document.getElementById('maintenance-view').classList.add('hidden-view');
    // Muestra la barra de acciones de "Mis Vehículos"
    document.querySelector('.action-bar').classList.remove('hidden-view');
    // Limpiar el ID de vehículo actual
    localStorage.removeItem("currentVehicleId");
    // Opcionalmente, recargar la lista de vehículos
    loadVehicles();
}

/**
 * Muestra la vista de Mantenimiento y oculta la de Mis Vehículos.
 * Carga los datos del vehículo seleccionado.
 * @param {number} vehicleId - El ID del vehículo.
 */
function goToMaintenance(vehicleId) {
    const vehicles = getVehicles();
    const vehicle = vehicles.find(v => v.id === vehicleId);

    if (vehicle) {
        // 1. Ocultar lista de vehículos y mostrar la de mantenimiento
        document.getElementById('vehicles-list').classList.add('hidden-view');
        // Oculta la barra de acciones de "Mis Vehículos"
        document.querySelector('.action-bar').classList.add('hidden-view'); 
        document.getElementById('maintenance-view').classList.remove('hidden-view');

        // 2. Guardar el ID actual y actualizar el título
        localStorage.setItem("currentVehicleId", vehicleId);
        const titleElement = document.getElementById('maintenance-vehicle-title');
        titleElement.innerHTML = `${vehicle.marca} ${vehicle.modelo} ${vehicle.anio} <span class="card-placas-v2">${vehicle.placas} &bull; ${vehicle.kilometraje.toLocaleString('es-ES')} km</span>`;
        
        // 3. Cargar (Simular) el historial y próximo mantenimiento
        loadMaintenanceData(vehicleId);
        
    } else {
        alert("Error: Vehículo no encontrado.");
        showVehiclesList();
    }
}


/* =================== FUNCIÓN DE CARGA DE DATOS DE MANTENIMIENTO =================== */

/**
 * Simula la carga de datos de mantenimiento para el vehículo.
 * En una aplicación real, esta función buscaría los mantenimientos 
 * asociados al vehicleId en localStorage o una base de datos.
 * @param {number} vehicleId - El ID del vehículo actual.
 */
function loadMaintenanceData(vehicleId) {
    // --- SIMULACIÓN DE DATOS ---
    // En una aplicación real, los datos vendrían de localStorage/servidor
    const maintenanceData = {
        history: [
            { id: 1, date: '2025-11-01', type: 'Cambio de aceite', cost: 650, detail: 'Aceite sintético 5W-30', km: 24000 },
            { id: 2, date: '2025-08-10', type: 'Cambio de filtro de aire', cost: 350, detail: 'Filtro original Honda', km: 22000 }
        ],
        next: [
            { id: 1, type: 'Cambio de aceite', dueKm: 25000, dueDate: '2025-11-15' },
            { id: 2, type: 'Revisión de frenos', dueKm: 26000, dueDate: '2025-12-01' }
        ]
    };
    
    const nextList = document.getElementById('next-maintenance-list');
    const historyList = document.getElementById('maintenance-history-list');
    const recordCount = document.getElementById('maintenance-record-count');

    // 1. Limpiar contenedores
    nextList.innerHTML = '';
    historyList.innerHTML = '';

    // 2. Cargar Próximo Mantenimiento
    if (maintenanceData.next.length > 0) {
        maintenanceData.next.forEach(item => {
            const vehicle = getVehicles().find(v => v.id === vehicleId);
            const kmRemaining = vehicle ? item.dueKm - parseInt(vehicle.kilometraje) : 0;
            
            const itemHtml = `
                <div class="maintenance-item">
                    <h4 style="color:#e67e22;">${item.type}</h4>
                    <p>Faltan: ${kmRemaining.toLocaleString('es-ES')} km</p>
                    <p>Fecha límite: ${item.dueDate}</p>
                </div>
            `;
            nextList.innerHTML += itemHtml;
        });
    } else {
        nextList.innerHTML = '<p class="info-message-small">No hay mantenimientos próximos.</p>';
    }

    // 3. Cargar Historial
    recordCount.textContent = `${maintenanceData.history.length} registros`;

    if (maintenanceData.history.length > 0) {
        // Mostrar los registros del más reciente al más antiguo
        maintenanceData.history.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(record => {
            const recordHtml = `
                <div class="maintenance-record-card">
                    <h4>${record.type}</h4>
                    <p>📅 ${record.date} &nbsp;|&nbsp;  odometer: ${record.km.toLocaleString('es-ES')} km</p>
                    <p>💵 $${record.cost.toLocaleString('es-ES')}</p>
                    <p>📝 Detalle: ${record.detail}</p>
                </div>
            `;
            historyList.innerHTML += recordHtml;
        });
    } else {
        historyList.innerHTML = '<p class="info-message-small">No hay historial de mantenimiento registrado.</p>';
    }
}


/* =================== LLAMADA INICIAL DE VISTA =================== */

// Asegúrate de llamar a showVehiclesList() al cargar la página para que la vista
// por defecto sea la lista de autos y no la de mantenimiento.
document.addEventListener('DOMContentLoaded', () => {
    // ... tus otras llamadas ...
    
    // Ocultar la vista de mantenimiento al inicio
    document.getElementById('maintenance-view').classList.add('hidden-view');
    
    // Y asegurarte de que la vista de vehículos esté activa:
    const vehiclesContainer = document.getElementById('vehicles-list');
    if (vehiclesContainer) {
        vehiclesContainer.classList.remove('hidden-view');
    }
    
    // ... tus otras llamadas, como loadVehicles() ...
});