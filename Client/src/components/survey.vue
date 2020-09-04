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
        <a class="cus">Contact :70XXXXX90</a>
        <br />
        <a class="cus">Email : xyz@pqrs.com</a>
      </div>
    </header>
    <div class="aq">
      <section class="zq">
        <div class="aw">
          <div class="ae">
            <form class="form" @submit.prevent="onChange">
              <h2>Kya Aap Apna Ghahu sarkari rate pa bachna chathe hain</h2>
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
                <button type="submit" class="btn1">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld'
export default {
  name: "survey",
 
  data() {
    return {
      Question: {
        radio1: ""
      }
    };
  },
  methods: {
  //   feedbackData(event) {
  //     // let KisanData1 = {
  //     //   name1: this.name1,
  //     //   village: this.village
  //     // };
  //     event.preventDefault();
  //     console.log(this.Question);
  //     axios
  //       .post(
  //         "https://us-central1-second-3f5af.cloudfunctions.net/User",
  //         {
  //           "radio": JSON.stringify(this.Question.radio1)
  //         },
  //         {
  //           headers: {
  //             "content-type": "application/json"
  //           }
  //         }
  //       )
  //       .then(response => {
  //         console.log(response.data);
  //         this.$router.push('/thanku');
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   },
    onChange(e) {
      this.Question.radio1 = e;
      console.log(e);
    }
  }
};
</script>

<style scoped>
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

.form {
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
</style>