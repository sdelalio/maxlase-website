// Nav toggle, active-link highlight, footer year. Header/footer are now inlined
// directly into every page (not fetched), so this works even opened via file://.
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mainNav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
      });
    }

    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#mainNav a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('/').pop();
      if (href === path) a.style.color = '#ffa64d';
    });

    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
