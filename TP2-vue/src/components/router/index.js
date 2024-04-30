import {createRouter,createWebHistory} from 'vue-router'
import AddJobForm from '../AddJobForm.vue';
import EditJobForm from '../EditJobForm.vue';
import JobDetail from '../JobDetail.vue';
import JobList from '../JobList.vue';
import HomePage from '../Home_Page.vue';

const routes = [
  { path: '/',name:'HomePage', component: HomePage },
  { path: '/jobs',name:'JobList', component: JobList },
  { path: '/add', component: AddJobForm },
  { path: '/edit/:id', component: EditJobForm },
  { path: '/jobs/:id', component: JobDetail },

];


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
