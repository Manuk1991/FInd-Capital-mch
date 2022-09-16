
const express = require('express')
 
const {MongoClient}= require('mongodb')

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url)
let a ;
const ZangvacCity = [];
async function read (){

try {

    const dbMayraqaxaq = client.db("CountryCity");

    let  Mayraqaxaq = dbMayraqaxaq.collection("Mayraqaxaq")
   
    let result =  Mayraqaxaq.find ()

  
    const ZangvacCity = [];

    await result.forEach((country)=>{

        ZangvacCity.push(country)

    })

//console.log(ZangvacCity)

//console.log(ZangvacCity);

return ZangvacCity;
}finally{

client.close()

}




}



read().then((res)=>{
    a=res
    console.log(a)
})


