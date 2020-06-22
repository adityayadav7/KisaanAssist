const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
const database=admin.firestore()

//var express = require("express");
const cors = require('cors')({origin:true});
//var bodyParser = require("body-parser");
//const path = require("path");
//const User = require('./model/User');

//var app = express();


//app.use(bodyParser.json());
//app.use(cors);
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'detailform')))
//exports.User = functions.https.onRequest(app);

// const getUserData=(res)=>{
//   var users=[]; 
//       return database.on('value',(snapshot)=>{
//         snapshot.forEach((user)=>{
//           users.push({
//             users:user.val()
//           });
//         });
//         res.status(200).json(users)
//       },(error)=>{
//         res.status(error.code).json({
//           message:`Something worng. $(error.message)`
//         })
//       })
// }
function postUser(req,res){
  //const obj=JSON.stringify(result.body);
  //     const Udata =  {
  //       Public: {
  //           fname: this.obj.fname,
  //           village:obj.fname
  //       }  
  //   };
   return database.collection('users').add({
      "FirstName": req.body.name,
      "LastName":req.body.lname,
      "Village": req.body.village,
      "Radio":req.body.radio
  }
      ).then(ref=>{
        console.log(ref.id);
        res.status(201).send("store");
      }).catch((err)=>{
        res.status(err.code).json({
          message:`Something worng. $(error.message)`
        })
      })
}
exports.User=  functions.https.onRequest((req,res)=>{
  return cors(req,res,()=>{
      if(req.method!=='POST'){
        return res.send("Not")
      }
       postUser(req,res)
      
    })
  })

// exports.User=functions.https.onRequest((req,res)=>{
//   return cors(req,res ,()=>{
//       if(req.method==='GET'){
//         getUserData(res);
//       }
       
//       getUserData(res);
//   })
// })