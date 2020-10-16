// create map
const map = L.map("mapid").setView([-20.4334218, -49.9810389], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add markers
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add the photos field
function addPhotoField() {
  // pick the photos container --> #images
  const container = document.querySelector("#images");

  // pick the container to duplicate --> .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realize the last image added clone
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true); // true = copia o container com tds os itens; false = copia só o container (só a div em si)

  // verify if the field is empty, if is, don't add to the images container
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // clear the field before add to the images container
  input.value = "";

  // add the clone to the #images container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // clear the field value
    return;
  }

  // delete the field
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // remove the .active class from the buttons
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  // put the .active class in the clicked button
  const button = event.currentTarget; // picking the button
  button.classList.add("active");

  // update the hidden input with the selected value
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}
