const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary, "StarNotary Project", "STP", 18, 1000);
};
