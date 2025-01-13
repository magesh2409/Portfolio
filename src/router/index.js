import Vue from 'vue';
import Router from 'vue-router';
import About from '../views/About.vue';
import Education from '@/views/Education.vue';
import Skills from '@/views/Skills.vue';
import Certificates from '@/views/Certificates.vue';
import Experience from '@/views/Experience.vue';
import Projects from '@/views/Projects.vue';



Vue.use(Router);

const routes = [
  {
    path: '',
    name: 'About',
    component: About
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates
  },
  
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
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
