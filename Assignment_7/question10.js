<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Table Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }
        .container {
            text-align: center;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        input {
            padding: 8px;
            margin: 5px;
            width: 100px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            margin: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            background-color: #007BFF;
            color: white;
        }
        table {
            margin-top: 20px;
            border-collapse: collapse;
            width: 100%;
        }
        td, th {
            padding: 10px;
            text-align: center;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Dynamic Table Generator</h2>
    <label for="rows">Rows:</label>
    <input type="number" id="rows" placeholder="Enter rows" min="1">
    <label for="cols">Columns:</label>
    <input type="number" id="cols" placeholder="Enter columns" min="1">
    <button onclick="generateTable()">Generate Table</button>
    <div id="tableContainer"></div>
</div>

<script>
    function generateTable() {
        const rows = parseInt(document.getElementById('rows').value);
        const cols = parseInt(document.getElementById('cols').value);

        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
            alert('Please enter valid positive numbers for both rows and columns.');
            return;
        }

        let table = '<table>';
        table += '<thead><tr>';
        for (let i = 1; i <= cols; i++) {
            table += `<th>Column ${i}</th>`;
        }
        table += '</tr></thead>';
        table += '<tbody>';
        for (let r = 1; r <= rows; r++) {
            table += '<tr>';
            for (let c = 1; c <= cols; c++) {
                table += `<td>Row ${r}, Col ${c}</td>`;
            }
            table += '</tr>';
        }
        table += '</tbody>';

        table += '</table>';
        document.getElementById('tableContainer').innerHTML = table;
    }
</script>

</body>
</html>
