function register() {
  return `
    <form id="form-contact" onsubmit="save()">
      <legend>Novo Contato</legend>
      <hr>

      <label for="name">Nome</label>
      <input id="name" class="form-control mb-3" placeholder="Digite aqui">

      <label for="email">Email</label>
      <input id="email" type="email" class="form-control mb-3" placeholder="Digite aqui">

      <label for="phone">Telefone</label>
      <input id="phone" class="form-control mb-3" placeholder="Digite aqui">

      <label for="photo">Foto</label>
      <input id="photo" type="url" class="form-control mb-3" placeholder="Cole a URL da foto aqui" >

      <button class="btn btn-dark">Enviar</button>
    </form>
  `;
}

document.querySelector('[data-content="cadastrar"]').innerHTML = register();

function save() {
  event.preventDefault();

  const INPUT_NAME = document.getElementById('name');
  const INPUT_PHONE = document.getElementById('phone');
  const INPUT_EMAIL = document.getElementById('email');
  const INPUT_PHOTO = document.getElementById('photo');

  if (INPUT_NAME.value === '') {
    INPUT_NAME.classList.add('is-invalid');
  }

  let newContact = {
    name: INPUT_NAME.value,
    email: INPUT_EMAIL.value,
    photo: INPUT_PHOTO.value,
    phone: INPUT_PHONE.value,
  };

  ContactStorage.save(newContact);

  document.getElementById('form-contact').reset();

  alert('Novo Contato Adicionado');
}
