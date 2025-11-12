    document.addEventListener('DOMContentLoaded', () => {
      const addVehicleBtn = document.getElementById('add-vehicle-btn');
      const vehicleCards = document.querySelectorAll('.vehicle-card');
      addVehicleBtn?.addEventListener('click', () => {
        alert('¡Acción: Agregar nuevo vehículo!');
      });
      vehicleCards.forEach(card => {
        card.addEventListener('click', () => {
          const name = card.querySelector('.vehicle-name')?.textContent ?? 'Vehículo';
          alert(`¡Acción: Ver detalles de ${name}!`);
        });
      });
    });