document.getElementById("add-another").addEventListener("click", function () {
  const container = document.getElementById("container");
  const newDiv = document.createElement("div");
  newDiv.classList.add("browser-container");

  newDiv.innerHTML = `
        <input type="file" accept="image">
        <select class="image-type">
            <option value="primary">Primary Image</option>
            <option value="secondary">Secondary Image</option>
        </select>
        <span class="remove-link">Remove</span>
    `;

  container.appendChild(newDiv);

  newDiv.querySelector(".remove-link").addEventListener("click", function () {
    container.removeChild(newDiv);
    updatePrimaryOptions();
  });

  newDiv
    .querySelector(".image-type")
    .addEventListener("change", updatePrimaryOptions);
  updatePrimaryOptions();
});

function updatePrimaryOptions() {
  const selects = document.querySelectorAll(".image-type");
  const primaryCount = Array.from(selects).filter(
    (select) => select.value === "primary"
  ).length;

  selects.forEach((select) => {
    if (primaryCount >= 1 && select.value !== "primary") {
      select.querySelector('option[value="primary"]').disabled = true;
    } else {
      select.querySelector('option[value="primary"]').disabled = false;
    }
  });
}

document.querySelectorAll(".remove-link").forEach((link) => {
  link.addEventListener("click", function () {
    const container = document.getElementById("container");
    container.removeChild(link.parentElement);
    updatePrimaryOptions();
  });
});

document.querySelectorAll(".image-type").forEach((select) => {
  select.addEventListener("change", updatePrimaryOptions);
});

updatePrimaryOptions();
