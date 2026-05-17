import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhoto } from "./js/pixabay-api.js"
import { renderEl } from "./js/render-functions.js"



const btn = document.querySelector(".form")
const gallery = document.querySelector(".fot");
const loadMoreBtn = document.querySelector(".btn");
const loader = document.querySelector(".loader");

let query;
let page = 1;





const lightbox = new SimpleLightbox(".fot a", {
  captionsData: "alt",
  captionDelay: 250,
});
hideLoader();
btn.addEventListener("submit", (e) => {
  e.preventDefault();
  query = e.target.elements["search-text"].value.trim();
if (query==="") {
  iziToast.error({
    position: "topRight",
    title: "error",
    message: "Please enter a search query!!!"
  });
  hideLoader();

  return;
    };

  page = 1;
  showLoader();
  gallery.innerHTML = "";

  getPhoto(query,page).then(data => {


    if (data.hits.length === 0) {
      hideLoader();
       hideLoadMore();
      iziToast.error({
  position: 'topRight',
    title: 'Error',
    message: 'Illegal Sorry, there are no images matching your search query. Please try again!',
      });
      return;

    }


    const markup = data.hits.map(renderEl).join("");
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();

    showLoadMore();
    hideLoader();
    e.target.reset();//очищає форму


  }).catch(() => {
hideLoader();
      iziToast.error({
        position: "topRight",
        title: "Error",
        message: "Something went wrong. Please try again later!",
      });



  });



})

    // =====================================================



loadMoreBtn.addEventListener("click", loadMoreFunction)
 async function loadMoreFunction(){
   page += 1;
   showLoader();
   try {
     const total = await getPhoto(query, page);
  // console.log(total);
   const markup = total.hits.map(renderEl).join("");
   gallery.insertAdjacentHTML('beforeend', markup);
lightbox.refresh();
   if (page * 30 >= total.totalHits) {
  hideLoadMore()
  iziToast.info({
    position: "topRight",
    message: "You've reached the end of search results."
  });
     };
   } catch {
     iziToast.error({
     position: "topRight",
      title: "Error",
      message: "Something went wrong. Please try again later!"
  });
   }

   hideLoader();
};
// ============================================================





function showLoadMore() {
  loadMoreBtn.classList.remove("hidden")

};

function hideLoadMore(){
loadMoreBtn.classList.add("hidden")
};



function hideLoader(){
  loader.classList.add("loaderHidden");
};


function showLoader() {
  loader.classList.remove("loaderHidden");

};

