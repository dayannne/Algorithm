function solution(id_list, report, k) {
    const answer = Array(id_list.length).fill(0);
    const idLookup = {};
    const reported = {};
    const uniqueReports = new Set(report);

    for (let i = 0; i < id_list.length; i++) {
        idLookup[id_list[i]] = i;
    }

    uniqueReports.forEach(reportEntry => {
        const [reporter, reportedUser] = reportEntry.split(' ');
        if (reported[reportedUser]) {
            reported[reportedUser].push(reporter);
        } else {
            reported[reportedUser] = [reporter];
        }
    });

    for (let user in reported) {
        const reportPeople = reported[user];
        if (reportPeople.length >= k) {
            reportPeople.forEach(person => {
                answer[idLookup[person]]++;
            });
        }
    }

    return answer;
}
