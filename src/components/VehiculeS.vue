<template>
  <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="100" style=" background-image">
    <header>
      <nav class="navbar navbar-expand-lg navigation-wrap">
        <div class="container">
          <a class="navbar-brand" href="#">
            <v-img
              :src="require('../assets/lgo.png')"
              contain
          
                height="90"
                width="120"
              class="nj"
            ></v-img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <!--span class="navbar-toggler-icon"></span>-->
            <i class="fas fa-stream navbar-toggler-icon"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <v-list-item
                  link
                  v-for="(menu,index) in menus"
                  :key="index"
                  :to="menu.route"
                >
                  <v-list-item-title class="nav-link">{{menu.title }}</v-list-item-title>
                </v-list-item>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <section class="main">
  <div class="container-fluid px-0 top-banner">
  <div class="container">
  
  <div class="col-lg-5 col-md-6">
    <br><br><br><br>  
  <h1 style="font-family:sans-serif">Bienvenue dans  <br> Notre <span>Service de Location de  </span> voiture </h1>
  
  <p>Voyagez à votre façon en choisissant parmi notre collection de voitures celle adaptée à vos besoins.</p>
  <div class="mt-4">
    <a href="#a" style="text-decoration:none;">
  <v-row class="my-custom-class"><button class="main-btn" > Commencez dés maintenant !<i class="fas fa-shopping-basket ps-3"></i></button></v-row>
</a>
</div>
  </div>
  </div>
  </div>
  
  </section>
  <div>
    <br> 
    <h1 style="font-family:sans-serif;color:#000; text-align:justify; margin-left:40px;">DriveGo <br> Louer le Confort <span> , Conduisez  </span> L'experience </h1>
    <br> 
  <table><tr><td> <h3 style="color:#000; justify-content:justify; margin-bottom:80px; margin-left:50px;margin-right:20px; ">Drive Go est une agence de location de voiture qui offre une expérience de location de voiture pratique, rapide et conviviale. Que vous ayez besoin d'une voiture pour un voyage d'affaires, pour vous déplacer en ville ou pour partir en vacances, Drive Go vous permet de trouver et de réserver facilement la voiture idéale pour vos besoins.</h3>
 </td><td> <img style="height:300px;width:500px; margin-top:0px; margin-right:30px; border-radius:5%" src="https://images.hdqwalls.com/wallpapers/bthumb/2021-red-ford-mustang-4k-85.jpg">  </td></tr></table>
 </div><br> 
  <div class="btn-group" id="a" style=" margin-left:30%; "  >
  <a @click="tous" href="#z" class="btn btn-primary active" style=" font-size: 0.9em;border-radius: 1px; background-color: #950101; color:#fff;" aria-current="page">Tous</a>
  <a @click="dispo" href="#z2" class="btn btn-primary" style=" font-size: 0.9em;border-radius: 1px; background-color: #950101; color: #fff;">Voitures Disponibles</a>
  <a  @click="select" href="#z3" class="btn btn-primary" style=" font-size: 0.9em;border-radius: 1px; background-color: #950101; color: #fff;">Recherche de Voitures </a>
</div>
  
 
  <div id="z" v-show="afficherZ"  >
<br><br>
<h2 style=" 
 font-weight:100; font-family: 'Lucida Sans'  ;
   text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px #950101,
             0px 18px 23px rgba(0,0,0,0.1); letter-spacing: 5px;
color: #fff;
    font-size: 40px;
    padding-top: 10px;
    margin-left:120px;
  padding-left: 480px;
 ">
   Tous Les Voitures  : 
  </h2>
  <br>
 <table >
      <tr >
        <div  class="row row-cols-1 row-cols-md-4 g-4 " style="margin-right: 15px;background:transparent;width:1700px">
        <td v-for="voiture in voitures" :key="voiture.id" style="padding-right: 30px;   ">
          <div class="container" style=" 
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color:#000;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.125);  
            padding: 15px;  
            margin-left: 28px;
            filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;">
            <div class="wrapper">
              <img :src="`http://localhost:8000/storage/images/${voiture.zineb}`" alt="" style="background-position: center;
                background-size: cover;
                height: 200px;
                width: 90%;
                border-radius: 12px;
                border: 1px solid #950101;">
