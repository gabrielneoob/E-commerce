const cartImg = document.querySelector('.cart-img');
cartImg.classList
const ativarCart = (() => {
  cartImg.childNodes[1].classList.toggle('active')
});

cartImg.addEventListener('click',ativarCart);