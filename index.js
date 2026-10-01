function changeIcon(icon) {
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-check");
}

let cartSection = document.querySelector(".cart-section")

setTimeout(function cartReveal(){
    cartSection.style.opacity = 100
}, 40000);

function cartRevealOnclick(){
    cartSection.style.opacity = 100
};

