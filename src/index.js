import { Block } from "./block";
import { Blockchain } from "./blockchain";

let coin = new Blockchain();
coin.addBlock(new Block("10/10/2019", { coin: 50 }));
coin.addBlock(new Block("10/12/2019", { coin: 100 }));

write(coin);

write(isChainValid(coin));

// Verify the validity of the chain
function isChainValid(blockchain) {
  for (let i = 1; i < blockchain.chain.length; i++) {
    const currentBlock = blockchain.chain[i];
    const prevBlock = blockchain.chain[i - 1];

    if (currentBlock.hash !== currentBlock.calculateHash()) {
      return false;
    }

    if (currentBlock.prevHash !== prevBlock.hash) {
      return false;
    }

    if (blockchain.chain[0] !== blockchain.createGenisis()) {
      write(blockchain.chain[0]);
      write(blockchain.createGenisis());
      return false;
    }
  }
  return true;
}

function write(text) {
  console.log(text);
}
