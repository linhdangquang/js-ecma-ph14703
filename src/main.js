import Navigo from 'navigo';

const router = new Navigo('/');

router.on({
  '/': () => {
    document.body.innerHTML = '<a href="/about" class="text-xl uppercase text-red-600">About</a>';
  },
  '/about': () => {
    document.body.innerHTML = '<a href="/" class="text-xl uppercase text-red-600">Home Page</a>';
  },
});

router.resolve();
