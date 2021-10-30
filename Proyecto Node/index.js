// console.log("Hola mundo desde Node!");

const axios = require("axios");

axios
.get("https://reqres.in/api/users?page=2")
.then((rpta)=>{
    console.log(rpta.data);
})
.catch((error)=>{
    console.log(error);
});
