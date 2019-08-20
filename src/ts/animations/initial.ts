import { setupFadeInName } from './name';

export function setupFadeIn() {
  var divs = document.querySelectorAll('.model');
  document.getElementById('frontPage').style.opacity = '1';
  setupFadeInName();
}