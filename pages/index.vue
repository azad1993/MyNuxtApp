<template>
  <div>
    <Postlist :posts="fetchedPosts" />
    <About />
  </div>
</template>

<script>
import Postlist from "@/components/post/PostList";
import About from "@/components/home/About";

export default {
  components: {
    Postlist,
    About
  },
  //  data() {
  //    return {
  //      fetchedPosts: [],
  //    };
  //  },
  created() {
    // this.$store.dispatch("setPosts", this.fetchedPosts)
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    }
  },
//  fetch(context) {
//    console.log(context);
//    return new Promise((resolve, reject) => {
//      context.store.dispatch("setPosts", [
//        {
//          id: 1,
//          title: "kablosuz kedi yayinda",
//          subTitle: "kablosuz 2",
//          text: "kablu 3",
//          author: "GOkhan"
//        },
//        {
//          id: 2,
//          title: "video kedi yayinda",
//          subTitle: "video 2",
//          text: "video 3",
//          author: "haha"
//        }
//      ]),
//        resolve();
//    }).catch(e => {
//      context.error(e);
//    });
//  }
};
</script>
<style scoped></style>
