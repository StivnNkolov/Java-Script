// function fromJSONToHTMLTable(input) {
//     let parsedValue = JSON.parse(input);


//     function makeKeyRow(arr) {
//         let result = "  <tr>"

//         for (let row of arr) {
//             result += "<th>" + escapeHtml(row) + "</th>"


//         }
//         result += "</tr>"
//         return result;
//     }

//     function makeValueRow(obj) {
//         let result = "  <tr>";
//         for (let name of Object.values(obj)) {
//             result += "<td>" + escapeHtml(name) + "</td>"
//         }
//         result += "</tr>";
//         return result;


//     }
//     function escapeHtml(value) {
//         return value
//             .toString()
//             .replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/"/g, '&quot;')
//             .replace(/'/g, '&#39;');


//     }

//     let output = ["<table>"];
//     output.push(makeKeyRow(Object.keys(parsedValue[0])));
//     for (let obj of parsedValue) {
//         output.push(makeValueRow(obj));
//     }
//     output.push("</table>")



//     console.log(output.join("\n"));





// }

// fromJSONToHTMLTable(`[{"Name":"Pesho",
// "Score":4,
// " Grade":8},
// {"Name":"Gosho",
// "Score":5,
// " Grade":8},
// {"Name":"Angel",
// "Score":5.50,
// " Grade":10}]`
// )

function solve(inputJSON) {
    let object = JSON.parse(inputJSON);
    // console.log(object);

    let htmlTable = '<table>\n'

    let objectKeys = object
        .map((v) => {
            return Object.keys(v);
        })[0]
        .map(createTableHeader)
        .join('');

    htmlTable += objectKeys

    let objectElements = object
        .map((v) => {
            return Object.values(v);
        })

    for (let value of objectElements) {
        let tableData = value
            .map(createTableRow)
            .join('')
        htmlTable += tableData;
    }

    htmlTable += '</table>'

    console.log(htmlTable);

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function createTableHeader(value, index, array) {
        if (index == 0) {
            return `  <tr><th>${escapeHtml(value)}</th>`
        } else if (index == array.length - 1) {
            return `<th>${escapeHtml(value)}</th></tr>\n`
        } else {
            return `<th>${escapeHtml(value)}</th>`
        }
    }

    function createTableRow(value, index, array) {
        if (index == 0) {
            return `  <tr><td>${escapeHtml(value)}</td>`;
        } else if (index == array.length - 1) {
            return `<td>${escapeHtml(value)}</td></tr>\n`;
        } else {
            return `<td>${escapeHtml(value)}</td>`;
        }
    }
}

// solve(
//     `[
//         {"Name":"Stamat", "Score": 5.5},
//         {"Name": "Rumen", "Score": 6}
//     ]`
// );

solve(
    `[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
);