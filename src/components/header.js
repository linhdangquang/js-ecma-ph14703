import Nav from './nav';

const Header = {
  print() {
    return /* html */ ` 
    <header class="flex flex-col">
    <div class="m-auto logo py-6 bg-sky-900 w-full">
      <a href="#"><img class="h-14 m-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png" alt="" /></a>
    </div>

    <nav id="navbar" class="bg-orange-500 flex justify-between py-3">
      <ul id="nav-menu" class="flex text-white justify-between pl-6">
        ${Nav.print()}
      </ul>
      <div class="search-form px-1">
        <form action="">
          <input type="text" class="pr-4 rounded-sm outline-yellow-500  outline-2" />
          <button class="button bg-blue-800 hover:bg-sky-900 transition-colors text-white px-4 uppercase border rounded-sm">
            Tìm kiếm
          </button>
        </form>
      </div>
    </nav>

    <div class="banner-header pt-2 pb-4">
      <a href="#"><img class="object-contain " src="https://ap.poly.edu.vn/images/Banner-AP.png" alt="" /></a>
    </div>
  </header>`;
  },
};

export default Header;
