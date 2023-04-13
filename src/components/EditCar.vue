<template>

  <body id="f">
  <br>
    <section class="form">
    <div class="container">
    <div class="row no-gutters" style="width:1300px">
    <div class="col-lg-5">
    <v-img :src="require('../assets/E.jpg')" contain class="n"></v-img>
    </div>
    <div class="col-lg-7">
    <v-form @submit.prevent="submit" >
     <v-card
    elevation="24"
    max-width="600"
    class="mx-auto"
    height="100px"
    color="black"
  >
  
   <v-carousel
    height="100"
    hide-delimiters
    progress="#950101"
    
  >
    
   <v-carousel-item v-for="page in pages" :key="page" cover>
      <h2>Page {{ page }}</h2>
    </v-carousel-item>
      <v-carousel-item
        v-for="ichraq in ichraqs" :key="ichraq.id"
      >
       
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <img :src="`http://localhost:8000/storage/images/${ichraq.path}`" @click="im(ichraq.path)" style="width:220px;height:100px">
              
            </div>
          </div>
        
    
      </v-carousel-item>
    </v-carousel>
         
   
  </v-card>
 
     <label for="validationCustom04" class="form-label" style="color:white">Marque</label>
     <div class="text-center">
        
        <select class="form-select" v-model="selectedBrand" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option v-for="brand in brands" :key="brand.id" :value="brand.libelle">{{ brand.libelle }}</option>
        </select>
        </div>
        <label for="validationCustom04" class="form-label" style="color:white">Type de moteur</label>
        <div class="text-center">
        
        <select class="form-select" v-model="selectedtm" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option v-for="item in items" :key="item.id" :value="item.libelle">{{ item.libelle }}</option>
        </select>
         </div>
          <label for="validationCustom04" class="form-label" style="color:white">Type de voiture</label>
         <div class="text-center">
       
        <select class="form-select" v-model="selectedtv" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option v-for="key in keys" :key="key.id" :value="key.libelle">{{ key.libelle }}</option>
        </select>
       <br>
      </div>
   
    
       <v-text-field v-model="Prix" label="Prix" class="k"></v-text-field>
       <v-text-field v-model="disponibilite" label="disponibilite" class="k"></v-text-field>
       <v-text-field v-model="numero_chassis" label="numero_chassis" class="k"></v-text-field>
   
    
   <v-btn class="btn1 mt-3 mb-5" @click="updateCar"> <b class="b">Modifier</b></v-btn>
    
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
 

 *{
   padding: 0;
   margin:0;
    
   box-sizing: border-box;
 }

 .n{
   width: 80%;
   height: 190%;
   
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
   background-color: black;
   height: 812px;
   
   
 }
 h4{
   color: #7c7878;
   padding: 2px;
   font-family: Arial, Helvetica, sans-serif;
 }
 .k{
   color: white;
   
 }
 h2{
   color: white;
   font-size: 100px;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   
 }

</style>

    
   <script>
    import axios from 'axios';
    export default {
         name:"AddCar",
         data(){
             return {
                  ichraqs:[],
                var:'',
                 pages: [],
                 pics:[],
                 selectedPic:'',
                 selectedImage: null,
                 brands: [],
                 selectedBrand: '',
                 items: [],
                 selectedtm: '',
                 keys: [],
                 selectedtv: '',
                 Prix:'',
                 disponibilite:'',
                 numero_chassis:'',
             };
         },
          mounted() {
    for (let i = 1; i < 1; i++) {
      this.pages.push(i);
    }
          },
         created() {
        this.getCarBrands();
        this.getTypemoteur();
        this.getTypevoiture();
        this.getBrandIdByName();
        this.getPicIdByName();
        this.getCarById();
        this.getTypeMoteurIdByName();
        this.getTypeVoitureIdByName();
        this.getPics();
        this.im();
      },
      
         methods:{
         
          async getPics(){
             try {
                 const response = await axios.get('http://127.0.0.1:8000/api/AddCar');
                 this.ichraqs = response.data;
                 console.log(response.data);
             } catch (error) {
                 console.log(error);
             }
         } ,
   async im(nomVoiture) {
      this.var = nomVoiture;
      console.log(this.var);
    },
    async getCarById(){
            try{
              const marque_id = await this.response.getBrandIdByName( );
                    const typemoteur_id = await this.response.getTypeMoteurIdByName( );
                    const typevoiture_id = await this.response.getTypeVoitureIdByName( );
                    const image_id = await this.response.getPicIdByName( );
                 await axios.get(`http://127.0.0.1:8000/api/cars/${$this.route.params.id}`);
             
                console.log(response);
                
                 
                  typevoiture_id;
                   typemoteur_id;
                  marque_id;
                   image_id;
                  this.Prix=response.data.car.Prix;
                  this.disponibilite=response.data.car.disponibilite;
                  this.numero_chassis=response.data.car.numero_chassis;
                  
                
             } catch (error) {
                 console.log(error);
             }
         } ,
            async updateCar(){
              
                 
                    const marque_id = await this.getBrandIdByName( );
                    const typemoteur_id = await this.getTypeMoteurIdByName( );
                    const typevoiture_id = await this.getTypeVoitureIdByName( );
                    const image_id = await this.getPicIdByName( );
                    
                    console.log(marque_id);
                    console.log(typemoteur_id);
                    console.log(typevoiture_id);
                    console.log(image_id);
                       await axios.put(`http://127.0.0.1:8000/api/cars/${this.$route.params.id}`,
                      {
                       
                     
                       typevoiture_id,
                       typemoteur_id,
                       marque_id,
                       image_id,
                       Prix:this.Prix,
                       disponibilite:this.disponibilite,
                       numero_chassis:this.numero_chassis
                       });
                       
                      this.$router.push('/ad');
               } ,
               
         async getCarBrands() {
          const response = await axios.get('http://localhost:8000/api/car-brands');
          this.brands = response.data;
        },
     
          
        async getTypemoteur(){
            const response = await axios.get('http://localhost:8000/api/type_moteur');
          this.items = response.data;
        },
        async getTypevoiture(){
            const response = await axios.get('http://localhost:8000/api/type_voiture');
          this.keys = response.data;
        },
    
        async getBrandIdByName() {
        try {
            console.log(this.selectedBrand )
            const API = `http://127.0.0.1:8000/api/sm1/${this.selectedBrand}` 
            const response = await axios.get(API)
            return  response.data[0].id
        } catch (error) {
        console.log(error);
        }
      },
      async getPicIdByName() {
        try {
            console.log(this.var)
            const API = `http://127.0.0.1:8000/api/pic/${this.var}` 
        const response = await axios.get(API)
        return  response.data[0].id
        } catch (error) {
        console.log(error);
        }
      },
  
    
         async getTypeMoteurIdByName( ) {
      try {
        console.log(this.selectedtm )
        const API = `http://127.0.0.1:8000/api/stm/${this.selectedtm}` 
    const response = await axios.get(API)
    return  response.data[0].id
      } catch (error) {
        console.log(error);
      }
    },
            async getTypeVoitureIdByName( ) {
      try {
        console.log(this.selectedtv )
        const API = `http://127.0.0.1:8000/api/stv/${this.selectedtv}` 
    const response = await axios.get(API)
    return  response.data[0].id
      } catch (error) {
        console.log(error);
      }
    },
    
      }
    }
    
    
    </script>