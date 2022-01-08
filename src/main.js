import Navigo from 'navigo';

const router = new Navigo('/', { linksSelector: 'a' });

const render = (content) => {
  document.querySelector('#app').innerHTML = content;
};
router.on({
  '/': () => {
    render('<h1  class="text-xl uppercase text-red-600">Home Page</h1>');
  },
  '/about': () => {
    render('<h1  class="text-xl uppercase text-red-600">about Page</h1>');
  },
});

router.resolve();
