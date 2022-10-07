function createDiv() {
  $(document).ready(function () {
    let mainDiv = {css:{"color": "purple"};
  }
  var $div = $("<div>", mainDiv)
  $div.html("New div tag created")
  $("body").append($div)
  });
}
