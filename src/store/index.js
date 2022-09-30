import { createStore } from "vuex";
const store = createStore({
  state: {
    user:null,
    users: [
      { id: 1, name: "Abdulloh", admin: true },
      { id: 2, name: "Fatxulla", admin: false },
      { id: 3, name: "Azim", admin: true },
      { id: 4, name: "Aziza", admin: false },
    ],
  },
  mutations: {},
  actions: {
    setUser(context){
      setTimeout(() => {
        console.log(context);
      }, 2000);
    }
  },
  getters: {
    getUserAdmin(state) {
      return state.users.filter(user => user.admin)
    }
  },
});

export default store;
