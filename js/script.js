const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

const track = document.querySelector('#gallery-track');
const galleryButtons = document.querySelectorAll('.gallery-button');
let galleryIndex = 0;

function moveGallery(direction) {
  if (!track) return;
  const card = track.querySelector('.property-card');
  const gap = 19;
  const cardWidth = card.offsetWidth + gap;
  const visible = Math.max(1, Math.floor((window.innerWidth - 48) / cardWidth));
  const maxIndex = Math.max(0, track.children.length - visible);
  galleryIndex = Math.max(0, Math.min(maxIndex, galleryIndex + direction));
  track.style.transform = `translateX(${-galleryIndex * cardWidth}px)`;
}

galleryButtons.forEach((button) => button.addEventListener('click', () => {
  moveGallery(button.dataset.direction === 'next' ? 1 : -1);
}));

window.addEventListener('resize', () => moveGallery(0));
