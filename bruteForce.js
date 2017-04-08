function bruteForce(arrayDates) {
  var maxProfit = 0;
  for( var i in arrayDates) {
    for( var j = i; j < arrayDates.length; j++) {
      if(arrayDates[i] < arrayDates[j] ) {
        var profit = arrayDates[j] - arrayDates[i];
        if(maxProfit < profit) {
          maxProfit = profit;
        }
      }
    }
  }
  return maxProfit > 0 ? maxProfit : -1;
}
//var array = [45, 24, 35, 31, 40, 90, 38, 11, 50];
module.exports = bruteForce;
