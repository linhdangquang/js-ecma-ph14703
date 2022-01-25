import Navigation from './navigation';
import AdminHeader from './header';
import AdminFooter from './footer';
import { update, get } from '../../../api/posts';

const EditNews = {
  async render(id) {
    const { data } = await get(id);
    return /* html */`
      <div class="container-fluid admin-container flex flex-row bg-gray-100">
      ${Navigation.render()}
          <div class="ml-4 rounded-l-2xl relative bg-white w-full">
              ${AdminHeader.render('NEWS FORM')}
              <div class="w-1/2 shadow-lg p-4 ml-14 mt-4 bg-slate-100 rounded drop-shadow-lg">
                  <form enctype="multipart" id="form-update" >
                  <div class="mb-6">
                  <input type="hidden" id="id" value="${data.id}" />
                  <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                  <input type="text" id="title" class="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" value="${data.title}"  >
                    
                  </div>
                  <div class="mb-6">
                  <label for="file" class="">Images</label>
                  <input type="file" id="file" class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full  file:bg-gray-600 file:rounded-lg file:p-2 file:text-white file:border-0 cursor-pointer file:cursor-pointer file:active:scale-95 ">
                  </div>
                  <div class="mb-6">
                  <label for="desc" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
                  <textarea type="text" id="desc" class="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  h-24">${data.desc}</textarea>
                  </div>
                  <button class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Edit</button>
                  <a href="/admin/news" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1">Cancel</a>
              </form>
              </div>
        ${AdminFooter.render()}
          </div>
      </div>
      `;
  },
  afterRender(id) {
    const formUpdate = document.querySelector('#form-update');
    formUpdate.addEventListener('submit', (e) => {
      e.preventDefault();
      update({
        id, title: document.querySelector('#title').value, desc: document.querySelector('#desc').value,
      })
        .then((result) => console.log(result.data))
        .catch((error) => console.log(error));
    });
  },
};

export default EditNews;
