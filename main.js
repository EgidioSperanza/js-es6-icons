const grid = document.querySelector(".grid");
const icons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function boxTemplate(container, icon, name) {
  const boxIcon = document.createElement("div");
  boxIcon.className = "box-icon";
  container.append(boxIcon);
  const displayIcon = `<i class="${icon.color} ${icon.family} ${icon.prefix}${icon.name}"></i>`;
  boxIcon.innerHTML = `
        <div>${displayIcon}</div>
        <div>${name}</div>
    `;
}

function createSelect() {
  const navSelect = document.querySelector(".filter-nav");

  const iconsTypeSelect =
    `
    <label>FILTRA PER TIPO:
    <select class="filter-icons" name="filter-icons">
    <option value="all">All</option>` + createOption(icons);
  +`</select>
    </label>
    <div class="result"></div>
    `;
  navSelect.innerHTML = iconsTypeSelect;
  const selectElement = document.querySelector(".filter-nav");
}

function createOption(e) {
  let options = "";
  const arrayTypeIcons = e.map(function (e) {
    return e.type;
  });
  // console.log(arrayTypeIcons)

  const filteredTypeIcons = arrayTypeIcons.filter(function (type, i) {
    return arrayTypeIcons.indexOf(type) == i;
  });
  // console.log(filteredTypeIcons)
  filteredTypeIcons.forEach((e) => {
    options += `<option value="${e}">${capitalize(e)}</option>`;
  });
  // console.log(options);
  return options;
}

function chooseSelect() {
  const selectElement = document.querySelector(".filter-icons");
  selectElement.addEventListener("change", (event) => {
    grid.innerHTML = "";
    icons.forEach((icons) => {
      if (icons.type === event.target.value || event.target.value === "all") {
        boxTemplate(grid, icons, icons.name.toUpperCase());
      }
    });
  });
}

function displayGrid() {
  createSelect();
  chooseSelect();
  icons.forEach((icons) => {
    boxTemplate(grid, icons, icons.name.toUpperCase());
  });
}

displayGrid();
