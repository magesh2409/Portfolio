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
            <div class="experience-timeline">
                <h1> Experience</h1>
                <div class="timeline">
                    <ul>
                        <li data-date="2021-2025">Engineering Degree</li>
                    </ul>
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
.upper {
    position: relative; /* Ensure .upper is the positioned ancestor */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom-color: rgb(56, 56, 56);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    width: 90%;
}

@media (max-width: 800px) {
    .upper {
        border-bottom-color: none;
        border-bottom-width: none;
        border-bottom-style: none;
        flex-direction: row;
        gap: 20px;
    }

    .show-contacts {
        position: absolute;
        right: -45px;
        top: -20px;
        cursor: pointer;
        background-color: rgb(43, 43, 44);
        z-index: 100;
        padding: 8px;
        border-width: 0.5px;
        border-color: rgb(56, 56, 56);
        border-style: solid;
        border-radius: 0px 18px 0px 18px;
        color: rgb(255, 219, 112);
        font-size: 12px;
    }
}

.profile {
    display: flex;
    img {
        margin-top: 32px;
        width: 120px;
        height: 120px;
        border-radius: 15%;
    }
}

.name {
    color: #fff;
    font-size: 22px;
    margin-top: 20px;
}

.home {
    display: flex;
    margin-top: 50px;
    width: 92%;
    gap:32px;

    @media screen and (max-width: 800px) {
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
            position: relative;
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

            .name-designation {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            @media (max-width : 800px) {
                border-bottom-color: none;
                border-bottom-width: none;
                border-bottom-style: none;
                flex-direction: row;
                gap:20px;  
                .show-contacts {
                    position: absolute;
                    right:-45px;
                    top:-20px;
                    cursor: pointer;
                    background-color:rgb(43, 43, 44);
                    z-index:100;
                    padding:8px;
                    border-width: 0.5px;
                    border-color: rgb(56, 56, 56);
                    border-style: solid;
                    border-radius: 0px 18px 0px 18px;
                    color:  rgb(255, 219, 112);
                    font-size: 12px;
                }
            }
            position:relative;

            .profile {
                display: flex;
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

        .lower-mobile {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap:20px;
            padding-top: 20px;
            border-bottom-color: rgb(56, 56, 56);
            border-bottom-width: 1px;
            border-bottom-style: solid;
            width: 90%;
            
            
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

                @media (max-width: 800px) {
                    display: flex;
                    position: fixed;
                    align-items: center;
                    justify-content: center;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                    z-index: 200;
                    background-color:rgb(30,30,31);
                    border-radius: 25px 25px 0px 0px;
                }

        
        
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

    }
}
</style>
