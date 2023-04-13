


<template>
<v-card
    elevation="24"
    max-width="500"
    class="mx-auto"
  >
  
    <v-carousel
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-square"
      height="300"
    >
    
   <v-carousel-item v-for="page in pages" :key="page">
      <h2>Page {{ page }}</h2>
    </v-carousel-item>
      <v-carousel-item
        v-for="ichraq in ichraqs" :key="ichraq.id"
      >
       
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <img :src="`http://localhost:8000/storage/images/${ichraq.path}`" @click="im(ichraq.path)" width:400px>
             
            </div>
             
          </div>
        
    
      </v-carousel-item>
      
    </v-carousel>
       
   <h3>{{this.var}}</h3>
  </v-card>
 

  
</template>
<script>
import axios from 'axios';

export default {

         name:"HelloWorld",
         data(){
             return {
                ichraqs:[],
         var:'',
         pages: [],
  
             }
         },
         created() {
       
        this.getPics();
        this.getPath();
        this.im();
        
      },
       mounted() {
    for (let i = 1; i < 1; i++) {
      this.pages.push(i);
    }
  },
         methods:{
            async im(nomVoiture) {
      this.var = nomVoiture;
      console.log(this.var);
    },
        async getPath(){
               const response = await axios.get('http://localhost:8000/api/storage-image');
               console.log(response);
        },
          async getPics(){
             try {
                 const response = await axios.get('http://127.0.0.1:8000/api/AddCar');
                 this.ichraqs = response.data;
                 console.log(response.data);
             } catch (error) {
                 console.log(error);
             }
         } ,
        
         }
}
</script>