<div   style="  text-align:left; font-size: 0.8em;   color:#fff; font-family: 'Lucida Sans'  ; "> <h5 style="color:  #fff;   text-align:center; "> voiture N°{{ voiture.id}}</h5>    
            Marque : {{voiture.marque }}        
           <br>Type Moteur :{{voiture.typemoteur}}<br>
            Type Voiture {{voiture.typevoiture}} 
           <br>Prix par jour :
               {{ voiture.p}} DH<br>  
              <div class="button-wrapper"    v-if="voiture.D ===  'true' "> 
          <button class=" btn fill" style=" color:#fff; background-color:green;"> Disponible</button>
   <router-link :to="{name:'ReserverLoc', params:{id:voiture.id}}" v-if="isLoggedIn">
    <button class="btn outline">Réserver</button>
  </router-link>
  <router-link :to="{name:'LoginClient', params:{id:voiture.id}}" v-if="!isLoggedIn">
    <button class="btn outline">Réserver</button>
  </router-link>
     
     </div>
     <div class="button-wrapper" style="  text-align:center; "  v-else> 
      
       <button class=" btn fill" style=" color:#fff; background-color:#950101;">Indisponible</button>
     </div>
    </div>
            </div>
            
          </div>
        </td>
      </div>
      </tr>
    </table>
  </div>

    <div id="z2" v-show="afficherZ2">
 <br><br>
 <br> 
 <h2 style=" 
 font-weight:100; font-family: 'Lucida Sans'  ;
   text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px #950101,
             0px 18px 23px rgba(0,0,0,0.1); letter-spacing: 5px;
color: #fff;
    font-size: 40px;
    padding-top: 10px;
    margin-left:120px;
  padding-left: 480px;
 ">
  Voitures Disponibles:
  </h2>
  <br><br>
 <table >
      <tr >
        <div  class=" row row-cols-1 row-cols-md-4 g-4 " style="margin-right: 15px;background:transparent;width:1700px;">
        <td v-for="voiture2 in voitures2" :key="voiture2.id" style="padding-right: 30px;  ">
          <div class="container" style=" 
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color:#000;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.125);  
            padding: 15px;  
            margin-left: 28px;
            filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;">
            <div class="wrapper">
              <img :src="`http://localhost:8000/storage/images/${voiture2.zineb}`" alt="" style="background-position: center;
                background-size: cover;
                height: 200px;
                width: 90%;
                border-radius: 12px;
                border: 1px solid #950101;">
<div   style="  text-align:left; font-size: 0.8em;   color:#fff; font-family: 'Lucida Sans'  ; "> <h5 style="color:  #fff;   text-align:center; "> voiture N°{{ voiture2.id}}</h5>    
            Marque : {{voiture2.marque }}        
           <br>Type Moteur :{{voiture2.typemoteur}}<br>
            Type Voiture {{voiture2.typevoiture}} 
           <br>Prix par jour :
               {{ voiture2.p}} DH<br>  
              <div class="button-wrapper"    > 
          <button class=" btn fill" style=" color:#fff; background-color:green;"> Disponible</button>
     <router-link :to="{name: 'ReserverLoc' , params:{id:voiture2.id}}" >     <button class="btn outline" >Réserver</button></router-link>
     
     </div>
      
    </div>
            </div>
            
          </div>
        </td>
      </div>
      </tr>
    </table>
  </div>
 
  
<div id="z3"  v-show="afficherZ3">
  <br>
  <br >
  <h2 style=" 
 font-weight:100; font-family: 'Lucida Sans'  ;
   text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px #950101,
             0px 18px 23px rgba(0,0,0,0.1); letter-spacing: 5px;
