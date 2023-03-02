$(".hexagon").click(function () {
  window.location.href = this.getElementsByClassName("mylink")[0].href;
});

onscroll = (event) => {
  console.log("scrolling")
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    $("#back").show()
  } else {
    $("#back").hide()
  }
}