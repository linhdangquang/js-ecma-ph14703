import { postsData } from '../data';

const NewsDetails = {
  render(id) {
    const checkId = () => {
      const foundPost = postsData.find((post) => post.id === id);
      if (foundPost === undefined) {
        return '<h1>POST NOT FOUND</h1>';
      }
      return /* html */ `
      <div class="py-4">
          <h1 class="font-bold text-xl">${foundPost.title}</h1>
          <img src="${foundPost.img}" alt="">
          <p>${foundPost.desc}</p>
          <small>${foundPost.createdAt}</small>
      </div>
      `;
    };
    return checkId();
  },
};

export default NewsDetails;
