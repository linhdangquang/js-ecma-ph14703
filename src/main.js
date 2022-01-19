// import '@themesberg/flowbite';
import Navigo from 'navigo';
import 'remixicon/fonts/remixicon.css';
import HomePage from './pages/home';
import NotFoundPage from './pages/notFound';
import AboutPage from './pages/about';
import Header from './components/header';
import Footer from './components/footer';
import { NewsDetails, NewsPage } from './pages/news';
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

const print = async (content, id) => {
  headerEl.innerHTML = Header.render();
  contentEl.innerHTML = await content.render(id);
  footerEl.innerHTML = Footer.render();
  container.classList.add('container');
  container.classList.remove('container-fluid');
};
const printAdmin = async (content, id) => {
  headerEl.innerHTML = '';
  contentEl.innerHTML = await content.render(id);
  footerEl.innerHTML = '';
  container.classList.remove('container');
  container.classList.add('container-fluid');
};

router.on({
  '/': () => {
    print(HomePage);
  },
  '/#container': () => {
    print(HomePage);
  },
  '/gioi-thieu': () => {
    print(AboutPage);
  },
  '/signup': () => {
    print(SignUpForm);
  },
  '/signin': () => {
    print(SignInForm);
  },
  '/news': () => {
    print(NewsPage);
  },
  '/news/:id': ({ data }) => {
    const { id } = data;
    print(NewsDetails, id);
  },
  '/admin/dashboard': () => {
    printAdmin(Dashboard);
    charts.render();
  },
  '/admin/news': () => {
    printAdmin(News);
  },
  'admin/news/add': () => {
    printAdmin(AddNews);
  },
  'admin/news/:id/edit': ({ data }) => {
    const { id } = data;
    printAdmin(EditNews, id);
  },
});

router.notFound(() => { print(NotFoundPage); });
router.resolve();
