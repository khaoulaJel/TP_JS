<template>
  <div class="confirm-dialog">
    <p>Are you sure you want to delete <br><strong> {{ job.title }}</strong>?</p>
    <div class="button-container">
      <button @click="confirmDelete" class="confirm-button">Yes</button>
      <button @click="cancelDelete" class="cancel-button">No</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ConfirmDeleteDialog',
  props: {
    job: Object
  },
  methods: {
    confirmDelete() {
      this.$emit('confirm');
    },
    cancelDelete() {
      this.$emit('cancel');
    }
  }
}
</script>
<style>
.confirm-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px; /* Increase border radius for softer corners */
  padding: 25px; /* Add slightly more padding for better readability */
  z-index: 100;
}

.confirm-dialog p {
  font-size: 18px; /* Increase font size for better emphasis */
  margin-bottom: 15px;
  color: #333; /* Use a darker text color for better contrast */
}

.confirm-dialog p strong {
  font-weight: bold;
  color: #222; /* Slightly darker color for emphasis */
}

.button-container {
  display: flex;
  justify-content: flex-end;
  gap: 15px; /* Increase gap for better button separation */
}

.confirm-button,
.cancel-button {
  padding: 10px 20px; /* Increase padding for a more spacious feel */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* Increase font size for button text */
}

.confirm-button {
  background-color: #4CAF50; /* Green color for confirmation */
  color: #fff;
  transition: background-color 0.2s ease-in-out; /* Add a smooth transition */
}

.confirm-button:hover {
  background-color: #388e3c; /* Darken green on hover */
}

.cancel-button {
  background-color: #dc3545; /* Red color for cancellation */
  color: #fff;
  transition: background-color 0.2s ease-in-out;
}

.cancel-button:hover {
  background-color: #e5392f; /* Darken red on hover */
}


</style>
