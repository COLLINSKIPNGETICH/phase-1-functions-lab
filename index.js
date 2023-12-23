// 
function distanceFromHqInBlocks(pickupLocation) {
  // Scuber's headquarters is on 42nd Street
  const hqLocation = 42;
  
  // Return distance in blocks
  const distance = Math.abs(pickupLocation - hqLocation);
  
  return distance;
}
function distanceFromHqInFeet(pickupLocation) {
  // calculates distances below 42nd street
  const blocks = distanceFromHqInBlocks(pickupLocation);
  
  // Each block is 264 feet long
  const feet = blocks * 264;
  
  return feet;
}
function distanceTravelledInFeet(start, destination) {
  // Calculate the distance in blocks
  const blocks = Math.abs(destination - start);
  
  // Each block is 264 feet long
  const feet = blocks * 264;
  
  return feet;
}
function calculatesFarePrice(start, destination) {
  // Calculate the distance in feet and there charges
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  }
  else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  }
  else if (distance <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}

