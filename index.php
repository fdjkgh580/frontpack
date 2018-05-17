<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="assets/dist/vendors.js?t=<?=uniqid()?>"></script>
    <script src="assets/dist/index.js?t=<?=uniqid()?>"></script>
    <script>
        $(function (){
            console.log('全域使用 jQuery')
        })
    </script>
</head>
<body>
    <div class="container">
        <div class="span">
            span
        </div>   
    </div>
</body>
</html>