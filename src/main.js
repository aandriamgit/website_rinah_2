import '../style/modern-normalize.css';
import '../style/style.css';

import mobile_nav from './utils/mobile-nav';
import faqs from './utils/faq';
import ScrollReveal from './utils/my_scrollreveal.js';
import { inject } from "@vercel/analytics"

mobile_nav();
ScrollReveal();
faqs();
inject();
