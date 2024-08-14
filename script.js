$(document).ready(function () {
  var silder = $(".owl-carousel");
  silder.owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    items: 1,
    stagePadding: 20,
    center: true,
    nav: false,
    margin: 50,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      575: { items: 2 },
      768: { items: 2 },
      991: { items: 3 },
      1200: { items: 4 },
    },
  });
});

document.querySelectorAll(".magnific-image img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwastbz38QO4pkmu_TKWpqfPbQNDsnb5EvuBv5P27Yg2T4t7v7snBIW18NkrH1zrAj6Fw/exec";
const form = document.forms["larry-rent-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit diklik
  //tampilan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  try {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        //tampilan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        //tampilkan alert
        myAlert.classList.toggle("d-none");
        //reset formnya
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => {
        //tampilan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        //tampilkan alert error
        const errorAlert = document.querySelector(".error-alert");
        errorAlert.classList.toggle("d-none");
        //reset formnya
        form.reset();
        console.error("Error!", error.message);
      });
  } catch (error) {
    //tampilan tombol kirim, hilangkan tombol loading
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    //tampilkan alert error
    const errorAlert = document.querySelector(".error-alert");
    errorAlert.classList.toggle("d-none");
    //reset formnya
    form.reset();
    console.error("Error!", error.message);
  }
});
