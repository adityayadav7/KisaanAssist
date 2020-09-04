<template>
  <div xs12 class="text-sm-center">
    <header class="hd">
      <div class="hd1">
        <a class="hd2" href="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kisanfeedback-b2c73.appspot.com/o/KisaanassistMedia%2FKisaanAssistL1.png?alt=media&token=bd2894cc-8482-460b-950f-c4fc00be0560"
          />
        </a>
      </div>
      <div class="hdright">
        <a class="cus1">Contact : <b>7053423162</b></a>
        <br />
        <a class="cus">Email : <b class="bmail"> kisaanassist@gmail.com </b></a>
      </div>
      <!-- <button @click="sess()" >Click</button> -->
    </header>
    <loads v-if="load" />
    <!-- <div class="aq" v-if="!myLoader.val"> -->
    <div class="aq" v-if="!load">
      <section class="zq">
        <div class="aw">
          <div class="ae">
            <div class="form">
              <div v-if="step === 1">
                <span class="welcome">Welcome</span>
                <div class="input100">
                  <span class="input10" for="name">Phone Number</span>
                  <input
                    id="name"
                    class="input1"
                    type="string"
                    v-model="phoneNo"
                    name="phoneNumber"
                    @keyup.enter="sendOTP"
                    :rules="phoneRules"
                    required
                  />
                  <span class="focus-input100"></span>
                  <!-- <span class="form-error" v-if="errors.has('phoneNumber')">{{errors.first('phoneNumber')}}</span> -->
                </div>
                <!-- <div class="valid-feedback">Valid Phone Number</div>
              <div class="invalid-feeback">
                <span v-if="$v.phoneNo.required">Please Entry Phone Number</span>
                </div>-->
                <div class="footer">
                  <button
                    type="submit"
                    class="btn1"
                    id="sign-in-button"
                    @click.prevent="sendOTP();next();"
                  >CONTINUE</button>
                </div>
              </div>
              <!-- <a  @click.prevent="sendOTP()">Resend OTP</a> -->
              <h1></h1>
              <div>
                <div id="recaptcha-container"></div>
              </div>
              <div v-if="step === 2">
                <h3>Verify with OTP</h3>
                <div class="sent2">sent to {{phoneNo}}</div>
                <!-- <span class="input101" for="name">Please Enter OTP sent to {{phoneNo}}</span> -->
                <!-- <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                 <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                 <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />-->
                <!-- <OTP/> -->
                <div class="input100">
                  <!-- <span class="input10" for="name">Enter OTP</span> -->
                  <input
                    class="input1"
                    type="text"
                    name="code"
                    v-model="otp"
                    placeholder="OTP"
                    required
                  />
                  <span class="focus-input100"></span>
                </div>
                <!-- <div class="footer">
                <button
                  type="submit"
                  class="btn1"
                  id="sign-in-button"
                  @click.prevent="verifyOTP()"
                  @click="myLoader.val=!myLoader.val"
                  :disabled="myLoader.val"
                >Submit</button>
                </div>-->
                <div class="footer">
                  <button
                    type="submit"
                    class="btn1"
                    id="sign-in-button"
                    @click.prevent="verifyOTP()"
                    @click="sess()"
                  >Submit</button>
                </div>
                <br />
                <div>
                  <button class="resendOtp" @click.prevent="sendOTP()">RESEND OTP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <button @click.prevent="sendOTP()">resend</button> -->
    </div>
    <!-- <app-home :myPhone='phoneNo' ></app-home> -->
  </div>
</template>
<script src="https://www.google.com/recaptcha/api.jsonload=CaptchaCallback&render=explicit"
    async defer>
</script>
<script>
import loads from "./loads";
//import {required } from 'vee-validate/lib/validators'
// import  'vee-validate';
import firebase from "firebase/app";
require("firebase/auth");
import OTP from "./OTP";
import Vue from "vue";
import HelloWorld from "./HelloWorld.vue";
import { eventBus } from '../main.js';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAlrNBd_57q2ugyUG1seruA-Sh-xu3oaLo",
    authDomain: "second-3f5af.firebaseapp.com",
    databaseURL: "https://second-3f5af.firebaseio.com",
    projectId: "second-3f5af",
    storageBucket: "second-3f5af.appspot.com",
    messagingSenderId: "70146521335",
    appId: "1:70146521335:web:5565185d94bcecd064bbf2",
    measurementId: "G-NQVLSC8Z1F"
  });
}

