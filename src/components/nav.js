import { menuList } from '../data';

const NavSearchForm = {
  print() {
    return /* html */ `
    <div class="search-form px-1">
    <form action="">
      <input type="text" class="pr-4 rounded-sm outline-yellow-500  outline-2" />
      <button class="button bg-blue-800 hover:bg-sky-900 transition-colors text-white px-4 uppercase border rounded-sm">
        Tìm kiếm
      </button>
    </form>
  </div>
    `;
  },
};

const Nav = {
  print() {
    return /* html */`
    <nav id="navbar" class="bg-orange-500 flex justify-between items-center">
    <ul id="nav-menu" class="flex text-white justify-between pl-6">
    ${menuList.map(({ text, href }) => `<li class="px-4 hover:underline underline-offset-4 decoration-2 first-letter:uppercase"><a class="py-3 block" href="${href}">${text}</a></li>`).join('')}
    </ul>
    ${NavSearchForm.print()}
    `;
  },
};

export default Nav;
