<template>
  <div id="app">
     <div id="nav">
      <nav class="navbar navbar-expand-md shadow-sm mb-4 rounded" id="topnav">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">
            <img src="./assets/logo.png">
          </a>
        </div>
          <div class="form-inline my-2 my-lg-0">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 float-right">
                <li class="nav-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="#">Register</router-link>
                </li>
              </ul>
            </div>
          </div>
      </div>
      </nav>
    </div>

    <section class="container" id="blog-body">
      <div class="row" id="content">
        <div class="col col-md-3" id="sidebar"> <!-- sidebar -->
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
                <h6>Category</h6>
              </li>
              <li class="list-group-item disabled" id="sidebar-item-list"> Logic </li>
              <li class="list-group-item disabled" id="sidebar-item-list"> OOP </li>
              <li class="list-group-item disabled" id="sidebar-item-list"> MVC </li>
              <li class="list-group-item disabled" id="sidebar-item-list"> Sequelize </li>
            </ul>
          </div>
        </div>
          <router-view/>
        <Article></Article>
      </div>
    </section>

    <footer>Copyright Hacktivity 2018</footer>
    
  </div>
</template>

<script>
  import Article from './components/Article'
  export default {
    components: {
      Article
    }
  }
  
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#nav a {
  font-weight: bold;
  margin-right: 10px;
  color: #008426;
}

#nav a.router-link-exact-active {
  color: white;
} 

/* custom start here */
body {
  background-color: #F1F1F1;
}

#topnav {
  padding: 0;
  background-color: #00CC7F;
  margin-bottom: 0;
} 

#topnav .container {
  width: 900px;
}

#blog-body {
  max-width: 900px;
  min-height: 900px;
  max-height: 2200px;
}

/* sidebar */

#sidebar {
  padding-right: 10px;
}

.search {
  text-align: left;
  margin-bottom: 10px;
}

.search input {
  width: 170px;
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

footer {
  padding: 5px;
  background-color: #008426;
  color: white;
  margin-top: 10px;
}
</style>
