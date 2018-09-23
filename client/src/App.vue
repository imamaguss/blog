<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-md shadow-sm mb-4 rounded" id="topnav">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">
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
                  <router-link to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/register">Register</router-link>
                </li>
              </ul>
            </div>
          </div>
      </div>
      </nav>
    </div>

    <section class="container" id="blog-body">
      <div class="row" id="content">
        <router-view/>
      </div>
    </section>

    <footer class="bg-dark">Hacktivity &copy; 2018</footer>
    
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
  min-height: 518px;
  /* max-height: 2200px; */
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
  padding: 10px;
  color: white;
  margin-top: 10px;
}
</style>
