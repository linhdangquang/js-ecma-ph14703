import { postsData } from '../data';

const HomePage = {
  render() {
    return /* html */ `
    <section>
            <h2 class="text-2xl uppercase font-semibold text-blue-900">Tin tức</h2>
            <div class="section-content grid grid-cols-3 gap-7 my-4">

            ${postsData
    .map(
      ({
        id, title, img, desc,
      }) => /* html */ `
                <div class="flex flex-col  border-2 px-6 py-4 hover:shadow-lg transition-shadow">
                    <a class="w-full" href="/news/${id}"><img class="w-full h-56" src="${img}" alt=""></a>
                    <a href="/news/${id}" class="text-orange-700 font-medium py-2 flex-1">${title}</a>
                    <small class="pb-2">${desc}</small>
                </div>
                `,
    )
    .join('')}
            </div>
    <section>
    `;
  },
};
export default HomePage;