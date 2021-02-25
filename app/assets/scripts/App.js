import '../styles/styles.css';
import RevealOnScroll from './modules/RevealOnScroll';

const revealAbout = new RevealOnScroll(document.querySelectorAll('.about__wrapper'), 65, "reveal-element", "reveal-element--visible");

setTimeout(()=>{
  revealAbout.calcCaller();
}, 1500);

if (module.hot) {
  module.hot.accept();
}
