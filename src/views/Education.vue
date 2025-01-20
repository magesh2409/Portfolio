<template>
    <div class="home">
        <div class="left">
            <div class="upper">
                <div class="profile">
                    <img src="../assets/photo.png" alt="">
                    <span v-if="isMobile" @click="showContacts = !showContacts" class="show-contacts">Show
                        Contacts</span>
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
        </div>
        <div class="right">
            <div class="navbar">
                <div class="nav-item" @click="toggleColor">
                    <router-link :to="{ name: 'About' }" class="router-button" :class="{active:this.isAbout}"> About
                    </router-link>
                </div>
                <div class="nav-item" @click="toggleColor">
                    <router-link :to="{ name: 'Education' }" class="router-button" :class="{active : this.isEducation}">
                        Education </router-link>
                </div>
                <div class="nav-item" @click="toggleColor">
                    <router-link :to="{ name: 'Experience' }" class="router-button"
                        :class="{ active : this.isExperience}"> Experience </router-link>
                </div>
                <div class="nav-item" @click="toggleColor">
                    <router-link :to="{ name: 'Skills' }" class="router-button" :class="{active : this.isSkills}">
                        Skills </router-link>
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
            <div class="container-timeline">
                <h1>Education</h1>
                <p class="color">Hello</p>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h1 class="school">Thanthai Periyar Government Institute of Technology, Vellore</h1>
                            <p class="dept">BE in Electronics and Communication Engineering</p>
                            <p class="year">2021 - 2025</p>
                            <p class="grade">CGPA - 8.1/10</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h1 class="school">YMCA School, Tirupathur</h1>
                            <p class="dept">HSC</p>
                            <p class="year">2020 - 2021</p>
                            <p class="grade">Percentage - 93%</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h1 class="school">YMCA School, Tirupathur</h1>
                            <p class="dept">SSLC</p>
                            <p class="year">2018 - 2019</p>
                            <p class="grade">Percentage - 95%</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {

    name : 'Education',
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
            } else if (dir === 'Education'){
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

.container-timeline {
    padding:0px 22px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    h1 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .color {
        width: 40px;
        height:5px;
        background-color: rgb(255,219,122);
        font-size: 0px;
        border-radius: 10px;
        margin-top: 0px;
    }

    .timeline {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        border-left : 1px solid rgb(56,56,56);
        margin-top: 20px;
        margin-bottom: 32px;

        .timeline-item {
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            position: relative;
            margin-bottom: 22px;

            &:last-child {
                margin-bottom: 0px;
            }

            &::before {
                content: '';
                width: 12px;
                height: 12px;
                background-color: rgb(56,56,56);
                border-radius: 50%;
                position: absolute;
                left:-6px; 
                top:7px;
                
            }

            &::after {
                content: '';
                width: 5px;
                height: 5px;
                background-color: rgb(255,219,122);
                border-radius: 50%;
                position: absolute;
                left: -2.6px;
                top: 10.5px;
            }
            
            .timeline-content {
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;

                .school {
                    font-size: 14px;
                    font-weight: 700;
                    margin:3x 0px;
                    padding:0px;
                    margin-bottom: 3px;

                }

                .year {
                    font-size: 14px;
                    font-weight: 500;
                    margin:3px 0px;
                    padding:0px;
                    color:rgb(255,219,122);
                    
                }

                .dept {
                    font-size: 14px;
                    font-weight: 500;
                    margin:3px 0px;
                    color: #d6d6d6;
                    padding:0px;

                }

                .grade {
                    font-size: 14px;
                    font-weight: 500;
                    margin:3px 0px;
                    color: #d6d6d6;
                    padding:0px;
                }

            }
        }

    }

}
</style>
