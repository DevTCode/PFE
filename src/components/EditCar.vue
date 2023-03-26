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
  <v-sheet width="600" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="image_id"
        label="image_id"
        
      ></v-text-field>

      <v-text-field
        v-model="typemoteur_id"
        label="typemoteur_id "
        
      ></v-text-field>
        
      <v-text-field
        v-model="typevoiture_id"
        label="typevoiture_id "
        
      ></v-text-field>
      
      <v-text-field
        v-model="marque_id"
        label="marque_id "
        
      ></v-text-field>
      
      <v-text-field
        v-model="Prix"
        label="Prix "
        
      ></v-text-field>
      
      <v-text-field
        v-model="disponibilite"
        label="disponibilite "
        
      ></v-text-field>
      
      <v-text-field
        v-model="numero_chassis"
        label="numero_chassis "
        
      ></v-text-field>
      <div class="d-flex justify-center">
    <v-btn class="text-center"
      color="#243763"
      @click="updateCar" size="large"
      
> <b class="b">update</b></v-btn>
  
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
     name:"EditCar",
     data(){
         return {
             image_id:"",
             typemoteur_id:"",
             typevoiture_id:"",
             marque_id:"",
             Prix:"",
             disponibilite:"",
             numero_chassis:"",
         };
     },
     created(){
         this.getCarById();
     },
    
     methods:{
         async getCarById(){
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/cars/${this.$route.params.id}`);
             
                console.log(response);
                  this.image_id=response.data.car.image_id;
                  this.typemoteur_id=response.data.car.typemoteur_id;
                  this.typevoiture_id=response.data.car.typevoiture_id;
                  this.marque_id=response.data.car.marque_id;
                  this.Prix=response.data.car.Prix;
                  this.disponibilite=response.data.car.disponibilite;
                  this.numero_chassis=response.data.car.numero_chassis;
                  
                
             } catch (error) {
                 console.log(error);
             }
         } ,
           
         
        async updateCar(){
             
                 await axios.put(`http://127.0.0.1:8000/api/cars/${this.$route.params.id}`,
                {
                 image_id:this.image_id,
                 typemoteur_id:this.typemoteur_id,
                 typevoiture_id:this.typevoiture_id,
                 marque_id:this.marque_id,
                 Prix:this.Prix,
                 disponibilite:this.disponibilite,
                 numero_chassis:this.numero_chassis
                 });
                  
                  this.$router.push('/');
                
             } 
         } ,
          

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