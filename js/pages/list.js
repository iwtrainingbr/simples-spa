function list() {
  let contacts = [
    "Ualison",
    "Thiago",
    "Lorena",
    "Hitalo",
    "Daniel",
    "Fabricio",
    "Alessandro"
  ];

  return `
    <table class="table table-hover table-striped">
      <thead class="table-dark">
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        ${contacts.map((cont) => `
            <tr>
              <td>Foto</td>
              <td>${cont}</td>
              <td>Email</td>
              <td>Fone</td>
              <td>
                <button class="btn btn-warning btn-sm">Editar</button>
                <button class="btn btn-danger btn-sm">Excluir</button>
              </td>
            </tr>
          `).join('')}
      </tbody>
    </table>
  `;
}

document.querySelector('[data-content="listar"]').innerHTML = list();
