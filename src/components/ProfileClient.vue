<template>

<body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="100" style="background-color: #950101; background-size: cover;" >  
    <header>
      <nav class="navbar navbar-expand-lg navigation-wrap">
        <v-btn @click.stop="drawer = !drawer" class="ml-auto" style=" padding-left: 10px; color:white; background-color: transparent;">
            <i class="bi bi-list" style="font-size: 2.0em;"></i>
          </v-btn>
        <div class="container d-flex align-items-center">
            
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
                  v-for="(menu, index) in menus"
                  :key="index"
                  :to="menu.route"
                >
                  <v-list-item-title class="nav-link1"  >{{ menu.title }}</v-list-item-title>
                </v-list-item>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    <v-card class="ig">
      <v-layout>
        <v-navigation-drawer style="margin-top: 15px;"
          v-model="drawer"
          temporary
        >
          <v-list-item
            prepend-icon=" bi bi-person-circle"
            :title="nom" 
             
            style="color:#950101; font-size: 1.4em; "
         >
 
        </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="bi bi-card-text" title="informations personneles" value="home" @click="getuser"></v-list-item>
            <v-list-item prepend-icon="bi bi-card-checklist" title="vos location"  value="about" @click="getloc"></v-list-item>
            <v-list-item prepend-icon="bi bi-receipt-cutoff" title="vos factures" value="about" @click="getfac"></v-list-item>
         
        </v-list>
        <v-btn prepend-icon="bi bi-box-arrow-right" style="background-color: transparent; border:transparent; color:#950101;box-shadow:0 0 0px #fff; margin-top: 290px;" @click="logoutClient">Se Déconnecter</v-btn>
        </v-navigation-drawer>
        
        <v-main v-show="t1" style="height: 100vh; margin-top:10px;background-size:cover; background-repeat:no-repeat; background-position: center; box-shadow: 800px 800px 500 #000; background:url('https://img5.goodfon.com/wallpaper/nbig/b/5d/transport-vehicles-art-car-supercar-sportcar-render-mashin-9.jpg');  ">
               <div   >
                <br> 
                <h2 style=" margin-left:15%; font-size:2.3em;">Bienvenue  {{ nom }} {{ prenom }}</h2>
            <br><br>
            
                <h4     style=" margin-left: 280px; color:#F5EDED"> informations personneles</h4>
                <br><br>
                <table class="table" align="center" style="display: table;
  margin: auto;margin-right: 130px;width:70%;height=20px;border: 2px solid white;background-color:black;opacity:80%">
    <thead >
      <tr  class="tt"  style="padding-right: 0%; border: 1px solid white;">
        
        <th class="t" style="color:#fff ;opacity: 100%;">
         Nom
        </th>
        <th class="t" style="color:#fff">
         Prenom
        </th>
        <th class="t" style="color:#fff">
       CNE
        </th>
        <th class="t" style="color:#fff">
         Téléphone
        </th>
        <th class="t" style="color:#fff">
         numPermis
        </th>
        <th class="t" style="color:#fff">
         Email
        </th>
        <th class="t" style="color:#fff">
            Option
        </th>
        
      </tr>
    </thead>

    <tbody>
      <tr  class="tt"
        v-for="p in ps"
        :key="p.id"
      >
      
        <td class="t1" style=" collapse:2px solid white;">
            {{ p.nom}}
            
        </td>
        <td class="t1">
            {{ p.prenom }}
        </td>
        <td class="t1">
            {{ p.CNE }}
        </td>
        <td class="t1">
            {{ p.tel}}
        </td>
        <td class="t1">
            {{p.numPermis}}
        </td>
        <td class="t1">
            {{ p.email}}
         
        </td>
        
        <td class="t1">
            <router-link :to="{name:'ModifierU', params:{id:p.ide}}"  >
                <button class="btn outline" style="background-color:#fff;color:#950101;font-size:0.9em;opacity:100%;">   <i class="bi bi-pencil-square" style="margin-right:10px;"></i>Modifier</button>
  </router-link>
         
        </td>
      </tr>
    </tbody>
  </table> 

