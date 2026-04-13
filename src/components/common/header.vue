<script setup lang="ts">
import router from '../../router';
import { ref } from 'vue'

    let IsVietnamese = ref(false)
    function changeLanguage(action: string){
        if(action ==="vie"){
            IsVietnamese.value = true
        }else{
            IsVietnamese.value = false
        }
    }
    function gotoLogin(){
        router.push('/login')
    }
    function goHome(){
        router.push('/')
    }
</script>
<script lang="ts">
    export default {
        data(){
            return {
                isLoginIn: false
            }
        }
    }
</script>

<template>
<div id="header">
    <div class="display-flex align-item-center" @click="goHome">
        <img id= "favicon" type="image/png" class = "hover-point user-select-none" src = '/public/favicon.png'>
        <h1 class = "user-select-none hover-point">TKRITY</h1>
    </div>
    <div class="display-flex align-item-center">
        <div id="user">
            <button id="btn-login" class="login" v-if="isLoginIn === false" @click="gotoLogin">Login/Register</button>
        </div>
        <div id = "con-language">
            <a @click="changeLanguage('vie')" class="display-flex align-item-center" style ="margin-right: 8px;">
                <img id= "vietnamese" type ="image/jpeg" class = "hover-point user-select-none" src = '/public/flag-vietnamese.jpg'>
                <span>Vietnamese</span>
            </a>
            <a @click="changeLanguage('ger')" class="display-flex align-item-center">
                <img id= "germany" type ="image/jpeg" class = "hover-point user-select-none" src = '/public/flag-germany.png'>
                <span>Deutsch</span>
            </a>
        </div>
    </div>
</div>
</template>
