<template>
  <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="100"  >  
 <header>
 <nav class="navbar navbar-expand-lg navigation-wrap">
   <div class="container">
     <a class="navbar-brand" href="#">
     <v-img
           :src="require ('../assets/lgo.png')" contain
           height="90"
           width="140"
         class="nj"
         ></v-img>
         
     </a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <!--span class="navbar-toggler-icon"></span>-->
       <i class="fas fa-stream navbar-toggler-icon"></i>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         <li class="nav-item">
          <v-list-item link v-for="(menu,index) in menus" :key="index" :to="menu.route">
           <v-list-item-title class="nav-link">{{menu.title}}</v-list-item-title>
           
          </v-list-item>
         </li>
         
       </ul>
     </div>
   </div>
 </nav>
 </header>
 <br>
 <br>
  
  
     <div class="login-root">
     <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
       <div class="loginbackground box-background--white padding-top--64">
         <div class="loginbackground-gridContainer">
           <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
             <div class="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
             </div>
           </div>
           <br><br><br> <br>   
           <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
             <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
           </div>
           <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
             <br><br><br>
             <div class="box-root box-background--blue800" style="flex-grow: 1;"></div>
           </div>
           <br><br><br>
           <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
             <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;"></div>
           </div>
           <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
             <div class="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
           </div>
           <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
             <div class="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
           </div>
           <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
             <div class="box-root box-background--blue animationRightLeft" style="flex-grow: 1;"></div>
           </div>
           <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
             <div class="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
           </div>
           <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
             <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
           </div>
         </div>
       </div>
       <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
         <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
           <h1><a href="http://blog.stackfindover.com/" rel="dofollow" style="  color:#950101;font-weight:100; font-family: Georgia ; text-shadow:   -1px -1px 0 #950101,  
              1px -1px 0 #950101,
              -1px 1px 0 #950101,
               1px 1px 0 #950101,
               1px 1px 10px ;  letter-spacing:30;
     
         font-size: 50px;
         padding-top: 10px;
       padding-left: 50%px;">Réservation de Voiture </a></h1>
         </div>
         <div class="formbg-outer" >
           <div class="formbg" style="height: 380px; border-radius:5%;"   v-show="a">
             <div class="formbg-inner padding-horizontal--48">
               
               <form id="stripe-login">
                 <div class="field padding-bottom--24">
                   
                
                 <DatePicker v-model="range" mode="date" :columns="1" is-range>
<template v-slot="{inputValue,inputEvents}">
  <div class="group">
    <i  style="color:#000;position:absolute; " class="bi bi-calendar-event" > </i>   <label class="button groupItem" for="start"  style="margin-left:20px;">date debut     </label>
    <div>
    

    <input style="position:relative;" type="text " for="start" :value="inputValue.start" placeholder="yyyy-mm-dd"  v-on="inputEvents.start"  >
  </div>
 
  
  </div>
</template>
  </DatePicker >
</div>
<div class="field padding-bottom--24">
                   
                
                   <DatePicker v-model="range2" mode="date" :columns="1" is-range>
  <template v-slot="{inputValue,inputEvents}">
    <div class="group">
      <i  style="color:#000;position:absolute; " class=" bi bi-calendar-week" ></i>
     
      <label class="button groupItem" for="end" style="margin-left:20px;">date fin</label>
      <div>
    
   <input style="position:relative;" type="text " for="end" :value="inputValue.end" placeholder="yyyy-mm-dd"  v-on="inputEvents.end"  >
  </div>
   
    
    </div>
  </template>
    </DatePicker >
  </div>
                 <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                   <label for="checkbox">
                     <input type="checkbox"   @click="saveLoc   "> confirmer les dates 
                   </label>
                 </div>
                 <div class="field padding-bottom--24">
                   <v-btn @click="idloc(),prix()"  class="cr" style="margin-left: 100px;  ">
      Completer la reservation
 
       <v-icon icon="mdi-chevron-right" end></v-icon>
     </v-btn>
                 </div>
                
               </form>
             </div>
           </div>
           <div  class="formbg" id="recu" v-for="v in vs"   :key="v.idLocation"  v-show="a1" style="border-radius:5%; height:400px;">
             <h6> votre prix  de location de voiture est : {{v.prix_location}} DH </h6>
             <h6>   Marque : {{v.marque }}        
            <br>   Type Moteur :{{v.typemoteur}}<br>
             Type Voiture {{v.typevoiture}} 
            <br></h6>
             <h6>  de location de voiture d id :  {{v.id}}</h6>
             <h6> et d id de location :  {{ v.idLocation}}</h6>
           
             <v-btn @click="generatePDF"  class="cr" style="margin-left:170px; margin-top: 200px;  ">
    confirmer 
  <v-icon icon="mdi-chevron-right" end></v-icon>
     </v-btn>
 
           </div>
           <div  class="formbg" v-for="v in vs"   :key="v.idLocation"  v-show="a2" style="border-radius:5%; height:400px;">
             <h6> votre prix  de location de voiture est : {{v.prix_location}} de </h6>
             <h6>   Marque : {{v.marque }}        
            <br>   Type Moteur :{{v.typemoteur}}<br>
             Type Voiture {{v.typevoiture}} 
            <br></h6>
             <h6>  de location de voiture d id :  {{v.id}}</h6>
             <h6> et d id de location :  {{v.idLocation}}</h6>
           
             <v-btn   class="cr" style="margin-left:170px; margin-top: 200px;  ">
 telecharger recu 
  <v-icon icon="mdi-chevron-right" end></v-icon>
     </v-btn>
 
           </div>
           <div class="footer-link padding-top--24">
             
             <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
               <span><a href="#">© DriveGo</a></span>
               <span><a href="#">Contact</a></span>
               <span><a href="#"></a></span>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  </body>
 </template>
 
 
 <script>
 import { ref, reactive } from 'vue';
