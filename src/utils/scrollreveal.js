import scrollreveal from 'scrollreveal';

scrollreveal
({
	distance: '60px',
	duration: 1500,
});

scrollreveal().reveal('.ooo', {delay: 300, origin: 'left', interval: 300});
scrollreveal().reveal('.two', {delay: 200, origin: 'bottom', interval: 300});
scrollreveal().reveal('.card', {delay: 300, origin: 'right', interval: 150});
scrollreveal().reveal('.minicard', {delay: 180, origin: 'top', interval: 230});
scrollreveal().reveal('.tb', {delay: 600, origin: 'bottom', interval: 200});
scrollreveal().reveal('.ssbone', {delay: 380, origin: 'top', interval: 270});
scrollreveal().reveal('.miniboxlol', {delay: 630, origin: 'bottom', interval: 100});
scrollreveal().reveal('.ssbtwo', {delay: 450, origin: 'left', interval: 190});
scrollreveal().reveal('.faq-box__accordion', {delay: 450, origin: 'left', interval: 190});
scrollreveal().reveal('.contact-section__minibox', {delay: 250, origin: 'bottom', interval: 100});


export default scrollreveal;
