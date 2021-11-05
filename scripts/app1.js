// window.addEventListener("load", function () {
//   const wrapper = document.querySelector(".wrapper");
//   const main = document.querySelector("main");
//   // console.log(main);
//   const tabs = document.querySelectorAll(".auth-item");
//   const tabsContent = document.querySelectorAll(".auth-content");
//   // console.log([...tabsContent]);
//   tabs.forEach((el) => el.addEventListener("click", handleChangeTab));
//   // wrapper.parentNode.removeChild(main);
//   console.log(wrapper.parentNode);

//   function handleChangeTab(e) {
//     const tabId = e.target.dataset.log;
//     tabs.forEach((el) => el.classList.remove("active"));
//     e.target.classList.add("active");
//     tabsContent.forEach((el) => {
//       el.classList.remove("active");
//       if (el.getAttribute("data-log") === tabId) {
//         console.log(el.getAttribute("data-log"));
//         el.classList.add("active");
//       }
//     });
//   }
// });
