// Block chain = linked list, each item contain hash of previous
const BrewChain = function() {
  let chain = [];
  let currentBlock = {};
  let genesisBlock = {};

  // Create blockchain with the initial genesis block
  function init() {
    // Genesis block: Begin the chain at element 0
    // Start of the linked list
    genesisBlock = {
      index: 0,
      timestamp: new Date().getTime(),
      data: "Our genesis data",
      previousHash: "-1" // No previous block
    };

    genesisBlock.hash = createHash(genesisBlock);
    chain.push(genesisBlock);
    currentBlock = genesisBlock;
    console.log(genesisBlock.hash);
  }

  function createHash({ timestamp, data, index, previousHash }) {
    return Crypto.createHash("SHA256")
      .update(timestamp + data + index + previousHash)
      .digest("hex");
  }

  // Each block = data, hash of previous block
  // Need timestamp, index, data, hash, previous block hash
};

let myBrew = new BrewChain();
myBrew.init();
