import update from 'react-addons-update';

const user = {
  user: {},
  login: 'user_1'
};

export default (store = user, action) => {
  switch(action.type) {
    case 'LOAD_USER': {
      return update(store, {
        user: { $set: action.payload.data }
      });
    }

    default: {
      return store;
    }
  };
};