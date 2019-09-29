export function partiallyExpandedCircle() {
  document.getElementById('circle').style.cssText = 'width: inherit; height: inherit;';
  document.body.style.overflow = 'auto';
  const hamburgerLines = document.getElementById('icon').childNodes;
  hamburgerLines.forEach(hamburgerLines => hamburgerLines.style.background = '#000017');
  try {
    document.getElementById('navWindow').style.opacity = '0';
  } catch { }
}
export function removeCircle() {
  document.getElementById('circle').style.cssText = 'width: 0; height: 0;';
  const hamburgerLines = document.getElementById('icon').childNodes;
  hamburgerLines.forEach(hamburgerLines => hamburgerLines.style.background = '#fd153d');
}

export function fullyExpandedCircle() {
  document.getElementById('circle').style.cssText = 'width: 300%; height: 300%;';
  document.body.style.overflow = 'hidden';
  document.getElementById('navWindow').style.opacity = '1';
}
