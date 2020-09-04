<template>
  <div>
    <header class="hd">
      <div class="hd1">
        <a class="hd2" href="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kisanfeedback-b2c73.appspot.com/o/KisaanassistMedia%2FKisaanAssistL1.png?alt=media&token=bd2894cc-8482-460b-950f-c4fc00be0560"
          />
        </a>
      </div>
      <div class="hdright">
        <a class="cus1">
          Contact :
          <b>9170382425</b>
        </a>
        <br />
        <a class="cus">
          Email :
          <b class="bmail">kisaanassist@gmail.com</b>
        </a>
      </div>
    </header>
    <loads v-if="load" />
    <div class="hello" v-if="!load">
      <div class="aq" v-if="step === 1">
        <section class="zq">
          <div class="aw">
            <div class="ae">
              <div class="form">
                <!-- <img class="im1" src="https://firebasestorage.googleapis.com/v0/b/kisanfeedback-b2c73.appspot.com/o/KisaanassistMedia%2Fmelissa-askew-26341-unsplash-720x540.jpg?alt=media&token=53539425-44a6-43c1-a5e6-d7552e689b08"/> -->
                <form>
                  <!-- <h1>Hello</h1> -->
                  <div>
                    <div class="form-group">
                      <input 
                        id="firstname"
                        type="text"
                        v-model="KisanData.fname"
                        name="firstname"
                      required />
                      <label for="name">First Name</label>
                    </div>
                    <div class="form-group">
                      <input 
                        id="lastname"
                        type="text"
                        v-model="KisanData.lname"
                        name="lastname"
                      required />
                      <label for="name">Last Name</label>
                    </div>
                    <div class="form-group">
                      <input 
                        id="village"
                        type="text"
                        v-model="KisanData.village"
                        name="village"
                      required />
                      <label for="name">Village</label>
                    </div>
                    <div class="form-group">
                      <input 
                        type="number"
                        v-model="PhoneNo"
                      required />
                      <label for="name">Mobile Number</label>
                    </div>
                    <!-- <div class="input100" data-validate="First Name is required">
                      <span class="input10" for="name">First Name</span>
                      <input
                        id="name"
                        class="input1"
                        type="text"
                        v-model="KisanData.fname"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                      <span class="focus-input100"></span>
                    </div> -->
                    
                    <!-- <div class="input100" data-validate="Name is required">
                      <span class="input10" for="name">Last Name</span>
                      <input
                        id="name"
                        class="input1"
                        type="text"
                        v-model="KisanData.lname"
                        name="name"
                        placeholder="Enter your last name"
                      />
                      <span class="focus-input100"></span>
                    </div> -->
                    <!-- <div class="input100" data-validate="Name is required">
                      <span class="input10">Village</span>
                      <input
                        class="input1"
                        id="village"
                        type="text"
                        v-model="KisanData.village"
                        name="village"
                        placeholder="Enter your Village"
                        required
                      />
                      <span class="focus-input100"></span>
                    </div> -->
                  </div>
                  <!-- <div class="input2">
                  <label class="input21">Needed of the goods</label>
                  <div class="with">
                    <p class="p1">
                      <label class="lb">
                        <input class="gap" name="group3" type="radio" @change="onChange($event.target.value)" value="Yes" checked />
                        <span class="rd">Yes</span>
                      </label>
                    </p>
                    <p class="p1">
                      <label class="lb">
                        <input class="gap" name="group3" type="radio" @change="onChange($event.target.value)" value="0"  checked />
                        <span>No</span>
                      </label>
                    </p>
                  </div>

                  <span class="focus-input100"></span>
                  </div>-->
                  <!-- <div class="input100" data-validate="Name is required">
                    <span class="input10" for="name">Phone No.</span>
                    <input
                      id="name"
                      class="input1"
                      type="number"
                      v-model="PhoneNo"
                      name="name"
                      placeholder="Enter your Phone Number"
                    />
                    <span class="focus-input100"></span>
                  </div> -->
                  <div class="footer">
                    <button type="submit" class="btn1" @click.prevent="next()">Next</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="aq" v-if="step === 2">
        <section class="zq">
          <div class="aw">
            <div class="ae">
              <form class="form">
                
                <p class="p11">Kya Aap Apna Gehu sarkari rate pa bechna chahte hain</p>
                <div class="inputGroup">
                  
                  <input
                    class="input"
                    id="radio1"
                    name="radio"
                    type="radio"
                    @change="onChange($event.target.value)"
                    value="Yes"
                    checked
                  />
                  <label for="radio1">Yes</label>
                </div>
                <div class="inputGroup">
                  <input
                    id="radio2"
                    name="radio"
                    type="radio"
                    @change="onChange($event.target.value)"
                    value="No"
                    checked
                  />
                  <label for="radio2">No</label>
                </div>
                <div class="footer">
                  <button type="submit" class="btn2" @click.prevent="prev()">Back</button>
                  <button type="submit" class="btn1" @click.prevent="next()">Next</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="aq" v-if="step === 3">
        <section class="zq">
          <div class="aw">
            <div class="ae">
              <form class="form">
                <p class="p11">Aap Apna Gehu Kisko bechte hain FCI ko ya private vendor ko</p>
                <div class="inputGroup">
                  <input
                    class="input"
                    id="radio1"
                    name="radio"
                    type="radio"
                    @change="onChange2($event.target.value)"
                    value="Private"
                    checked
                  />
                  <label for="radio1">Private</label>
                </div>
                <div class="inputGroup">
                  <input
                    id="radio2"
                    name="radio"
                    type="radio"
                    @change="onChange2($event.target.value)"
                    value="Govt."
                    checked
                  />
                  <label for="radio2">Govt.</label>
                </div>
                <div class="footer">
                  <button type="submit" class="btn2" @click.prevent="prev()">Back</button>
                  <button type="submit" class="btn1" @click.prevent="next()">Next</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="aq" v-if="step === 4">
        <section class="zq">
          <div class="aw">
            <div class="ae">
              <form class="form">
                <p class="p11">Agar aap private mai bechte ho toh aapko kitne milta h</p>
                <div class="inputGroup">
                  <input
                    class="input"
                    id="radio1"
                    name="radio"
                    type="radio"
                    @change="onChange3($event.target.value)"
                    value="₹100 qaam per quintal"
                    checked
                  />
                  <label for="radio1">₹100 kaam per quintal</label>
                </div>
                <div class="inputGroup">
                  <input
                    id="radio2"
                    name="radio"
                    type="radio"
                    @change="onChange3($event.target.value)"
                    value="₹50 qaam per quintal"
                    checked
                  />
                  <label for="radio2">₹50 kaam per quintal</label>
                </div>
                <div class="footer">
                  <button type="submit" class="btn2" @click.prevent="prev()">Back</button>
                  <button type="submit" class="btn1" @click.prevent="next()">Next</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="aq" v-if="step === 5">
        <section class="zq">
          <div class="aw">
            <div class="ae">
              <form class="form">
                <p
                  class="p11"
                >Agar humari Company aapko Sarkari rate da aur pickup free mai kreaye toh aap humari service use krenge</p>
                <div class="inputGroup">
                  <input
                    class="input"
                    id="radio1"
                    name="radio"
                    type="radio"
                    @change="onChange4($event.target.value)"
                    value="Yes"
                    checked
                  />
                  <label for="radio1">Yes</label>
                </div>
                <div class="inputGroup">
                  <input
                    id="radio2"
                    name="radio"
                    type="radio"
                    @change="onChange4($event.target.value)"
                    value="No"
                    checked
                  />
                  <label for="radio2">No</label>
                </div>
                <div class="footer">
                  <button type="submit" class="btn2" @click.prevent="prev()">Back</button>
                  <button type="submit" class="btn1" @click.prevent="next()">Next</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="aq" v-if="step === 6">
        <section class="zq">
          <div class="aw">
            <div class="ae">
              <form class="form" @submit="feedbackData">
                <p
                  class="p11"
                >Agar hum aapke fasal ka mul aapke account main turant transfer kreaye toh aap pasand krenge use krna</p>
                <div class="inputGroup">
                  <input
                    class="input"
                    id="radio1"
                    name="radio"
                    type="radio"
                    @change="onChange5($event.target.value)"
                    value="Yes"
                    checked
                  />
                  <label for="radio1">Yes</label>
                </div>
                <div class="inputGroup">
                  <input
                    id="radio2"
                    name="radio"
                    type="radio"
                    @change="onChange5($event.target.value)"
                    value="No"
                    checked
                  />
                  <label for="radio2">No</label>
                </div>
                <!-- <div>
                <div class="newradio" role="button"
                id="radio2"
                  name="radio"
                  type="radio"
                  @change="onChange5($event.target.value)"
                  value="No"
                  checked
                >ALex</div>
                </div>-->
                <div class="footer">
                  <button type="button" class="btn2" @click.prevent="prev()">Back</button>
                  <button type="submit" class="btn1">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
