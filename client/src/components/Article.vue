<template>
  <div>
    <div v-if="!getarticle.length">
      <h3>No Article</h3>
    </div>
    <div v-if="getarticle.length" class=" card shadow mb-4 bg-white rounded" id="article" v-for="(article) in getarticle" v-bind:key=article.id>
      <div class="card-body" >
        <div class="card-item" >
        <h5 class="card-title"><i class="fas fa-newspaper"></i> {{ article.title }}</h5>
        </div>
        <div class="card-item">
          <ul class="text-muted" id="article-info">
            <li id="author"><i class="fas fa-user"></i> {{ article.authorId.name }} </li>
            <li id="created"><i class="fas fa-calendar-alt"></i> {{ article.createdAt }} </li>
            <li id="category"><i class="fas fa-folder"></i> {{ article.categoryId.name }} </li>
            <li id="comments"><i class="fas fa-comments"></i> {{ article.comments.length }} comments</li>
          </ul>
        </div>
        <hr id="article">
        <div id="description" class="article-description">
          <img id="thumbnail" src="https://via.placeholder.com/180x140" :alt="article.title"> 
          <!-- <img id="thumbnail" :src=article.image :alt="article.title">  -->
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium iste quam tempora. Corrupti veniam, et amet reprehenderit vero eligendi esse quas rem dolores. Modi dolorum iure debitis laboriosam sequi.</p> 
          <a href="#" id="readMore"><i>Read More </i><i class="fas fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['getarticle'],
    data: () => {
      return {
        articles: [],
      }
    },

    created: function() {
      let self = this;    
        // .get('http://localhost:3012/articles')
      axios
        .get('http://api-hacktivity.codeventure.tech/articles')
        .then(result => {
          self.articles = result.data.articles;
          if(!self.getarticle.length) {
            self.getarticle = self.articles;
          }
          // console.log('profs ====> ', this.getarticle);
        })
        .catch(err => {
          // console.log(err);
        })
    },
  }
</script>

<style>
  #article-header #article {
    margin-bottom: 20px !important;
  }

  #article, #list-group-item {
    border-radius: 2px;
    border-top: 5px solid #00CC7F;
    padding: 0;
    text-align: left;
  }

  ul#article-info li {
    display: inline-block;
    margin-right: 10px;
    padding: 0;
    margin-bottom: 0;
    font-size: 12px;
  }

  hr#article {
    border-radius: 0;
    border-top: 4px solid #90FFD5;
    color: grey;
  }

  .card-item {
    margin: 0;
  }

  #description #thumbnail{
    position: relative;
    float: left;
    padding-right: 10px;
    width: 180px;
    height: 140px;
  }

  #description p.card-text {
    text-align: justify;
  }

  #readMore {
    float: right;
    color: #18B978;
    position: relative;
    font-size: 12px;
    margin-top: 50px;
  }
</style>
