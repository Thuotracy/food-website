window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

let box = document.querySelector('.box');
window.onmousemove = function(e){
    let x = e.clientX;
    box.style.transform = "perspective(1000px) rotateY(" + x + "deg)";
}