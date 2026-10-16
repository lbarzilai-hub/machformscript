(function () {
  var TEXTO = 'ENVIAR MIS RESPUESTAS';
  function cambiarBoton() {
    var b = document.getElementById('submit_form') ||
            document.querySelector('form input[type="submit"], form button[type="submit"]');
    if (!b) return false;
    if (b.tagName === 'INPUT') { b.value = TEXTO; } else { b.textContent = TEXTO; }
    return true;
  }
  document.addEventListener('DOMContentLoaded', function () {
    if (!cambiarBoton()) setTimeout(cambiarBoton, 500);
  });
})();
