 const degreeValue = document.querySelector(".inputValue")
 const unitValue = document.querySelector("#unitValue")
 const result =  document.querySelector(".result")
 const formula = document.querySelector(".formula")
   degreeValue.addEventListener("input", function(e){
    const degreeValue = e.target.value
      
     unitValue.addEventListener("input", function(e){
        const unitValue = e.target.value
        if(unitValue == "K"){
            const kelvin = Number(degreeValue) + 273.15
            result.textContent = `${kelvin}K`;
              formula.textContent = `${degreeValue}°C +273.15 = ${kelvin.toFixed(2)}K`
            
        }
       
        if(unitValue == "F"){
            const  fahrenheit = (degreeValue * 9/5) +32;
            result.textContent = `${fahrenheit}°F`
            formula.textContent = `${degreeValue}°F * 9/5 = ${fahrenheit.toFixed(3)}F`
        }
        if(unitValue == "C"){
            const celsius = (degreeValue-32) * 5/9 ;
            result.textContent = `${celsius.toFixed(2)}°C`
            formula.textContent = `${degreeValue}°C -32 = ${celsius.toFixed(2)}C`  
          
        }
        
     })
   })
 