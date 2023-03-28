<template>
  <body>
  <br><br><br><br><br>
    <section class="form">
    <div class="container">
    <div class="row no-gutters">
    <div class="col-lg-5">
    <v-img :src="require('../assets/bc.jpg')" contain class="nj"></v-img>
    </div>
    <div class="col-lg-7">
    <v-img
          :src="require('../assets/lgo.png')" contain height="30%" width="26%" class="n"></v-img>
          <h4>Ajout du nom de la marque</h4>
    <v-form @submit.prevent="submit" >
  
  
      <v-col cols="auto">
        <h2>Libelle</h2>
      </v-col>
      
   
    
    <v-text-field v-model="libelle" label="libelle" class="e"></v-text-field>
   
    
    <v-btn class="btn1 mt-3 mb-5" @click="saveMarque"> <b class="b">Add</b></v-btn>
    
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
   width:100%;
   padding: 2%;
   box-shadow: 12px 12px 22px #950101;
   
 }

 *{
   padding: 0;
   margin:0;
   box-sizing: border-box;
 }

 .nj{
   width: 690%;
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
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   
 }
</style>

<script>
import axios from 'axios';
export default {
     name:"AddMarque",
     data(){
         return {
             
             libelle:'',
         };
     },
     
     methods:{
        async saveMarque(){
             try {
                 await axios.post('http://127.0.0.1:8000/api/marques',
                {
                 libelle:this.libelle
                 });
                  this.libelle="";
                  this.$router.push('/ma');
                
             } catch (error) {
                 console.log(error);
             }
         } ,
          
     },
}


</script>

