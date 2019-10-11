import sha256 from "crypto-js/sha256";
export class Block {
  constructor(timestamp, data, prevHash = "") {
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;

    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(
      this.prevHash + JSON.stringify(this.data) + this.timestamp
    ).toString();
  }
}
