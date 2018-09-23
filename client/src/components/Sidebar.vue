<template>
  <div>
    <!-- <div class="col col-md-3" id="sidebar">  -->
      <div class="search shadow-sm mb-2 bg-white rounded">
        <input type="search" placeholder="Search">
        <button id="search-btn"><i class="fas fa-search"></i></button>
      </div>
      
      <div class="shadow-sm mb-2 bg-white rounded popularList" id="sidebar-item">
        <ul class="list-group">
          <li class="list-group-item text-muted disabled" id="sidebar-title">
            <h6>Popular Posts</h6>
          </li>
          <li class="list-group-item disabled" id="sidebar-item-list">
            <ul>
              <li><img src="https://via.placeholder.com/80x80" alt="article-img"></li>
              <li><p>Title</p></li>
              <li><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium iste quam tempora. Corrupti veniam, et amet reprehenderit vero eligendi esse quas rem dolores. Modi dolorum iure debitis laboriosam sequi.</p></li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="category" id="sidebar-item">
        <ul class="list-group">
          <li class="list-group-item text-muted disabled" id="sidebar-title">
            <h6>Categories</h6>
          </li>
          <!-- <li class="list-group-item" id="sidebar-item-list">
            <a @click="getAllArticle">All Category</a>
          </li> -->
          <li class="list-group-item disabled" id="sidebar-item-list" v-for="category in categories" v-bind:key=category.id> 
            <a @click="filter(category._id)">
              {{ category.name }}
            </a>
          </li>
        </ul>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => {
    return {
      categories: [],
      articles: []
    }
  },

  created: function() {
    let self = this;
    axios
      .get('http://localhost:3012/categories')
      .then(result => {
        // console.log(result.data.categories);
        self.categories = result.data.categories;
      })
      .catch(err => {
        console.log(err);
        
      })
  },

  methods: {
    filter: function (categoryId) {
      // console.log(categoryId);
      axios
        .get(`http://localhost:3012/articles/category/${categoryId}`)
        .then(result => {
          self.articles = result.data.articles;
          this.$emit('articlefiltered', self.articles);
        })
        .catch(err => {
          console.log(err);
        })
    },

    getAllArticle: function() {
      axios
        .get('http://localhost:3012/articles')

    }
  }

}
</script>

<style>
  #sidebar {
    padding-right: 10px;
  }

  .search {
    text-align: left;
    margin-bottom: 10px;
  }

  .search input {
    width: 172px;
  }

  #search-btn {
    padding: 0 5px 0 5px;
  }

  #sidebar-title {
    padding: 3px 20px;
    
  }

  #sidebar-item {
    text-align: left;
    padding: 0;
    margin-bottom: 10px;
  }

  .popularList#sidebar-item #sidebar-item-list img {
    position: relative;
    float: left;
    overflow: hidden;
  }

  .popularList#sidebar-item #sidebar-item-list p {
    overflow: hidden;
    line-height: normal;
  }

  #sidebar-item ul li h6 {
    padding: 0;
    margin: 0;
  }

  #sidebar-item ul li p {
    font-size: 12px;
  }

  #sidebar-item-list {
    padding: 10px
  }

  #sidebar-item-list ul li{
    display: inline-block;
    margin-right: 5px;
    text-align: justify
  }
</style>
