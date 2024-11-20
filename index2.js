document.addEventListener('show.bs.modal', function (event) {
    const modal = event.target; // El modal que se está mostrando
    const button = event.relatedTarget; // Botón que activó el modal
  
    if (button) {
      const title = button.getAttribute('data-title');
      const imgSrc = button.getAttribute('data-img-src');
  
      const modalTitle = modal.querySelector('.modal-title');
      const modalImage = modal.querySelector('#modal-img');
  
      if (modalTitle) modalTitle.textContent = title;
      if (modalImage) modalImage.src = imgSrc;
    }
  });
  
  
  
window.onload = function () {
    // Ocultar el loader y mostrar el contenido de la página después de la carga
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
};

// Función para mostrar un modal con animación de escala
function showModal(event,id) {
    event.preventDefault();
    var div = document.getElementById(id);
    var divMenu = document.getElementById("menuProductos");

    // Inicia la animación de salida para divMenu
    divMenu.classList.remove("scale-in");
    divMenu.classList.add("scale-out");

    // Espera el tiempo de la transición para ocultar el divMenu
    setTimeout(function () {
        divMenu.classList.add("d-none");

        // Muestra el div y aplica la animación de entrada
        div.classList.remove("d-none");
        div.offsetHeight; // Forzar reflow
        requestAnimationFrame(() => div.classList.add("scale-in"));
    }, 200); // 200ms de espera, ajusta según la duración de la animación en CSS
}

// Función para volver al menú principal
function btnMenu(id) {
    var div = document.getElementById(id);
    var divMenu = document.getElementById("menuProductos");

    // Inicia la animación de salida para div
    div.classList.remove("scale-in");
    div.classList.add("scale-out");

    // Espera el tiempo de la transición para ocultar el div
    setTimeout(function () {
        div.classList.add("d-none");

        // Muestra el divMenu y aplica la animación de entrada
        divMenu.classList.remove("d-none");
        divMenu.offsetHeight; // Forzar reflow
        requestAnimationFrame(() => divMenu.classList.add("scale-in"));
    }, 200); // 200ms de espera, ajusta según la duración de la animación en CSS
}

// Código jQuery para el preloader
$(document).ready(function () {
    setTimeout(function () {
        $('#ctn-preloader').addClass('loaded');
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
            $('#preloader').delay(1000).queue(function () {
                $(this).remove();
            });
        }
    }, 3000); // 3000ms espera para la animación del preloader
});

