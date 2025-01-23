<template>
    <div class="home">
        <div class="left">
            <div class="upper">
                <div class="profile">
                    <img src="../assets/photo.png" alt="">
                    <span v-if="isMobile" @click="showContacts = !showContacts" class="show-contacts">Show Contacts</span>
                </div>
                <div class="name-designation">
                    <p class="name"> {{ name }}</p>
                    <p class="designation"> {{ designation }}</p>
                </div>
            </div>

            <div class="lower-mobile" v-if="isMobile && showContacts">
                <a class="link" href="mailto:magesh24092003@gmail.com">
                    <div class="icon-container">
                        <img class="icon" src="../assets/mail.png" alt="">
                    </div>
                    <div class="info">
                        <p>Email</p>
                        <router-link to="#" class="router-button">{{ this.email }}</router-link>
                    </div>
                </a>
                
                <a class="link" href="tel:+91639412409">
                    <div class="icon-container">
                        <img class="icon" src="../assets/mobile.png" alt="">
                    </div>
                    <div class="info">
                        <p>Mobile</p>
                        <router-link to="#" class="router-button">{{ this.phone }}</router-link>
                    </div>
                </a>
                <div class="link">
                    <div class="icon-container">
                        <img class="icon" src="../assets/location.png" alt="">
                    </div>
                    <div class="info">
                        <p>Location</p>
                        <router-link to="#" class="router-button">{{ this.location }}</router-link>
                    </div>
                </div>
                <a class="link" href="https://leetcode.com/u/Magesh2409" target="_blank"> 
                    <div class="icon-container">
                        <img class="icon" src="../assets/leetcode.png" alt="">
                    </div>
                    <div class="info">
                        <p>LeetCode</p>
                        <router-link to="#" class="router-button">{{this.leetcode}}</router-link>
                    </div>
                </a>
            </div>
            <div class="lower" v-if="!isMobile">
                <a class="link" href="mailto:magesh24092003@gmail.com">
                    <div class="icon-container">
                        <img class="icon" src="../assets/mail.png" alt="">
                    </div>
                    <div class="info">
                        <p>Email</p>
                        <router-link to="#" class="router-button">{{ this.email }}</router-link>
                    </div>
                </a>
                
                <a class="link" href="tel:+91639412409">
                    <div class="icon-container">
                        <img class="icon" src="../assets/mobile.png" alt="">
                    </div>
                    <div class="info">
                        <p>Mobile</p>
                        <router-link to="#" class="router-button">{{ this.phone }}</router-link>
                    </div>
                </a>
                <div class="link">
                    <div class="icon-container">
                        <img class="icon" src="../assets/location.png" alt="">
                    </div>
                    <div class="info">
                        <p>Location</p>
                        <router-link to="#" class="router-button">{{ this.location }}</router-link>
                    </div>
                </div>
                <a class="link" href="https://leetcode.com/u/Magesh2409" target="_blank"> 
                    <div class="icon-container">
                        <img class="icon" src="../assets/leetcode.png" alt="">
                    </div>
                    <div class="info">
                        <p>LeetCode</p>
                        <router-link to="#" class="router-button">{{this.leetcode}}</router-link>
                    </div>
                </a>
            </div>
            <div class="links" v-if="!isMobile">
                <a class="links-container" :href="this.$store.state.github" target="_blank">
                    <img src="../assets/github.png" alt="">
                </a>
                <a class="links-container" :href="this.$store.state.linkedin" target="_blank">
                    <img src="../assets/linkedin.png" alt="">
                </a>
            </div>
            <div class="links" v-if="isMobile && showContacts">
                <a class="links-container" :href="this.$store.state.github" target="_blank">
                    <img src="../assets/github.png" alt="">
                </a>
                <a class="links-container" :href="this.$store.state.linkedin" target="_blank">
                    <img src="../assets/linkedin.png" alt="">
                </a>
            </div>
            <div class="resume" v-if="!isMobile">
                <a :href="this.$store.state.resumeLink" target="_blank">
                    <button>Download CV</button>
                </a>
            </div>
            <div class="resume" v-if="isMobile && showContacts">
                <a :href="this.$store.state.resumeLink" target="_blank">
                    <button>Download CV</button>
                </a>
            </div>
        </div>
        <div class="right">
            <div class="navbar">
                <div class="nav-item" @click="toggleColor">
                    <router-link :to="{ name: 'About' }" class="router-button" :class="{active:this.isAbout}"> About
                    </router-link>
                </div>
                <div class="nav-item" @click="toggleColor">
                    <router-link :to="{ name: 'Background' }" class="router-button" :class="{active : this.isEducation}">
                        Background </router-link>
                </div>

                <div class="nav-item" @click="toggleColor">
                    <router-link :to="{ name: 'Projects' }" class="router-button" :class="{ active : this.isProjects}">
                        Projects </router-link>
                </div>
                <div class="nav-item" @click="toggleColor">
                    <router-link :to="{ name: 'Certificates' }" class="router-button"
                    :class="{ active : this.isCertificates}"> Certificates </router-link>
                </div>
            </div>
            <div class="about-section">
                <div class="about-me-header">
                    <h1>Certificates</h1>
                    <p> Hello </p>
                </div>
            </div>
            <div class="certificates">
                <a href="https://fireblogsvue.netlify.app/" target="_blank" >
                    <div class="figure">
                        <img src="../assets/image.png" alt="">
                        <h1>FireBlogs </h1>
                        <p> HTML , CSS , Vue.js , Git</p>
                    </div>
                </a>
                <a href="https://drive.google.com/file/d/19LoF0EysWPXYzd8KdkSvs1BUlBFvJ8z-/view?usp=sharing" target="_blank">
                    <div class="figure">
                        <img src="../assets/DA_Adventure_Works.png" alt="">
                        <h1>Data Analysis on Adventure Works </h1>
                        <p> Excel , Power BI , Power Query </p>
                    </div>
                </a>

                <a href="https://drive.google.com/file/d/1LHGgx-bzJjXkdyOaVWh6wnJHvqTBihNd/view?usp=sharing" target="_blank" >
                    <div class="figure">
                        <img src="../assets/DA_Bike_store.jpg" alt="">
                        <h1> Data Analysis in Bike Store </h1>
                        <p> MySQL , Excel , Tableau </p>
                    </div>
                </a>


            </div>
        </div>
    </div>
