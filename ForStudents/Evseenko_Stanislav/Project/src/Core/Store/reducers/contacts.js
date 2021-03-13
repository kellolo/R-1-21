import update from 'react-addons-update';

const storeContacts = {
  contacts: [
    { name: 'Ваня', id: '4' },
    { name: 'Петя', id: '5' },
    { name: 'Саша', id: '6' },
  ]
};

export default (store = storeContacts, action) => {
  switch (action.type) {
    case 'DELL_CONTACT':
      const newContacts = store.contacts;

      newContacts.forEach((element, i) => {
        if(element.name == action.value) {
          newContacts.splice(i, 1);
        };
      });
      
      return update(store, {
        contacts: { $set: newContacts }
      });
    default:
      return store;
  };
};