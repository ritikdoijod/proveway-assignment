const options = document.querySelectorAll(".option");

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", function () {
    document
      .querySelectorAll(".option")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