color: #fff;
    font-size: 40px;
    padding-top: 10px;
    margin-left:100px;
  padding-left: 350px;
 ">
    Chercher une Voiture selon : 
  </h2>
  <br> <br>
  <br>
  <table style="justify-content: center; align-items: center; border-spacing: 0 10px;"> <tr style="margin-left:50%;  " >
          <td style="padding-left: 30px; padding-right: 40px;">  <label for="marque" style="color:#fff;">Marque de Voiture :</label>
            <div style="position: relative;">
  <i class="bi bi-chevron-down" style="color: #fff; position: absolute; padding-left:200px ;padding-top:20px; pointer-events: none;"></i>
  <select class="form-select" aria-label="Default select example" style="background: transparent; border-radius: 0%; border-color: transparent; border-bottom: 2px solid #fff; color: #fff; padding-top: 20px;" v-model="selectedOption" id="marque">
            <option   style="color:#000;" value="" disabled>Sélectionnez une option</option>
            <option  style="color:#000;"  value="Tous les marque">Tous les marque</option>
            <option   style="color:#000;" v-for="brand in brands" :key="brand.id" :value="brand.libelle">{{ brand.libelle }}</option>
          </select> </div></td> <td style="margin-left: 30%; padding-right:40px;"><label for="type"  style="color:#fff;">Type de Voiture :</label>
            <div style="position: relative;">
  <i class="bi bi-chevron-down" style="color: #fff; position: absolute;  padding-left:200px ;padding-top:20px; pointer-events: none;"></i>
  <select class="form-select" aria-label="Default select example" style="background: transparent; border-radius: 0%; border-color: transparent;  border-bottom: 2px solid #fff; color: #fff; padding-top: 20px;" v-model="selectedOption2" id="type">
            <option  style="color:#000;"  value="" disabled >Sélectionnez une option</option>
            <option  style="color:#000;" value="Tous les type de voiture">Tous les type de voiture</option>
            <option style="color:#000;"  v-for="brand1 in brands1" :key="brand1.libelle" :value="brand1.libelle">{{ brand1.libelle }}</option>
          </select> </div></td><td style="padding-right:40px;">   
          <label for="moteur"  style="color:#fff;">Type Moteur de Voiture :</label>
         
          <div style="position: relative;">
  <i class="bi bi-chevron-down" style="color: #fff; position: absolute;  padding-left:200px ;padding-top:20px; pointer-events: none;"></i>
  <select class="form-select" aria-label="Default select example" style="background: transparent; border-radius: 0%; border-color: transparent; border-bottom: 2px solid #fff; color: #fff; padding-top: 20px;" v-model="selectedOption3" id="moteur">
    <option  style="color:#000;" value="" disabled>Sélectionnez une option</option>
    <option  style="color:#000;" value="Tous les type de moteur">Tous les types de moteur</option>
    <option  style="color:#000;" v-for="brand2 in brands2" :key="brand2.libelle" :value="brand2.libelle">{{ brand2.libelle }}</option>
  </select>
</div>
 
</td>
          <td>
            <a href="#z3" style="text-decoration:none;">
            <v-btn  @click="chercherVoitures" style="color: white; padding-right:30px; margin-top:28px; background-color: #950101;" >
     chercher 
    </v-btn>
  </a>
          </td>
         </tr></table>
         <div  >
          <br>  <br>  <br>
  <table >
       <tr >
         <div  class="row row-cols-1 row-cols-md-4 g-1 " style="margin-right: 15px;background:transparent;width:1700px;">
         <td v-for="voiture4 in voitures4" :key="voiture4.id" style="padding-right: 30px;    ">
           <div class="container" style=" 
             backdrop-filter: blur(16px) saturate(180%);
             -webkit-backdrop-filter: blur(16px) saturate(180%);
             background-color:#000;
             border-radius: 12px;
             border: 1px solid rgba(255, 255, 255, 0.125);  
             padding: 15px;  
             margin-left: 28px;
             filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
             display: flex;
             flex-direction: column;
             align-items: center;
             justify-content: center;
             text-align: center;">
             <div class="wrapper">
               <img :src="`http://localhost:8000/storage/images/${voiture4.zineb}`" alt="" style="background-position: center;
                 background-size: cover;
                 height: 200px;
                 width: 90%;
                 border-radius: 12px;
                 border: 1px solid #950101;">
 <div   style="  text-align:left; font-size: 0.8em;   color:#fff; font-family: 'Lucida Sans'  ; "> <h5 style="color:  #fff;   text-align:center; "> voiture N°{{ voiture4.id}}</h5>    
             Marque : {{voiture4.marque }}        
            <br>Type Moteur :{{voiture4.typemoteur}}<br>
             Type Voiture {{voiture4.typevoiture}} 
            <br>Prix par jour :
                {{ voiture4.p}} DH<br>  
               <div class="button-wrapper"    v-if="voiture4.D ===  'true' "> 
           <button class=" btn fill" style=" color:#fff; background-color:green;"> Disponible</button>
     <router-link :to="{name:'ReserverLoc', params:{id:voiture4.id}}" v-if="isLoggedIn">
    <button class="btn outline">Réserver</button>
  </router-link>
  <router-link :to="{name:'LoginClient', params:{id:voiture4.id}}" v-if="!isLoggedIn">
    <button class="btn outline">Réserver</button>
  </router-link>
      
      </div>
      <div class="button-wrapper" style="  text-align:center; "  v-else> 
       
        <button class=" btn fill" style=" color:#fff; background-color:#950101;">Indisponible</button>
      </div>
     </div>
             </div>
             
           </div>
         </td>
       </div>
       </tr>
     </table>
   </div>
