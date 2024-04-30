<template>
  <div>
    <h2>Edit Job</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="editedJob.title" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="editedJob.description" required></textarea>
      </div>
      <div>
        <label for="salary">Salary:</label>
        <input type="number" id="salary" v-model.number="editedJob.salary" required>
      </div>
      <div>
        <label for="experienceYears">Experience Required (years):</label>
        <input type="number" id="experienceYears" v-model.number="editedJob.experienceYears" required>
      </div>
      <button type="submit" style='background-color: #dc3545;'>Save Changes</button>
      <button type="button" @click="cancelEdit"  style='background-color: #ffc107;'>Cancel</button>
    </form>
  </div>
  
</template>

<script>
export default {
  name: 'EditJobForm',
  props: {
    job: Object
  },
  data() {
    return {
      editedJob: { ...this.job }
    };
  },
  methods: {
    
    submitForm() {
      this.$emit('submit', this.editedJob);
    },
    cancelEdit() {
      this.$emit('cancel');
    }
  }
}
</script>


<style>
.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
textarea,
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 7px 15px;
  color: white;
  border: 2px solid ; 
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 20px; 
}

button:hover {
  background-color: #0056b3;
}
</style>