import { format } from 'date-fns'; 
import { DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
 import axios from 'axios';
 import jsPDF from 'jspdf';
 export default {
  components: {
    DatePicker
  },
 data() {
   return {
    ti:'',
     menus:[
       { title: "Accueil", route: "/" },
     
       { title: "Contact", route: "/contact" },
       { title: "Compte", route:  this.ti},
       
     
     ],
    
     last:' ',
     votreprix: '',
     terms: false,
    vs:[] ,
     a:true,
     a1:false,
     isLoggedIn: false,
     a2:false,
     date: ref(new Date()),
      range: reactive({
        start: new Date(),
       
      }),
      range2: reactive({
        end: new Date(),
      })
     
   }},
   mounted() {
    
    if ( localStorage.getItem('token') !== null) {
      this.isLoggedIn = true;  
    } 
  },
   created() {
 
   
     },
        methods:{
          log(){
            if( this.isLoggedIn==="true"){
              this.id="/login"
            }
            else{
              this.id="/profile"
            }
          },
  
 
           async saveLoc(){
                  try {
                   const car_id = await this.getcarid( );
                   const user_id = await this.getuserid( );
                   const  dateL =format(this.range.start, 'yyyy-MM-dd')
                   const  dateR =format(this.range2.end, 'yyyy-MM-dd')
                   console.log(car_id);
                   console.log(user_id);
                   console.log(dateL);
                   console.log(dateR);
                      await axios.post('http://127.0.0.1:8000/api/z2',
                     {
                    user_id,
                    car_id,
                    dateL,
                    dateR,
                      });
                      
                      const response= await axios.put(`http://127.0.0.1:8000/api/di/${await this.getcarid( )}`);
console.log(response.data);

                      this.user_id='',
                    this.car_id='',
                    this.dateL='',
                    this.dateR=''
                    
                      

                    
                     
                  } catch (error) {
                      console.log(error);
                  }
              } ,
              async generatePDF() {
       // Création d'une nouvelle instance de jsPDF
       const doc = new jsPDF();
 
       // Obtention du contenu HTML de la div formbg en utilisant une référence de réf
       const content = `  
       

       
Identifiant de  location : ${this.vs[0].idLocation}

 Identifiant de voiture : ${this.vs[0].id}

 Marque : ${this.vs[0].marque}

 Type Moteur : ${this.vs[0].typemoteur}

 Type Voiture : ${this.vs[0].typevoiture}

 De location de voiture d'id : ${this.vs[0].id}

 Montant à payée: ${this.vs[0].prix_location} 
`;
       
       // Ajout du contenu au PDF
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
  doc.text('Recu de Resérvation:', 60, 28); // Texte "facturation" en gris à partir de la position 80, 10

  // Téléchargement du PDF
  doc.save("recu.pdf");
},
         async prix() {
     this.a=false
     this.a2=false
     this.a1=true
 
 
     const API = `http://127.0.0.1:8000/api/prix/${await this.idloc()}/${await this.getcarid()}`;
     const response = await axios.get(API);
  this.vs = response.data ;
   
   },
   
              async getcarid() {
          const carid= this.$route.params.id;
          return carid;
       },
       
       async logout() {
         localStorage.clear();
 this.$router.push({name: "chercher"})
       },
 
      
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
     async idloc() {
    
    
     console.log(await this.getuserid());
     console.log(await this.getcarid());
     const API = `http://127.0.0.1:8000/api/idloc/${await this.getuserid()}/${await this.getcarid()}/${format(this.range.start, 'yyyy-MM-dd')}/${format(this.range2.end, 'yyyy-MM-dd')}`;
     const response = await axios.get(API);
     console.log(response.data[0].id)
     return response.data[0].id;
   },
   
 
     
 }
 }
   
   </script>
 
 <style scoped>
 
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
    .nav-link{
        color: white;
        font-size: 0.9375rem;
        font-weight: 600;
        letter-spacing: 1px;
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
    .main-btn hover{
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
 body {
     min-height: 100%;
     background-color: #ffffff;
 }
 h1 {
     letter-spacing: 1px;
 z-index: 2;
 color: #950101;
 }
 a {
   color: #3E3636;
   text-decoration: unset;
 }
 .login-root {
     background: #950101;
     display: flex;
     width: 100%;
     min-height: 100vh;
     overflow: hidden;
 }
 .loginbackground {
     min-height: 692px;
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
     top: 0;
     z-index: 0;
     overflow: hidden;
 }
 .flex-flex {
     display: flex;
 }
 .align-center {
   align-items: center; 
 }
 .center-center {
   align-items: center;
   justify-content: center;
 }
 .box-root {
     box-sizing: border-box;
 }
 .flex-direction--column {
     -ms-flex-direction: column;
     flex-direction: column;
 }
 .loginbackground-gridContainer {
     display: -ms-grid;
     display: grid;
     -ms-grid-columns: [start] 1fr [left-gutter] (86.6px)[16] [left-gutter] 1fr [end];
     grid-template-columns: [start] 1fr [left-gutter] repeat(16,86.6px) [left-gutter] 1fr [end];
     -ms-grid-rows: [top] 1fr [top-gutter] (64px)[8] [bottom-gutter] 1fr [bottom];
     grid-template-rows: [top] 1fr [top-gutter] repeat(8,64px) [bottom-gutter] 1fr [bottom];
     justify-content: center;
     margin: 0 -2%;
     transform: rotate(-12deg) skew(-12deg);
 }
 .box-divider--light-all-2 {
     box-shadow: inset 0 0 0 2px #950101;
 }
 .box-background--blue {
     background-color: #000;
     z-index: 0;
  
 }
 .box-background--white {
   background-color: #ffffff; 
 }
 .box-background--blue800 {
     background-color:#000;
     z-index: 0;
 }
 .box-background--gray100 {
     background-color: #e3e8ee;
     z-index: 0;
 }
 .box-background--cyan200 {
     background-color: #950101;
     z-index: 0;
 }
 .padding-top--64 {
   padding-top: 64px;
 }
 .padding-top--24 {
   padding-top: 24px;
 }
 .padding-top--48 {
   padding-top: 48px;
 }
 .padding-bottom--24 {
   padding-bottom: 24px;
 }
 .padding-horizontal--48 {
   padding: 48px;
 }
 .padding-bottom--15 {
   padding-bottom: 15px;
 }
 
 
 .flex-justifyContent--center {
   -ms-flex-pack: center;
   justify-content: center;
 }
 
 .formbg {
     margin: 0px auto;
     width: 100%;
     max-width: 448px;
     background: white;
     border-radius: 4px;
     box-shadow:#950101 0px 7px 14px 0px, #3E3636 0px 4px 15px 0px;
 }
  
 label {
     margin-bottom: 10px;
 }
 .reset-pass a,label {
     font-size: 14px;
     font-weight: 600;
     display: block;
 }
 .reset-pass > a {
     text-align: right;
     margin-bottom: 10px;
 }
 .grid--50-50 {
     display: grid;
     grid-template-columns: 50% 50%;
     align-items: center;
 }
 
 .field input {
     font-size: 16px;
     line-height: 28px;
     padding: 8px 16px;
     width: 100%;
     min-height: 44px;
     border: unset;
     border-radius: 4px;
     outline-color:#950101;
     background-color: rgb(255, 255, 255);
     box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                 rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                 rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                 rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
                 rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                 rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                 rgba(0, 0, 0, 0) 0px 0px 0px 0px;
 }
 
  .cr {
     background-color: #950101;
     box-shadow: #3E3636 0px 0px 0px 0px, 
     #3E3636 0px 0px 0px 0px, 
                #3E3636 0px 1px 1px 0px, 
                #3E3636 0px 0px 0px 1px, 
                  #3E3636 px 0px 0px 0px, 
                  #3E3636 px 0px 0px 0px, 
                 #3E3636 px 2px 5px 0px;
     color: #F5EDED;
     font-weight: 600;
     cursor: pointer;
 }
 .field-checkbox input {
     width: 20px;
     height: 15px;
     margin-right: 5px; 
     box-shadow: unset;
     min-height: unset;
 }
 .field-checkbox label {
     display: flex;
     align-items: center;
     margin: 0;
 }
 a.ssolink {
     display: block;
     text-align: center;
     font-weight: 600;
 }
 .footer-link span {
     font-size: 14px;
     text-align: center;
 }
 .listing a {
     color: #950101;
     font-weight: 600;
     margin: 0 10px;
 }
 
 .animationRightLeft {
   animation: animationRightLeft 2s ease-in-out infinite;
 }
 .animationLeftRight {
   animation: animationLeftRight 2s ease-in-out infinite;
 }
 .tans3s {
   animation: animationLeftRight 3s ease-in-out infinite;
 }
 .tans4s {
   animation: animationLeftRight 4s ease-in-out infinite;
 }
 
 
 
 @keyframes animationRightLeft {
   0% {
     transform: translateX(0px);
   }
  50% {
     transform: translateX(-50px);
   }
  100% {
     transform: translateX(0px);
   }
 } 
 @keyframes animationLeftRight {
   0% {
     transform: translateX(0px);
   }
   50% {
     transform: translateX(100px);
   }
   100% {
     transform: translateX(0px);
   }
 } 
 </style>