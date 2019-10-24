import { Block } from "./block";

export class Blockchain {
  constructor() {
    this.chain = [this.createGenisis()];
    this.complexity = 3;
  }

  //Create first block
  createGenisis() {
    return new Block(
      "10/11/2019",
      {
        coins: 50
      },
      "0"
    );
  }

  //get current block
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  //add new block
  addBlock(block) {
    block.prevHash = this.getLatestBlock().hash;
    block.mineBlock(this.complexity);
    this.chain.push(block);
  }
}
