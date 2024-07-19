function solution(phoneBook) {
    const table = {};

    for (const number of phoneBook) {
        table[number] = true;
    };

    for (const number of phoneBook) {
        for (let i = 1; i < number.length; i += 1) {
            const prefix = number.slice(0, i);
            if (table[prefix]) return false;

        };
    };

    return true;
}