import Swal from 'sweetalert2';
import Navigation from './components/navigation';
import AdminHeader from './components/header';
import AdminFooter from './components/footer';
import NewsList from './components/newsList';
import { del } from '../../api/posts';
import reRender from '../../utils/rerender';

const News = {
  async render() {
    return /* html */ `
      <div class="container-fluid admin-container flex flex-row bg-gray-100">
        ${Navigation.render()}
        <div class="ml-4 rounded-l-2xl relative bg-white w-full">
          ${AdminHeader.render('news')}
          <div class="w-full mb-12 px-4 content">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 mt-6 shadow-xl rounded bg-white drop-shadow-xl">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-lg text-gray-400">
                        News Tables
                    </h3>
                    </div>
                    <a href="/admin/news/add" class=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex items-center "><span class="pr-1"><i class="ri-add-circle-line align-middle"></i></span> Add</a>
                </div>
                </div>
                <div class="block w-full overflow-x-auto">
                <!-- Projects table -->
                <table class="items-center table-auto w-full bg-transparent border-collapse" id="projects-table">
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
                    <tbody class="t-body">
                    ${await NewsList.render()}
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
  afterRender() {
    const buttons = document.querySelectorAll('.button-del');
    buttons.forEach((button) => {
      const { id } = button.dataset;
      button.addEventListener('click', () => {
        console.log(button);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            del(id).then(() => {
              reRender(News, '.admin-container');
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success',
              );
            });
          }
        });
      });
    });
  },
};
export default News;
