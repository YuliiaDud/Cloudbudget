document.querySelector('.button_mobile').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('active');
}