</div>
 
          <div class="d-flex justify-center align-center h-100">
           
          </div>
        </v-main>
        <v-main v-show="t2" style="height: 100vh; margin-top:10px;background-size:cover;background-repeat:no-repeat; background:url('https://img5.goodfon.com/wallpaper/nbig/2/3b/transport-vehicles-art-car-supercar-sportcar-render-mashi-13.jpg');  ">
               <div   >
                <br> 
               
            <br><br>
            
                <h4      style=" margin-left: 280px; color:#F5EDED">Vos Location de Voitures </h4>
                <br><br>
                <table class="table" align="center" style="display: table;
  margin: auto;margin-right: 100px;width:70%;height=20px;border: 2px solid white;background-color:black;opacity:80%">
    <thead >
      <tr  class="tt"  style="padding-right: 0%; border: 1px solid white;">
        <th class="t" style="color:#fff">
      Voiture
    </th>
        <th class="t" style="color:#fff ;opacity: 100%;">
      Marque de Voiture
        </th>
        <th class="t" style="color:#fff">
        
        
     Type de Voitures
        </th>
        <th class="t" style="color:#fff">
          Type de Moteur 
        </th>
        <th class="t" style="color:#fff">
       Date debut
        </th> <th class="t" style="color:#fff">
         Date retour
        </th>
       
   
      
        
      </tr>
    </thead>
    <tbody>
    
      
      <tr  class="tt"
      v-for="p1 in ps1"
        :key="p1.id" 
      >
      <td class="t1">
        <img :src="`http://localhost:8000/storage/images/${p1.zineb}`" 
              contain
              height="90"
              width="120"
              
            >
        </td>
      
        <td class="t1">
         {{p1.marque}}
        </td>
        <td class="t1">
            {{p1.typevoiture}}
        </td>
        <td class="t1">
            {{p1.typemoteur}}
        </td>
        <td class="t1">
            {{p1.dateL}}
        </td>
        <td class="t1">
            {{p1.dateR}}
        </td>
       
       
      </tr>
    </tbody>
  </table> 
    
</div>
 
          <div class="d-flex justify-center align-center h-100">
           
          </div>
        </v-main>
        <v-main v-show="t3" style=" height: 100vh; margin-top:10px;background-size:cover;
    background-repeat:no-repeat; 
     background-image:url(' https://c4.wallpaperflare.com/wallpaper/447/597/260/lamborghini-hd-4k-cars-wallpaper-preview.jpg');  
 " >
            <br> 
               
               <br><br>
            <h4    style="margin-left: 280px; color:#F5EDED;"> Vos Factures : </h4>     
        <div class="hi"  >
<div class="card"   v-for="p2 in ps2"
        :key="p2.id"  >

  <p style="color:#000">Facture N° {{p2.id}} <br><strong style="color:#950101;" >{{nom}} {{prenom }}</strong> 
   <br> <i class="bi bi-check-circle" style="color:green"></i> Payée

     </p>

  <p class="card-footer">DriveGo</p>
  <v-btn @click="generatePDF">Imprimer votre Facture </v-btn>
</div>
</div>
</v-main>
      </v-layout>
    </v-card>
         </body>      
  </template>
  <script>
  import axios from "axios";
  import jsPDF from 'jspdf';
  export default{
    data () {
      return {
        menus: [
        { title: "Accueil", route: "/voiture" },
 
        { title: "Contact", route: "/co" },
        { title: "Compte", route: "/profile" },
      ],
      drawer: null,
      nom:'',
      prenom:'',
      ps: [],
      ps1: [],
      t1:true,
      t2:false,
      t3:false,
      };
    },
    created() {
    this.getuser();
  },
  methods: {
    async getuserid() {
         
         try {
           const response = await axios.get('http://127.0.0.1:8000/api/usid', {
             headers: {
               Authorization: 'Bearer ' + localStorage.getItem('token')
             }
           });
           console.log(response.data)
         return response.data.id;
   
         } catch (error) {
           console.error(error);
         }
       },
       
    async getuser() {
      try {
        const API = `http://127.0.0.1:8000/api/ic/${await this.getuserid()}`;
     const response = await axios.get(API);
     this.nom=response.data[0].nom;
     this.prenom=response.data[0].prenom;
     console.log(response.data)
     this.ps=response.data;
     this.t1=true
      this.t2=false
      this.t3=false
      } catch (error) {
        console.log(error);
      }
    },
    async getloc(){
    console.log(await this.getuserid())
        try {
            const API = `http://127.0.0.1:8000/api/lid/${await this.getuserid()}`;
     const response = await axios.get(API);
    
     console.log(response.data )
     this.ps1=response.data ;

   this.t2=true
      this.t1=false
      this.t3=false
   

      } catch (error) {
        console.log(error);
      }   
    },
    async getfac(){
    console.log(await this.getuserid())
        try {
            const API = `http://127.0.0.1:8000/api/f/${await this.getuserid()}`;
     const response = await axios.get(API);
    
     console.log(response.data )
     this.ps2=response.data ;

   this.t3=true
      this.t1=false
      this.t2=false
   

      } catch (error) {
        console.log(error);
      }   
    },
    logoutClient() {
      localStorage.removeItem('token');  
      this.isLoggedIn = false; 
      this.$router.push('/voiture');
    },
    async generatePDF() {
  // Création d'une nouvelle instance de jsPDF
  const doc = new jsPDF();

  // Obtention du contenu HTML de la div formbg en utilisant une référence de réf
  const content = ` 


  Facture N° : ${this.ps2[0].id}  

 Identifiant  de location   : ${this.ps2[0].idloc}

 Marque de voiture    : ${this.ps2[0].marque}

  Type Moteur de voiture : ${this.ps2[0].typemoteur}

  Type Voiture  de voiture: ${this.ps2[0].typevoiture}
  
  Et  prix total  : ${this.ps2[0].total} DH`;

  // Ajout du contenu au PDF en utilisant setText
  doc.setTextColor("#000"); // Définir la couleur du texte en gris
  doc.setFontSize(20); // Définir la taille de police à 15
  doc.text(content, 10, 20); // Ajouter le contenu du texte à partir de la position 10, 20

  // Appliquer le style à "Drive Go"
  doc.setTextColor("#950101"); // Définir la couleur du texte en rouge
  doc.setFontSize(40); // Définir la taille de police à 20
  // Définir le style de police en gras
  doc.text("Drive ", 10, 10);
   // Texte "Drive Go" en rouge à partir de la position 10, 10
   doc.setTextColor("#000"); // Définir la couleur du texte en rouge
  doc.setFontSize(40); // Définir la taille de police à 20
  // Définir le style de police en gras
  doc.text(" Go", 40, 10);

  // Appliquer le style à "facturation"
  doc.setTextColor("#3E3636"); // Définir la couleur du texte en gris
  doc.setFontSize(30); // Définir la taille de police à 15
  doc.text('Facturation', 80, 15); // Texte "facturation" en gris à partir de la position 80, 10

  // Téléchargement du PDF
  doc.save("recu.pdf");
}



,

}
  }
