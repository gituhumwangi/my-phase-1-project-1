let Time = function (Time) {
    if (Time==="Months") {
      return "Months"
    }
    else if (Time === "Year") {
      return "Year"
    }
  }
  
  //Calculation of net salary
  
  function calculateNetSalary ( Time, basicSalary, benefits) {
    const gross = basicSalary + benefits
      if (0 < gross && gross <= 24000){
       return gross * (1 - 0.1)
      }
      else if (24001 <= gross && gross <= 32333) {
      return (gross * (1 - 0.25))
              }
      else {
        return gross * (1-0.3)
      }
    // Calculates taxes in Years

      if (0 <= gross && gross <= 288000) {
        return (gross * (1 - -0.1))
      }
      else if (288001 <= gross && gross <= 388000){
        return (gross * (1 - 0.2))
      }
      else {
        return (gross * (1 - 0.3))
      }
  }
  