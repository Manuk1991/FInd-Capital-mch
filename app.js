
const express = require("express");
const bodyparser=require("body-parser")
const { MongoClient } = require ("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function BerErkAnuner (){

  try {
  
      const dbMayraqaxaq = client.db("CountryCity");
  
      let  Mayraqaxaq = dbMayraqaxaq.collection("Mayraqaxaq")
     
      let result =  Mayraqaxaq.find ()
  
    
      const ZangvacCity =[];
  
      await result.forEach((country)=>{
  
          ZangvacCity.push(country)
  
      })
  
 return ZangvacCity;
  
  
  
  }finally{
  
  client.close()
  
  }
}


let app = express();

port = 8282;
app.set( "view engine" , "ejs" );

//app.use(bodyparser.urlencoded({ extended: true }))
//app.use(express.json())


app.listen( port, ()=>{
  console.log(`server live in port ${port}`)
})



// amena skzbum eji tesq@

app.get('/' , (req  , res )=>{
  
  console.log("spasel start - in ")
  res.render('pages/indexHost',)
  console.log(req.query)
  //console.log(req.query)
  
}) 

//   start - ic heto 


app.get('/tar' , async (req  , res )=>{

  client.connect()
  // async function called 

   const erkrner  = await BerErkAnuner()
    var Country;
    var Capital;
    var NumLetofCap;
    var obj = {};
  
  
      console.log("start sexmeluc heto Mddli mej ")
  
      // stex kara lini zapros db - in 
      //if(Object.values(req.query)[0] === "startProject"){

      let num = erkrner.length

        let random = Math.round((Math.random()*num))
        obj.Country = erkrner[random].country;
        obj.Capital = erkrner[random].city;


  console.log(" startProject zapros -i mej ")
  
       NumLetofCap = obj.Capital.length;
       obj.Tartiv = NumLetofCap;
       console.log( obj.Country )
       
       res.render( 'pages/indexMid' , obj )
   console.log(obj)



}) 

console.log("endeneened===========")















