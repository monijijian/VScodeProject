< !DOCTYPE html >
    <html>
        <head>
            <title>图片懒加载</title>
            <meta charset="utf-8">
                <style>
                    ul{
                        margin:0;
                padding: 0;
                list-style: none;
            }
            ul li{
                        width: 500px;
                height: 309px;
            }
            ul li img{
                        width: 100%;
                height: 100%;
            }
        </style>
    </head>
            <body>
                <ul id="pictures">
                    <li>
                        <img src="image/1.jpg" alt="" data-src="image/1.jpg">
            </li>
                        <li>
                            <img src="" alt="" data-src="image/2.jpg">
            </li>
                            <li>
                                <img src="" alt="" data-src="image/3.jpg">
            </li>
                                <li>
                                    <img src="" alt="" data-src="image/4.jpg">
            </li>
                                    <li>
                                        <img src="" alt="" data-src="image/5.jpg">
            </li>
        </ul>
    </body>
</html>