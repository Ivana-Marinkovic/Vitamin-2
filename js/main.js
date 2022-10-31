$(document).ready(function () {
  loadData();
});

function loadData() {
  $.getJSON("index.json", function (users) {
    console.log(users);
    parseData(users);
  });
}

function parseData(users) {
  var html = "";
  $.each(users, function (key, user) {
    html += "<div class='delay col-md-4 col-xs-12'>";
    html += "<h2> User No. " + user.id + "</h2>";
    html += "<div class='user-box'>";
    html += "<p class='name'> <u><b>Name:</b></u> " + user.name + "</p>";
    html +=
      "<p class='email'> <u><b>E-mail Address:</b></u> " + user.email + "</p>";
    html +=
      "<p class='phone'> <u><b>Phone Number:</b></u> " + user.phone + "</p>";
    html +=
      "<p class='street'> <u><b>Street:</b></u> " +
      user.address.street +
      "</p>";
    html +=
      "<p class='city'> <u><b>City:</b></u> " + user.address.city + "</p>";
    html +=
      "<p class='zipcode'> <u><b>ZipCode:</b></u> " +
      user.address.zipcode +
      "</p>";
    html += "</div>";
    html += "</div>";
  });

  $("#user-info").append(html);
}

$(window).scroll(function () {
  $(".delay").each(function () {
    let offset = 250;
    let bottomOfObject = $(this).offset().top + $(this).outerHeight();
    let bottomOfWindow = $(window).scrollTop() + $(window).height();
    if (bottomOfWindow + offset > bottomOfObject) {
      $(this).animate({ opacity: "1" }, 1000);
    }
  });
});

/*parallax*/

(function () {
  window.addEventListener("scroll", function (event) {
    let depth, layer, layers, movement, topDistance, translate3d, _i, _len;
    topDistance = window.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (_i = 0, _len = layers.length; _i < _len; _i++) {
      layer = layers[_i];
      depth = layer.getAttribute("data-depth");
      movement = -(topDistance * depth);
      translate3d = "translate3d(0, " + movement + "px, 0)";
      layer.style["-webkit-transform"] = translate3d;
      layer.style["-moz-transform"] = translate3d;
      layer.style["-ms-transform"] = translate3d;
      layer.style["-o-transform"] = translate3d;
      layer.style.transform = translate3d;
    }
  });
}.call(this));
