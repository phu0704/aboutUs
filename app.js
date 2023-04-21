function showSideBar() {
  let x = document.getElementById("sidebar");
  if (x.className === "sidebar") {
    x.className += " sidebar-show";
  } else {
    x.className = "sidebar";
  }
}
