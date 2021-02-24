import '../styles/styles.css';
import RevealOnScroll from './modules/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll('.testimonial'), 65);

if (module.hot) {
  module.hot.accept();
}
