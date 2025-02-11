import scrollreveal from 'scrollreveal';

scrollreveal
({
	distance: '60px',
	duration: 1000,
});

scrollreveal().reveal('.ooo', {delay: 600, origin: 'left', interval: 300});
scrollreveal().reveal('.two', {delay: 500, origin: 'bottom', interval: 300});
scrollreveal().reveal('.card', {delay: 700, origin: 'right', interval: 150});
scrollreveal().reveal('.minicard', {delay: 480, origin: 'top', interval: 230});
scrollreveal().reveal('.tb', {delay: 600, origin: 'bottom', interval: 200});
scrollreveal().reveal('.ssbone', {delay: 480, origin: 'top', interval: 270});
scrollreveal().reveal('.miniboxlol', {delay: 530, origin: 'bottom', interval: 100});
scrollreveal().reveal('.ssbtwo', {delay: 450, origin: 'left', interval: 190});
scrollreveal().reveal('.faq-box__accordion', {delay: 650, origin: 'left', interval: 190});
scrollreveal().reveal('.contact-section__minibox', {delay: 550, origin: 'bottom', interval: 100});


export default scrollreveal;
