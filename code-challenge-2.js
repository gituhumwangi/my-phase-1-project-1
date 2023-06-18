//variables for the program
const limitSpeed =70

function checkSpeed (initialSpeed) {
    if (initialSpeed <= limitSpeed) {
        return "Ok"
    }
      //Counts the number of demerits on has received below the number of 12
  else {
    const demeritSpeed = 5
    const maximumDemerit = 12
    const overLimit = initialSpeed - limitSpeed
    const tickets = Math.round(overLimit/demeritSpeed)
    //Suspends the driving linsence 
    
    if (tickets >= maximumDemerit) {
      return "Your driving lisence has been suspended."
    }
    
    return `You have a total of ${tickets} demerits`
  }
}