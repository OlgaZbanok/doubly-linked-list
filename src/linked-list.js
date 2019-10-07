const Node = require('./node');

class LinkedList {
    constructor() {

        this._head = null;
        this._tail = null;
        this.length = 0;


    }

    append(data) {
        let newnode = new Node();
        newnode.data = data;
        newnode.prev = this._tail;
        if (this._tail != null) {
            this._tail.next = newnode;
        }
        this._tail = newnode;
        if (this._head == null) {
            this._head = newnode;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head)
            return this._head.data;
        else return null;
    }

    tail() {
        if (this._tail)
            return this._tail.data;
        else return null;
    }

    at(index) {
        if (this.searchAt(index)) {
            return this.searchAt(index).data;
        } else {
            return null;
        }
    }

    insertAt(index, data) {
        let newnode = new Node();
        newnode.data = data;
        this.length++;
        let item = this.searchAt(index);
        if (item == null) {
            this._head = newnode;
            this._tail = newnode;
            return this;
        }
        if (item.prev == null) {
            this._head = newnode;
            item.prev = newnode;
            newnode.next = item;
        } else {
            item.prev.next = newnode;
            newnode.prev = item.prev;
            newnode.next = item;
            item.prev = newnode;
        }
        return this;
    }

    isEmpty() {
        return this.length ? false : true;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    searchAt(index) {
        let i = 0;
        if (this.length == 0) {
            return null;
        }
        let item = this._head;
        while (i < index) {
            item = item.next;
            i++;
        }
        return item;
    }

    deleteAt(index) {
        let item = this.searchAt(index);
        if (!item) return this;
        if (item.prev == null) {
            this._head = item.next;
        } else {
            item.prev.next = item.next;
        }
        if (item.next == null) {
            this._tail = item.prev;
        } else {
            item.next.prev = item.prev;
        }
        this.length--;
        return this;
    }

    reverse() {
        let item = this._tail;
        this._tail = this._head;
        this._head = item;
        let temp = null;
        if (item.prev == null) return this;
        while (item.prev != this._tail) {
            temp = item.prev;
            item.prev = item.next;
            item.next = temp;
            item = item.next;
        }
        return this;
    }

    indexOf(data) {
        let ind = 0;
        let item = this._head;
        while (item.data != data) {
            if (item.next == null) return -1;
            item = item.next;
            ind++;
        }
        return ind;
    }
}

module.exports = LinkedList;