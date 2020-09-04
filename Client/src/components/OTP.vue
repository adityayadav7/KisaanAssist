<template>
  <div id="wrapper">
  <div id="dialog">
    
   
    <div id="form">
      <!-- <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"  :onChangeOTP="onChangeOTP" />
      <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" :onChangeOTP="onChangeOTP" />
      <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" :onChangeOTP="onChangeOTP" />
      <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" :onChangeOTP="onChangeOTP" />
      <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" :onChangeOTP="onChangeOTP" />
      <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" :onChangeOTP="onChangeOTP" /> -->
      <OTPInput class="input"
      type="text"
      :isDisabled="isDisabled"
      :isError="isError"
      :onChangeOTP="onChangeOTP"
      :shouldResetOTP="shouldResetOTP"
      :numberOfInput="6"
    />
    </div>
    
    
    
  </div>
</div>
</template>

<script>
import OTPInput from "vue-otp-input";
export default {
    components: {
    OTPInput
  },
   data() {
    return {
      otp: null,
      isDisabled: false,
      isError: false,
      shouldResetOTP: false
    };
  },

  methods: {
    onChangeOTP(otp) {
      this.otp = otp;
    }
  }
   }
//    body.on('keyup', 'input', goToNextInput);
//   body.on('keydown', 'input', onKeyDown);
//   body.on('click', 'input', onFocus);


</script>

<style>
#wrapper {
	font-family: Lato;
	font-size: 1.5rem;
	text-align: center;
 box-sizing: border-box;
 color: #333;
}
 /* #wrapper #dialog {
 border: solid 1px #ccc;
 margin: 10px auto;
 padding: 20px 30px;
 display: inline-block;
 box-shadow: 0 0 4px #ccc;
 background-color: #faf8f8;
 overflow: hidden;
 position: relative;
 max-width: 450px;
} */
 /* #wrapper #dialog h3 {
 margin: 0 0 10px;
 padding: 0;
 line-height: 1.25;
} */
 /* #wrapper #dialog span {
 font-size: 90%;
} */
#wrapper #dialog #form {
 max-width: 240px;
 margin: 25px auto 0;
}
 #wrapper #dialog #form input {
	margin: 0 5px;
	text-align: center;
	line-height: 30px;
	font-size: 15px;
	border: solid 1px #ccc;
	box-shadow: 0 0 5px #ccc inset;
	outline: none;
	width: 10%;
	transition: all 0.2s ease-in-out;
	border-radius: 3px;
}
 #wrapper #dialog #form input:focus {
	border-color: purple;
	box-shadow: 0 0 5px purple inset;
}
 #wrapper #dialog #form input::selection {
	background: transparent;
}
 /* #wrapper #dialog #form button {
	margin: 30px 0 50px;
	width: 100%;
    padding: 6px;
	background-color: #b85fc6;
	border: none;
	text-transform: uppercase;
} */
 /* #wrapper #dialog .button .close {
	border: solid 2px;
	border-radius: 30px;
	line-height: 19px;
	font-size: 120%;
	width: 22px;
	position: absolute;
	right: 5px;
	top: 5px;
} */
 /* #wrapper #dialog div {
	position: relative;
	z-index: 1;
} */
 /* #wrapper #dialog img {
	position: absolute;
	bottom: -70px;
	right: -63px;
} */
</style>