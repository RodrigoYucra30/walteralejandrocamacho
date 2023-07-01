document.addEventListener("DOMContentLoaded", function (event) {
    const imagenes = document.querySelectorAll(".imagen");
    const videos = document.querySelectorAll(".video");
    const lightbox = document.getElementById("lightbox");
    const mediaAmpliada = lightbox.querySelector(".media-ampliada");
    const botonesCategoria = document.querySelectorAll(".categoria");

    imagenes.forEach(function (imagen) {
        imagen.addEventListener("click", function () {
            const rutaMedia = this.querySelector("img").getAttribute("src");
            mediaAmpliada.innerHTML = `<img src="${rutaMedia}" alt="Media Ampliada">`;
            lightbox.style.display = "block";
        });
    });

    videos.forEach(function (video) {
        video.addEventListener("click", function () {
            const rutaMedia = this.querySelector("video source").getAttribute("src");
            mediaAmpliada.innerHTML = `<video controls><source src="${rutaMedia}" type="video/mp4">Tu navegador no admite el elemento de video.</video>`;
            lightbox.style.display = "block";

            // Iniciamos la reproducción del video al abrir el lightbox
            const videoEnLightbox = mediaAmpliada.querySelector("video");
            videoEnLightbox.play();
        });
    });

    lightbox.addEventListener("click", function () {
        const videoEnLightbox = mediaAmpliada.querySelector("video");
        if (videoEnLightbox) {
            videoEnLightbox.pause();
        }
        lightbox.style.display = "none";
    });

    botonesCategoria.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const categoria = this.getAttribute("data-categoria");

            botonesCategoria.forEach(function (b) {
                b.classList.remove("active");
            });

            this.classList.add("active");

            imagenes.forEach(function (imagen) {
                if (categoria === "todos" || imagen.classList.contains(categoria)) {
                    imagen.style.display = "block";
                } else {
                    imagen.style.display = "none";
                }
            });

            videos.forEach(function (video) {
                if (categoria === "todos" || video.classList.contains(categoria)) {
                    video.style.display = "block";
                } else {
                    video.style.display = "none";
                }
            });
        });
    });
});
