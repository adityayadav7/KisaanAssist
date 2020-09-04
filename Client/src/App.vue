<template>
  <div id="app" >
    <!-- <img alt="Vue logo" src="./assets/wheat.png">                                                                                                            -->
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <div v-responsive="{ small: el => el.width <= 800 }">
   <notifications group="foo" position="bottom center" />
   <router-view />
   <!-- <PhoneAuth/> -->
   <!-- <loader :start="loading.val"/> -->
   </div>
   </div>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import PhoneAuth from './components/phoneAuth'
//import loader from './components/loader';
import { ResponsiveDirective } from "vue-responsive-components"
export default {
  name: 'App',
  // components: {
  //   //HelloWorld,
  //   //PhoneAuth,
  //   //loader,

  // },
  directives: {
    responsive: ResponsiveDirective
  }
  // data:()=>{
  //   return{
  //     mobileView:false
  //   }
  // },
 
  // provide(){
    
  //   //this.loading.val=true
    
  //   setTimeout(() => {
      
  //     this.loading.val=false
      
  //   },4000)
  //   //  this.loading.val=true
  //   return{
  //     myLoader: this.loading
      
  //   }
  // },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .post__item {
  display: flex;
} */
@media only screen and (max-width:800px) {
  /* For tablets: */
  .main {
    width: 80%;
    padding: 0;
  }
  .right {
    width: 100%;
  }
}
@media only screen and (max-width:500px) {
  /* For mobile phones: */
  .menu, .main, .right {
    width: 100%;
  }
}
@import'~bootstrap/dist/css/bootstrap.css';
 @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');
  * {
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
 }
</style>
