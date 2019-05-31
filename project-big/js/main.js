// coment ở chổ này lại đi nè ???? tôi nhìn ko hiểu hàm này làm gì ???
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  //Menu
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header-scroll").style.height = "60px";
    document.getElementById("header-scroll").style.backgroundColor = "black";
  } else {
    document.getElementById("header-scroll").style.height = "100px";
    document.getElementById("header-scroll").style.backgroundColor = "";
  }

  // logo
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo-content").style.height = "60px";
    document.getElementById("logo-content").style.width = "60px";
    document.getElementById("logo-content").style.position = "absolute";
    document.getElementById("logo-content").style.top = "0";
  } else {
    document.getElementById("logo-content").style.width = "105px";
    document.getElementById("logo-content").style.height = "100px";
  }

  //Progress bar
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("progress-animation1").style.animation =
      "yourAnimation1 0.9s 1 0s linear";
    document.getElementById("progress-animation1").style.width = "80%";
  }

  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("progress-animation2").style.animation =
      "yourAnimation2 0.9s 1 0s linear";
    document.getElementById("progress-animation2").style.width = "90%";
  }
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("progress-animation3").style.animation =
      "yourAnimation3 0.9s 1 0s linear";
    document.getElementById("progress-animation3").style.width = "75%";
  }
}
