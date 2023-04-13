
<template>
<html>
<head>
  <meta charset="utf-8">
 
</head>

<body>
  <div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
      <div class="loginbackground box-background--white padding-top--64">
        <div class="loginbackground-gridContainer">
          <div class="box-root flex-flex" style="grid-area: top / start / 10 / end;">
            <div class="box-root" style="background-color:white; flex-grow: 4;">
            </div>
          
       <div class="box-root flex-flex" style="grid-area: top / start / 18 / end;">
            <div class="box-root" style="background-color:grey; flex-grow: 1;">
            </div>
          </div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
            <div class="box-root box-divider--light-all-2 animationLeftRight tans1s" style="flex-grow: 1;border-radius:2rem;background-color:grey"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
            <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;background-color:red;border-radius:2rem"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
            <div class="box-root box-background--gray100 animationLeftRight tans1s" style="flex-grow: 1;background-color:black;border-radius:2rem"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
            <div class="box-root box-background--cyan200 animationRightLeft tans1s" style="flex-grow: 1;background-color:#950101;border-radius:2rem"></div>
          </div>
         
        </div>
      </div>
      <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
      
        <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1 style="color:black">DriveGo</h1>
        </div>
        
        <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15" style="font-size:20px;color:white">Connectez-vous à votre panneau d'administration</span>
              <br><br>
              <form id="stripe-login">
              <i class="bi bi-envelope-at-fill" style="color:white"></i><v-text-field v-model="email" label="email" class="e" style="color:white"></v-text-field>
   
    <i class="bi bi-key-fill" style="color:white"></i><v-text-field v-model="password" label="Mot de passe" type="password" class="psw" style="color:white"></v-text-field>
              <br><br>
                <div class="field padding-bottom--24">
 <v-btn class="btn1 mt-3 mb-5" @click="login"> <b class="b">Login</b></v-btn>
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
    max-width: 800px;
    height: 500px;
    background: white;
    border-radius: 4px;
    box-shadow:red 0px 7px 14px 0px, red 0px 3px 6px 0px;
    background-image: url('https://cdn-fastly.thetruthaboutcars.com/media/2022/07/10/8918698/finally-toyota-poised-to-bestow-upon-us-a-trd-camry-8230-and-an-avalon-too.jpg?size=720x845&nocrop=1');
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


@keyframes animationLeftRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(600px);
  }
  100% {
    transform: translateX(0px);
  }
} 

@keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-600px);
  }
  100% {
    transform: translateX(0px);
  }
} 


</style>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      let bodyFormData = new FormData();
      bodyFormData.set("email",this.email);
      bodyFormData.set("password",this.password);
      axios({
        method: "post",
        url: 'http://localhost:8000/api/log',
        data: bodyFormData,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
      })
       .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response)
      
        alert('vous avez été connecté')
         this.$router.push('/ad');
         
       })
     .catch((error) => {
       console.log("error");
     })
    }
  }
}
</script>
