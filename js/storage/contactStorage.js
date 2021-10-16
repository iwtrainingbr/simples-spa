const STORAGE_NAME = 'contatinhos';

class ContactStorage {
  static save(newContact) {
    let contacts = ContactStorage.findAll();

    contacts.push(newContact);

    localStorage.setItem(STORAGE_NAME, JSON.stringify(contacts));
  }

  static findAll() {
    return JSON.parse(
      localStorage.getItem(STORAGE_NAME) || '[]'
    );
  }

  static clearAll() {
    localStorage.removeItem(STORAGE_NAME);
  }

  static removeOne(id) {
    let contacts = ContactStorage.findAll();

    contacts.splice(id, 1);

    localStorage.setItem(STORAGE_NAME, JSON.stringify(contacts));
  }
}
