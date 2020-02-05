// Block chain = linked list, each item contain hash of previous
class BrewChain {
  chain = [];
  currentBlock = {};
  genesisBlock = {};

  // Create blockchain with the initial genesis block
  constructor() {
    // Genesis block: Begin the chain at element 0
    // Start of the linked list
    this.genesisBlock = {
      index: 0,
      timestamp: new Date().getTime(),
      data: "Our genesis data",
      previousHash: "-1" // No previous block
    };
  }

  init() {
    this.genesisBlock.hash = this.createHash(this.genesisBlock);
    this.chain.push(this.genesisBlock);
    this.currentBlock = this.genesisBlock;
    console.log(this.genesisBlock.hash);
  }

  createHash({ timestamp, data, index, previousHash }) {
    const crypto = require("crypto");
    return crypto
      .createHash("SHA256")
      .update(timestamp + data + index + previousHash)
      .digest("hex");
  }

  // Each block = data, hash of previous block
  // Need timestamp, index, data, hash, previous block hash
}

// Test driver code
let myBrew = new BrewChain();
myBrew.init();
