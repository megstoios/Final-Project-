$(document).ready(function() {

  var wheel = new wheelnav("divWheel");
  wheel.wheelRadius = 250;
  wheel.createWheel(["imgsrc:burger.png", "imgsrc:chocolate.png", "imgsrc:corn.png", "imgsrc:oranges.png", "imgsrc:pancakes.png", "imgsrc:pizza.png", "imgsrc:spaghetti.png"]);

  wheel.navItems.forEach(function(item) {

    item.navigateFunction = function() {
      $("#navbar").empty()

      if (item === wheel.navItems[0]) {
        $("#navbar").append("<span>About</span>");
      } else if (item === wheel.navItems[1]) {
        $("#navbar").append("<span>Gallery</span>");
      } else if (item === wheel.navItems[2]) {
        $("#navbar").append("<span>Store</span>");
      } else if (item === wheel.navItems[3]) {
        $("#navbar").append("<span>Upcoming</span>");
      } else if (item === wheel.navItems[4]) {
        $("#navbar").append("<span>Contact</span>");
      } else if (item === wheel.navItems[5]) {
        $("#navbar").append("<span>Press</span>");
      } else if (item === wheel.navItems[6]) {
        $("#navbar").append("<span>Video</span>");
      }
    };
  });

  $("#navbar").click(function(event) {
    var name = event.currentTarget.firstElementChild.innerHTML;
    var fullname = name.toLowerCase() + "inner";
    var supername = document.querySelector(`.innerdiv[id="${fullname}"]`);

    supername.style.display = 'block';

  });

  $(".close").click(function() {
    $(".innerdiv").css("display", "none");
  });

  $("body").click(function(event) {
    if ($(event.target).hasClass('innerdiv')) {
      $(".innerdiv").css("display", "none");
    }
  });


});
