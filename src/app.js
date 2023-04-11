const barsButton = document.getElementById('bars');
const navList = document.getElementById('nav-list');

function toggleButton() {
  navList.classList.toggle('show');
}

barsButton.addEventListener('click', toggleButton);

// dark mode

const toggleSwitch = document.querySelector('#night-mode-toggle');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
