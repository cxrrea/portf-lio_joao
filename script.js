const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const btn1 = document.getElementById("btn1");

function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);

  if (elements.length > instance) {
      elements[instance].scrollIntoView({ top:offsetTop, behavior: 'smooth' });
  }
}


link1.addEventListener('click', () => {
  scrollToElement('.header');
});

link2.addEventListener('click', () => {
  // Scroll to the second element with "header" class
  scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
  scrollToElement('.copyright');
});

btn1.addEventListener('click', () => {
  scrollToElement('.contacts');
});