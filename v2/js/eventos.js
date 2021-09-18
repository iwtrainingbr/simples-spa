const MENU = document.querySelectorAll('[data-component="menu"]');
const CONTENTS = document.querySelectorAll('[data-component="content"]');

MENU.forEach(function (item) {
  item.addEventListener('click', function() {
    let action = item.getAttribute('data-action');

    hideAllContent();
    document.querySelector(`[data-content="${action}"]`).style.display = 'block';

    resetMenu();
    item.classList.add('btn-dark');
    item.classList.remove('btn-outline-dark');
  });
});

function resetMenu() {
  MENU.forEach(function(item) {
    item.classList.remove('btn-dark');
    item.classList.add('btn-outline-dark');
  });
}

function hideAllContent() {
  CONTENTS.forEach(function(section) {
    section.style.display = 'none';
  });
}
