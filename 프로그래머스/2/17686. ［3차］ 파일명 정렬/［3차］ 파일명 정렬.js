function splitFilename(filename) {
    const match = filename.match(/^(.*?)(\d+)(.*)$/);
    if (match) {
        const [_, head, number, tail] = match;
        return { HEAD: head, NUMBER: number, TAIL: tail };
    } else {
        return null;
    }
}


function solution(files) {
    var answer = [];
    let fileTable = files.map((file) => splitFilename(file))
    fileTable.sort((a, b) => a.HEAD.toLowerCase().localeCompare(b.HEAD.toLowerCase()) || parseInt(a.NUMBER) - parseInt(b.NUMBER) );
    fileTable = fileTable.map(file => file.HEAD + file.NUMBER + file.TAIL);

    return fileTable;
}

