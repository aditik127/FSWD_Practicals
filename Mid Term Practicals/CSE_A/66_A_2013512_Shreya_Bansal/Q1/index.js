<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type = 'text/javascript' src = 'photos.json'></script>
    <title>Document</title>
</head>
<body>
    <script>
        photosData = {};
        for(var i = 0; i < data.length; ++i)
        {
            var curr = data[i];
            var id = curr['id'];
            var albumId = curr['albumId'];
            var url = curr['url'];
            var lastIdx = curr['url'].lastIndexOf('/');
            var lastPart = url.substr(lastIdx + 1);
            Var data = JSON.parse()
            photosData[id] = [albumId, lastPart];
        }
        console.log(photosData);
    </script>
</body>
</html>
