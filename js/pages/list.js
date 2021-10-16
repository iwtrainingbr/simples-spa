function confirmClearAll () {
  if (confirm('Você tem certeza?')) {
    ContactStorage.clearAll();
    location.href = 'index.html';
  }
}

function confirmRemoveOne(id) {
  if (confirm('Você tem certeza?')) {
    ContactStorage.removeOne(id);
    location.href = 'index.html';
  }
}

function list() {
  let contacts = ContactStorage.findAll();

  return `
    <div class="text-end mb-2">
      <button onclick="confirmClearAll()" class="btn btn-outline-danger">Limpar tudo</button>
    </div>

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
        ${contacts.map((cont, id) => `
            <tr>
              <td>
                <img alt="Foto" src="${cont.photo}" style="border-radius: 50%; width: 80px;">
              </td>
              <td>${cont.name}</td>
              <td>${cont.email}</td>
              <td>${cont.phone}</td>
              <td>
                <button class="btn btn-warning btn-sm">Editar</button>
                <button onclick="confirmRemoveOne(${id})" class="btn btn-danger btn-sm">Excluir</button>
              </td>
            </tr>
          `).join('')}
      </tbody>
    </table>
  `;
}

document.querySelector('[data-content="listar"]').innerHTML = list();
