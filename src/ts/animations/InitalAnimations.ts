import { setupFadeInName } from './NameAnimation';

export function setupFadeIn() {
  document.getElementById('frontPage').style.opacity = '1';
  setupFadeInName();
}