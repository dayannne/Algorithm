class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(item) {
        this.queue[this.tail++] = item;
    }

    dequeue() {
        if (this.tail === this.head) return undefined;
        const item = this.queue[this.head];
        delete this.queue[this.head++];
        return item;
    }

    isEmpty() {
        return this.tail === this.head;
    }
}

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const directions = [
        [1, 0],  // down
        [-1, 0], // up
        [0, 1],  // right
        [0, -1]  // left
    ];

    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = new Queue();
    queue.enqueue([0, 0, 1]); // [x, y, distance]
    visited[0][0] = true;

    while (!queue.isEmpty()) {
        const [x, y, dist] = queue.dequeue();

        if (x === n - 1 && y === m - 1) {
            return dist;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.enqueue([nx, ny, dist + 1]);
            }
        }
    }

    return -1;
}
