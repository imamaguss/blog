<template>
  <div class="home">
    <div class="row">
      <div class="col-md-3">
        <Sidebar @articlefiltered="getArticles"></Sidebar>
      </div>
      <div class="col-md-9">
        <Articles :getarticle="this.articleFiltered"></Articles>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '@/components/Sidebar.vue'
import Articles from '@/components/Article.vue'

export default {
  name: 'home',
  data: function () {
    return {
      articleFiltered: [],
    }
  },

  components: {
    HelloWorld, Sidebar, Articles
  },

  methods: {
    getArticles: function(value) {
      this.articleFiltered = value;
      // console.log('home ===>', this.articleFiltered);
    }
  },

}
</script>

<style>

</style>
