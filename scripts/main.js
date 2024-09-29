/***
 *
 *
 *
 */

loadSection("header", "components/header.html");
loadSection("introduction", "components/introduction.html");
loadSection("tools", "components/tools.html");
loadSection("buttons", "components/buttons.html");
loadSection("code", "components/code.html");
loadSection("modal", "components/modal.html");
loadSection("footer", "components/footer.html");

function loadSection(section_id, file_path) {
  fetch(file_path)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(section_id).innerHTML = data;

      const paragraphs = document.querySelectorAll(".introduction p");
      const lists = document.querySelectorAll(".tools li");
      const html_code = document.querySelectorAll(".pre-html code");
      const css_code = document.querySelectorAll(".pre-css code");

      copyToClipboard(paragraphs);
      copyToClipboard(lists);
      copyToClipboard(html_code);
      copyToClipboard(css_code);
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

  /*window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.remove("show-modal");
    }
  };*/
}

function showCSS() {
  let html_code = document.getElementById("html-code");
  let css_code = document.getElementById("css-code");
  if (
    html_code.style.display === "block" &&
    css_code.style.display === "none"
  ) {
    css_code.style.display = "block";
    html_code.style.display = "none";
  } else if (
    html_code.style.display === "none" &&
    css_code.style.display === "none"
  ) {
    css_code.style.display = "block";
  } else {
    css_code.style.display = "none";
  }
}
