import { menuList } from '../data';

const NavSearchForm = {
  render() {
    return /* html */ `
    <div class="search-form px-1">
    <form action="" class="flex justify-between">
      <input type="text" class="mr-1 pl-1  p-0 rounded-sm outline-yellow-500  outline-2 py-px" />
      <button class="button bg-blue-800 hover:bg-sky-900 transition-colors text-sm py-px text-white px-4 uppercase border rounded-sm">
        Tìm kiếm
      </button>
    </form>
  </div>
    `;
  },
};

const Nav = {
  render() {
    return /* html */`
    <nav id="navbar" class="bg-orange-500 flex justify-between items-center">
    <ul id="nav-menu" class="flex text-white justify-between pl-6">
    ${menuList.map(({ text, href }) => `<li class=" hover:underline underline-offset-4 decoration-2 first-letter:uppercase"><a class="py-3 px-4 block" href="${href}">${text}</a></li>`).join('')}
    </ul>
    ${NavSearchForm.render()}
    `;
  },
};

export default Nav;
