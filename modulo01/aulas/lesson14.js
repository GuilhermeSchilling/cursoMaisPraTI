// Estrutura de dados

class Node {
  constructor(data) {
    this.data = data;
    this.next = null; //proximo elemento apontado pelo ponteiro
  }
}

class LinkedList {
  //objeto array do nó -- let arr = new Array()
  constructor() {
    this.head = null; //primeiro elemento da lista
    this.size = 0;
  }

  add(data) {
    //metodo para adicionar na lista -- arr.push
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.size++;
  }

  insertAt(data, index) {
    let newNode = new Node(data);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = this.head; //proximo do novo no vai apontar para o antigo primeiro
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Index fora dos limites!");
    }

    let current = this.head;
    let previous;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  sizeOfList() {
    return this.size;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new LinkedList();

list.add("Formacao +prati");
list.add(true);
list.add(321);
list.add("Teste");
list.insertAt("Abc", 2);
list.removeFrom(3);

list.printList();
console.log(list.indexOf(true));
