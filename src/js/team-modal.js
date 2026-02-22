const openTeamModalBtn = document.querySelector('.open-team-modal-btn');
const closeTeamModalBtn = document.querySelector('.team-modal-close-btn');
const teamModal = document.querySelector('.team-modal-overlay');

function openModal() {
    teamModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    teamModal.classList.remove('is-open');
    document.body.style.overflow = '';
}

openTeamModalBtn.addEventListener('click', openModal);
closeTeamModalBtn.addEventListener('click', closeModal);

teamModal.addEventListener('click', (e) => {
    if (e.target === teamModal) {
        closeModal();
    }
});