/***
 *
 *
 *
 */

loadSection("header", "components/header.html");
loadSection("introduction", "components/introduction.html");
loadSection("tools", "components/tools.html");
loadSection("buttons", "components/buttons.html");
loadSection("css", "components/css.html");
loadSection("modal", "components/modal.html");
loadSection("footer", "components/footer.html");

function loadSection(section_id, file_path) {
  fetch(file_path)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(section_id).innerHTML = data;

      const paragraphs = document.querySelectorAll(".introduction p");
      const lists = document.querySelectorAll(".tools li");

      copyToClipboard(paragraphs);
      copyToClipboard(lists);
    })
    .catch((error) => console.log("Error al cargar el archivo:", error));
}

function copyToClipboard(element) {
  element.forEach((elem) => {
    elem.addEventListener("click", function () {
      const elem_text = this.innerText;

      navigator.clipboard
        .writeText(elem_text)
        .then(() => {
          const icon = this.querySelector(".icon");
          icon.classList.add("show-icon");

          setTimeout(() => {
            icon.classList.remove("show-icon");
          }, 2000);
        })
        .catch((err) => {
          console.error("Error al copiar el texto: ", err);
        });
    });
  });
}

function showHTML() {
  let modal = document.getElementById("modal-content");

  modal.classList.add("show-modal");

  document.querySelector(".close").onclick = function () {
    modal.classList.remove("show-modal");
  };
}

function showCSS() {
  let modal = document.getElementById("css-content");

  modal.classList.add("show-modal");

  document.querySelector(".close").onclick = function () {
    modal.classList.remove("show-modal");
  };
}
