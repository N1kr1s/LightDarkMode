const toggleSwitch = document.querySelector('input[type=checkbox]');
const toggleIcon = document.getElementById('toggleIcon');
const textBox = document.getElementById('textBox');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const checkbox = document.getElementById('checkbox');

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
};

const darkMode = () => {
  dry('rgba(0,0,0,0.5)', 'rgba(255,255,255,0.5)', 'dark');
};

const lightMode = () => {
  dry('rgba(253, 253, 253, 0.7)', 'rgba(0, 0, 0, 0.5)', 'light');
};

const dry = (nv, txt, mde) => {
  localStorage.setItem('theme', `${mde}`);

  nav.style.backgroundColor = `${nv}`;
  textBox.style.backgroundColor = `${txt}`;

  if (toggleIcon.children[0].classList[1].includes('fa-sun'))
    toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon');
  else toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');

  image1.setAttribute(`src`, `./img/undraw_proud_coder_${mde}.svg`);
  image2.setAttribute(`src`, `./img/undraw_feeling_proud_${mde}.svg`);
  image3.setAttribute(`src`, `./img/undraw_conceptual_idea_${mde}.svg`);
};

toggleSwitch.addEventListener('change', switchTheme);

//auto loads data from local storage

(() => {
  const data = localStorage.getItem('theme');
  if (data === 'dark') {
    checkbox.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  }
})();
