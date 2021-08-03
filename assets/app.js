const navSlide = () =>{
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector(".nav-menu");
    const divContentH1 = document.querySelector(".div-content h1");

    // Toggle Nav
    hamburger.addEventListener("click", () =>{
        nav.classList.toggle("nav-active");
        divContentH1.style.display = "none"
 
    })
}
navSlide();