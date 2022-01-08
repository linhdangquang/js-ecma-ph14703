import { menuList } from '../data';

const Nav = {
  print() {
    return `
    ${menuList.map((list) => `<li class="px-4 hover:underline underline-offset-4 decoration-2 first-letter:uppercase"><a href="">${list}</a></li>`).join('')}
    <li class="px-4 hover:underline underline-offset-4 decoration-2 first-letter:uppercase"><a href="/about">About</a></li>
    `;
  },
};

export default Nav;
