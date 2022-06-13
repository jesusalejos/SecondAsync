const fetchData = require("../utils/utils");
let API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) =>{
    try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    const local = await fetchData(character.location.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(character.gender);
    console.log(origin.dimension);
    console.log(origin.type);
    console.log(origin.created);
    console.log(local.name);
    
    } catch (error) {
        console.log(error);
    }
}

console.log("before");
anotherFunction(API);
console.log("after");