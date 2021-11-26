import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: []
    },
    mutations: {
      setPosts(state, armud) {
        state.fetchedPosts = armud;
      },
      addPost(state, post) {
          state.fetchedPosts.push(post)
      },
      updatePost(state, editedPost) {
          console.log("state", state)
          console.log("Mutations =>" + editedPost)
          let post_index = state.fetchedPosts.findIndex(post => post.id == editedPost.id)
          console.log("Mutations | POST INDEX =>" + post_index)
          state.fetchedPosts[post_index] = editedPost
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .get(
            process.env.baseURL + "/posts.json"
          )
          .then(response => {
            let data = response.data;

            let postArray = [];
            for (let key in data) {
              //  data["id"] = key

              postArray.push({ id: key, ...data[key] });
            }
            vuexContext.commit("setPosts", postArray);
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContext, post) {
        return this.$axios
          .post(
            process.env.baseURL + "/posts.json",
            post
          )
          .then(response => {
            // console.log(response)
            vuexContext.commit("addPost", { ...post, id : response.data.name})
            //this.$router.push("/admin");
          });
      },
      updatePost(vuexContext, editedPost) {
        return this.$axios
        .put(
          process.env.baseURL + "/posts/" + editedPost.id + ".json", editedPost
        )
        .then(response => {
          
          vuexContext.commit("updatePost", editedPost)
          
        })
        .catch(e => console.log(e))
      }
    },
    getters: {
      getPosts(state) {
        return state.fetchedPosts;
      }
    }
  });
};

export default createStore;
