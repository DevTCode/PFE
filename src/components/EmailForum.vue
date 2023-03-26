<template>
  <v-app>
   <v-app-bar style="padding: 0px 90px"
 app color="#243763" elevation="6" >
     
      <v-toolbar-title >
       <v-img
          :src="require('../assets/im.jpeg')"
          
          contain
          height="200"
          width="150"
        />
     </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-list-item link v-for="(menu,index) in menus" :key="index" :to="menu.route">
      <v-list-item-title style="color:white">{{menu.title}}</v-list-item-title>
      </v-list-item>
    </v-app-bar>

<v-container class="my-15">
<v-row justify="center">
<v-col lg="12" class="text-center">

</v-col>
<v-col lg="6" >
<img src="https://img.freepik.com/vecteurs-premium/concept-partage-voiture_118813-3882.jpg?w=1060" class="im">
</v-col>
<v-col lg="6">

<v-sheet width="450" height="400" style="opacity:90%" class="mx-auto" >
<br><br><br><br><br><br>
<v-form @submit.prevent="submit">
  
  
      <v-col cols="auto">
        <h2>Sign In</h2>
      </v-col>
      
   
    
    <v-text-field v-model="mail" label="email"></v-text-field>
    <v-text-field v-model="password" label="Mot de passe" type="password"></v-text-field>
    
    <v-btn class="text-center" rounded="pill" color="#243763" size="large" @click="login"> <b class="b">Login</b></v-btn>
    
  </v-form>
</v-sheet>

</v-col>
</v-row>
</v-container>
  </v-app>
  
</template>

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
        url: 'http://localhost:8000/api/login',
        data: bodyFormData,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
      })
       .then((response) => {
         this.$router.push('/');
         
       })
     .catch((error) => {
       console.log("error");
     })
    }
  }
}
</script>

<style>
.im{
    opacity: 70%;
}
.my-custom-class{
    color:#FF6E31 ;
}
.v-toolbar-title{
     font-size: 25px;
     color: #FF6E31;
     font-weight: 700;
     font-family: Arial, Helvetica, sans-serif;
 }
 .b{
     color: white;
 }
 
</style>

