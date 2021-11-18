class SingleNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
};

const exportObject = {
  SingleNode: SingleNode,
};

module.exports = exportObject;