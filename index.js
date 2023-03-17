function distanceFromHqInBlocks(block) {
    if (block >= 42) {
      return block - 42;
    } else {
      return 42 - block;
    }
  }
  
  function distanceFromHqInFeet(block) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(block) * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    if (start >= destination) {
      return (start - destination) * feetPerBlock;
    } else {
      return (destination - start) * feetPerBlock;
    }
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  