const keys = document.querySelectorAll('div[data-key]');
const audio = document.querySelectorAll('audio[data-key]');
console.log(audio);

window.addEventListener('keydown', (e) => {
  keys.forEach(key => {
    if (e.which == key.dataset.key) {
      key.classList.add('playing');
      key.ontransitionend = () => {
        key.classList.remove('playing');
      }
    }
  })
  audio.forEach(audi => {
    if (e.which == audi.dataset.key) {
      audi.currentTime = 0;
      audi.play();
    }
  })
})