const usernameElement = document.getElementById('username');
const registerBtn = document.getElementById('register-btn');
const codeInputs = document.querySelectorAll('.code-inputs input');
const pointsElement = document.getElementById('points');
const rankingElement = document.getElementById('ranking');
const codesTableBody = document.getElementById('codes-table-body');

// Obtener el usuario o redirigir si no hay
const username = localStorage.getItem('username');
if (!username) {
} else {
  usernameElement.textContent = username;
  loadUserData();
}

function loadUserData() {
  const userData = JSON.parse(localStorage.getItem(`data_${username}`)) || [];
  updateTable(userData);
  updatePoints(userData);
  updateRanking();
}

function updateTable(data) {
  if (data.length === 0) {
    codesTableBody.innerHTML = `<tr><td colspan="4" style="text-align: center;">No hay registros todavía</td></tr>`;
    return;
  }

  codesTableBody.innerHTML = '';
  data.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.date}</td>
      <td>${entry.code}</td>
      <td>${entry.totalPoints}</td>
      <td>${entry.codePoints}</td>
    `;
    codesTableBody.appendChild(tr);
  });
}

function updatePoints(data) {
  if (data.length === 0) {
    pointsElement.textContent = 0;
    return;
  }
  pointsElement.textContent = data[data.length - 1].totalPoints;
}

function updateRanking() {
  const allKeys = Object.keys(localStorage).filter(key => key.startsWith('data_'));
  const usersData = allKeys.map(key => {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    const total = data.reduce((sum, entry) => sum + entry.codePoints, 0);
    return { username: key.replace('data_', ''), total };
  });

  usersData.sort((a, b) => b.total - a.total);

  const rank = usersData.findIndex(user => user.username === username) + 1;
  rankingElement.textContent = rank;
}

registerBtn.addEventListener('click', () => {
  const code = Array.from(codeInputs).map(input => input.value.toUpperCase().trim()).join('');
  const store = document.getElementById('store-select').value;

  // Validaciones
  if (!/^[A-Z0-9]{8}$/.test(code) || store === 'Tienda de compra') {
    alert('Por favor, introduce un código válido de 8 caracteres alfanuméricos y selecciona una tienda.');
    return;
  }

  const codePoints = (store === 'Liverpool') ? 50 : 30;
  const date = new Date().toLocaleDateString('es-MX');

  const entry = {
    code,
    store,
    date,
    codePoints,
    totalPoints: 0
  };

  let userData = JSON.parse(localStorage.getItem(`data_${username}`)) || [];

  // Verificar duplicados
  if (userData.some(e => e.code === code)) {
    alert("Este código ya ha sido registrado.");
    return;
  }

  userData.push(entry);

  let accumulated = 0;
  userData = userData.map(item => {
    accumulated += item.codePoints;
    return { ...item, totalPoints: accumulated };
  });

  localStorage.setItem(`data_${username}`, JSON.stringify(userData));
  loadUserData();

  alert('Código registrado exitosamente.');
  codeInputs.forEach(input => input.value = '');
  document.getElementById('store-select').selectedIndex = 0;
});

function cerrarSesion() {
  const confirmar = confirm("¿Estás seguro de que quieres cerrar sesión?");
  if (confirmar) {
    localStorage.removeItem('username');
    window.location.href = "index.html";
  }
}
