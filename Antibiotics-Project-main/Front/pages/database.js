document.addEventListener("DOMContentLoaded", function () {
  let sex = document.querySelector(".sex-");
  let souche = document.querySelector(".souche-");
  let designation = document.querySelector(".designation-");
  let age = document.querySelector(".age-");
  let date = document.querySelector(".date-");
  let resistance = document.querySelector(".resistance-");
  let sensitives = document.querySelector(".sensitives-");
  let intermediates = document.querySelector(".intermediate-");

  const main = document.querySelector(".main");
  let startingIndex = 0;
  let endingIndex = 10;
  let pageCount = 1;
  let next = document.querySelector(".switch-btn-right");
  let prev = document.querySelector(".switch-btn-left");
  let pagenumber = document.querySelector("#page-count");

  const fetchData = async () => {
    try {
      const response = await fetch("../db prototype1/database_fracted.json");
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Couldn't fetch data from the server");
      } else {
        let slicedData = data.slice(startingIndex, endingIndex);

        slicedData.forEach((item, index) => {
          const div = document.createElement("div");
          div.classList.add("color1");
          div.classList.add("titles");
          main.appendChild(div);

          const idSpan = document.createElement("span");
          idSpan.classList.add("sub");
          idSpan.textContent = (index + startingIndex + 1).toString();
          div.appendChild(idSpan);

          for (let key in item) {
            const span = document.createElement("span");
            span.classList.add("sub");
            span.classList.add(`${key}-`);
            span.textContent = item[key];
            div.appendChild(span);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateData = () => {
    main.textContent = "";
    pagenumber.textContent = pageCount + " /18";
    fetchData();
  };

  prev.addEventListener("click", (e) => {
    e.preventDefault();
    endingIndex = endingIndex - 10;
    startingIndex = startingIndex - 10;
    pageCount--;
    next.disabled = false;
    if (startingIndex <= 1) {
      prev.disabled = true;
    }

    updateData();
  });

  next.addEventListener("click", (e) => {
    e.preventDefault();
    endingIndex = endingIndex + 10;
    startingIndex = startingIndex + 10;
    pageCount++;
    prev.disabled = false;
    console.log(endingIndex);
    if (endingIndex == 180) {
      next.disabled = true;
    }
    // } else {
    //   next.disabled = false;
    // }
    updateData();
  });

  fetchData();

  const searchInput = document.querySelector(".search-input");

  searchInput.addEventListener("keyup", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const titles = document.querySelectorAll("span .sub");
    titles.forEach((title) => {
      const text = title.textContent.toLowerCase();
      const parentDiv = title.closest(".color1");

      if (text.includes(searchTerm)) {
        parentDiv.style.display = "block";
      } else {
        parentDiv.style.display = "none";
      }
    });
  });
});
const close = document.querySelector(".close-tab-AntiBAr");
$(document).ready(function () {
  $(".new-screen").hide();

  $(".infos").on("click", function () {
    $(".new-screen").show(500);
  });

  $(".close-tab-AntiBAr").on("click", function () {
    $(".new-screen").hide(500);
  });
});

let add = document.querySelector(".add");

$(document).ready(function () {
  $(".Container-Adding-Data-Section").hide();

  $(".add").on("click", function () {
    $(".Container-Adding-Data-Section").show(500);
  });

  $(".close-tab").on("click", function () {
    $(".Container-Adding-Data-Section").hide(500);
  });
});
