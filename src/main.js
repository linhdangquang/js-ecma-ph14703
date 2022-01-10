import Navigo from 'navigo';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import { TuyenSinhPage, ChuongtrinhdaotaoPage } from './pages/tuyensinh';
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
  '/gioi-thieu': () => {
    render(AboutPage);
  },
  '/tuyen-sinh': () => {
    render(TuyenSinhPage);
  },
  '/chuong-trinh-dao-tao': () => {
    render(ChuongtrinhdaotaoPage);
  },
});

router.resolve();
