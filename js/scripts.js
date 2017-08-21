var iceCreams = ["Vanilla", "Cashew Caramel", "Tin-Roof Sundae", "Mint Chip"];

$(document).ready(function(event) {
  iceCreams.forEach(function(flavor) {
    $("#output").append("<li>" + flavor + "</li>")
  });
  event.preventDefault();
});
