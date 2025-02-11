window.addEventListener("DOMContentLoaded", () => {
    const mobileButton = document.querySelector(".mobileButton");
    const mobileMenu = document.querySelector(".mobileNav");
    
    mobileButton?.addEventListener('click', () => {
        mobileButton.classList.toggle('active');
        mobileMenu?.classList.toggle('active');
    })
})