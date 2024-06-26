// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    return Math.abs(42 - pickup);
}
function distanceFromHqInFeet(dist){
    return (distanceFromHqInBlocks(dist) * 264);
}
function distanceTravelledInFeet(start , destination){
    return Math.abs((start-destination) *264);
}
function calculatesFarePrice(start , destination){
    return distanceTravelledInFeet(start ,destination) <= 400? 0 :
        distanceTravelledInFeet(start , destination) <= 2000? (distanceTravelledInFeet(start , destination) - 400) * 0.02 :
                distanceTravelledInFeet(start , destination) <= 2500? 25 :
                    'cannot travel that far';
}
