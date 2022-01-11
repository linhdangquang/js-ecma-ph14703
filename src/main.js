import Navigo from 'navigo';
import 'remixicon/fonts/remixicon.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import { TuyenSinhPage, ChuongtrinhdaotaoPage } from './pages/tuyensinh';
import Header from './components/header';
import Footer from './components/footer';
import NewsDetails from './pages/news';
import SignUpForm from './pages/signup';
import SignInForm from './pages/signin';
import Dashboard from './pages/admin/dashboard';

const router = new Navigo('/', { linksSelector: 'a' });

const print = (content) => {
  document.querySelector('#header').innerHTML = Header.render();
  document.querySelector('#content').innerHTML = content;
  document.querySelector('#footer').innerHTML = Footer.render();
};
const printAdmin = (content) => {
  document.body.innerHTML = content;
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
  '/signup': () => {
    print(SignUpForm.render());
  },
  '/signin': () => {
    print(SignInForm.render());
  },
  '/news/:id': ({ data }) => {
    const { id } = data;
    print(NewsDetails.render(id));
  },
  '/admin/dashboard': () => {
    printAdmin(Dashboard.render());
  },
});

router.resolve();
