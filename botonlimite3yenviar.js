(function () {
  var TEXTO = 'ENVIAR MIS RESPUESTAS';
  var CAMPOS = ['li_5'];   // ids de las preguntas con límite (se pueden poner varias: ['li_5', 'li_8'])
  var MAXIMO = 3;

  function cambiarBoton() {
    var b = document.getElementById('submit_form') ||
            document.querySelector('form input[type="submit"], form button[type="submit"]');
    if (!b) return false;
    if (b.tagName === 'INPUT') { b.value = TEXTO; } else { b.textContent = TEXTO; }
    return true;
  }

  function limitarOpciones(idCampo) {
    var cont = document.getElementById(idCampo);
    if (!cont) return;
    cont.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
      c.addEventListener('change', function () {
        var marcadas = cont.querySelectorAll('input[type="checkbox"]:checked').length;
        if (marcadas > MAXIMO) {
          c.checked = false;
          alert('Podés elegir como máximo ' + MAXIMO + ' opciones.');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!cambiarBoton()) setTimeout(cambiarBoton, 500);
    CAMPOS.forEach(limitarOpciones);
  });
})();
