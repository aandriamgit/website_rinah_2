import scrollreveal from 'scrollreveal';

scrollreveal
({
	distance: '40px',
	duration: 1500,
});

scrollreveal().reveal('.ooo', {delay: 600, origin: 'left', interval: 300, easing: 'ease-in'});
scrollreveal().reveal('.two', {delay: 500, origin: 'bottom', interval: 300});
scrollreveal().reveal('.card', {delay: 200, origin: 'right', interval: 150});
scrollreveal().reveal('.minicard', {delay: 480, origin: 'top', interval: 230});
scrollreveal().reveal('.ssbone', {delay: 480, origin: 'top', interval: 270});
scrollreveal().reveal('.faq-box__accordion', {delay: 650, origin: 'left', interval: 190});


export default scrollreveal;
