<template>
    

      <v-app><v-app-bar style="padding: 0px 90px"
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
    
    <br><br><br>
   
    
    <div>
    
  <br><br><br><br>
        <router-link :to="{name: 'AddCar'}">  <v-row class="my-custom-class" justify="center">
    <v-btn color="#243763" rounded class="white--text"><b class="btn">Add Car</b></v-btn>
  </v-row></router-link>
  
  
  <br><br><br>
   
 
  <v-table theme="light" class="tab">
    <thead>
      <tr>
        
        <th class="text-left" style="color : #FF6E31">
          image_id
        </th>
        <th class="text-left" style="color : #FF6E31">
          typemoteur_id
        </th>
        <th class="text-left" style="color : #FF6E31">
          typevoiture_id
        </th>
        <th class="text-left" style="color : #FF6E31">
          marque_id
        </th>
        <th class="text-left" style="color : #FF6E31">
          Prix
        </th>
        <th class="text-left" style="color : #FF6E31">
          disponibilite
        </th>
        <th class="text-left" style="color : #FF6E31">
          numero_chassis
        </th>
        <th class="text-left" style="color : #FF6E31">
          options
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id" >
        
        <td style="color : #243763"><b>{{ item.image_id }}</b></td>
        <td style="color : #243763"><b>{{ item.typemoteur_id }}</b></td>
        <td style="color : #243763"><b>{{ item.typevoiture_id }}</b></td>
        <td style="color : #243763"><b>{{ item.marque_id }}</b></td>
        <td style="color : #243763"><b>{{ item.Prix }}</b></td>
        <td style="color : #243763"><b>{{ item.disponibilite }}</b></td>
        <td style="color : #243763"><b>{{ item.numero_chassis }}</b></td>
        <td >
        <button type="button" class="btn" @click="deleteCar(item.id)"> <v-btn
      variant="flat"
      color="error"
    >
    Delete</v-btn></button>
    
        <router-link :to="{name: 'EditCar' , params:{id:item.id}}"> <v-btn
      variant="flat"
      color="black"
    >Edit</v-btn></router-link>
        </td>
      </tr>
    </tbody>
  </v-table>
  
    </div>
   
  </v-app>
    
  </template>  

<script>
import axios from 'axios';
export default {
     name:"CarList",
     data(){
         return {
             items:[],
          
            menus:[
            {title:'Home',route:'/'},
            {title:'All users',route:'ul'},

            ]
        }
    },
         
     
     
     created(){
         this.getCars();
     },
     methods:{
        async getCars(){
             try {
                 const response = await axios.get('http://127.0.0.1:8000/api/cars');
                 this.items = response.data;
             } catch (error) {
                 console.log(error);
             }
         } ,
         async deleteCar(id){
              try {
                await axios.delete('http://127.0.0.1:8000/api/cars/'+id);
                  this.getCars();
              } catch (error) {
                   console.log(error);
              }
         }       
     }
}


</script>
<style scoped>
.v-toolbar-title{
     font-size: 25px;
     color: #FF6E31;
     font-weight: 700;
     font-family: Arial, Helvetica, sans-serif;
 }

 .btn{
     color: white;
 }

 
</style>