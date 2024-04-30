<template>
  <div class="container">
    <h2>Add New Job</h2>
    <form @submit.prevent="submitForm" class="row g-3">
      <div class="col-md-12">
        <label for="title" class="form-label">Title:</label>
        <input type="text" id="title" v-model="formData.title" required class="form-control">
      </div>
      <div class="col-md-12">
        <label for="description" class="form-label">Description:</label>
        <textarea id="description" v-model="formData.description" required class="form-control"></textarea>
      </div>
      <div class="col-md-6">
        <label for="salary" class="form-label">Salary:</label>
        <input type="number" id="salary" v-model.number="formData.salary" required class="form-control">
      </div>
      <div class="col-md-6">
        <label for="experienceYears" class="form-label">Experience Required (years):</label>
        <input type="number" id="experienceYears" v-model.number="formData.experienceYears" required
          class="form-control">
      </div>
      <div class="col-md-12">
        <button type="submit" class="btn btn-primary">Add Job</button>
        <button type="button" @click="cancel" class="btn btn-secondary">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      jobs: [],
      formData: {
        title: '',
        description: '',
        salary: null,
        experienceYears: null,
      },
    };
  },
  methods: {
    submitForm() {
  const newJob = { ...this.formData }; 
  newJob.id = this.generateUniqueId(); 

  fetch('http://localhost:3000/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  })
    .then(response => response.json())
    .then(data => {
      
      this.jobs.push(data);
    })
    .catch(error => {
      console.error('Error adding new job:', error);
    });

  this.resetForm(); 
},
    cancel() {
      this.$emit('cancel');
      this.resetForm();
    },
    resetForm() {
      this.formData.title = '';
      this.formData.description = '';
      this.formData.salary = null;
      this.formData.experienceYears = null;
    },

    generateUniqueId() {
      return Math.floor(Math.random() * 10000) + 1;
    }
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-secondary {
  background-color: #ffc107;
  border-color: #ffc107;
}
</style>