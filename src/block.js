import sha256 from "crypto-js/sha256";
export class Block {
  constructor(timestamp, data, prevHash = "") {
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.nounce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(
      this.prevHash + JSON.stringify(this.data) + this.timestamp + this.nounce
    ).toString();
  }

  mineBlock(complexity) {
    while (
      this.hash.substring(0, complexity) !== Array(complexity + 1).join("0")
    ) {
      this.nounce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined: " + this.hash);
  }
}
