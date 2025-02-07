<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Background Color Changer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            margin: 10px;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        button:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>

    <h1>Click a button to change the background color</h1>
    
    <button id="redButton">Red</button>
    <button id="greenButton">Green</button>
    <button id="blueButton">Blue</button>

    <script>
        const redButton = document.getElementById('redButton');
        const greenButton = document.getElementById('greenButton');
        const blueButton = document.getElementById('blueButton');

        redButton.addEventListener('click', () => {
            document.body.style.backgroundColor = 'red';
        });

        greenButton.addEventListener('click', () => {
            document.body.style.backgroundColor = 'green';
        });

        blueButton.addEventListener('click', () => {
            document.body.style.backgroundColor = 'blue';
        });
    </script>

</body>
</html>
