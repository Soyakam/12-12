export function renderEl(picture) {
  const { largeImageURL, tags, webformatURL, likes, views, comments, downloads } = picture;
  return `
    <div class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
        loading="lazy"
        src="${webformatURL}" alt="${tags}" />
      </a>
      <ul class="img-dscr">
        <li><p><b>Likes:</b> ${likes}</p></li>
        <li><p><b>Views:</b> ${views}</p></li>
        <li><p><b>Comments:</b> ${comments}</p></li>
        <li><p><b>Downloads:</b> ${downloads}</p></li>
      </ul>
    </div>
  `;
}
