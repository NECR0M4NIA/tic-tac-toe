const pickPlayerIcons = document.querySelector('.new-game-screen-pick-player-icons');
const pickPlayerIconsList = document.querySelectorAll('.new-game-screen-pick-player-icon');
const $newGameBtnCPU = document.querySelector('.new-game-screen-new-game-buttons__button')
const $newGameBtnPLAYER = document.querySelector('.new-game-screen-new-game-buttons__button new-game-screen-new-game-buttons__button--secondary');

pickPlayerIcons.addEventListener('click', (event) => {
    let clickedIcon = event.target.closest('.new-game-screen-pick-player-icon');

    if (!clickedIcon) return;

    for (let icon of pickPlayerIconsList) {
        icon.classList.remove('new-game-screen-pick-player-icon--selected');
    }

    clickedIcon.classList.add('new-game-screen-pick-player-icon--selected');
});

$newGameBtnCPU.addEventListener('click', () => {
    localStorage.setItem('playerIcon', 'cpu');
    window.location.href = 'pages/game.html';
});

$newGameBtnPLAYER.addEventListener('click', () => {
    localStorage.setItem('playerIcon', 'player');
    window.location.href = 'pages/game.html';
});