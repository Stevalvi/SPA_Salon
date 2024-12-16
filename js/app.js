window.swiper = new Swiper({
    el: '.slider__contenedor', // Ese el: es para ubicar el elemento padre de nuestros sliders
    slideClass: 'slider__slide', // Le pasamos el nombre de la clase de nuestros sliders, y no lleva . al inicio de la clase
    createElements: true, // Para que nos genere el resto del código del html
    autoplay: { // Con esto cada 3 segundos las imágenes irán rotando y no se quedará la imágen principal fija
        delay: 3000
    },
    loop: true, // Con esto, llegando a la final de las imágenes, se repetirá ese ciclo de mostrarnos nuevamente la primer imágen
    pagination: true, // Nos muestra una paginación con la cantidad de imágenes que hay
    navigation: true // Nos muestra unas flechas para ir deslizando las imágenes, debemos ponerle un position relative al elemento padre con la clase slider para que esas flechas tomen nuestro elemento slider como posición relative y de esta forma se posicionen cerca de las imágenes y no lejos.
});