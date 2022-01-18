import Navigation from './components/navigation';
import AdminHeader from './components/header';
import AdminFooter from './components/footer';

const Dashboard = {
  render() {
    return /* html */ `
      <div class="container-fluid admin-container flex flex-row bg-gray-100">
        ${Navigation.render()}
          <div class="ml-4 rounded-l-2xl relative bg-white w-full">
          ${AdminHeader.render('dashboard')}
            <div class="flex flex-wrap ml-10 pt-4">
              <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-700">
                  <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div class="flex flex-wrap items-center">
                      <div class="relative w-full max-w-full flex-grow flex-1">
                        <h6 class="uppercase text-gray-100 mb-1 text-xs font-semibold">
                          Overview
                        </h6>
                        <h2 class="text-white text-xl font-semibold">
                          Sales value
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 flex-auto">
                    <!-- Chart -->
                    <div class="relative h-350-px"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                      <canvas id="line-chart" style="display: block; height: 350px; width: 692px;" width="865" height="437" class="chartjs-render-monitor"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div class="flex flex-wrap items-center">
                      <div class="relative w-full max-w-full flex-grow flex-1">
                        <h6 class="uppercase text-gray-400 mb-1 text-xs font-semibold">
                          Performance
                        </h6>
                        <h2 class="text-gray-700 text-xl font-semibold">
                          Total orders
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 flex-auto">
                    <!-- Chart -->
                    <div class="relative h-350-px"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                      <canvas id="bar-chart" width="392" height="437" style="display: block; height: 350px; width: 314px;" class="chartjs-render-monitor"></canvas>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          ${AdminFooter.render()}
          </div>
      </div>
      
      `;
  },
};

export default Dashboard;
