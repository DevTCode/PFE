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
   
  <BR><BR></BR></BR><br><br>
        
   
 
  <v-table theme="light" class="tab">
    <thead>
      <tr>
        <th class="text-left" style="color : #FF6E31">
          ID
        </th>
        <th class="text-left" style="color : #FF6E31">
          nom
        </th>
        <th class="text-left" style="color : #FF6E31">
          prenom
        </th>
        <th class="text-left" style="color : #FF6E31">
          CNE
        </th>
        <th class="text-left" style="color : #FF6E31">
          tel
        </th>
        <th class="text-left" style="color : #FF6E31">
          numPermis
        </th>
        <th class="text-left" style="color : #FF6E31">
          email
        </th>
        <th class="text-left" style="color : #FF6E31">
          password
        </th>
        <th class="text-left" style="color : #FF6E31">
          option
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id" >
        <td style="color : #243763"><b>{{ item.id }}</b></td>
        <td style="color : #243763"><b>{{ item.nom }}</b></td>
        <td style="color : #243763"><b>{{ item.prenom }}</b></td>
        <td style="color : #243763"><b>{{ item.CNE }}</b></td>
        <td style="color : #243763"><b>{{ item.tel }}</b></td>
        <td style="color : #243763"><b>{{ item.numPermis }}</b></td>
        <td style="color : #243763"><b>{{ item.email }}</b></td>
        <td style="color : #243763"><b>{{ item.password }}</b></td>
        <td >
        <button type="button" class="btn"> <v-btn
      variant="flat"
      color="#243763"
    >
    Locations</v-btn></button>
    
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
     name:"UserList",
     data(){
         return {
             items:[],
          
            menus:[
            {title:'Home',route:'/'},
            
            ]
        }
    },
         
     
     
     created(){
         this.getUsers();
     },
     methods:{
        async getUsers(){
             try {
                 const response = await axios.get('http://127.0.0.1:8000/api/users');
                 this.items = response.data;
             } catch (error) {
                 console.log(error);
             }
         } ,
             
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