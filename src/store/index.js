
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name : 'Magesh A',
    designation : 'Aspiring Web Develepor & Data Analyst',
    email : 'magesh24092003@gmail.com',
    phone : '+91 6379412409',
    location : 'Vellore,TN,IND',
    leetcode : 'Magesh2409',
    linkedin : "https://www.linkedin.com/in/magesh-a-3837a21ab/",
    github : "https://github.com/magesh2409",

    aboutMe : ["Hello! I'm Magesh A, a final-year Electronics and Communication Engineering (ECE) student at Thanthai Periyar Government Institute of Technology (TPGIT), Vellore. Alongside my degree, I’m pursuing a Minor in Business Data Analytics, fueling my passion for solving real-world problems with data-driven solutions.",
                "I have solved over 600+ problems on LeetCode,GFG and Code360, showcasing my expertise in Data Structures and Algorithms.I’ve honed my skills in Python, MySQL, Power BI, Excel, ETL pipelines, and front-end development using HTML, CSS, and Vue.js.",
                "I’ve also developed projects like automating data preprocessing workflows and creating interactive dashboards for datasets like Adventure Works and Bike Store. Recently, I’ve been diving deeper into front-end development, building modern, responsive user interfaces with Vue.js while complementing them with data-driven insights.",
                "Passionate about data analysis, automation, front-end development, and software engineering, I’m on a journey to create impactful solutions that combine technical expertise with creativity."
    ],

    certificates : [
      { 
        name : "Google Data Analyst Specialization",
        source : "../assets/Google_DA.jpg",
        provider : "Coursera and Google"
      },
      { 
        name : "Google Business Intelligence Specialization",
        source : "../assets/Google_BI.jpg",
        provider : "Coursera and Google"
      },
      { 
        name : "Microsoft Data Analyst Specialization",
        source : "../assets/Microsoft_DA.jpg",
        provider : "Coursera and Microsoft"
      },
      { 
        name : "Data Analysis with Python",
        source : "../assets/IBM_DA",
        provider : "Coursera and IBM"
      },
      { 
        name : "Fundamentals of Vue.JS",
        source :"../assets/Vue.js_Certificate_Coursera_Magesh.jpg",
        provider : "Coursera and Board Infinity"
      },
    ],

  },
  mutations: {
  },
  actions: {
  },
  modules: {}
});