</script>
<style>

.hi {
  font: 1em/1.618 Inter, sans-serif;

  display: flex;
  align-items:center;
  justify-content:left;
  margin-left:50px;
  min-height: 60vh;
  padding-left: 250px;
margin-top: 20px;
  color: #224;
  background:transparent
  
    center / cover no-repeat fixed;
}

.card {
  max-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left:30px;
  max-width: 500px;
  height: 300px;
  padding: 35px;

  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(15px);
}

.card-footer {
  font-size: 0.65em;
  color: #446;
}
 .t,.t1{
    border: 0.5px solid white;
    color: #fff;
    opacity: 100%;
 }
 
   
 
.ig{
    height: 100vh;  background:url('../assets/profil.jpg');
    background-size: cover;

  opacity: 0.8rem;
 box-shadow: 300px 300px 500px   #000 inset;
     
background-color:black;
}
h2{
 font-weight:100; font-family: 'Lucida Sans'  ;
   text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px #950101,
             0px 18px 23px rgba(0,0,0,0.1); letter-spacing: 5px;
color: #fff;
    font-size: 40px;
    padding-top: 10px;
  padding-left: 350px;
}
 :root{
     --primary-color:#950101;
     --secondry-color: #FF0000;
     --white-color: #fff;
     --text-color: #3E3636;
     
     --primary-front: 'Roboto','sans-serif';
     --secondry-text: 'Quicksand','sans serif';
 }
 body{
     font-family: var(--primary-font);
     font-size: 100%;
     font-weight: 400;
 
 
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
 .nav-link1{
     color: white;
     font-size: 0.9375rem;
     font-weight: 600;
     letter-spacing: 1px;
     text-transform: capitalize;
     
 }
 .nav-link1:hover{
    color:#950101;
 }
 .nav-link1.active{
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
    margin-left:  0px;
    
 }
 .top-banner{
     width:100%;
     background: url('http://cdn.shopify.com/s/files/1/0107/8955/2187/articles/how-to-keep-a-black-car-clean-the-ultimate-car-care-guide-821592_1024x1024.jpg?v=1661225494')no-repeat center;
     background-size: cover;
     padding: 16.875rem 0 9.375rem;
     height: 100vh;
 }
h1{
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 1rem;
    color: white;
    text-shadow: 1px 0 6px #000;
}
 h1 span{
     color: #950101;
 }
 p{
     font-size: 15px;
     color: white;
     font-weight: 400;
     line-height: 1.75rem;
     letter-spacing: 1px;
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
     color: #950101;
 }
 .nav-item{
     display: flex; 
     justify-content: center; 
     align-items: center;
 }
@media (max-width:991px){
    .text-content{
        width: 100%;
    }
    .navigation-wrap .navbar-brand img{
        height: 3.8125rem;
    }
    .navigation-wrap{
        text-align: center;
        background-color: #950101;
       
    }
    .navigation-wrap .nav-link{
        line-height: 1.875rem;
        color: black;
    }
     .navigation-wrap .nav-link{
        line-height: 1.875rem;
        color: black;
    }
    .top-banner{
        padding: 40% ;
    }
    
}
</style>