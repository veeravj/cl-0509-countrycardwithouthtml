let countriesInfo = [
    
    {name: "India",population: " 1,394,975,829",region: "Asia",flag:"https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",capital: "New delhi"},
    {name: "Germany",population: "81,770,900",region: "Europe",flag:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",capital: "Berlin"},
    {name: "United states",population: "323,947,000",region: "Americas",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",capital: "Washington D.C"},
    {name: "Brazil",population: "206,135,893",region: "Americas",flag:"https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",capital: "Brasilia"},
    {name: "Iceland",population: "334,300",region: "Europe",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",capital: "Reykjavik"}];
 
function countryCard(countryData){
  const container=document.createElement("div");
container.className="container";
container.innerHTML=`<img src="${countryData.flag}" alt="${countryData.name} flag" class="flag">
  <div class="info">
    <h2>${countryData.name}</h2>
    <p><span class="side-heading">Population:</span>${countryData.population}</p>
    <p><span class="side-heading">Region:</span>${countryData.region}</p>
    <p><span class="side-heading">Capital:</span>${countryData.capital}</p>
  </div>
  `;
  document.body.append(container);
}
countriesInfo.forEach(countryCard);