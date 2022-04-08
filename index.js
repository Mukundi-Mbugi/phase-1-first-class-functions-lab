const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers= function(){
    return drivers.slice(0,2)
}


const returnLastTwoDrivers=function(){
    return drivers.slice(-2)
}


const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
    

function createFareMultiplier(number){
    return number**4
}

function createFareMultiplier(number){
    return function fareMultiplier(){
        return number*number
    }
}

function fareDoubler(number){
    return number*2
}

function fareTripler(number){
    return number*3
}

function selectDifferentDrivers(arr,callback){
  return callback(arr)
}


console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers))