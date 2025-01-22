import Vue from 'vue';
import Router from 'vue-router';
import About from '../views/About.vue';
import Background from '@/views/Background.vue';
import Certificates from '@/views/Certificates.vue';
import Projects from '@/views/Projects.vue';



Vue.use(Router);

const routes = [
  {
    path: '',
    name: 'About',
    component: About
  },
  {
    path: '/background',
    name: 'Background',
    component: Background
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates
  },
  
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
];

const router = new Router({
  routes,
  mode: 'history'  
});

export default router;
