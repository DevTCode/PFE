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
    <br><br><br><br><br><br>
     <router-link :to="{name: 'AddTypeMoteur'}">  <v-row class="my-custom-class" justify="center">
    <v-btn color="#243763" rounded class="white--text"><b class="btn">Add Type de Moteur</b></v-btn>
  </v-row></router-link>
    <v-main>
    
    <div>
        
  <v-table theme="light">
    <thead>
      <tr>
        
        <th class="text-left"><b>
          libelle</b>
        </th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id" >
        
        <td><b>{{ item.libelle }}</b></td>
        <td>
        <button type="button" class="btn" @click="deleteTypemoteur(item.id)"> <v-btn variant="flat" color="error" >Delete</v-btn></button>
        <router-link :to="{name: 'EditTypeMoteur' , params:{id:item.id}}"> <v-btn variant="flat" color="black">Edit</v-btn></router-link>
        </td>     
      </tr>
    </tbody>
  </v-table>
  
    </div>
    </v-main>
  </v-app>
  </template>  

<script>
import axios from 'axios';
export default {
     name:"TypemoteurList",
     data(){
         return {
             items:[],
             menus:[
            {title:'Home',route:'/'},
            

            ]
         };
     },
     created(){
         this.getTypemoteurs();
     },
     methods:{
        async getTypemoteurs(){
             try {
                 const response = await axios.get('http://127.0.0.1:8000/api/typemoteur');
                 this.items = response.data;
             } catch (error) {
                 console.log(error);
             }
         } ,
         async deleteTypemoteur(id){
              try {
                await axios.delete('http://127.0.0.1:8000/api/typemoteur/'+id);
                  this.getTypemoteurs();
              } catch (error) {
                   console.log(error);
              }
         }       
     }
}


</script>
<style scoped>
.intro-text{
    justify-content: center;
}
.btn{
    color: #FF6E31;
    font-family: monospace;

}

.v-toolbar-title{
     font-size: 25px;
     color: #FF6E31;
     font-weight: 700;
     font-family: Arial, Helvetica, sans-serif;
 }
 .text-left{
     font-size: 20px;
     color: #FF6E31;
 }
</style>