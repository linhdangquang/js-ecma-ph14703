import Banner from '../components/banner';
import NewsList from '../components/newsList';

const HomePage = {
  async render() {
    return /* html */ `
    ${Banner.render()}
    <section>
    <h2 class="text-2xl uppercase font-semibold text-blue-900">Tin tức</h2>
    <div class="section-content grid grid-cols-3 gap-7 my-4">
      ${await NewsList.render()}
    </div>
    </section>
    `;
  },
};
export default HomePage;
