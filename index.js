function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  if(rideDistance <= 400){
    return 'This one is on me!'
} else if(rideDistance > 2000 && rideDistance <= 2500){
    return 'I will gladly take your thirty bucks.'
} else {
    return 'No can do.'
}
}
console.log(scuberGreetingForFeet(2501))


function ternaryCheckCity(cityName){
  // Write your code here!
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}
console.log(ternaryCheckCity('Arlington'))

function switchOnCharmFromTip(responseToTip){
  // Write your code here!
  switch(responseToTip) {
    case 'generous' : 
        return 'Thank you so much.'
    case 'not as generous' :
        return 'Thank you.'
    default:'thanks for everything'
        return 'Bye.'
  }
} 
console.log(switchOnCharmFromTip('thanks for everything'))