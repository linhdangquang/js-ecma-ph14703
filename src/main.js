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
import News from './pages/admin/news';
import AddNews from './pages/admin/components/addNewsForm';
import EditNews from './pages/admin/components/editNewsForm';
import charts from './pages/admin/components/chart';

const router = new Navigo('/', { linksSelector: 'a' });
const headerEl = document.querySelector('#header');
const contentEl = document.querySelector('#content');
const footerEl = document.querySelector('#footer');
const container = document.querySelector('#container');

const print = (content) => {
  headerEl.innerHTML = Header.render();
  contentEl.innerHTML = content;
  footerEl.innerHTML = Footer.render();
  container.classList.add('container');
  container.classList.remove('container-fluid');
};
const printAdmin = (content) => {
  headerEl.innerHTML = '';
  contentEl.innerHTML = content;
  footerEl.innerHTML = '';
  container.classList.remove('container');
  container.classList.add('container-fluid');
};
router.on({
  '/': () => {
    print(HomePage.render());
  },
  '/index': () => {
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
    charts.render();
  },
  '/admin/news': () => {
    printAdmin(News.render());
  },
  'admin/news/add': () => {
    printAdmin(AddNews.render());
  },
  'admin/news/:id/edit': () => {
    printAdmin(EditNews.render());
  },
});

router.resolve();
