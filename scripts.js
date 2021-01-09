const smiley = document.querySelector('.smiley');
const frown = document.querySelector('.frown');

const smileyFace = () => {
  if (frown.classList.contains('frown')) {
    frown.classList.add('active');
    smiley.classList.remove('active');
  }
};

const frownFace = () => {
  if (smiley.classList.contains('smiley')) {
    smiley.classList.add('active');
    frown.classList.remove('active');
  }
};

smiley.addEventListener('click', smileyFace);
frown.addEventListener('click', frownFace);
