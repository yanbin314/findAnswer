<?php
header("Access-Control-Allow-Origin:*");
$text = $_GET['ti'];
if ($text == "") {
    $arr = array('qwe' => 420);
    echo json_encode($arr);
}else{
$src = "http://free.han8.net/?ti=".$text;
$get = file_get_contents($src);
echo ($get);

}

/*$a = json_decode($get, true);
print_r($a);*/
