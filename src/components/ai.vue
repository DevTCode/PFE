<template>
<body style="background-image:url('https://media-assets.mazda.eu/image/upload/q_auto,f_auto/mazdanl/globalassets/mmnl-local-pages/concept-cars/20181025_kai_gallery1.jpg?rnd=4aa6f0');background-size: cover;height:812px">
  
    <header>
<nav class="navbar navbar-expand-lg navigation-wrap" style="background-color:black;height:90px">
  <div class="container">
    <a class="navbar-brand" href="#">
    <v-img
          :src="require('../assets/lgo.png')"
          
          contain
          height="90"
          width="90"
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
  <br><br><br><br><br>

 
  <br><br><br><br><br>
 
  <table class="table" align="center" style="display: table;
  margin: auto;width:90%;margin-right: 80px;height=20px;border: 2px solid black;background-color:white">
   <thead>
    <tr>
      
      <th scope="col" style="color:#950101">numero de location</th>
      <th scope="col" style="color:#950101">numero de voiture</th>
       <th scope="col" style="color:#950101">prix total</th>
        <th scope="col" style="color:#950101">option</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id">
        
        <td style="color:black"><b>{{ item.idloc }}</b></td>
        <td style="color:black"><b>{{ item.idcar }}</b></td>
        <td style="color:#950101">{{item.total}}<h8>dh</h8></td>
        <td >
        
        <router-link :to="{name: 'fact' , params:{id:item.id}}" ><v-btn variant="flat" color="black">Afficher facture</v-btn></router-link>
        </td>
      </tr>

  </tbody>
   
  </table>
  

<br><br><br><br>
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
<style scoped>
.invoice {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color:white;
  border: 1px solid red;
   box-shadow:black 0px 7px 14px 0px, black 0px 3px 6px 0px;
  width:600px;
}

.invoice-header h1 {
  font-size: 28px;
  margin: 0;
}

.invoice-header p {
  font-size: 16px;
  margin: 0;
}

.invoice-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

.invoice-table th {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.invoice-table td {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.invoice-table tfoot td {
  text-align: right;
  font-weight: bold;
  padding: 10px;
  border-top: 1px solid #ccc;
}

.invoice-footer {
  margin-top: 20px;
}

.invoice-footer p {
  font-size: 16px;
  margin: 0;
}
footer{
  position:fixed;
  bottom:0;
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
th,td{
    width:830px;
    
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
  margin:0;
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
     z-index:1000;
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
 .custom-link{
     color: #000;
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
    color: #950101;
    
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
 </style>
<script>
import axios from 'axios';
export default {
     name:"locations",
     data(){
         return {
             items:[],
             idloc:'',
             idcar:'',
             total:'',
             menus:[
            {title:'Acceuil',route:'ad'},
            {title:'Reservations',route:'locations'},
           

            ]
        
         };
     },
     created(){
         this.getFactures();
         

     
     },
     methods:{
        async getFactures(){
             try {
                 const response = await axios.get('http://127.0.0.1:8000/api/factures');
                 this.items = response.data;
             } catch (error) {
                 console.log(error);
             }
         } ,
         
     }
}
</script>