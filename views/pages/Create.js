

///   Mayraqaxaqneri ev erkrneri tvyalner@ grenq db - um


const express = require('express')
 
const {MongoClient}= require('mongodb')

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url)



let CountWithCity=[
    {
        "country": "Afghanistan",
        "city": "Kabul"
    },
    {
        "country": "Albania",
        "city": "Tirana"
    },
    {
        "country": "Algeria",
        "city": "Alger"
    },
    
    {
        "country": "Andorra",
        "city": "Andorra la Vella"
    },
    {
        "country": "Angola",
        "city": "Luanda"
    },
   
    
   
    {
        "country": "Argentina",
        "city": "Buenos Aires"
    },
    {
        "country": "Armenia",
        "city": "Yerevan"
    },
  
    {
        "country": "Australia",
        "city": "Canberra"
    },
    {
        "country": "Austria",
        "city": "Wien"
    },
    {
        "country": "Azerbaijan",
        "city": "Baku"
    },
    
    {
        "country": "Bahrain",
        "city": "al-Manama"
    },
    {
        "country": "Bangladesh",
        "city": "Dhaka"
    },
    {
        "country": "Barbados",
        "city": "Bridgetown"
    },
    {
        "country": "Belarus",
        "city": "Minsk"
    },
    {
        "country": "Belgium",
        "city": "Bruxelles [Brussel]"
    },
   
  
    {
        "country": "Bermuda",
        "city": "Hamilton"
    },
    {
        "country": "Bhutan",
        "city": "Thimphu"
    },
    {
        "country": "Bolivia",
        "city": "La Paz"
    },
    {
        "country": "Bosnia and Herzegovina",
        "city": "Sarajevo"
    },
  
   
    {
        "country": "Brazil",
        "city": "Brasília"
    },
    
    {
        "country": "Brunei",
        "city": "Bandar Seri Begawan"
    },
    {
        "country": "Bulgaria",
        "city": "Sofia"
    },
    {
        "country": "Burkina Faso",
        "city": "Ouagadougou"
    },
    {
        "country": "Burundi",
        "city": "Bujumbura"
    },
    {
        "country": "Cambodia",
        "city": "Phnom Penh"
    },
    {
        "country": "Cameroon",
        "city": "Yaound"
    },
    {
        "country": "Canada",
        "city": "Ottawa"
    },
   
    
    {
        "country": "Central African Republic",
        "city": "Bangui"
    },
    {
        "country": "Chad",
        "city": "N'Djam"
    },
    {
        "country": "Chile",
        "city": "Santiago de Chile"
    },
    {
        "country": "China",
        "city": "Peking"
    },
    {
        "country": "Christmas Island",
        "city": "Flying Fish Cove"
    },
    
    {
        "country": "Colombia",
        "city": "Santaf"
    },
   
    {
        "country": "Congo",
        "city": "Brazzaville"
    },
    
    {
        "country": "Costa Rica",
        "city": "San José"
    },
    {
        "country": "Croatia",
        "city": "Zagreb"
    },
    {
        "country": "Cuba",
        "city": "La Habana"
    },
    {
        "country": "Cyprus",
        "city": "Nicosia"
    },
    {
        "country": "Czech Republic",
        "city": "Praha"
    },
    {
        "country": "Denmark",
        "city": "Copenhagen"
    },
    
    {
        "country": "Dominica",
        "city": "Roseau"
    },
    {
        "country": "Dominican Republic",
        "city": "Santo Domingo de Guzm"
    },
    
    {
        "country": "Ecuador",
        "city": "Quito"
    },
    {
        "country": "Egypt",
        "city": "Cairo"
    },
    {
        "country": "El Salvador",
        "city": "San Salvador"
    },
    {
        "country": "England",
        "city": "London"
    },
    {
        "country": "Equatorial Guinea",
        "city": "Malabo"
    },
   
    {
        "country": "Estonia",
        "city": "Tallinn"
    },
    {
        "country": "Ethiopia",
        "city": "Addis Abeba"
    },
  
   
  
    {
        "country": "Finland",
        "city": "Helsinki [Helsingfors]"
    },
    {
        "country": "France",
        "city": "Paris"
    },
  
   
   
   
    {
        "country": "Gambia",
        "city": "Banjul"
    },
    {
        "country": "Georgia",
        "city": "Tbilisi"
    },
    {
        "country": "Germany",
        "city": "Berlin"
    },
    
    {
        "country": "Gibraltar",
        "city": "Gibraltar"
    },
    {
        "country": "Greece",
        "city": "Athenai"
    },
    {
        "country": "Greenland",
        "city": "Nuuk"
    },
    {
        "country": "Grenada",
        "city": "Saint George's"
    },
  
    {
        "country": "Guatemala",
        "city": "Ciudad de Guatemala"
    },
    {
        "country": "Guinea",
        "city": "Conakry"
    },
  
 
    {
        "country": "Haiti",
        "city": "Port-au-Prince"
    },
   
    {
        "country": "Honduras",
        "city": "Tegucigalpa"
    },
    {
        "country": "Hong Kong",
        "city": "Victoria"
    },
    {
        "country": "Hungary",
        "city": "Budapest"
    },
    {
        "country": "Iceland",
        "city": "Reykjavík"
    },
    {
        "country": "India",
        "city": "New Delhi"
    },
    {
        "country": "Indonesia",
        "city": "Jakarta"
    },
    {
        "country": "Iran",
        "city": "Tehran"
    },
    {
        "country": "Iraq",
        "city": "Baghdad"
    },
    {
        "country": "Ireland",
        "city": "Dublin"
    },
    {
        "country": "Israel",
        "city": "Jerusalem"
    },
    {
        "country": "Italy",
        "city": "Roma"
    },
 
    {
        "country": "Jamaica",
        "city": "Kingston"
    },
    {
        "country": "Japan",
        "city": "Tokyo"
    },
    {
        "country": "Jordan",
        "city": "Amman"
    },
    {
        "country": "Kazakhstan",
        "city": "Astana"
    },
    {
        "country": "Kenya",
        "city": "Nairobi"
    },
   
    {
        "country": "Kuwait",
        "city": "Kuwait"
    },
    {
        "country": "Kyrgyzstan",
        "city": "Bishkek"
    },
    {
        "country": "Laos",
        "city": "Vientiane"
    },
    {
        "country": "Latvia",
        "city": "Riga"
    },
    {
        "country": "Lebanon",
        "city": "Beirut"
    },
  
    {
        "country": "Liberia",
        "city": "Monrovia"
    },
   
    {
        "country": "Liechtenstein",
        "city": "Vaduz"
    },
    {
        "country": "Lithuania",
        "city": "Vilnius"
    },
    {
        "country": "Luxembourg",
        "city": "Luxembourg [Luxemburg/L"
    },
   
    {
        "country": "Madagascar",
        "city": "Antananarivo"
    },
    
    {
        "country": "Malaysia",
        "city": "Kuala Lumpur"
    },
    {
        "country": "Maldives",
        "city": "Male"
    },
    {
        "country": "Mali",
        "city": "Bamako"
    },
    {
        "country": "Malta",
        "city": "Valletta"
    },
    
    {
        "country": "Martinique",
        "city": "Fort-de-France"
    },
    {
        "country": "Mauritania",
        "city": "Nouakchott"
    },
   

    {
        "country": "Mexico",
        "city": "Ciudad de M"
    },
    
    {
        "country": "Moldova",
        "city": "Chisinau"
    },
    {
        "country": "Monaco",
        "city": "Monaco-Ville"
    },
    {
        "country": "Mongolia",
        "city": "Ulan Bator"
    },
    {
        "country": "Montenegro",
        "city": "Podgorica"
    },
   
    {
        "country": "Morocco",
        "city": "Rabat"
    },
    {
        "country": "Mozambique",
        "city": "Maputo"
    },
    {
        "country": "Myanmar",
        "city": "Rangoon (Yangon)"
    },
    {
        "country": "Namibia",
        "city": "Windhoek"
    },
    {
        "country": "Nauru",
        "city": "Yaren"
    },
    {
        "country": "Nepal",
        "city": "Kathmandu"
    },
    {
        "country": "Netherlands",
        "city": "Amsterdam"
    },
   
    
    {
        "country": "New Zealand",
        "city": "Wellington"
    },
    {
        "country": "Nicaragua",
        "city": "Managua"
    },
    {
        "country": "Niger",
        "city": "Niamey"
    },
    {
        "country": "Nigeria",
        "city": "Abuja"
    },
   
   
    {
        "country": "North Korea",
        "city": "Pyongyang"
    },
    {
        "country": "Northern Ireland",
        "city": "Belfast"
    },
   
    {
        "country": "Norway",
        "city": "Oslo"
    },
    {
        "country": "Oman",
        "city": "Masqat"
    },
    {
        "country": "Pakistan",
        "city": "Islamabad"
    },
    
    {
        "country": "Palestine",
        "city": "Gaza"
    },
    {
        "country": "Panama",
        "city": "Ciudad de Panamá"
    },
    
    {
        "country": "Paraguay",
        "city": "Asunción"
    },
    {
        "country": "Peru",
        "city": "Lima"
    },
    {
        "country": "Philippines",
        "city": "Manila"
    },
   
    {
        "country": "Poland",
        "city": "Warszawa"
    },
    {
        "country": "Portugal",
        "city": "Lisboa"
    },
    {
        "country": "Puerto Rico",
        "city": "San Juan"
    },
    {
        "country": "Qatar",
        "city": "Doha"
    },
    
    {
        "country": "Romania",
        "city": "Bucuresti"
    },
    {
        "country": "Russian Federation",
        "city": "Moscow"
    },
    {
        "country": "Rwanda",
        "city": "Kigali"
    },
    {
        "country": "Saint Helena",
        "city": "Jamestown"
    },
    
    {
        "country": "Saint Lucia",
        "city": "Castries"
    },
    
    {
        "country": "San Marino",
        "city": "San Marino"
    },
    
      {  "country": "Saudi Arabia",
        "city": "Riyadh"
},
    {
        "country": "Scotland",
        "city": "Edinburgh"
    },
    {
        "country": "Senegal",
        "city": "Dakar"
    },
    {
        "country": "Serbia",
        "city": "Belgrade"
    },
 
   
    {
        "country": "Singapore",
        "city": "Singapore"
    },
    {
        "country": "Slovakia",
        "city": "Bratislava"
    },
    {
        "country": "Slovenia",
        "city": "Ljubljana"
    },
   
    {
        "country": "Somalia",
        "city": "Mogadishu"
    },
    {
        "country": "South Africa",
        "city": "Pretoria"
    },
  
    {
        "country": "South Korea",
        "city": "Seoul"
    },
    {
        "country": "South Sudan",
        "city": "Juba"
    },
    {
        "country": "Spain",
        "city": "Madrid"
    },
    {
        "country": "Sri Lanka",
        "city": "Colombo, Sri Jayawardenepura Kotte"
    },
    {
        "country": "Sudan",
        "city": "Khartum"
    },
    {
        "country": "Suriname",
        "city": "Paramaribo"
    },
    {
        "country": "Svalbard and Jan Mayen",
        "city": "Longyearbyen"
    },
    {
        "country": "Swaziland",
        "city": "Mbabane"
    },
    {
        "country": "Sweden",
        "city": "Stockholm"
    },
    {
        "country": "Switzerland",
        "city": "Bern"
    },
    {
        "country": "Syria",
        "city": "Damascus"
    },
    {
        "country": "Tajikistan",
        "city": "Dushanbe"
    },
    {
        "country": "Tanzania",
        "city": "Dodoma"
    },
    {
        "country": "Thailand",
        "city": "Bangkok"
    },
   
    {
        "country": "Togo",
        "city": "Lomé"
    },
   
    
    {
        "country": "Trinidad and Tobago",
        "city": "Port-of-Spain"
    },
    {
        "country": "Tunisia",
        "city": "Tunis"
    },
    {
        "country": "Turkey",
        "city": "Ankara"
    },
    {
        "country": "Turkmenistan",
        "city": "Ashgabat"
    },
   
   
    {
        "country": "Uganda",
        "city": "Kampala"
    },
    {
        "country": "Ukraine",
        "city": "Kyiv"
    },
    {
        "country": "United Arab Emirates",
        "city": "Abu Dhabi"
    },
    {
        "country": "United Kingdom",
        "city": "London"
    },
    {
        "country": "United States",
        "city": "Washington"
    },
   
    {
        "country": "Uruguay",
        "city": "Montevideo"
    },
    {
        "country": "Uzbekistan",
        "city": "Toskent"
    },
   
    {
        "country": "Venezuela",
        "city": "Caracas"
    },
    {
        "country": "Vietnam",
        "city": "Hanoi"
    },
   
   
    {
        "country": "Western Sahara",
        "city": "El-Aai"
    },
    {
        "country": "Yemen",
        "city": "Sanaa"
    },
    {
        "country": "Zambia",
        "city": "Lusaka"
    },
    {
        "country": "Zimbabwe",
        "city": "Harare"
    }
]


async function run(){

try {

const dbMayraqaxaq = client.db("CountryCity");

 let  Mayraqaxaq = dbMayraqaxaq.collection("Mayraqaxaq")

const result = await Mayraqaxaq.insertMany(CountWithCity)

console.log(result)


}finally{

    await client.close()

}

}
run()
//let ParsrCountry = JSON.parse(CountWithCity)

console.log(typeof(CountWithCity[0]))




