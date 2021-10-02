function navbar() {
    let items = [
      "listar",
      "cadastrar",
      "relatorios"
    ];

    return `
      <hr>
      ${items.map((btn) => `
          <button class="btn btn-outline-dark" data-component="menu" data-action="${btn.action}">
            ${btn.text}
          </button>
        `
      ).join('')}
      <hr>
    `;
}

document.getElementById('navbar').innerHTML = navbar();
