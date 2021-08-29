
// const key = 6cba6a62dda39a424305714917380c87



const btn =document.getElementById('btn')
btn.addEventListener('click', ()=>{
const input =document.getElementById('input')
const inputValue=input.value ;
console.log(inputValue)
fetchdata(inputValue)

input.value = ""
})


const fetchdata= async(inputVale)=>{
 
          const api = ` https://api.openweathermap.org/data/2.5/weather?q=${inputVale}&appid=6cba6a62dda39a424305714917380c87`;
          console.log(api);
          const res = await fetch(api);
          const data = await res.json();
          dataDisplay(data);
   
  

}

const dataDisplay =(getData)=>{
    const display =document.getElementById('display')
    display.innerHTML =''
    const div =document.createElement('div')
    div.classList.add('col')
    const {name ,sys,main,weather} =getData
    div.innerHTML = `
    <div class="card mt-2 text-center mx-auto text-light py-5 shadow" style="max-width: 18rem" >
        <div class="text-warning fs-1"><i class="fas fa-cloud"></i></div>
        <h2>City :${name},${sys.country} </h2>
        <h6>Temp : ${Math.floor(main.temp - 273)} °C</h6>
        <h6>Weather: ${weather[0].description}</h6>
    </div>
    `;
    display.appendChild(div)
    console.log(getData)
}
