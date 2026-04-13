<script lang="ts">
  import Header from './common/header.vue';
  import Menu from './common/ad-menu.vue';
  import api from './api/api';

  export default{
    components:{
      Header,
      Menu
    },
    data(){
      return {
        users: {
          id: null,
          fullName: null,
          userCode: null,
          address: null
        }

      }
    },
    async mounted(){
      try {
        const res = await api.getUser(1);
        this.users = res.data
      }catch(err){
        console.error("Lỗi API:", err);
      }
    },
  }
</script>

<template>
  <Header />
  <div id="main">
  <Menu />
    <p>{{ users.address }}</p>
  </div>

</template>
