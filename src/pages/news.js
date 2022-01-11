import { postsData } from '../data';

const NewsDetails = {
  render(id) {
    if (id) {
      const foundPost = postsData.find((post) => post.id === id);
      return /* html */ `
            <div class="py-4">
                <h1 class="font-bold text-xl">${foundPost.title}</h1>
                <img src="${foundPost.img}" alt="">
                <p>${foundPost.desc}</p>
                <small>${foundPost.createdAt}</small>
            </div>
            `;
    } return '<h1>NOT FOUND</h1>';
  },
};

export default NewsDetails;
