import scrollreveal from 'scrollreveal';

scrollreveal
({
	distance: '40px',
	duration: 1500,
});

scrollreveal().reveal('.ooo', {delay: 200, origin: 'left', interval: 300, easing: 'ease-in'});
scrollreveal().reveal('.two', {delay: 300, origin: 'bottom', interval: 300, easing: 'ease-out'});
scrollreveal().reveal('.minicard', {delay: 380, origin: 'top', interval: 230, easing: 'ease'});
scrollreveal().reveal('.ssbone', {delay: 280, origin: 'top', interval: 270, easing: 'linear'});
scrollreveal().reveal('.faq-box__accordion', {delay: 150, origin: 'left', interval: 190, easing: 'ease-out'});


export default scrollreveal;
