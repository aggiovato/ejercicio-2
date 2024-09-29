loadSection("header", "components/header.html");
loadSection("introduction", "components/introduction.html");
loadSection("tools", "components/tools.html");
loadSection("buttons", "components/buttons.html");
loadSection("css", "components/css.html");
loadSection("html", "components/html.html");
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
  let modal_html = document.getElementById("html-content");
  modal_html.classList.add("show-modal");

  const handleCloseClick = () => {
    modal_html.classList.remove("show-modal");
  };

  document
    .getElementById("html-close")
    .addEventListener("click", handleCloseClick);
}

function showCSS() {
  const modal_css = document.getElementById("css-content");
  modal_css.classList.add("show-modal");

  const handleCloseClick = () => {
    modal_css.classList.remove("show-modal");
  };

  document
    .getElementById("css-close")
    .addEventListener("click", handleCloseClick);
}