export default {
  name: "phoneAuth",
  components: {
   HelloWorld,
    //PhoneAuth
    loads,
    OTP
  },
  // inject:['myLoader'],
  data() {
    return {
      step: 1,
      phoneNo: "",
      phoneRules: [
        v => !!v || "Phone Number is required",
        v => (v && v.length <= 10) || "Phone Number must be of 10 digit"
      ],
      otp: "",

      load: false
    };
  },

  // mounted(){
  //           window.recaptchaVerifier.render().then(function(widgetId) {
  //              grecaptcha.reset(widgetId);
  //              });
  //  },

  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    sendOTP() {
      event.preventDefault();
      if (this.phoneNo.length != 10) {
        alert("Invalid No.");
      } else {
        //firebase.auth().settings.appVerificationDisabledForTesting = true;
        firebase.auth().languageCode = "it";

        firebase.auth().useDeviceLanguage();

        let countryCode = "+91";
        let phoneNumber = countryCode + this.phoneNo;
        //let phoneNumber = this.phoneNo;
        // let phoneNumber = "+919935020123";
        //
        //let otp="123456"
        // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        //   "sign-in-button",
        //   {
        //     size: "invisible",
        //     callback: function() {

        //     },
        //     "expired-callback": function() {
        //       // Response expired. Ask user to solve reCAPTCHA again.
        //       // ...
        //       // recaptchaVerifier.clear()
        //     }
        //   }
        // );

        //window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

        //  appVerifier.render().then(function (widgetId) {
        //      appVerifier = widgetId;
        //       });
        //  recaptchaVerifier.render().then(function(widgetId) {
        //     window.recaptchaWidgetId = widgetId;
        //  });
        //window.recaptchaVerifier.render();
        //  setTimeout(() => {
        //   window.recaptchaVerifier.clear()
        //  }, 1000);
        

        firebase
          .auth()
          .signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
          .then(function(confirmationResult) {
            console.log(confirmationResult);
            window.confirmationResult = confirmationResult;
            //return confirmationResult.confirm(appVerifier)
            // alert("SMS sent");
            // Vue.$toast.success(
            //   'Yet another toast notification!',{
            //     position: 'bottom'
            //   }
            // );
            Vue.notify({
              group: "foo",

              text: "Verification Code Sent"
            });
            eventBus.$emit("pass", phoneNumber);
            //return confirmationResult.confirm(otp)
          })
          .catch(function(err) {
            console.log(err);

            alert("SMS not sent");
          });
        // grecaptcha.reset(window.recaptchaWidgetId);
      }
      //myLoader.val=false;
    },

    verifyOTP() {
      event.preventDefault();

      let vm = this;
      let code = vm.otp;
      //var user
      window.confirmationResult
        .confirm(code.toString())
        .then(function(result) {
          console.log(result);
          var user = result.user;
          console.log(user);
          console.log("User Signed In successfully!");
          vm.$router.push({ path: "/home" });
          vm.load = false;
        })
        .catch(function(err) {
          console.log(err);
          alert("Invalid OTP");
        });
    },
    sess() {
      this.load = !false;
      setTimeout(() => {
        this.load = !true;
      }, 2000);
    },

    initReCaptcha() {
      setTimeout(() => {
        let vm = this;
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
            "expired-callback": function() {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            }
          }
        );
        //
        window.recaptchaVerifier;
      }, 1000);
    }
  },
  created() {
    this.initReCaptcha();
  }
};
</script>

