import NewsList from '../components/newsList';

const NewsDetails = {
  render(id) {
    return fetch(`https://61e7a8b4e32cd90017acbbec.mockapi.io/news/${id}`)
      .then((response) => response.json())
      .then(({
        title, img, desc, createdAt,
      }) => /* html */ `
        <div class="py-4">
        <h1 class="font-bold text-xl">${title}</h1>
        <img src="${img}" alt="">
        <p>${desc}</p>
        <small>${createdAt}</small>
    </div>
        `);
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
