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
    
    <br><br><br>
    <v-main>

    <v-col lg="6">
  <v-row class="my-custom-class" justify="center">
    <b class="btn">Liste des images</b></v-row>
      
    </v-col>
    <BR><BR></BR></BR><br><br>
    <div>
       
        
  <v-table theme="light">
    <thead>
      <tr>
        <th class="text-left" ><b color="#FF6E31">
          ID</b>
        </th>
        <th class="text-left" ><b color="#FF6E31">
          chemin</b>
        </th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id" >
        <td color="black"><b>{{ item.id }}</b></td>
        <td color="black"><b>{{ item.chemin }}</b></td>
        
       
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
     name:"ImageList",
     data(){
         return {
             items:[],
            menus:[
            {title:'Home',route:'/'},
            

            ]
        }
    },



     
     created(){
         this.getImages();
     },
     methods:{
        async getImages(){
             try {
                 const response = await axios.get('http://127.0.0.1:8000/api/i');
                 this.items = response.data;
             } catch (error) {
                 console.log(error);
             }
         } ,
         async deleteImage(id){
              try {
                await axios.delete('http://127.0.0.1:8000/api/i/'+id);
                  this.getImages();
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
    font-size: 40px;
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