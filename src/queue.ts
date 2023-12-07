type QNode<T> = {
    value: T;
    next?: QNode<T>;
}

class Queue<T> {
    public length: number = 0;
    private tail?: QNode<T>;
    private head?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T) {
        const itemAdded = {value: item} as QNode<T>;
        this.length++;
        if(!this.tail) {
            this.tail = this.head = itemAdded;
            return;
        }

        this.tail.next = itemAdded;
        this.tail = itemAdded;
    }

    dequeue(): T | undefined {
        if(!this.head) return undefined;
        this.length--;
        const currentHead = this.head;
        this.head = this.head.next;
        currentHead.next = undefined;
        return currentHead.value
    }

    peak() {
        return this.head?.value;
    }

}