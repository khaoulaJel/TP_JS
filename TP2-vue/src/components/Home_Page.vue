<template>
    <div class="home-container">
      <h1>Welcome to our Job Management System</h1>
      <p>
        Our system allows you to efficiently manage job listings. You can view a list of available jobs,
        add new job listings, and edit or delete existing ones.
      </p>
      <p>Get started by navigating to the Job list or Add job pages using the links below:</p>
  
      <!-- Navigation Links -->
      <div class="navigation-links">
        <router-link to="/jobs" class="nav-link">View Job List</router-link>
        <router-link to="/add" class="nav-link">Add New Job</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Add any necessary logic or script
  };
  </script>
  
  <style scoped>
  .home-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  
  .navigation-links {
    display: flex;
    justify-content: center;
  }
  
  .nav-link {
    margin: 0 10px;
    padding: 10px 20px;
    border: 2px solid #dd0d0d;
    border-radius: 5px;
    background-color: #dd0d0d;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: #0056b3;
  }
  </style>
  