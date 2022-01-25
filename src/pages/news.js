import NewsList from '../components/newsList';
import { get } from '../api/posts';

const NewsDetails = {
  async render(id) {
    const { data } = await get(id);
    return `
        <div class="py-4">
        <h1 class="font-bold text-xl">${data.title}</h1>
        <img src="${data.img}" alt="">
        <p>${data.desc}</p>
        <small>${data.createdAt}</small>
    </div>
        `;
  },
};

const NewsPage = {
  async render() {
    return /* html */ `
    <section>
    <h2 class="text-2xl uppercase font-semibold text-blue-900">Tin tức</h2>
    <div class="section-content grid grid-cols-3 gap-7 my-4">
    ${await NewsList.render()}
    </div>
    </section>
    `;
  },

};
export default NewsPage;

export { NewsDetails, NewsPage };
