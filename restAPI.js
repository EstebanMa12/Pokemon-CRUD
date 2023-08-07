import axios from 'axios'

let URL = "https://pokeapi.co/api/v2/pokemon/1"

const Get= async(URL)=>{
    const {data}=await axios.get(URL);
    console.log(data);
}

Get(URL)