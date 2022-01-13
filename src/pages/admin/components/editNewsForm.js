import Navigation from './navigation';
import AdminHeader from './header';
import AdminFooter from './footer';
import { postsData } from '../../../data';

const EditNews = {
  render(id) {
    const checkIdPost = () => {
      const foundPost = postsData.find((post) => post.id === id);
      if (foundPost !== undefined) {
        return /* html */ `
          <div class="container-fluid admin-container flex flex-row bg-gray-100">
          ${Navigation.render()}
              <div class="ml-4 rounded-l-2xl relative bg-white w-full">
                  ${AdminHeader.render('NEWS FORM')}
                  <div class="w-1/2 shadow-lg p-4 ml-14 mt-4 bg-slate-100 rounded drop-shadow-lg">
                      <form enctype="multipart">
                      <div class="mb-6">
                      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                      <input type="title" id="title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value="${foundPost.title}" required>
                      </div>
                      <div class="mb-6">
                      <label for="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Images</label>
                      <input type="file" id="file" class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                      </div>
                      <div class="mb-6">
                      <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                      <textarea type="text" id="desc" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light h-24 " required>${foundPost.desc}</textarea>
                      </div>
                      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                      <a href="/admin/news" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-600 ml-1">Cancel</a>
                  </form>
                  </div>
            ${AdminFooter.render()}

              </div>
          </div>
          

          `;
      } return 'NOT FOUND';
    };
    return checkIdPost();
  },
};

export default EditNews;