//import router from "../router/route"
import { eventBus } from "../main.js";
import axios from "axios";
import loads from "./loads";
//import phoneAuth from "./phoneAuth"
//const API_URL = "http://localhost:3000/User";

export default {
  name: "home",
  components: {
    //phoneAuth,
    loads
  },
  props: {
    phoneNo: Number
  },
  data: () => {
    return {
      PhoneNo: "",
      info: [],
      step: 1,
      load: false,

      childData: "",
      KisanData: {
        fname: "",
        lname: "",
        village: "",
        radio1: "",
        radio2: "",
        radio3: "",
        radio4: "",
        radio5: ""
      }
    };
  },
  // watch: {
  //   phoneNo: function() {
  //     eventBus.$on('pass',this.PhoneNo=this.phoneNo);
  //   }
  // },
  mounted() {
    eventBus.$on("pass", this.PhoneNo);
  },
  // mounted() {
  //   fetch(API_URL)
  //     .then(response => response.json())
  //     .then(result => {
  //       this.info = result;
  //       console.log(result);
  //     });
  // },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    updateMessage(variable) {
      this.childData = variable;
    },
    feedbackData(event) {
      // let KisanData1 = {
      //   name1: this.name1,
      //   village: this.village
      // };
      event.preventDefault();
      console.log(this.KisanData);
      axios
        .post(
          "https://us-central1-second-3f5af.cloudfunctions.net/User",
          {
            PhoneNo: this.PhoneNo,
            name: this.KisanData.fname,
            lname: this.KisanData.lname,
            village: this.KisanData.village,
            radio1: this.KisanData.radio1,
            radio2: this.KisanData.radio2,
            radio3: this.KisanData.radio3,
            radio4: this.KisanData.radio4,
            radio5: this.KisanData.radio5
          },
          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response.data);
          localStorage.setItem("firstname", this.KisanData.fname);
          this.$router.push("/thanku");
        })
        .catch(error => {
          console.log(error);
        });
    },
    onChange(e) {
      this.KisanData.radio1 = e;
    },
    onChange2(e) {
      this.KisanData.radio2 = e;
    },
    onChange3(e) {
      this.KisanData.radio3 = e;
    },
    onChange4(e) {
      this.KisanData.radio4 = e;
    },
    onChange5(e) {
      this.KisanData.radio5 = e;
    },
    sess() {
      this.load = !false;
      setTimeout(() => {
        this.load = !true;
      }, 4000);
    }
    // onChange2(e){
    //   this.KisanData.radio1=e
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  outline: none;
  border: none;
}
section {
  margin-bottom: 60px;
}
select {
  text-transform: none;
}
.p1 {
  margin-left: 10px;
}
.hello {
  margin: 10px;
}
.aq {
  -webkit-box-flex: 1;
  flex: 1;
  box-sizing: border-box;
  margin-bottom: 30px;
  min-width: 0;
  margin: 135px;
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
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
}
.label {
  font-size: 20px;
}
.input {
  margin-top: 6px;
  min-width: 18em;
  height: 37px;
  padding: 0px 10px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  background-color: #f3f3f3;
  border: 0;
  border-radius: 4px;
  margin-bottom: 31px;
  transition: all 250ms ease-in-out;
}
.form {
  width: 500px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 55px 45px 55px;
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
.input1 {
  display: block;
  width: 100%;
  background: transparent;
  font-family: Poppins-Medium;
  font-size: 18px;
  color: #333333;
  line-height: 1.2;
  padding: 0 5px;
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
.selection-2 {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
}
.zq {
  align: center;
}

.lb {
  display: ruby;
  width: 30%;
  cursor: pointer;
  line-height: 10px;
}
.footer {
  left: 50;
  margin-bottom: 90px;
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
  width: 20%;
  border: 0px;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-family: Whitney;
  float: right;
  transition: all 0.3s ease;
  border: transparent;
  box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16),
    0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17, 22, 26, 0.08);
  user-select: none;
}
.btn1:hover {
  filter: brightness(1.2);
}
.btn2 {
  background-color: #ff527b;

  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 15px;
  display: block;
  width: 20%;
  border: 0px;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-family: Whitney;
  float: left;
  transition: all 0.3s ease;
  border: transparent;
  box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16),
    0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17, 22, 26, 0.08);
  user-select: none;
}
.btn2:hover {
  filter: brightness(1.2);
}
.input2 {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  margin-bottom: 15px;
}
.p {
  padding-inline: 5px;
}
.input21 {
  margin-bottom: 10px;
  display: flex;
}
.with {
  display: inline-flex;

  margin-right: 10px;
  vertical-align: middle;
}
.rd::after {
  display: ruby;
  margin-left: 10px;
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
  eight: 56px;
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
  color: rgb(92, 94, 118);
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

.inputGroup {
  background-color: #24736863;
  display: block;
  margin: 10px 0;
  position: relative;
}
.inputGroup label {
  padding: 12px 30px;
  width: 100%;
  display: block;
  text-align: left;
  color: #3c454c;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;
}
.inputGroup label::before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  content: "";
  background-color: #5562eb;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale3d(1, 1, 1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: -1;
}

