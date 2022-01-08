import Navigo from 'navigo';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import Header from './components/header';
import Footer from './components/footer';

const router = new Navigo('/', { linksSelector: 'a' });

const render = (content) => {
  document.querySelector('#header').innerHTML = Header.print();
  document.querySelector('#content').innerHTML = content.print();
  document.querySelector('#footer').innerHTML = Footer.print();
};
router.on({
  '/': () => {
    render(HomePage);
  },
  '/about': () => {
    render(AboutPage);
  },
});

router.resolve();
