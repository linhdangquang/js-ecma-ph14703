import { postsData } from '../data';

const NewsDetails = {
  render(id) {
    if (id) {
      const foundPost = postsData.find((post) => post.id === id);
      return /* html */ `
            <div>
                <h1>${foundPost.title}</h1>
                <img src="${foundPost.img}" alt="">
                <small>${foundPost.createdAt}</small>
            </div>
            `;
    } return '<h1>NOT FOUND</h1>';
  },
};

export default NewsDetails;
