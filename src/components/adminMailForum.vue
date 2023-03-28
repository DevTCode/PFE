
<template>
  <body>
    <section class="form">
    <div class="container">
    <div class="row no-gutters">
    <div class="col-lg-5">
    <v-img :src="require('../assets/car.jpg')" contain class="nj"></v-img>
    </div>
    <div class="col-lg-7">
    <v-img
          :src="require('../assets/lgo.png')" contain height="30%" width="26%" class="n"></v-img>
          <h4>Sign into your account</h4>
    <v-form @submit.prevent="submit" >
  
  
      <v-col cols="auto">
        <h2>Sign In</h2>
      </v-col>
      
   
    
    <i class="bi bi-envelope-at-fill" style="color:white"></i><v-text-field v-model="email" label="email" class="e"></v-text-field>
    <i class="bi bi-key-fill" style="color:white"></i><v-text-field v-model="password" label="Mot de passe" type="password" class="psw"></v-text-field>
    
    <v-btn class="btn1 mt-3 mb-5" @click="login"> <b class="b">Login</b></v-btn>
    
  </v-form>
    </div>
    </div>
    </div>
    </section>
  
  </body>  
</template>



<style>

 .b{
     color: white;
 }
 .row{
   background: black;
   border-radius:20px ;
   width:95%;
   padding: 2%;
   box-shadow: 12px 12px 22px #950101;
   
 }

 *{
   padding: 0;
   margin:0;
   box-sizing: border-box;
 }

 .nj{
   width: 90%;
   height: 120%;
   border-top-left-radius: 30px;
   border-bottom-left-radius: 30px;
   
 }
 .e{
   color: white;
   background-color: transparent;
 }
 .psw{
   color: white;
 }
 .btn1{
   border: none;
   outline: none;
   height: 50px;
   width: 100%;
   background-color: #950101;
   border-radius: 4px;
   font-size:15px ;
   font-family: cursive;
 }
 .btn1:hover{
   background: black;
   border: 1px solid;
   color: #950101;
 }
 h4{
   color: #7c7878;
   padding: 10px;
   font-family: Arial, Helvetica, sans-serif;
 }
 h2{
   color: white;
   font-size: 100px;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   
 }
</style>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async login() {
      let bodyFormData = new FormData();
      bodyFormData.set("email",this.email);
      bodyFormData.set("password",this.password);
      axios({
        method: "post",
        url: 'http://localhost:8000/api/log',
        data: bodyFormData,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
      })
       .then((response) => {
         this.$router.push('/ad');
         
       })
     .catch((error) => {
       console.log("error");
     })
    }
  }
}
</script>

