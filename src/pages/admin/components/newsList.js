import axios from 'axios';

const NewsList = {
  async render() {
    const { data } = await axios.get('https://61e7a8b4e32cd90017acbbec.mockapi.io/news');
    return /* html */ `
                ${data
    .map(
      ({
        id, title, img, desc, createdAt,
      }, idx) => /* html */ `
      <tr class="border-b">
      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left">
      <span class="font-black text-gray-600">
          ${idx + 1}
      </span>
      </th>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
          ${title}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
          <img src="${img}" alt="" class="h-12 w-12">
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
          ${desc}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
          ${createdAt}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
      <div class="flex">
      <a href="/admin/news/${id}/edit" class="uppercase mr-2 font-semibold hover:text-sky-600">edit
      </a>
      <button data-id=${id} class="uppercase button-del font-semibold hover:text-sky-600">
        Delete
      </button>
      </td>
  </tr>
                    `,
    )
    .join('')}
                `;
  },
};

export default NewsList;
