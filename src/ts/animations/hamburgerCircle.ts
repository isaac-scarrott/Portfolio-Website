export function partiallyExpandedCircle() {
  document.getElementById('circle').style.cssText = 'width: inherit; height: inherit;';
  document.getElementById('icon').style.color = '#000017';
}

export function removeCircle() {
    document.getElementById('circle').style.cssText = 'width: 0; height: 0;';
    document.getElementById('icon').style.color = '#fd153d';
}

export function fullyExpandedCircle() {
  document.getElementById('circle').style.cssText = 'width: 300%; height: 300%;';
}
