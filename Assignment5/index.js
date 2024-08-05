document.getElementById("add-another").addEventListener("click", function () {
  const container = document.getElementById("container");

  const newDiv = document.createElement("div");

  newDiv.className = "browser-container"; // Add the browser-container class to new div

  newDiv.innerHTML = `
    <input type="file" accept="image/*" class="file-input">
    <select class="image-type">
        <option value="primary">Primary Image</option>
        <option value="secondary" selected>Secondary Image</option>
    </select>
    <button class="remove-link">Remove</button>
    <img src="" class="image-preview" />
  `;

  container.appendChild(newDiv); // new Div created element will be stored at last

  newDiv.querySelector(".remove-link").addEventListener("click", function () {
    container.removeChild(newDiv);
  });

  newDiv
    .querySelector(".file-input")
    .addEventListener("change", function (event) {
      displayImage(event);
    });

  newDiv.querySelector(".image-type").addEventListener("change", function () {
    updateImageTypes(this);
  });
});

function displayImage(event) {
  const input = event.target;
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const image =
      input.nextElementSibling.nextElementSibling.nextElementSibling;
    image.src = e.target.result;
    image.style.display = "block";
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

function updateImageTypes(changedSelect) {
  if (changedSelect.value === "primary") {
    document.querySelectorAll(".image-type").forEach((select) => {
      if (select !== changedSelect) {
        select.value = "secondary";
      }
    });
  }
}

document.querySelectorAll(".file-input").forEach((input) => {
  input.addEventListener("change", function (event) {
    displayImage(event);
  });
});

document.querySelectorAll(".image-type").forEach((select) => {
  select.addEventListener("change", function () {
    updateImageTypes(this);
  });
});
