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
            <h2 style="color:white">Hacktivity</h2>
          </a>
        </div>
          <div class="form-inline my-2 my-lg-0">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 float-right">
                <li class="nav-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li v-if="!isLogin" class="nav-item">
                  <router-link to="/login">Login</router-link>
                </li>
                <li v-if="!isLogin" class="nav-item">
                  <router-link to="/register">Register</router-link>
                </li>
                <li v-else class="nav-item">
                  <ul class="navbar-nav mr-auto mt-2 mt-lg-0 float-right">
                    <li class="nav-item">
                      <a href="/dashboard" @click="logout">Dashboard</a>
                    </li>
                    <li class="nav-item">
                      <a href="" @click="logout">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
      </div>
      </nav>
    </div>

    <section class="container" id="blog-body">
      <div class="row" id="content">
      </div>
        <router-view/>
    </section>

    <footer class="bg-dark"><a href="/">Hacktivity</a> &copy; 2018</footer>
    
  </div>
</template>

<script>
  import Article from './components/Article'
  export default {
    data() {
      return {
        isLogin: false,
      }
    },
    components: {
      Article
    },
    created: function() {
      const token = localStorage.getItem('token');
      if(token) {
        this.isLogin = true;
      }
    },
    methods: {
      logout: () => {
        localStorage.removeItem('token');
        this.isLogin = false;
      }
    },
    computed: {
      isLogin: function() {
        if(this.isLogin === true) {
          
        }
      }
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
  min-height: 528px;
}

footer {
  padding: 15px;
  color: white;
  margin-top: 10px;
}

footer a {
  color: #008426;
  font-weight: bold;
}
</style>
