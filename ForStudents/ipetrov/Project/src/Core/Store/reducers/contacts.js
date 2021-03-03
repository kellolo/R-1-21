
const storeContacts = {
    inactiveChats: [
        {name:'Вась Васич', id: '4'}, 
        {name:'Оль Олич', id: '5'}, 
        {name:'Дим Димыч', id: '6'}, 
        {name:'Халк Халкыч', id: '7'}
    ]
};

export default (store = storeContacts, action) => {
    switch(action.type) {
        case 'LOAD_CTC': {
            return store;
        }

        default: {
            return store;
        }
    }
};