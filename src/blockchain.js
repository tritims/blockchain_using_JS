import { Block } from "./block";

export class Blockchain {
  constructor() {
    this.chain = [this.createGenisis()];
  }

  createGenisis() {
    return new Block(
      "10/11/2019",
      {
        coins: 50
      },
      "0"
    );
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block) {
    block.prevHash = this.getLatestBlock().hash;
    block.hash = block.calculateHash();
    this.chain.push(block);
  }
}
