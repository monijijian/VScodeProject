<?php
    $mycallBack = $_GET['callback1'];

	$arr = array("zhangsan","lisi","zhaoliu");

    echo $mycallBack.`(`.json_encode($arr).`)`;    //字符串拼接
?>