</template>

<script>

export default {

    name : 'projects',
    data(){
        return {
            name : this.$store.state.name,
            designation : this.$store.state.designation,
            isAbout : true,
            isExperience : false,
            isEducation : false,
            isSkills : false,
            isProjects : false,
            isCertificates : false,

            email : this.$store.state.email,
            phone : this.$store.state.phone,
            location : this.$store.state.location,
            leetcode : this.$store.state.leetcode,
            aboutMe : this.$store.state.aboutMe,

            isMobile : false,
            showContacts : false,
        }
    },

    created(){
        this.toggleColor();

        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },


    methods: {
        toggleColor() {
            this.isAbout = false;
            this.isExperience = false;
            this.isEducation = false;
            this.isSkills = false;
            this.isProjects = false;
            this.isCertificates = false
            const dir = this.$route.name;

            if (dir === "About"){
                this.isAbout = true;
                return
            } else if (dir === 'Experience'){
                this.isExperience = true;
                return;
            } else if (dir === 'Background'){
                this.isEducation = true;
                return;
            
            } else if (dir === 'Skills'){
                this.isSkills = true;
                return;
            
            } else if (dir === 'Projects'){
                this.isProjects = true;
                return;
            
            } else if (dir === 'Certificates'){
                this.isCertificates = true;
                return;
            }


        },

        handleResize(){
            if (window.innerWidth < 800){
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        }
    },





}
</script>

<style scoped>

        .about-section {
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            padding-right: 20px;

            .about-me-header {
                font-size: 18px;
                font-weight: 600;

                h1 {
                    margin-bottom: 10px;
                }
                p {
                    width: 50px;
                    height:5px;
                    background-color: rgb(255,219,122);
                    font-size: 0px;
                    border-radius: 10px;
                    margin-top: 5px;
                }
            }
        }
        .certificates {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            a {
                text-decoration: none;
                width:360px;
                margin: 32px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                
                @media (max-width: 1200px){
                    width: 300px;
                }
            }
            .figure { 
                height: auto;
                width: 80%;
                height: auto;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: left;
    
                img {
                    transition:.5s ease all;
                    width: 300px;
                    height:200px;
                    &:hover {
                        transform:rotateZ(-1deg) ;
                        width: 102%;
                    }
                }
    
                h1 {
                    margin: 8px 5px 5px 5px;
                    font-size: 15px;
                    color:#fff;
                }
    
                p {
                    margin: 0px 5px 5px 5px;
                    font-size: 15px;
                    color:#d6d6d6b2;
                }
    
            }
        }
</style>
