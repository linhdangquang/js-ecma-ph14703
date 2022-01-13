import Navigation from './components/navigation';
import AdminHeader from './components/header';
import AdminFooter from './components/footer';
import { postsData } from '../../data';

const News = {
  render() {
    return /* html */ `
      <div class="container-fluid admin-container flex flex-row bg-gray-100">
        ${Navigation.render()}
        <div class="ml-4 rounded-l-2xl relative bg-white w-full">
          ${AdminHeader.render('news')}
          <div class="w-full mb-12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 mt-6 shadow-xl rounded bg-white drop-shadow-xl">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-lg text-gray-400">
                        News Tables
                    </h3>
                    </div>
                    <a href="/admin/news/add" class=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</a>
                </div>
                </div>
                <div class="block w-full overflow-x-auto">
                <!-- Projects table -->
                <table class="items-center table-auto w-full bg-transparent border-collapse">
                    <thead>
                    <tr>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left ">
                        ID
                        </th>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left ">
                        title
                        </th>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left ">
                        images
                        </th>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left ">
                        description
                        </th>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left ">
                        created At
                        </th>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left ">

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        ${postsData
    .map(
      ({
        id,
        title,
        img,
        desc,
        createdAt,
      }) => /* html */ `
                        <tr class="border-b">
                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left">
                        <span class="font-black text-gray-600">
                            ${id}
                        </span>
                        </th>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                            ${title}
                        </td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                            <img src="${img}" alt="" class="h-12 w-12">
                        </td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                            ${desc}
                        </td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                            ${createdAt}
                        </td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                        <div class="flex">
                        <a href="/admin/news/${id}/edit" class="uppercase font-semibold hover:text-sky-600">edit
                        </a>
                        </td>
                    </tr>
                                        `,
    )
    .join('')}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        ${AdminFooter.render()}
        </div>
      </div>
      
      `;
  },
};
export default News;
