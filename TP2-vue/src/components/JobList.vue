<template>
  <div class="container">
    <h2>Jobs</h2>
    
    <ul class="list-group">
      <li v-for="job in jobs" :key="job.id" class="list-group-item">
        <h3>{{ job.title }}</h3>
        <button type="button" class="btn btn-info btn-sm ms-2" @click.stop="viewJobDetails(job)">View Details</button>
        <button type="button" class="btn btn-warning btn-sm ms-2" @click.stop="editJob(job)">Edit</button>
        <button type="button" class="btn btn-danger btn-sm ms-2" @click.stop="confirmDeleteJob(job)">Delete</button>
      </li>
    </ul>
    
    <JobDetails v-if="selectedJob" :job="selectedJob" @close="closeJobDetails" />
    <EditJobForm v-if="showEditForm" :job="selectedJobid" @submit="updateJob" @cancel="cancelEdit" />
    <ConfirmDeleteDialog v-if="showConfirmDelete" :job="selectedJobid" @confirm="deleteJob" @cancel="cancelDelete" />
  </div>
</template>

<script>
import JobDetails from './JobDetail.vue';
import EditJobForm from './EditJobForm.vue';
import ConfirmDeleteDialog from './ConfirmDeleteDialog.vue';

export default {
  name: 'JobsList',
  components: {
    JobDetails,
    EditJobForm,
    ConfirmDeleteDialog,
  },
  data() {
    return {
      jobs: [],
      selectedJob: null,
      showEditForm: false,
      showConfirmDelete: false,
      selectedJobid: null,
    };
  },
  created() { 
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => {
        this.jobs = data;
      })
      .catch(error => {
        console.error('Error fetching job data:', error);});
},
  methods: {

  closeJobDetails() {
    this.selectedJob = null;
  },
  viewJobDetails(job) {
    this.selectedJob = job;
  },
  editJob(job) {
    this.selectedJobid = { ...job}; 
    this.showEditForm = true;
  },
  updateJob(updatedJob) {
    const index = this.jobs.findIndex(j => j.id === updatedJob.id);
    if (index !== -1) {
      this.jobs.splice(index, 1, updatedJob);
    }
    this.showEditForm = false;
  },
  confirmDeleteJob(job) {
    this.selectedJobid = job;
    this.showConfirmDelete = true;
  },
  deleteJob() {
    const index = this.jobs.findIndex(j => j.id === this.selectedJobid.id);
    if (index !== -1) {
      this.jobs.splice(index, 1);
    }
    this.selectedJobid = null;
    this.showConfirmDelete = false;
  },
  cancelDelete() {
    this.selectedJobid = null;
    this.showConfirmDelete = false;
  },
  cancelEdit() {
    this.selectedJobid = null;
    this.showEditForm = false;
  },
}

  };
</script>
