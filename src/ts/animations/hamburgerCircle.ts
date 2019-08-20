export function partiallyExpandedCircle() {
  document.getElementById('circle').style.cssText = 'width: inherit; height: inherit;';
  document.getElementById('icon').style.color = '#000017';
  try {
    document.getElementById('navWindow').style.opacity = '0';
  } catch { }
}
export function removeCircle() {
  document.getElementById('circle').style.cssText = 'width: 0; height: 0;';
  document.getElementById('icon').style.color = '#fd153d';
}

export function fullyExpandedCircle() {
  document.getElementById('circle').style.cssText = 'width: 300%; height: 300%;';
  document.getElementById('navWindow').style.opacity = '1';
}
