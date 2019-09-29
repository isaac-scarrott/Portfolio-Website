// TODO: This could be some of the worst code I've written ... sort it out

const animationTime = {
  firstName: 123,
  lastName: 70
}

function fadeInFirstName(firstName) {
  firstName[4].classList.add("slide-in-blurred-top");
  setTimeout(() => {
    firstName[3].classList.add("slide-in-blurred-top");
  }, animationTime.firstName);
  setTimeout(() => {
    firstName[2].classList.add("slide-in-blurred-top");
  }, animationTime.firstName * 2);
  setTimeout(() => {
    firstName[1].classList.add("slide-in-blurred-top");
  }, animationTime.firstName * 3);
  setTimeout(() => {
    firstName[0].classList.add("slide-in-blurred-top");
  }, animationTime.firstName * 4);
}

function fadeInLastName(LastName) {
  LastName[0].classList.add("slide-in-blurred-top");
  setTimeout(() => {
    LastName[1].classList.add("slide-in-blurred-top");
  }, animationTime.lastName);
  setTimeout(() => {
    LastName[2].classList.add("slide-in-blurred-top");
  }, animationTime.lastName * 2);
  setTimeout(() => {
    LastName[3].classList.add("slide-in-blurred-top");
  }, animationTime.lastName * 3);
  setTimeout(() => {
    LastName[4].classList.add("slide-in-blurred-top");
  }, animationTime.lastName * 4);
  setTimeout(() => {
    LastName[5].classList.add("slide-in-blurred-top");
  }, animationTime.lastName * 5);
  setTimeout(() => {
    LastName[6].classList.add("slide-in-blurred-top");
  }, animationTime.lastName * 6);
  setTimeout(() => {
    LastName[7].classList.add("slide-in-blurred-top");
  }, animationTime.lastName * 7);
}

function moveText(names) {
  setTimeout(() => {
    names[0].style.transform = ('translate(-55%, 0)');
    names[1].style.transform = ('translate(55%, 0)');
  }, animationTime.lastName * 10);

  setTimeout(() => {
    names[0].style.transform = ('translate(0, 0)');
    names[1].style.transform = ('translate(0, 0)');
  }, animationTime.lastName * 10 + 700);
}

export function setupFadeInName() {
  const names = Array.from(document.getElementById('name').children);

  const firstNameLetters = Array.from(names[0].children);
  const lastNameLetters = Array.from(names[1].children);

  fadeInFirstName(firstNameLetters);
  fadeInLastName(lastNameLetters);

  moveText(names);
}
