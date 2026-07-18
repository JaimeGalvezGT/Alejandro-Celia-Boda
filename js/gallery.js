const images=document.querySelectorAll(".gallery-item");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.25});

images.forEach(img=>observer.observe(img));

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const close=document.getElementById("closeLightbox");

images.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImage.src=img.src;

}

});

close.onclick=()=>{

lightbox.style.display="none";

}

lightbox.onclick=e=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}