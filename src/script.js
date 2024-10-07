let dark = localStorage.getItem("dark");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDark = () => {
  document.body.classList.add("dark");
  localStorage.setItem("dark", "enabled");
};

const disableDark = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("dark", null);
};

if (dark === "enabled") {
  enableDark();
}

darkModeToggle.addEventListener("click", () => {
  dark = localStorage.getItem("dark");
  if (dark !== "enabled") {
    enableDark();
    console.log(dark);
  } else {
    console.log(dark);
    disableDark();
  }
});
