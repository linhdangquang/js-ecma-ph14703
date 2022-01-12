const AdminHeader = {
  render(pageTile) {
    return /* html */ `
        <div class=" rounded-l-2xl bg-indigo-600 md:px-10 mx-auto w-full shadow-md">
        <nav class="flex justify-between items-center pt-8">
            <h1 class="px-4 pt-4 text-white text-lg uppercase">${pageTile}</h1>
            <div class="mr-4 flex gap-2 items-center">
              <form action="" >
                  <div class="relative flex shadow-md">
                      <span class="absolute items-center pt-2 px-2 text-gray-400 text-xl"><i class="ri-search-line"></i></span>
                      <input type="text" placeholder="Search here..." class="rounded pl-8 placeholder:italic">
                  </div>
              </form>
              <div class="w-11 h-11 rounded-full"><a href=""><img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" class="rounded-full" ></a></div>
            </div>
        </nav>
      <div class="py-8 pt-16">
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-gray-400 uppercase font-bold text-xs">
                      Traffic
                    </h5>
                    <span class="font-semibold text-xl text-gray-700">
                      350,897
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                      <i class="ri-line-chart-fill"></i>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-gray-400 mt-4">
                  <span class="text-emerald-500 mr-2">
                      <i class="ri-arrow-up-line"></i> 3.48%
                  </span>
                  <span class="whitespace-nowrap">
                    Since last month
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-gray-400 uppercase font-bold text-xs">
                      New users
                    </h5>
                    <span class="font-semibold text-xl text-gray-700">
                      2,356
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                        <i class="ri-user-add-line"></i>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-gray-400 mt-4">
                  <span class="text-red-500 mr-2">
                      <i class="ri-arrow-down-line"></i> 3.48%
                  </span>
                  <span class="whitespace-nowrap"> Since last week </span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-gray-400 uppercase font-bold text-xs">
                      Sales
                    </h5>
                    <span class="font-semibold text-xl text-gray-700">
                      924
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                        <i class="ri-user-line"></i>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-gray-400 mt-4">
                  <span class="text-orange-500 mr-2">
                      <i class="ri-arrow-down-line"></i> 1.10%
                  </span>
                  <span class="whitespace-nowrap"> Since yesterday </span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-gray-400 uppercase font-bold text-xs">
                      Performance
                    </h5>
                    <span class="font-semibold text-xl text-gray-700">
                      49,65%
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                        <i class="ri-percent-fill"></i>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-gray-400 mt-4">
                  <span class="text-emerald-500 mr-2">
                      <i class="ri-arrow-up-line"></i> 12%
                  </span>
                  <span class="whitespace-nowrap">
                    Since last month
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        `;
  },
};

export default AdminHeader;
