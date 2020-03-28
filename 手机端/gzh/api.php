<?php
include "wechat.class.php";
echo '
 <!DOCTYPE html>
 <html>
	<head>
		<title></title>
		<style>xml {display: none}</style>
	</head>
	<body>
	</body>
	</html>
 ';
/* https://z820479906.vip.adminftp.org/api.php?question=*/
function getda($w)
{
  $r = file_get_contents("http://www.wangketiku.com/getquestion.php?question=".$w);
  $s = json_decode($r, true);

 /* if ($s['answer'] === '' || $s['answer'] === 'NULL' || $s['answer'] ===null || $s['answer'] === 'null') */
 if($s['answer'] === 'null')
  {
    return "⚠️暂无答案，有问题联系客服."."\n"."只输入题干，并去掉题干里的括号";
  }
  else
  {
    $tm = $s['question'];
    $da = $s['answer'];
    
    return "🔒:$tm"."\n"."🔑:$da"."\n"."\n"."<a href=\"https://wangke.yunszn.cn/gzh/contact.png\">🌹联系客服</a>";
  }
}


$options = array(
  'token' => 'qwe123456', //填写你设定的key
  '填写加密用的EncodingAESKey' => 'encodingaeskey' //填写加密用的EncodingAESKey，如接口为明文模式可忽略
);
$weObj = new Wechat($options);
//$weObj->valid();//明文或兼容模式可以在接口验证通过后注释此句，但加密模式一定不能注释，否则会验证失败

$type = $weObj->getRev()->getRevType();
$w = $weObj->getRev()->getRevContent(); //接收消息

switch ($type) {
  case Wechat::MSGTYPE_TEXT: //文本消息

    $weObj->text(getda($w))->reply();
    exit;
    break;
  case Wechat::MSGTYPE_EVENT: //关注消息
    $weObj->text("关注消息")->reply();
    exit;
    break;
  default: //语音
    $weObj->text(getda($w))->reply();
    exit;
}