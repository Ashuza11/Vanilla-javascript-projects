function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if(!audio) return; // stop the function
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if it not a transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playsound);

