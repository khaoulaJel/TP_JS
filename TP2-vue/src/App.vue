<template>
    <div id="app">
      <!-- Navigation Bar -->
      <nav class="navbar">
        <router-link to="/" class="navbar-brand">JobHub</router-link>
        <ul class="navbar-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/jobs">Job List</router-link></li>
          <li><router-link to="/add">Add Job</router-link></li>
        </ul>
      </nav>
  
      <router-view />
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  
  <style>
  
  #app {
    font-family: Arial, sans-serif;
  }
  
  
  .navbar {
    background-color: #dd0d0d;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-brand {
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
  }
  
  .navbar-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .navbar-links li {
    margin-right: 20px;
  }
  
  .navbar-links li:last-child {
    margin-right: 0;
  }
  
  .navbar-links a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
  }
  </style>
  