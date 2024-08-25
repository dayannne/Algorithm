class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null; // 단일 연결리스트와 달리 이전으로도 갈 수 있다@
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