</div>
<footer class="footer-distributed">
<div class="footer-left">
<h3>Drive<span>Go</span></h3>
<p class="footer-company-name">Copyright 2023 <strong> DriveGo </strong> All right reserved</p>
<div class="footer-center">
<p class="socials">

<a href="#"><i class="bi bi-facebook"></i></a>
<h19 style="color:white">DriveGo</h19>
<br>
<i class="bi bi-instagram"></i>
<h19 style="color:white">DriveGo</h19>
<br>
<a href="#"><i class="bi bi-envelope-at"></i></a>
<h19 style="color:white">DriveGo@gmail.com</h19>
<br>
<a href="#"><i class="bi bi-whatsapp"></i></a>
<h19 style="color:white">0653640022</h19>


</p>
</div>
<div class="footer-right">
<p class="footer-company-about">
<strong>DriveGo</strong> est une application Web dédiée à <br>la gestion de location de voitures comme étant  <br>un outil informatique permettant à ses utilisateurs<br> de réserver, louer et gérer des voitures de<br> location</p>
</div>
</div>
</footer>
</body>
</template>
<script>
import axios from "axios";

export default {
  name: "SearchClient",
  data() {
    return {
      menus: [
        { title: "Accueil", route: "/me" },
        { title: "Contact", route: "/co" },
        { title: "Compte",route:this.log()},
      ],
      brands: [],
      brands1: [],
      isLoggedIn: false,
      brands2: [],
      selectedOption: "",
      selectedOption2: "",
      selectedOption3: "",
      voitures3: [],
      voitures: [],
      voitures2: [],
      voitures4: [],
      afficherZ: true,
    afficherZ2: false,
    afficherZ3: false
    };
  },
  mounted() {
    if (localStorage.getItem('token')!==null) {
      this.isLoggedIn = true;  
    } 
    
  },
  created() {
    this.tous();
  },
  methods: {
    log(){
      if (localStorage.getItem('token')!==null) {
        return "/profile";  
    } 
    else  {
      return "/login";
    }
   
      
    },
    async tous() {
      this.afficherZ = true;
    this.afficherZ2 = false;
    this.afficherZ3 = false;
      try {
         
          const response = await axios.get("http://127.0.0.1:8000/api/all");
          this.voitures = response.data;
           
      
      } catch (error) {
        console.log(error);
      }
    },
    async dispo() {
      this.afficherZ = false;
    this.afficherZ2 = true;
    this.afficherZ3 = false;
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/z");
        this.voitures2 = response.data;
 
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
       async chercherVoitures() {
      try {
         
        if (
          this.selectedOption == "Tous les marque" &&
          this.selectedOption2 == "Tous les type de voiture" &&
          this.selectedOption3 == "Tous les type de moteur"
        ) {
       
          const response = await axios.get("http://127.0.0.1:8000/api/all");
          this.voitures4 = response.data;
          return this.voitures4.data;
        }
        if (
          this.selectedOption !== "Tous les marque" &&
          this.selectedOption2 !== "Tous les type de voiture" &&
          this.selectedOption3 !== "Tous les type de moteur"
        ) {
          
          const API = `http://127.0.0.1:8000/api/all/${this.selectedOption}/${this.selectedOption2}/${this.selectedOption3}`;
          const response = await axios.get(API)
      this.voitures4 = response.data;
       
        }
        if (
          this.selectedOption !== "Tous les marque" &&
          this.selectedOption2 !== "Tous les type de voiture"  &&
          this.selectedOption3 == "Tous les type de moteur"
        ) {
          
          const API = `http://127.0.0.1:8000/api/mtv/${this.selectedOption}/${this.selectedOption2} `;
          const response = await axios.get(API)
      this.voitures4 = response.data;
       
        }
        if (
          this.selectedOption !== "Tous les marque" &&
          this.selectedOption2 == "Tous les type de voiture"  &&
          this.selectedOption3 !== "Tous les type de moteur"
        ) {
          
          const API = `http://127.0.0.1:8000/api/mtm/${this.selectedOption}/${this.selectedOption3} `;
          const response = await axios.get(API)
      this.voitures4 = response.data;
       
        }
        if (
          this.selectedOption == "Tous les marque" &&
          this.selectedOption2 !== "Tous les type de voiture"  &&
          this.selectedOption3 !== "Tous les type de moteur"
        ) {
          
          const API = `http://127.0.0.1:8000/api/tvtm/${this.selectedOption2}/${this.selectedOption3} `;
          const response = await axios.get(API)
      this.voitures4 = response.data;
       
        }
        if (
          this.selectedOption !== "Tous les marque" &&
          this.selectedOption2  == "Tous les type de voiture"  &&
          this.selectedOption3  == "Tous les type de moteur"
        ) {
          
          const API = `http://127.0.0.1:8000/api/${this.selectedOption}`;
          const response = await axios.get(API)
      this.voitures4 = response.data;
       
        }
        if (
          this.selectedOption == "Tous les marque" &&
          this.selectedOption2  !== "Tous les type de voiture"  &&
          this.selectedOption3  == "Tous les type de moteur"
        ) {
          
          const API = `http://127.0.0.1:8000/api/z/${this.selectedOption2}`;
          const response = await axios.get(API)
      this.voitures4 = response.data;
       
        }
        if (
          this.selectedOption == "Tous les marque" &&
          this.selectedOption2  == "Tous les type de voiture"  &&
          this.selectedOption3  !== "Tous les type de moteur"
        ) {
          
          const API = `http://127.0.0.1:8000/api/zz/${this.selectedOption3}`;
          const response = await axios.get(API)
      this.voitures4 = response.data;
       
        }
 
        
      } catch (error) {
        console.log(error);
      }
    },
    async select() {
      this.afficherZ = false;
    this.afficherZ3 = true;
    this.afficherZ2 = false;
          try {
            const responseBrands = await axios.get("http://127.0.0.1:8000/api/lm");
            this.brands = responseBrands.data;
        
            const responseBrands1 = await axios.get("http://127.0.0.1:8000/api/ltv");
            this.brands1 = responseBrands1.data;
            
            const responseBrands2 = await axios.get("http://127.0.0.1:8000/api/ltm");
            this.brands2 = responseBrands2.data;
        
          } catch (error) {
            console.log(error);
          }
        },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

#z{
  background-image:url('https://images.hdqwalls.com/wallpapers/bthumb/red-ford-mustang-2021-4k-cl.jpg');
 background-size:cover;
 
     box-shadow: 400px 400px    900px #000  inset;
      height:180vh;

}
#z2{
  background-image:url('https://hdwallpaperim.com/wp-content/uploads/2017/08/25/463881-supercars-car-Toyota_FT-1-red_cars-748x421.jpg');
 background-size:cover;
 height:180vh;
 
     box-shadow: 400px 400px    900px #000  inset;
     

}
#z3{
  background-image:url('https://www.whoa.in/download/red-car-hd-desktop-background-wallpaper');
 background-size:cover;
 height:180vh;
 
     box-shadow: 500px 500px    900px #000  inset;
     

}

