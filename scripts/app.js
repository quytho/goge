// $(".category-slide").slick({
//   slidesToShow: 6,
//   infinite: false,
//   slidesToScroll: 1,
//   dots: false,
//   draggable: true,
//   adaptiveHeight: false,
//   prevArrow: `<button type='button' class='slick-prev pull-left'><img src="../image/arrow -left.png"/></button>`,
//   nextArrow: `<button type='button' class='slick-next pull-right'><img src="../image/arrow-right.png"/></button>`,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: true,
//         arrows: true,
//         draggable: true,
//       },
//     },
//     {
//       breakpoint: 480,
//       draggable: true,
//       settings: {
//         slidesToShow: 3,
//         draggable: true,
//         slidesToScroll: 1,
//         infinite: true,
//         arrows: true,
//       },
//     },
//   ],
// });

// const toggle = document.querySelector(".menu-toggle");
// const menu = document.querySelector(".menu");
// const activeClass = "is-show";
// toggle.addEventListener("click", function (e) {
//   e.target.classList.toggle("fa-bars");
//   e.target.classList.toggle("fa-times");
//   menu.classList.toggle(activeClass);
// });
// window.addEventListener("click", function (e) {
//   if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//     menu.classList.remove("fa-times");
//     menu.classList.add("fa-bars");
//     menu.classList.remove(activeClass);
//   }
// });

// // document.body.addEventListener("click", handlogin);
// // // const log = document.querySelector(".menu-sign");
// // // log.addEventListener("click", handlogin);

// // function handlogin(e) {
// //   console.log(e.target);
// //   const main = document.querySelector("main");
// //   console.log(document.querySelector("body").parentNode.removeChild(main));
// //   if (e.target.matches("menu-sign")) {
// //     const body = document.querySelector("body");
// //     console.log("n");
// //     body.removeChild("main");
// //   }
// //   // const bo = document.querySelector("body");
// //   // bo.addEventListener("click", (e) => {
// //   //   console.log("on");
// //   // });
// // }
