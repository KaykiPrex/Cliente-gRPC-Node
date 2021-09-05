const mydiv = document.querySelector("#mydiv");
const url= 'http://localhost:5500/hello';


function handleRequest() { //axios
    axios.get(url)
    .then(res =>{
        console.log(res);
        holamundo(res);
        
    }) 
}
function holamundo(message){
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
//h1.textContent = `HOLA MUNDO`;
h1.textContent = message.data.responseMessage; // "APIResponse" =: rpc baja(BajaRequest) returns (APIResponse);
h2.textContent = message.data.responseCode;
mydiv.appendChild(h1);
mydiv.appendChild(h2);
 
}
handleRequest();

/*function cargarDatos() {  // FETCH
    fetch(url) 
    .then(res =>{
        console.log(/*JSON.parse(JSON.stringify(res)));
        //document.body.innerHTML = res;
       // holamundo(res);
    }) 

}*/

//holamundo(); 
// cargarDatos(); //FETCH
