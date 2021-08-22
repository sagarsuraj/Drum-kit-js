function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keycode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keycode}"]`);
    console.log(audio, key);
    // audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    if (!audio) return; // stop the function all runnning together
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener("keydown", playSound());
