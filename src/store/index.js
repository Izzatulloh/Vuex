import { createStore } from "vuex";
const store = createStore({
  state: {
    users: [
      { id: 1, name: "Abdulloh", admin: true },
      { id: 2, name: "Fatxulla", admin: false },
      { id: 3, name: "Azim", admin: true },
      { id: 4, name: "Aziza", admin: false },
    ],
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
