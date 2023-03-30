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
            :rules="image_idRules"
          ></v-text-field>
    
          <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Marque</label>
        <select class="form-select" v-model="selectedBrand" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option v-for="brand in brands" :key="brand.id" :value="brand.libelle">{{ brand.libelle }}</option>
        </select>
        </div>
        <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Type de moteur</label>
        <select class="form-select" v-model="selectedtm" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option v-for="item in items" :key="item.id" :value="item.libelle">{{ item.libelle }}</option>
        </select>
         </div>
         <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Type de voiture</label>
        <select class="form-select" v-model="selectedtv" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option v-for="key in keys" :key="key.id" :value="key.libelle">{{ key.libelle }}</option>
        </select>
       <br>
      </div>
          
          <v-text-field
            v-model="Prix"
            label="Prix "
            :rules="PrixRules"
          ></v-text-field>
          
          <v-text-field
            v-model="disponibilite"
            label="disponibilite "
            :rules="disponibiliteRules"
          ></v-text-field>
          
          <v-text-field
            v-model="numero_chassis"
            label="numero_chassis "
            :rules="numchassisRules"
          ></v-text-field>
           <div class="d-flex justify-center">
        <v-btn class="text-center" 
          color="#243763"
          @click="saveCar" size="large"
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
         name:"AddCar",
         data(){
             return {
                 image_id:'',
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
         created() {
        this.getCarBrands();
        this.getTypemoteur();
        this.getTypevoiture();
        this.getBrandIdByName();
        this.getTypeMoteurIdByName();
        this.getTypeVoitureIdByName();
    
      },
         methods:{
            async saveCar(){
                   try {
                    const marque_id = await this.getBrandIdByName( );
                    const typemoteur_id = await this.getTypeMoteurIdByName( );
                    const typevoiture_id = await this.getTypeVoitureIdByName( );
                    console.log(marque_id);
                    console.log(typemoteur_id);
                    console.log(typevoiture_id);
                       await axios.post('http://127.0.0.1:8000/api/cars',
                      {
                       image_id:this.image_id,
                       typemoteur_id,
                       typevoiture_id,
                       marque_id,
                       Prix:this.Prix,
                       disponibilite:this.disponibilite,
                       numero_chassis:this.numero_chassis
                       });
                        this.image_id="";
                        this.typemoteur_id="";
                        this.typevoiture_id="";
                        this.marque_id="";
                        this.Prix="";
                        this.disponibilite="";
                        this.numero_chassis="";
                        this.$router.push('/ad');
                      
                   } catch (error) {
                       console.log(error);
                   }
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
    .form-label{
        font-size: 20px;
        color:#FF6E31 ;
        float: center;
    }
    .form-select{
        color: #243763;
        font-size: 20px;
    }
    </style>