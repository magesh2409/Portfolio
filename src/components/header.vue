<template>
    <div class="header">
        <div class="links">
            <div class="link">
                <router-link :to="{name:'Education'}" class="router-button"> Education </router-link>
            </div>
            <div class="link">
                <router-link :to="{name:'Experience'}" class="router-button"> Experience </router-link>
            </div>
            <div class="link">
                <router-link :to="{name:'Skills'}" class="router-button"> Skills </router-link>
            </div>
            <div class="link">
                <router-link :to="{name:'Projects'}" class="router-button"> Projects </router-link>
            </div>
            <div class="link">
                <router-link :to="{name:'Certificates'}" class="router-button"> Certificates </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Header',
}
</script>

<style lang="css" scoped>
.header{
    background-color: rgb(30,30,31);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    height: 50px;

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        .link {
            .router-button {
                text-decoration: none;
                margin-right: 80px;
                color: #fff;
            }
        }
    }
    
}
</style>