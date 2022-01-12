const SignUpForm = {
  render() {
    return /* html */ `
    <div class="my-16">
      <div class="bg-emerald-500 w-2/4 py-6 rounded-md mx-auto shadow-md drop-shadow-md shadow-green-400">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/1200px-FPT_logo_2010.svg.png" alt="" class="w-20 mx-auto">
          </div>
          <h1 class="text-3xl text-white font-bold text-center pt-2 pb-4 antialiased">Create a new account</h1>
          <form action="" class="flex flex-col gap-4 px-12">
                <input type="text" class="rounded-md border-0 focus:ring-teal-800 focus:ring-2 shadow-md shadow-teal-800" placeholder="Username">
              <input type="email" class="rounded-md border-0 focus:ring-teal-800 focus:ring-2 shadow-md shadow-teal-800" placeholder="Email Address">
              <input type="password" class="rounded-md border-0 focus:ring-teal-800 focus:ring-2 shadow-md shadow-teal-800" placeholder="Enter Password">
              <div class="flex justify-between">
                  <div class="flex items-center ml-1">
                  <input type="checkbox" class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer" name="" id="remember">
                  <label for="remember" class="text-white ml-1 cursor-pointer">Remember me</label>
                </div>
                  <div><a href="/signin" class="text-teal-50" >Đăng nhập</a></div>
                </div>
              <input type="button" value="Register now" class="bg-white text-teal-800 uppercase font-black p-2 rounded-md cursor-pointer hover:bg-teal-700 hover:text-white hover:border-white active:scale-95  transition-colors shadow-md shadow-teal-800">
          </form>
      </div>
    </div>
    `;
  },
};

export default SignUpForm;
