import Navigo from 'navigo';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import { TuyenSinhPage, ChuongtrinhdaotaoPage } from './pages/tuyensinh';
import Header from './components/header';
import Footer from './components/footer';
import NewsDetails from './pages/news';

const router = new Navigo('/', { linksSelector: 'a' });

const print = (content) => {
  document.querySelector('#header').innerHTML = Header.render();
  document.querySelector('#content').innerHTML = content;
  document.querySelector('#footer').innerHTML = Footer.render();
};
router.on({
  '/': () => {
    print(HomePage.render());
  },
  '/gioi-thieu': () => {
    print(AboutPage.render());
  },
  '/tuyen-sinh': () => {
    print(TuyenSinhPage.render());
  },
  '/chuong-trinh-dao-tao': () => {
    print(ChuongtrinhdaotaoPage.render());
  },
  '/news/:id': ({ data }) => {
    const { id } = data;
    print(NewsDetails.render(id));
  },
});

router.resolve();
