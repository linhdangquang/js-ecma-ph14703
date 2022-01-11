import Nav from './nav';

const Header = {
  render() {
    return /* html */ ` 
    <header class="flex flex-col">
    <div class="m-auto logo py-6 bg-sky-900 w-full">
      <a href="#"><img class="h-14 m-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png" alt="" /></a>
    </div>
        ${Nav.render()}
    </nav>
  </header>`;
  },
};

export default Header;
