import '../style/modern-normalize.css';
import '../style/style.css';
import '../style/components/header.css';
import '../style/components/hero.css';
import '../style/components/boxtwo.css';
import '../style/components/footer.css';
import '../style/components/mobile-nav.css';
import '../style/components/cardsection.css';
import '../style/components/team.css';
import '../style/components/image_section.css';
import '../style/components/success_stories.css';
import '../style/components/faq.css';
import '../style/components/contact-section.css';
import '../style/utils.css';

import mobile_nav from './utils/mobile-nav';
import faqs from './utils/faq';
import scrollreveal from 'scrollreveal';

scrollreveal
({
	distance: '60px',
	duration: 1500,
});

scrollreveal().reveal('.ooo', {delay: 600, origin: 'left', interval: 300});
scrollreveal().reveal('.two', {delay: 500, origin: 'bottom', interval: 300});
scrollreveal().reveal('.card', {delay: 700, origin: 'right', interval: 150});
scrollreveal().reveal('.minicard', {delay: 480, origin: 'top', interval: 230});
scrollreveal().reveal('.ssbone', {delay: 480, origin: 'top', interval: 270});
scrollreveal().reveal('.faq-box__accordion', {delay: 650, origin: 'left', interval: 190});

ScrollReveal(); 
mobile_nav();
faqs();