.inputGroup label::after {
  width: 32px;
  height: 32px;
  content: "";
  border: 2px solid #d1d7dc;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
  background-repeat: no-repeat;
  background-position: 2px 3px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 200ms ease-in;
}

.inputGroup input:checked ~ label {
  color: #fff;
}
.inputGroup input:checked ~ label::before {
  transform: translate(-50%, -50%) scale3d(56, 56, 1);
  opacity: 1;
}

.inputGroup input:checked ~ label::after {
  background-color: #54e0c7;
  border-color: #54e0c7;
}

.inputGroup input {
  width: 32px;
  height: 32px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
}

.form1 {
  padding: 0 16px;
  max-width: 550px;
  margin: 50px auto;
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
}

.body {
  background-color: #d1d7dc;
  font-family: "Fira Sans", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.html {
  box-sizing: border-box;
}

.code {
  background-color: #9aa3ac;
  padding: 0 8px;
}
.im1 {
  max-width: 100px;
  max-height: 100px;
}
.bmail {
  text-transform: lowercase;
}
.newradio {
  background: #fff;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  color: #202124;
  cursor: pointer;
  line-height: 50px;
  margin: 8px 0;
  padding: 0 10px;
  -webkit-transition: 0.2s, -webkit-box-shadow 0.2s;
  transition: 0.2s, ease-in.2s;
  -o-transition: 0.2s, box-shadow 0.2s;
  transition: 0.2s, box-shadow 0.2s;
  transition: 0.2s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
}
.newradio::before {
  background-color: blue;
}
.p11 {
  font-size: 30px;
  font-weight: 500;
  line-height: 110%;
  margin: 0;
  padding: 20px 48px 14px 56px;
  z-index: 2;
  display: contents;
}
@import url(
  https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,
  300,
  400,
  600,
  700,
  900
);
c
</style>
