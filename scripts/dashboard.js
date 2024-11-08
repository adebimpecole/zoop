let notification_button = document.querySelector(".notification-bell");
let profile_section = document.querySelector(".profile > p");
let notification_items = document.querySelectorAll(".notification-items li");
let order_details_modal = document.getElementById("order-details");

notification_button.addEventListener("click", () => {
  notification_button.parentElement.classList.toggle("open");
});

profile_section.addEventListener("click", () => {
  profile_section.parentElement.classList.toggle("open");
});

notification_items.forEach((item) => {
  item.addEventListener("click", () => {
    order_details_modal.classList.add("show");
  });
});

let close_button = document.querySelector(".order-details .cls-btn");

close_button.addEventListener("click", () => {
  order_details_modal.classList.remove("show");
});

// let list_items = document.querySelectorAll(".controls ul li");

// list_items.forEach((item) => {
//   item.addEventListener("click", () => {
//     dropdown_button.textContent = item.textContent;
//     dropdown.classList.add("selected");
//   });
// });
// notification_button.forEach((control) => {
//     let button = control.querySelector("button");
//     let dropdownContainer = control.querySelector(".dropdown-container");
//     let listItems = dropdownContainer.querySelectorAll("ul li");

//     // Toggle dropdown open/close when button is clicked
//     button.addEventListener("click", () => {
//       control.classList.toggle("open");
//     });

//     // Update button text when a list item is clicked
//     listItems.forEach((item) => {
//       item.addEventListener("click", () => {
//         button.textContent = item.textContent;
//         control.classList.remove("open");
//         control.classList.add("selected");
//       });
//     });
//   });
