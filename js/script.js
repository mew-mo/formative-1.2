function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


// var position = [-36.8570941,174.7622295];
//
// function showGoogleMaps() {
//
//     var latLng = new google.maps.LatLng(position[0], position[1]);
//
//     var mapOptions = {
//         zoom: 16, // initialize zoom level - the max value is 21
//         streetViewControl: false, // hide the yellow Street View pegman
//         scaleControl: true, // allow users to zoom the Google Map
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         center: latLng
//     };
//
//     map = new google.maps.Map(document.getElementById('cityRoad'),
//         mapOptions);
//
//     // Show the default red marker at the location
//     marker = new google.maps.Marker({
//         position: latLng,
//         map: map,
//         draggable: false,
//         animation: google.maps.Animation.DROP
//     });
// }
//
// google.maps.event.addDomListener(window, 'load', showGoogleMaps);
