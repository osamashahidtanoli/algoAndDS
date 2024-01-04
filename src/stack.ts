type SNode<T> = {
    value: T;
    prev?: SNode<T>
}

class Stack<T> {
    public length: number = 0;
    private head?: SNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0
    }

    push(item: T): void {
        const node = {value: item} as SNode<T>;
        this.length++;
        if(!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if(!this.head) {
            return;
        }
        this.length--;
        const popItem = this.head;
        this.head = popItem.prev;
        popItem.prev = undefined;

        return popItem?.value
    }

    peak(): T | undefined {
        return this.head?.value
    }

}