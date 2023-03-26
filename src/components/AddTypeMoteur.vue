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
<v-subheader class="text-h4 justify-center">
Fill with informations</v-subheader>
</v-col>
<v-col lg="6">
<img src="https://img.freepik.com/vecteurs-premium/concept-partage-voiture_118813-3882.jpg?w=1060" class="im">
</v-col>

<v-col lg="6">
<v-sheet width="650" height="500" style="opacity:90%" class="mx-auto" >
    <v-form fast-fail @submit.prevent>
    <br><br><br><br><br><br>
    
      <v-text-field
        v-model="libelle"
        label="libelle "
        
      ></v-text-field>
       <div class="d-flex justify-center">
    <v-btn class="text-center" 
      color="#243763"
      @click="saveTypeMoteur" size="large"
> <b class="b">Add</b></v-btn>
  
      </div>
      
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
     name:"AddTypeMoteur",
     data(){
         return {
             
             libelle:'',
         };
     },
     
     methods:{
        async saveTypeMoteur(){
             try {
                 await axios.post('http://127.0.0.1:8000/api/typemoteur',
                {
                 libelle:this.libelle
                 });
                  this.libelle="";
                  this.$router.push('/tm');
                
             } catch (error) {
                 console.log(error);
             }
         } ,
          
     },
}


</script>

<style scoped>
.im{
    height: 90%;
    width: 100%;
    opacity: 100%;
     
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
 .text-h4{
     color: #FF6E31;
    
 }
</style>