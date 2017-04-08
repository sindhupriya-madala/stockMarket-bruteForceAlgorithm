var assert = require("chai").assert;
var maxProfit = require("./bruteForce");

describe("maxProfit", function() {
  it("should return maxProfit as 16", function() {
    var array = [45, 24, 35, 31, 40, 38, 11];
    var result = maxProfit(array);
    console.log("test result:",result);
    assert.equal(result, 16, "success!");
  });

  it("should return maxProfit as 39", function() {
    var array = [45, 24, 35, 31, 40, 38, 11, 50];
    var result = maxProfit(array);
    console.log("test result:",result);
    assert.equal(result, 39, "success!");
  });

  it("should return maxProfit as 66", function() {
    var array = [45, 24, 35, 31, 90, 40, 38, 11];
    var result = maxProfit(array);
    console.log("test result:",result);
    assert.equal(result, 66, "success!");
  });

  it("should return maxProfit as -1", function() {
    var array = [45, 24, 11, 7, 5, 3, 1];
    var result = maxProfit(array);
    console.log("test result:",result);
    assert.equal(result, -1, "success!");
  });

});
