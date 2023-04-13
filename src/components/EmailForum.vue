<template>
    <html>
    <head>
      <meta charset="utf-8">
     
    </head>
    
    <body>
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
             <v-list-item-title class="nav-link1" >{{menu.title}}</v-list-item-title>
         </v-list-item>
           </li>
           
         </ul>
       </div>
     </div>
   </nav>
   </header>
    <br><br>
      <div class="login-root">
        <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
          <div class="loginbackground box-background--white padding-top--64">
            <div class="loginbackground-gridContainer" style="margin-top:120px;">
              <div class="box-root flex-flex" style="grid-area: top / start / 10 / end;  background-color:#950101;">
                <div class="box-root" style="background-color:white; flex-grow: 4;">
                </div>
              
           <div class="box-root flex-flex" style="grid-area: top / start / 18 / end;">
                <div class="box-root" style="background-color:grey; flex-grow: 1;  background-color:#950101;">
                </div>
              </div>
              </div>
              <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
               <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;   background-color:#000;"></div>
             </div>
             <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
               <div class="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1; background-color:#fff; border:2px solid grey"></div>
             </div>
             <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
               <div class="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1; background-color:#950101;"></div>
             </div>
             <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
               <div class="box-root box-background--blue animationRightLeft" style="flex-grow: 1;  "></div>
             </div>
             <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
               <div class="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1; "></div>
             </div>
             <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
               <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;  "></div>
             </div>
            </div>
          </div>
          <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
          
            <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1 style="color:#950101;">Créer Compte</h1>
            </div>
            
            <div class="formbg-outer">
              <div class="formbg">
                <div class="formbg-inner padding-horizontal--48">
                  <span class="padding-bottom--15" style="font-size:20px;color:white;margin-top:10px;">Inscrivez-vous </span>
                  <br><br>
                  <form id="stripe-login"   >
                    <i class="bi bi-person" style="color:white"></i>  <v-text-field  style="font-size:0.5em; color:white;height:60px;"  v-model="nom" label="nom" class="e"></v-text-field>
                    <i class="bi bi-person-check" style="color:white"></i>  <v-text-field style="font-size:0.5em; color:white;height:60px;" v-model="prenom" label="prenom" class="e"></v-text-field>
                    <i class="bi bi-person-lines-fill" style="color:white"></i> <v-text-field  style="font-size:0.5em; color:white ;height:60px;" v-model="CNE" label="CNE" class="e"></v-text-field>
        <i class="bi bi-telephone" style="color:white"></i>  <v-text-field style="font-size:0.5em; color:white;height:60px;" v-model="tel" label="Telephone" class="e"></v-text-field>
        <i class="bi bi-card-list" style="color:white"></i> <v-text-field  style="font-size:0.5em;color:white;height:60px;" v-model="numPermis" label="numPermis" class="e"></v-text-field>
        <i class="bi bi-envelope-at-fill" style="color:white"></i>  <v-text-field style="font-size:0.5em; color:white;height:60px;" v-model="email" label="email" class="e"></v-text-field>
      
       
       
                  <br><br>
                    <div class="field padding-bottom--24">
     <v-btn class="btn1 mt-3 mb-5" @click="saveData" style="background-color:#950101; color:#fff; width:900px; margin-right:100%; ">  S'inscrire </v-btn>
    
                <router-link style="  text-decoration:dotted;"  to="/login" >  <p style="color: #fff;  text-decoration:none;">Avez-vous un Compte ? Se Connecter  </p></router-link>
    
    </div>
                   
                  </form>
                </div>
              </div>
              <div class="footer-link padding-top--24">
             
                <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span><a href="#" style="color:black">© DriveGo</a></span>
                  <span><a href="#" style="color:black">Contact</a></span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    
    </html>
    
        
    </template>
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
   .nav-link1{
       color: white;
       font-size: 0.9375rem;
       font-weight: 600;
       letter-spacing: 1px;
       margin-right:50px;
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
      font-weight: 600;
      margin-bottom: 1rem;
      color:  #950101;
      
  
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
          color: white;
      }
       .navigation-wrap .nav-link{
          line-height: 1.875rem;
          color: white;
      }
      .top-banner{
          padding: 40% ;
      }
      
  }
    * {
      padding: 0;
      margin: 0;
      color: #1a1f36;
      box-sizing: border-box;
      word-wrap: break-word;
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
    }
    body {
        min-height: 100%;
        background-color: #ffffff;
    }
    h1 {
        letter-spacing: -1px;
    }
    a {
      color: red;
      text-decoration: unset;
    }
    .login-root {
        background: #fff;
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
        box-shadow: inset 0 0 0 2px #e3e8ee;
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
        max-width: 1000px;
        height: 900px;
        background: white;
        border-radius: 4px;
        box-shadow:red 0px 7px 14px 0px, red 0px 3px 6px 0px;
        background-image: url('https://www.hdcarwallpapers.com/thumbs/2022/2024_ford_mustang_gt_4k_8k_2-t2.jpg');
          background-size: cover;
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
        outline-color: black;
        background-color: rgb(255, 255, 255);
        box-shadow: #950101 0px 0px 0px 0px, 
                    #950101 0px 0px 0px 0px, 
                    #950101 0px 0px 0px 0px, 
                    #950101 0px 0px 0px 1px, 
                    #950101 0px 0px 0px 0px, 
                    #950101 0px 0px 0px 0px, 
                    #950101 0px 0px 0px 0px;
    }
    
    input[type="submit"] {
        background-color: red;
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                    rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, 
                    red 0px 0px 0px 1px, 
                    rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                    rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
        color: #fff;
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
        color: black;
    }
    .listing a {
        color: #697386;
        font-weight: 600;
        margin: 0 10px;
    }
    
    .animationRightLeft {
      animation: animationRightLeft 2s ease-in-out infinite;
    }
    .animationLeftRight {
      animation: animationLeftRight 2s ease-in-out infinite;
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
       transform: translateX(50px);
     }
     100% {
       transform: translateX(0px);
     }
   } 
    
    
    </style>
          
          <script>
              
              import axios from 'axios';
            
   
            export default {
              
              data () {
                return {
                  menus:[
         { title: "Accueil", route: "/" },
        
         { title: "Contact", route: "/contact" },
         {title: "Compte", route: "/vehicles" },
        
       ],
           
                 
                             nom: '',
                             prenom:'',
                             CNE:'',
                             tel:'',
                             numPermis:'',
                             email: '',
                            
                   
                }
              },
              created() { 
              },
              mounted() {
                    console.log("mounted() called.......");
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
         return response.data[0].id;
   
         } catch (error) {
           console.error(error);
         }
       },

async getclients(){
            try {
              const id = await this.getuserid();
                const response = await axios.get(`http://127.0.0.1:8000/api/clients/${id}`);
             
                console.log(response);
                  this.nom=response.data.user.nom;
                  this.prenom=response.data.user.prenom;
                  this.CNE=response.data.user.CNE;
                  this.tel=response.data.user.tel;
                  this.numPermis=response.data.user.numPermis;
                  this.email=response.data.user.email;
                  this.password=response.data.user.password;
                  
                
             } catch (error) {
                 console.log(error);
             }
         } ,
           
         
        async saveData(){
               const id = await this.getuserid();
                 await axios.put(`http://127.0.0.1:8000/api/edituser/${id}`,
                {
                 nom:this.nom,
                  prenom:this.prenom,
                  CNE:this.CNE,
                  tel:this.tel,
                  nimPermis:this.numPermis,
                  email:this.email,
                  password:this.password,
                 });
                  
                  this.$router.push('/ma');
                
             } 
         } ,


                }
            
            </script>