import {
  createStore
} from "vuex";
const store = createStore({
  state: {
    user: null,
    posts: null,
    users: [{
        id: 1,
        name: "Abdulloh",
        admin: true
      },
      {
        id: 2,
        name: "Fatxulla",
        admin: false
      },
      {
        id: 3,
        name: "Azim",
        admin: true
      },
      {
        id: 4,
        name: "Aziza",
        admin: false
      },
    ],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    getPost(state, payload) {
      state.posts = payload
    }
  },
  actions: {
    setUser({commit}) {
      setTimeout(() => {
        const newUser = {
          id: 5,
          name: "Fara",
          admin: false
        }
        commit("setUser", newUser)
      }, 2000);
    },
    async getPost({commit}) {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const allPost = await res.json()
        commit("getPost", allPost)
      } catch (error) {
        console.log("Qandaydir xatolik yuz berdi");
      }
    }
  },
  getters: {
    getUserAdmin(state) {
      return state.users.filter(user => user.admin)
    },
    getPostsLength(state){
      return state.posts.length
    }
  },
});

export default store;