.main-btn:hover{
 border:1px solid  white ;
 color:#fff;
}
.active{
  background-color: #000;
  color: #fff;
}
.im{
  background:url('../assets/nv.jpg');
  height: 99vh;
  color: #000;
 background-size: cover;
 opacity: 0.8rem;
     box-shadow: 400px 400px 500px #000  inset;
     
}
.row{
    box-shadow: 0 0 0px;

}
.card-container {
  display: flex;
  flex-wrap: wrap;
}
.b1{
  position: absolute; z-index: 1; border-radius: 5px; 
  color: #fff; margin-left: 50px; margin-top: 550px; 
  border: 1px solid #fff; background-color: transparent;
}
 .b1:hover{
background-color:#fff;
color: #950101;
 }
:root{
       --primary-color:#950101;
       --secondry-color: #FF0000;
       --white-color: #fff;
       --text-color: #3E3636;
       background-size: cover;
       --primary-front: 'Roboto','sans-serif';
       --secondry-text: 'Quicksand','sans serif';
   }
   
   .navigation-wrap{
       position: fixed;
       width: 100%;
       left:0;
       height: 90px;
       z-index:1000;
       background-color:black;
       -webkit-transition:all 0.3s ease-out;
       transition:all 0.3 ease-out;
   }
   .nav-link{
       color: white;
       font-size: 0.9375rem;
       font-weight: 600;
       letter-spacing: 1px;
       display:inline;
      justify-content: left;
       text-transform: capitalize;
       
   }
   .nav-link:hover,
   .nav-link.active{
       color:#950101;
   }
   .navigation-wrap .nav-item{
       padding: 0 0.625rem;
       transition: all 0.3s linear;
   }
   .navbar-toggler:focus{
       outline:unset;
       border: unset;
       box-shadow:none;
   }
   
   .nj{
       
       border-radius: 100px;
      padding: 30px;
      
   }
   .top-banner{
       width:100%;
       background: url('http://cdn.shopify.com/s/files/1/0107/8955/2187/articles/how-to-keep-a-black-car-clean-the-ultimate-car-care-guide-821592_1024x1024.jpg?v=1661225494')no-repeat center;
       background-size: cover;
       padding: 16.875rem 0 9.375rem;
       height: 100vh;
       opacity: 0.8rem;
     box-shadow: 200px 200px 500px #000  inset;
   }
  h1{
      font-size: 50px;
      font-weight: 900;
      margin-bottom: 1rem;
      color: white;
      text-shadow: 1px 0 1px #000;
  }
   h1 span{
       color: #950101;
   }

   .main-btn{
       display: inline-block;
       padding: 0.625rem 1.875rem;
       line-height: 1.5625rem;
       background-color: black;
       border: 0.1875rem solid #950101;
       color: white;
       font-size: 20px;
       font-weight: 600;
       text-transform: capitalize;
       border-radius: 0.5rem;
       box-shadow: 0px 2px 10px -1px rgb(0 0 0/ 19%);
       -webkit-transition: all .4s ease-out 0s;
       -o-transition: all .4s ease-out 0s;
       -moz-transition: all .4s ease-out 0s;
       transition: all .4s ease-out 0s;
   }
   .main-btn:hover{
       background-color: transparent;
       color: #ffff;
       border:1px solid white;
   }
   .nav-item{
       display: flex; 
       justify-content: center; 
       align-items: center;
   }
        
  
