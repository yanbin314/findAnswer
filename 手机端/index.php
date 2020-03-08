<?php
header("Access-Control-Allow-Origin:*");
$text = $_GET['question'];
if ($text == "") {
    $arr = array('qwe' => 420);
    echo json_encode($arr);
}else{
$src = "http://www.wangketiku.com/getquestion.php?question=".$text;
$get = file_get_contents($src);
echo ($get);
}