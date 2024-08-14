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
