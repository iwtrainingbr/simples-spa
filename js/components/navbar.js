function navbar() {
    let items = [
      "listar",
      "relatorios",
      "cadastrar",
    ];

    return `
      <hr>
      ${items.map((btn) => `
        <button data-component="menu" data-action="${btn}" class="btn btn-outline-dark">
          ${btn.toUpperCase()}
        </button>
        `).join('')}
      <hr>
    `;
}

document.getElementById('navbar').innerHTML = navbar();
