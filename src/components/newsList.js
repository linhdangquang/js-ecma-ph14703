import { getAll } from '../api/posts';

const NewsList = {
  async render() {
    const { data } = await getAll();
    return /* html */`
     
            ${data
    .map(
      ({
        id, title, img, desc,
      }) => /* html */ `
                <div class="flex flex-col  border-2 px-6 py-4 hover:shadow-lg transition-shadow">
                    <a class="w-full" href="/news/${id}"><img class="w-full h-56" src="${img}" alt=""></a>
                    <a href="/#/news/${id}" class="text-orange-700 font-medium py-2 flex-1">${title}</a>
                    <small class="pb-2">${desc}</small>
                </div>
                `,
    )
    .join('')}
            `;
  },
};

export default NewsList;