<style  scoped>
input {
  outline: none;
  border: none;
}
section {
  margin-bottom: 60px;
}
.aq {
  -webkit-box-flex: 1;
  flex: 1;
  box-sizing: border-box;
  margin-bottom: 30px;
  min-width: 0;
  margin: 200px;
}
.zq {
  align: center;
}
.aw {
  display: -webkit-box;
  display: flex;
  box-sizing: border-box;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: center;
}
.ae {
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  align: center;
  border-radius: 10px;
  background-color: #fff;
  background-color: var(--color-white);
  color: #0e141e;
  color: var(--color-text-dark);
}
.form {
  width: 500px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 55px 45px 55px;
}
.hd {
  background-color: #fff;
  padding: 15px 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  max-width: 1365px;
  margin: 0 auto;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}
.hd1 {
  max-width: 136px;
  margin: 0 auto;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  padding: 0 0px;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 30%;
  float: left;
}
.hd2 {
  display: inline-block;
  vertical-align: middle;
  width: 125px;
  height: 100px;
  cursor: pointer;

  margin-right: 20px;
  display: flex;
}
.hd4 {
  background-size: auto;
  background-size: contain;
  width: 104px;
  height: 32px;
  margin-left: 16px;
}
.hdright {
  float: right;
  width: 25%;
  padding: 7px 20px;
  padding-left: 90%;

border-radius: 50px;
min-width: 0px;
border: none;
color:rgb(92, 94, 118);
float: right;
font-size: 12px;
text-transform: uppercase;
cursor: pointer;
text-align: right;
padding: 7px 14px;
background-position: 90% 10%;
text-decoration: none;

}
.cus1 {
  cursor: pointer;
  padding: 50px;
}
.cus {
  cursor: pointer;
}
.bmail{
  text-transform: lowercase;
}
.welcome {
  display: block;
  font-family: Poppins-Bold;
  font-size: 30px;
  color: #333;
  line-height: 1.2;
  text-align: center;
}
.input100 {
  width: 100%;
  position: relative;
  border-bottom: 2px solid #d9d9d9;
  padding-bottom: 13px;
  margin-bottom: 27px;
  position: relative;
}
.input10 {
  font-family: Poppins-Regular;
  font-size: 20px;
  color: #111;
  line-height: 1.5;
  padding-right: 350px;
  display: table-row;
}
.input101 {
  font-family: Poppins-Regular;
  font-size: 20px;
  color: #111;
  line-height: 1.5;
  padding-right: 350px;
  margin-bottom: 20px;
  display: table-row;
}

.input1 {
  display: block;
  width: 100%;
  background: transparent;
  font-family: Poppins-Medium;
  font-size: 18px;
  color: #333333;
  line-height: 1.2;
  padding: 0 5px;
      transition: all 250ms ease-in-out;
}
.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-input100::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  background: #7f7f7f;
}
.rbutt {
  position: relative;
  display: inline-block;
}
.footer {
  left: 50;

  width: 100%;
  margin-top: 0.01em;
  text-align: center;
}
.btn1 {
  background-color: #ff527b;

  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 15px;
  display: block;
  width: 100%;
  border: 0px;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-family: Whitney;
  transition: all 0.3s ease;
  border: transparent;
  box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16),
    0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17, 22, 26, 0.08);
  user-select: none;
  margin-top: 20px;
}
.btn1:hover{
  filter: brightness(1.2);
}

label.radio {
  position: relative;
  display: inline-block;
  margin: 5px 20px 15px 0;
  cursor: pointer;
}
.red {
  color: red;
}
.question span {
  margin-left: 30px;
}
label.radio:before {
  content: "";
  position: absolute;
  left: 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
input[type="radio"]:checked + label:before,
label.radio:hover:before {
  border: 2px solid #aa1409;
}
label.radio:after {
  content: "";
  position: absolute;
  top: 6px;
  left: 5px;
  width: 8px;
  height: 4px;
  border: 3px solid #aa1409;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  opacity: 0;
}
body,
div,
input,
label {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}

.resendOtp {
  padding: 0;
  border: none;
  color: #2b813e;
  font-size: 18px;
  font-weight: 500;
  background-color: #fff;
  margin-top: 30px;
  cursor: pointer;
  display: block;
}
.sent2 {
  margin-bottom: 10px;
}
</style>