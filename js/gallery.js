const galleryItems=document.querySelectorAll(".gallery-item");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.2});

galleryItems.forEach(item=>observer.observe(item));

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const close=document.getElementById("closeLightbox");

galleryItems.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src=img.src;

});

});

close.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=e=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};