body {
   
  
  /* gradient background*/
  
  
  font-family: var(--primary-font);
       font-size: 100%;
       font-weight: 400;
       min-height: 100vh;
       
    
}



.wrapper {
  width: 100%;
  height: 100%;
  
}

 

h1{
  font-family: 'Righteous', sans-serif;
  color: rgba(255,255,255,0.98);
  text-transform: uppercase;
  font-size: 2.4rem;
}


.button-wrapper{
  margin-top: 18px;
}

.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;  
  letter-spacing: 2px;  
  cursor: pointer;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background:  transparent;
  color: #fff ;
  border: 1px solid #fff ;
  transition: all .3s ease;
  
}

.outline:hover{
  transform: scale(1.125);
  color: #3E3636;
  border-color: #fff;
  background:  #fff;
  transition: all .3s ease;  
}

.fill {
  background: green;
  color: rgba(255,255,255,0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  
}
footer{
  position:fixed;
  bottom:0;
  z-index:0;
  position:absolute;
}
@media(max-height:800px){
  footer{
    position:static;
  }

}
.footer-distributed{
  background-color:black;
 
  box-sizing:border-box;
  widows: 100%;
  width: 2000px;
  text-align:left;
  font:bold 16px sans-serif;
  padding:50px 50px 60px 50px;
  margin-top:80px;
}

.footer-distributed .footer-left{
  width:30%
}
.footer-distributed h3{
  color:#fff;
  font:normal 36px 'cookie',cursive;
  margin:0;
}
.footer-distributed h3 span{
  color:#950101;

}
.footer-distributed .footer-center p{
  display:inline-block;
  color:white;
  vertical-align:middle;
  margin:0;
  
}

.footer-distributed .footer-company-name{
  color:white;
  font-size:14px;
  font-weight:normal;
  margin:0;
}
.footer-distributed .footer-center{
  width:220px;
  position: absolute; /* positionnement absolu pour centrer la div */
  top: 50%; /* positionner le haut de la div à 50% de la hauteur du footer */
  left: 45%; /* positionner la gauche de la div à 50% de la largeur du footer */
  transform: translate(-50%, -50%);
  
}
.footer-distributed .footer-center i{
    background-color:blackwhite;
    color:white;
    font-size:15px;
    

}
.footer-distributed .footer-right{
  width:30%;
  position: absolute;
  top:20%;
  left:1350px;
  right: 0;
   
}
.footer-distributed .footer-company-about{
  line-height: 20px;
  color:white;
  font-size:13px;
  font-weight:normal;
  margin-right:30px;
}
.footer-distributed .footer-company-about span{
  display:block;
  color:#fff;
  font-size:18px;
  font-weight:bold;
  margin-bottom:20px;

}
@media(max-width:880px){
  .footer-distributed .footer-center, .footer-distributed .footer-right{
    display:block;
    width:100%;
    margin-bottom:40px;
    text-align:center;
  }
  .footer-distributed .footer-center i{
     margin-left:0;
  }
}
 
</style>