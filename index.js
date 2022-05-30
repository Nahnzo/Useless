const border = document.querySelector(".ramka");
const button = document.querySelector(".date");
const reload = document
  .querySelector(".date1")
  .addEventListener("click", () => {
    location.reload();
  });
const time = document.querySelector(".time");
button.addEventListener("click", () => {
  let now = new Date();
  time.innerHTML = now;
});
