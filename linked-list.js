/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.vals = vals
    for (let val of vals) this.push(val);

  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++

  }

  /** pop(): return & remove last item. */

  pop() {
    let current, prevNode
    if (this.head === null) { return null }
    else if (this.head.next === null) {
      current = this.head
      this.head = null
      this.tail = null
      this.length--
      return current.val
    } else {
      current = this.head
      while (current.next !== this.tail) {
        current = current.next
      }
      prevNode = this.tail
      this.tail = current
      current.next = null
      this.length--
      return prevNode.val
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let current, nextNode
    if (this.head === null) { return null }
    else if (this.head.next === null) {
      current = this.head
      this.head = null
      this.tail = null
      this.length--
      return current.val
    } else {
      current = this.head
      nextNode = this.head.next
      this.head = nextNode
      current.next = null
      this.length--
      return current.val
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    return this.vals[idx]
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    let currentNode = this.head
    let currentVal = this.getAt(idx)


    while (currentNode && currentNode.val) {
      if (currentNode.val === currentVal) {
        currentNode.val = val
        this.vals[idx] = val
        return
      }
      currentNode = currentNode.next
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    let newNode = new Node(val)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else if (idx === this.length) {
      this.push(val)
    }
    else {
      let i = 0
      let current = this.head
      let previous
      while (i++ < idx) {
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.next = current

    }
    this.length++
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) {
      let val = this.head.val
      this.head = this.head.next
      if (this.length < 2) { this.tail = this.head }
      this.length--
      return val
    }
    if (idx === this.length - 1) {
      this.pop()
    }

    let i = 0
    let current = this.head
    let previous
    while (i++ < idx) {
      previous = current
      current = current.next
    }
    let val = current.val
    previous.next = current.next
    current.next = null
    this.length--
    return val

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0
    } else {
      let initial = 0
      let sum = this.vals.reduce((accumulator, currentVal) => accumulator + currentVal, initial)
      let ave = sum / this.length
      return ave
    }
  }
}

module.exports = LinkedList;
