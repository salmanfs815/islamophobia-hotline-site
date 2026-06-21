document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('bio-modal');

  function showTeam(team) {
  cards.forEach(function (card) {
    const teams = card.dataset.teams.split(',').map(t => t.trim());
    if (teams.includes(team)) {
      card.classList.remove('dn');
    } else {
      card.classList.add('dn');
    }
  });
}

  // Tab click handling
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('apb-blue', 'white');
        t.classList.add('bg-white', 'black-80');
      });
      tab.classList.remove('bg-white', 'black-80');
      tab.classList.add('apb-blue', 'white');

      showTeam(tab.dataset.team);
    });
  });

  // Card click -> open modal
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      document.getElementById('modal-photo').src = card.dataset.photo;
      document.getElementById('modal-name').textContent = card.dataset.name;
      document.getElementById('modal-bio').textContent = card.dataset.bio;
      modal.classList.remove('dn');
      modal.classList.add('flex');
      modal.style.display = 'flex';
    });
  });

  // Close modal
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove('flex');
    modal.classList.add('dn');
    modal.style.display = 'none';
  }

  
  closeModal(); // ensure modal is hidden on page load
  showTeam('steering'); // Default tab on load
});
