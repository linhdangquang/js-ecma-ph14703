import { dashboardMenu } from '../../../data';

const Navigation = {
  render() {
    return /* html */ `
    <nav class ="min-h-screen flex flex-row">
            <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
            <div class="flex items-center justify-center h-20 shadow-md">
                <h1 class="text-3xl uppercase text-indigo-500">LinhDQ</h1>
            </div>
            <ul class="flex flex-col py-4">
                ${dashboardMenu.map(({ text, href, icon }) => /* html */`
                <li>
                    <a href="${href}" class="block  items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="text-sm font-medium flex items-center pl-12"><i class="${icon} text-xl align-baseline"></i> ${text}</span>
                    </a>
                </li>
                `).join('')}
            </ul>
            </div>
        </nav>
    `;
  },
};

export default Navigation;
