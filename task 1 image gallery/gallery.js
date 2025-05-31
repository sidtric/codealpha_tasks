let currentIndex = 0;
const images = document.querySelectorAll(".image-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(img){
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    currentIndex = Array.from(images).indexOf(img);
}

function closeLightbox(img){
    lightbox.style.display = "none";
}

function changeImage(n){
    currentIndex += n;
    if(currentIndex < 0) currentIndex = images.length - 1;
    if(currentIndex >= images.length) currentIndex = 0;
    lightboxImg.src = images[currentIndex].src;
}

window.onclick = function(event){
    if(event.target === lightbox){
        closeLightbox();
    }
};



