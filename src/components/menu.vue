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

  <v-container class="pt-15">
  <v-row>
  <v-col lg="6">
  <br><br><br><br><br>
      <h2 class="intro-text">Welcome to our car location service</h2>
      <p class="description">Voyagez à votre façon en choisissant parmi notre collection de voitures neuves. Que vous recherchiez une location de voiture dans le cadre de vacances ou que vous louiez une voiture pour un événement spécial, vous serez sûr de trouver une voiture adaptée à vos besoins </p>
      <router-link :to="{name: 'affichage'}"><v-btn color="#FF6E31" rounded class="white--text"> Get started now ! </v-btn></router-link>
  </v-col>
  <v-col lg="6" >
  <img src="https://img.freepik.com/vecteurs-libre/concept-interface-application-taxi_23-2148484167.jpg?w=900&t=st=1679672179~exp=1679672779~hmac=d59aafa6da2004ea899002841914b32bc9af514801fc5d878053990a1042c29a">
  </v-col>
  </v-row>
  </v-container>
 </v-app>
</template>
<script>


export default {
    name:'menu',
    data() {
        return{
            menus:[
            {title:'Home',route:'userMenu'},
            {title:'connect',route:'ae'},

            ]
        }
    },
}

</script>

<style scoped>
 h2.intro-text{
     font-size: 60px;
     font-weight: 900;
     color:#243763 ;
     
 }
 p.description{
     font-size: 19px;
     font-family: cursive;
     margin: 32px 0px;

 }
 .v-toolbar-title{
     font-size: 25px;
     color: #FF6E31;
     font-weight: 700;
     font-family: Arial, Helvetica, sans-serif;
 }
 </style>
