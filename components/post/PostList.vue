<template>
  <div>
    <Post
      :post="post"
      v-for="post in posts"
      :key="post.id"
      :is-admin="isAdmin"
    />
  </div>
</template>
<script>
import Post from "@/components/post/Post";
export default {
  components: {
    Post,
  },
  props: {
    isAdmin: {},
    posts: {},
  },
};
</script>