function start(event) {
event.dataTransfer.setData("dragdrop", event.target.id)
}

function accept(event) {
  event.preventDefault();
}

function finish(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("dragdrop");
  event.target.appendChild(document.getElementById(data));
}

function currentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(display);
  } else {
    document.getElementById("geo").innerHTML  = "Geolocation is not supported by this browser.";
  }
}

function display(position) {
  var Latitude = position.coords.latitude;
  var Longitude = position.coords.longitude;
  if (typeof(Storage) !== "undefined") {
    localStorage.Latitude = Latitude;
    localStorage.Longitude = Longitude;
  document.getElementById("geo").innerHTML = "<b>Latitude: </b>" + localStorage.Latitude +
  "<br><b>Longitude:</b> " + localStorage.Longitude;
} else {
document.getElementById("geo").innerHTML = "Sorry, your browser does not support Web Storage";
}
}
