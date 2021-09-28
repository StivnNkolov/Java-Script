function fromJSONToHTMLTable(input) {
    let parsedValue = JSON.parse(input);


    function makeKeyRow(arr) {
        let result = "  <tr>"

        for (let row of arr) {
            result += "<th>" + escapeHtml(row) + "</th>"


        }
        result += "</tr>"
        return result;
    }

    function makeValueRow(obj) {
        let result = "  <tr>";
        for (let name of Object.values(obj)) {
            result += "<td>" + escapeHtml(name) + "</td>"
        }
        result += "</tr>";
        return result;


    }
    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');


    }

    let output = ["<table>"];
    output.push(makeKeyRow(Object.keys(parsedValue[0])));
    for (let obj of parsedValue) {
        output.push(makeValueRow(obj));
    }
    output.push("</table>")



    console.log(output.join("\n"));





}

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)