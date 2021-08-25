fetch('actors.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        readData(data);
    })
    .catch(function (err) {
        console.log(err);
    });

function readData(data) {
    var column = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (column.indexOf(key) === -1) {
                column.push(key);
            }
        }
    }

    var table = document.createElement("table");

    var tr = table.insertRow(-1);
    for (var i = 0; i < column.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = column[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < data.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < column.length; j++) {
            var cell = tr.insertCell(-1);

            var aux = data[i][column[j]].split(/\s+/);
            var link = 'https://da.wikipedia.org/wiki/' + aux[0] + '_' + aux[1];

            if (column[j] == 'fullname')
                cell.innerHTML = `<a class=button href=${link}>${data[i][column[j]]}</a>`;
            else
                cell.innerHTML = data[i][column[j]];
        }
    }

    var showTable = document.getElementById('actorsList');
    showTable.innerHTML = "";
    showTable.appendChild(table);
}


