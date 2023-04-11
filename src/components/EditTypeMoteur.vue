<template>

  <body id="f">
  <br>
    <section class="form">
    <div class="container">
    <div class="row no-gutters">
    <div class="col-lg-5">
    <v-img :src="require('../assets/ETM.jpg')" contain class="j"></v-img>
    </div>
    <div class="col-lg-7">
    <v-img
          :src="require('../assets/lgo.png')" contain height="30%" width="26%" class="n"></v-img>
         
    <v-form @submit.prevent="submit" >
  
  
      <v-col cols="auto">
        <h2>Type de moteur</h2>
      </v-col>
      
   
    
    <v-text-field v-model="libelle" label="libelle" class="e"></v-text-field>
   
    
    <v-btn class="btn1 mt-3 mb-5" @click="updateTypeMoteur"> <b class="b">Update</b></v-btn>
    
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
    padding-left: 2%;
   box-sizing: border-box;
 }

 .j{
   width: 80%;
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
 #f{
   background-color: white;
   height: 812px;
   
 }
 h4{
   color: #7c7878;
   padding: 2px;
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
     name:"EditTypeMoteur",
     data(){
         return {
             libelle:"",
         };
     },
     created(){
         this.getTypeMoteurById();
     },
    
     methods:{
         async getTypeMoteurById(){
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/typemoteur/${this.$route.params.id}`);
             
                console.log(response);
                  this.libelle=response.data.typemo.libelle;
                  
                
             } catch (error) {
                 console.log(error);
             }
         } ,
           
         
        async updateTypeMoteur(){
             
                 await axios.put(`http://127.0.0.1:8000/api/typemoteur/${this.$route.params.id}`,
                {
                 libelle:this.libelle,
                 });
                  
                  this.$router.push('/tm');
                
             } 
         } ,
          

}

</script>
