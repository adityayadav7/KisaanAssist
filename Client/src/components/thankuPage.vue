<template>
  <div>
    <img alt="Vue logo" src="https://firebasestorage.googleapis.com/v0/b/kisanfeedback-b2c73.appspot.com/o/KisaanassistMedia%2FKisaanAssistL1.png?alt=media&token=bd2894cc-8482-460b-950f-c4fc00be0560">
      <h1>Thanks {{this.info}} for your feedback</h1>
      <router-link to='/'>home</router-link>
  </div>
  
</template>

<script>

//let datas=localStorage.getItem('firstname');
export default {
 
 name:"thanku",
 data() {
       
    return {
     
      info: localStorage.getItem('firstname'),
      KisanData: {
        fname: '',
        lname:'',
        village: '',
        radio1:''
      }
    };
  }

}
</script>

<style>

</style>