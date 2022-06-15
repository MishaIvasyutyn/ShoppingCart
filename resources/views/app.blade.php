<!doctype html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{env('APP_NAME')}}</title>
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
</head>
<body>
<body class="antialiased">
<div class="container mx-auto">
    <div id="app">
        <navbar-component></navbar-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</div>
<script src="{{mix('js/app.js')}}"></script>
</body>

</body>
</html>
