<template>
    <div class="home">
        <div class="left">
            <div class="upper">
                <div class="profile">
                    <img src="../assets/photo.png" alt="">
                </div>
                <p class="name"> {{ name }}</p>
                <p class="designation"> {{ designation }}</p>
            </div>
            <div class="lower">
                
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
            <div class="links">
                <a class="links-container" :href="this.$store.state.github" target="_blank">
                    <img src="../assets/github.png" alt="">
                </a>
                <a class="links-container" :href="this.$store.state.linkedin" target="_blank">
                    <img src="../assets/linkedin.png" alt="">
                </a>
            </div>
        </div>
        <div class="right">
            <menuIcon></menuIcon>
            <div class="navbar" v-if="!isMobile">
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
            <div class="about-section">
                <div class="about-me-header">
                    <h1>About Me</h1>
                </div>
                <div class="content">
                    <p v-for="(content,index) in this.aboutMe" :key="index"> {{ content }}</p>
                </div>
            </div>
            <div class="interested-container">
                <div class="interested-header">
                    <h1>What I'm Interested?</h1>
                </div>
                <div class="interested">
                    <div class="interested-item">
                        <div class="interested-img">
                            <img src="../assets/logo.png" alt="">
                        </div>
                        <div class="interested-content">
                            <h3>Web Development</h3>
                            <p>Crafting responsive, user-friendly websites with modern tools and frameworks.</p>
                        </div>
                    </div>
                    <div class="interested-item">
                        <div class="interested-img">
                            <img src="../assets/logo.png" alt="">
                        </div>
                        <div class="interested-content">
                            <h3>Data Analytics</h3>
                            <p>Transforming raw data into actionable insights for smarter decisions.</p>
                        </div>
                    </div>
                    <div class="interested-item">
                        <div class="interested-img">
                            <img src="../assets/logo.png" alt="">
                        </div>
                        <div class="interested-content">
                            <h3>Data Structures</h3>
                            <p>Building efficient algorithms to solve complex problems.</p>
                        </div>
                    </div>
                    <div class="interested-item">
                        <div class="interested-img">
                            <img src="../assets/logo.png" alt="">
                        </div>
                        <div class="interested-content">
                            <h3>Technology</h3>
                            <p>Exploring and adapting to the latest innovations to drive progress.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import menuIcon from '../assets/bars-regular.svg';
export default {

    name : 'Home',
    components : {menuIcon},
    
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
            if (window.innerWidth < 768){
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        }
    },





}
</script>

<style scoped>
.home {
    display: flex;
    margin-top: 50px;
    width: 92%;
    gap:32px;

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap:30px;
        align-items: center;
        justify-content: center;

        .left {
            width: 100%;
            padding: 20px;
        }
        .right {
            width: 100%;
            overflow: hidden;
            padding:20px;
            margin-left: 0px;
        }
        
    }

    .left {
        height: 100%;
        flex:2;
        padding: 20px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgb(30,30,31);
        border-color: rgb(56, 56, 56);
        border-width: 1px;
        border-style: solid;
        border-radius: 20px;

        .upper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-bottom-color: rgb(56, 56, 56);
            border-bottom-width: 1px;
            border-bottom-style: solid;
            width: 90%;

            .profile {
                img {
                    margin-top: 32px;
                    width:120px;
                    height: 120px;
                    border-radius: 15%;
                }
            }

            .name {
                color: #fff;
                font-size: 22px;
                margin-top: 20px;
            }

            .designation {
                color: #fff;
                font-size: 12px;
                margin-top: -10px;
                background-color: rgb(43,43,44);
                border-width: 0px;
                border-color: rgb(56, 56, 56);
                border-style: solid;
                border-radius: 4px;
                padding: 6px 12px;
                text-align: center;
            }
        }

        .lower {
            display: flex;
            flex-direction: column;
            
            
            .link {
                display: flex;
                text-decoration: none;

                .icon-container {
                    width: 35px;
                    height: 35px;
                    background-color: rgb(43,43,44);
                    border-style: solid;
                    border-width: 0.5px;
                    border-color: rgb(56, 56, 56);
                    box-shadow: 0px 0px 5px 0px #000;
                    margin-right: 10px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    margin-top: 8px;

                    .icon {
                        width: 14px;
                        height:14px;
                        padding-left: 10px;
                        padding-top: 10px;
                    }
                }
                .info {
                    display: flex;
                    flex-direction: column;

                    p {
                        font-size: 11px;
                        text-transform: uppercase;
                        color: rgba(214,214,214,0.7);
                        margin-bottom: 5px;
                    }

                    .router-button {
                        font-size: 13px;
                        text-decoration: none;
                        color:rgb(250,250,250);
                    }
                }
            }
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap:5px;

            .links-container {
                width:20px;
                height: 20px;
                border-radius: 50%;

                img{
                    width:20px;
                    height: 20px;
                }
            }
        }
    }
    .right {
        /* margin-left: 32px; */
        flex:7;
        display: flex;
        flex-direction: column;
        background-color: rgb(30,30,31);
        border-color: rgb(56, 56, 56);
        border-width: 1px;
        border-style: solid;
        border-radius: 20px;
        height: 100%;



        .navbar {
                display: flex;
                flex-direction: row;
                margin-left: auto;
                background-color: rgba(43, 43, 44, 0.75);
                border-color: rgb(56,56,56);
                border-width: 1px;
                border-style: solid;
                border-radius: 0px 20px;

        
        
                .nav-item {
                    padding: 20px;
                    .router-button {
                        text-decoration: none;
                        color: rgb(250,250,250);
                    }

                    .active {
                        color : rgb(255,219,122);
                    }
                }
        }

        .about-section {
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            padding-right: 20px;

            .about-me-header {
                font-size: 18px;
                font-weight: 600;
            }

            .content{
                color:rgb(214,214,214);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                p {
                    font-size: 14px;
                    line-height: 22px;
                }
            }
        }

        .interested-container {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            padding-left: 20px;
            padding-right: 20px;

            .interested-header {
                font-size: 16px;
                font-weight: 600;
            }

            .interested {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-top: 10px;
                padding-bottom: 50px;
                
                @media screen and (max-width: 767px) {
                    display: flex;
                    flex-direction: column;
                }
                
                .interested-item {
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    background-color: rgb(32,32,34);
                    padding: 20px;
                    border-color: rgb(56, 56, 56);
                    border-width: 1px;
                    border-style: solid;
                    border-radius: 10px;


                    .interested-img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background-color: rgb(43,43,44);
                        border-width: 1px;
                        border-color: rgb(56, 56, 56);
                        border-style: solid;
                        box-shadow: 0px 0px 5px 0px #000;

                        img {
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                        }
                    }

                    .interested-content {
                        display: flex;
                        flex-direction: column;

                        h3 {
                            font-size: 16px;
                            color: rgb(250,250,250);
                        }

                        p {
                            font-size: 14px;
                            color: rgb(214,214,214);
                        }
                    }
                }
            }
        }
    }
}
</style>
