console.log("jQuery version:", $.fn.jquery);
console.log("DataTables available:", typeof $.fn.DataTable);




console.log("Working");

const steamData = {"response":{"game_count":193,"games":[{"appid":10,"playtime_forever":1046,"playtime_windows_forever":868,"playtime_mac_forever":15,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1727933598,"playtime_disconnected":0},{"appid":80,"playtime_forever":2635,"playtime_windows_forever":2294,"playtime_mac_forever":235,"playtime_linux_forever":29,"playtime_deck_forever":0,"rtime_last_played":1739322689,"playtime_disconnected":0},{"appid":100,"playtime_forever":6,"playtime_windows_forever":6,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1589170416,"playtime_disconnected":0},{"appid":300,"playtime_forever":431,"playtime_windows_forever":55,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1672333334,"playtime_disconnected":0},{"appid":20,"playtime_forever":22,"playtime_windows_forever":1,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1601940325,"playtime_disconnected":0},{"appid":30,"playtime_forever":1,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1499809038,"playtime_disconnected":0},{"appid":40,"playtime_forever":5,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1499431071,"playtime_disconnected":0},{"appid":50,"playtime_forever":19,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1505773977,"playtime_disconnected":0},{"appid":60,"playtime_forever":13,"playtime_windows_forever":0,"playtime_mac_forever":5,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1572227855,"playtime_disconnected":0},{"appid":70,"playtime_forever":1323,"playtime_windows_forever":1109,"playtime_mac_forever":162,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1688403646,"playtime_disconnected":53},{"appid":130,"playtime_forever":305,"playtime_windows_forever":305,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1646437164,"playtime_disconnected":0},{"appid":220,"playtime_forever":1765,"playtime_windows_forever":403,"playtime_mac_forever":563,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1655345250,"playtime_disconnected":0},{"appid":320,"playtime_forever":6,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1510095367,"playtime_disconnected":0},{"appid":360,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":240,"playtime_forever":2390,"playtime_windows_forever":1126,"playtime_mac_forever":6,"playtime_linux_forever":69,"playtime_deck_forever":0,"rtime_last_played":1736999110,"playtime_disconnected":0},{"appid":280,"playtime_forever":146,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1505772703,"playtime_disconnected":0},{"appid":4000,"playtime_forever":16314,"playtime_windows_forever":1097,"playtime_mac_forever":983,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1722854115,"playtime_disconnected":0},{"appid":6980,"playtime_forever":80,"playtime_windows_forever":23,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1596009171,"playtime_disconnected":0},{"appid":7000,"playtime_forever":2460,"playtime_windows_forever":1852,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1737101007,"playtime_disconnected":4},{"appid":8000,"playtime_forever":526,"playtime_windows_forever":526,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1737786570,"playtime_disconnected":0},{"appid":400,"playtime_forever":276,"playtime_windows_forever":138,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1608875668,"playtime_disconnected":0},{"appid":8600,"playtime_forever":989,"playtime_windows_forever":976,"playtime_mac_forever":0,"playtime_linux_forever":13,"playtime_deck_forever":0,"rtime_last_played":1730665436,"playtime_disconnected":0},{"appid":44630,"playtime_forever":1,"playtime_windows_forever":1,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1568238322,"playtime_disconnected":0},{"appid":13200,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":13210,"playtime_forever":34,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1545277531,"playtime_disconnected":0},{"appid":13230,"playtime_forever":165,"playtime_windows_forever":85,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1655163915,"playtime_disconnected":0},{"appid":13240,"playtime_forever":114,"playtime_windows_forever":11,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1727127708,"playtime_disconnected":0},{"appid":13250,"playtime_forever":476,"playtime_windows_forever":430,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1710586668,"playtime_disconnected":0},{"appid":13540,"playtime_forever":567,"playtime_windows_forever":515,"playtime_mac_forever":0,"playtime_linux_forever":19,"playtime_deck_forever":0,"rtime_last_played":1707000668,"playtime_disconnected":0},{"appid":15120,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":15000,"playtime_forever":494,"playtime_windows_forever":55,"playtime_mac_forever":0,"playtime_linux_forever":7,"playtime_deck_forever":0,"rtime_last_played":1707001395,"playtime_disconnected":0},{"appid":20900,"playtime_forever":1129,"playtime_windows_forever":16,"playtime_mac_forever":397,"playtime_linux_forever":1,"playtime_deck_forever":0,"rtime_last_played":1691843192,"playtime_disconnected":3},{"appid":19830,"playtime_forever":997,"playtime_windows_forever":922,"playtime_mac_forever":0,"playtime_linux_forever":27,"playtime_deck_forever":0,"rtime_last_played":1711081197,"playtime_disconnected":0},{"appid":19840,"playtime_forever":1,"playtime_windows_forever":1,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1711078650,"playtime_disconnected":0},{"appid":500,"playtime_forever":9,"playtime_windows_forever":9,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1570219533,"playtime_disconnected":0},{"appid":10090,"playtime_forever":572,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1564115575,"playtime_disconnected":0},{"appid":8140,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":33910,"playtime_forever":1798,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1533506964,"playtime_disconnected":0},{"appid":22320,"playtime_forever":2312,"playtime_windows_forever":290,"playtime_mac_forever":0,"playtime_linux_forever":2021,"playtime_deck_forever":0,"rtime_last_played":1722406902,"playtime_disconnected":0},{"appid":6060,"playtime_forever":197,"playtime_windows_forever":197,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1715045359,"playtime_disconnected":0},{"appid":20500,"playtime_forever":238,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1529709104,"playtime_disconnected":0},{"appid":667720,"playtime_forever":194,"playtime_windows_forever":99,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1584940007,"playtime_disconnected":0},{"appid":550,"playtime_forever":871,"playtime_windows_forever":476,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1677830525,"playtime_disconnected":0},{"appid":8190,"playtime_forever":2040,"playtime_windows_forever":1087,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1729131511,"playtime_disconnected":0},{"appid":22330,"playtime_forever":6663,"playtime_windows_forever":6607,"playtime_mac_forever":0,"playtime_linux_forever":55,"playtime_deck_forever":0,"rtime_last_played":1736876861,"playtime_disconnected":0},{"appid":21000,"playtime_forever":200,"playtime_windows_forever":200,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1605078015,"playtime_disconnected":0},{"appid":50300,"playtime_forever":278,"playtime_windows_forever":89,"playtime_mac_forever":10,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1588840948,"playtime_disconnected":0},{"appid":70000,"playtime_forever":88,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1516054398,"playtime_disconnected":0},{"appid":620,"playtime_forever":447,"playtime_windows_forever":1,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1570320657,"playtime_disconnected":0},{"appid":105600,"playtime_forever":1859,"playtime_windows_forever":1285,"playtime_mac_forever":573,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1723085631,"playtime_disconnected":0},{"appid":55150,"playtime_forever":9,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1536619198,"playtime_disconnected":0},{"appid":22380,"playtime_forever":43,"playtime_windows_forever":43,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1687642504,"playtime_disconnected":0},{"appid":200170,"playtime_forever":144,"playtime_windows_forever":91,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1656650180,"playtime_disconnected":0},{"appid":223470,"playtime_forever":681,"playtime_windows_forever":43,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1632034277,"playtime_disconnected":0},{"appid":11020,"playtime_forever":609,"playtime_windows_forever":609,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1717542073,"playtime_disconnected":0},{"appid":211500,"playtime_forever":183,"playtime_windows_forever":23,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1567823566,"playtime_disconnected":0},{"appid":230410,"playtime_forever":731,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1516509136,"playtime_disconnected":0},{"appid":236390,"playtime_forever":6683,"playtime_windows_forever":5087,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1744614913,"playtime_disconnected":0},{"appid":265630,"playtime_forever":25,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1491601514,"playtime_disconnected":0},{"appid":223750,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":65790,"playtime_forever":201,"playtime_windows_forever":14,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1596464622,"playtime_disconnected":0},{"appid":65780,"playtime_forever":1560,"playtime_windows_forever":1560,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1701052813,"playtime_disconnected":9},{"appid":44350,"playtime_forever":420,"playtime_windows_forever":24,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1635741453,"playtime_disconnected":0},{"appid":234650,"playtime_forever":597,"playtime_windows_forever":0,"playtime_mac_forever":589,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1579765485,"playtime_disconnected":0},{"appid":244850,"playtime_forever":267,"playtime_windows_forever":267,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1736821756,"playtime_disconnected":0},{"appid":244210,"playtime_forever":39540,"playtime_windows_forever":30015,"playtime_mac_forever":0,"playtime_linux_forever":1,"playtime_deck_forever":0,"rtime_last_played":1743126972,"playtime_disconnected":4},{"appid":218620,"playtime_forever":4156,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1549251853,"playtime_disconnected":0},{"appid":235600,"playtime_forever":2916,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1554840087,"playtime_disconnected":0},{"appid":252490,"playtime_forever":8132,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1560281319,"playtime_disconnected":0},{"appid":205100,"playtime_forever":2249,"playtime_windows_forever":8,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1573443097,"playtime_disconnected":0},{"appid":49520,"playtime_forever":2555,"playtime_windows_forever":161,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1654921185,"playtime_disconnected":0},{"appid":264710,"playtime_forever":1820,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1555908750,"playtime_disconnected":0},{"appid":108600,"playtime_forever":603,"playtime_windows_forever":603,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1708487262,"playtime_disconnected":0},{"appid":268500,"playtime_forever":399,"playtime_windows_forever":0,"playtime_mac_forever":1,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1579580389,"playtime_disconnected":0},{"appid":268850,"playtime_forever":1097,"playtime_windows_forever":87,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1687500518,"playtime_disconnected":0},{"appid":268870,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":270880,"playtime_forever":6224,"playtime_windows_forever":3614,"playtime_mac_forever":69,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1731226815,"playtime_disconnected":0},{"appid":271590,"playtime_forever":11605,"playtime_windows_forever":11605,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1735692393,"playtime_disconnected":0},{"appid":3240220,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":222880,"playtime_forever":2148,"playtime_windows_forever":584,"playtime_mac_forever":0,"playtime_linux_forever":1,"playtime_deck_forever":0,"rtime_last_played":1691663778,"playtime_disconnected":0},{"appid":225840,"playtime_forever":43,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1540077427,"playtime_disconnected":0},{"appid":22100,"playtime_forever":1,"playtime_windows_forever":1,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1632031118,"playtime_disconnected":0},{"appid":48700,"playtime_forever":6114,"playtime_windows_forever":1375,"playtime_mac_forever":4738,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1731183675,"playtime_disconnected":0},{"appid":48720,"playtime_forever":14,"playtime_windows_forever":14,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1584764429,"playtime_disconnected":0},{"appid":284160,"playtime_forever":18364,"playtime_windows_forever":12903,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1743735823,"playtime_disconnected":0},{"appid":285160,"playtime_forever":40,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1545282475,"playtime_disconnected":0},{"appid":287700,"playtime_forever":6816,"playtime_windows_forever":594,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1595994902,"playtime_disconnected":0},{"appid":304930,"playtime_forever":514,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1499806585,"playtime_disconnected":0},{"appid":310560,"playtime_forever":1388,"playtime_windows_forever":478,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1623612091,"playtime_disconnected":0},{"appid":313340,"playtime_forever":81,"playtime_windows_forever":81,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1643499943,"playtime_disconnected":0},{"appid":203160,"playtime_forever":716,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1565333647,"playtime_disconnected":0},{"appid":221380,"playtime_forever":2584,"playtime_windows_forever":711,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1729134961,"playtime_disconnected":0},{"appid":241930,"playtime_forever":1982,"playtime_windows_forever":483,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1629446021,"playtime_disconnected":0},{"appid":307690,"playtime_forever":1544,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1582071999,"playtime_disconnected":0},{"appid":346010,"playtime_forever":1137,"playtime_windows_forever":210,"playtime_mac_forever":5,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1597735964,"playtime_disconnected":0},{"appid":346110,"playtime_forever":7548,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1566283676,"playtime_disconnected":0},{"appid":407530,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":360740,"playtime_forever":73,"playtime_windows_forever":73,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1648707987,"playtime_disconnected":0},{"appid":362890,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":365960,"playtime_forever":4067,"playtime_windows_forever":4067,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1739789988,"playtime_disconnected":0},{"appid":365670,"playtime_forever":7500,"playtime_windows_forever":5255,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1731562606,"playtime_disconnected":0},{"appid":322330,"playtime_forever":126,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1562296037,"playtime_disconnected":0},{"appid":380600,"playtime_forever":375,"playtime_windows_forever":10,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1600926375,"playtime_disconnected":0},{"appid":291550,"playtime_forever":86,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1533527222,"playtime_disconnected":0},{"appid":387990,"playtime_forever":6800,"playtime_windows_forever":697,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1735776639,"playtime_disconnected":0},{"appid":225540,"playtime_forever":5020,"playtime_windows_forever":150,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1603952655,"playtime_disconnected":0},{"appid":397900,"playtime_forever":370,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1564213023,"playtime_disconnected":0},{"appid":365450,"playtime_forever":17,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1527488360,"playtime_disconnected":0},{"appid":240760,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":404730,"playtime_forever":200,"playtime_windows_forever":175,"playtime_mac_forever":0,"playtime_linux_forever":25,"playtime_deck_forever":0,"rtime_last_played":1729806507,"playtime_disconnected":0},{"appid":404790,"playtime_forever":207,"playtime_windows_forever":207,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1713761250,"playtime_disconnected":0},{"appid":238090,"playtime_forever":983,"playtime_windows_forever":18,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1655085502,"playtime_disconnected":0},{"appid":415200,"playtime_forever":906,"playtime_windows_forever":906,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1736328508,"playtime_disconnected":0},{"appid":421020,"playtime_forever":2379,"playtime_windows_forever":542,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1673408501,"playtime_disconnected":0},{"appid":359550,"playtime_forever":17205,"playtime_windows_forever":1933,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1708846321,"playtime_disconnected":0},{"appid":623990,"playtime_forever":36,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1535300237,"playtime_disconnected":0},{"appid":431960,"playtime_forever":2080,"playtime_windows_forever":1122,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1730855845,"playtime_disconnected":0},{"appid":433850,"playtime_forever":776,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1552679495,"playtime_disconnected":0},{"appid":439700,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":433950,"playtime_forever":216,"playtime_windows_forever":0,"playtime_mac_forever":74,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1576102963,"playtime_disconnected":0},{"appid":865040,"playtime_forever":83,"playtime_windows_forever":83,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1606834891,"playtime_disconnected":0},{"appid":434570,"playtime_forever":118,"playtime_windows_forever":44,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1570343981,"playtime_disconnected":0},{"appid":438100,"playtime_forever":251,"playtime_windows_forever":235,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1720592663,"playtime_disconnected":0},{"appid":244930,"playtime_forever":507,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1470620400,"playtime_disconnected":0},{"appid":437220,"playtime_forever":692,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1498795356,"playtime_disconnected":0},{"appid":444090,"playtime_forever":220,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1491605912,"playtime_disconnected":0},{"appid":596350,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":444640,"playtime_forever":20,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1516325778,"playtime_disconnected":0},{"appid":107410,"playtime_forever":17711,"playtime_windows_forever":9842,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1742529841,"playtime_disconnected":0},{"appid":275850,"playtime_forever":8633,"playtime_windows_forever":8633,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1740650082,"playtime_disconnected":0},{"appid":310380,"playtime_forever":35,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1472814901,"playtime_disconnected":0},{"appid":462930,"playtime_forever":39,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1549834459,"playtime_disconnected":0},{"appid":491950,"playtime_forever":77,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1534730111,"playtime_disconnected":0},{"appid":273350,"playtime_forever":159,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1470621186,"playtime_disconnected":0},{"appid":503580,"playtime_forever":85,"playtime_windows_forever":85,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1721199706,"playtime_disconnected":0},{"appid":319630,"playtime_forever":134,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1469490579,"playtime_disconnected":0},{"appid":497180,"playtime_forever":2063,"playtime_windows_forever":1108,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1676798927,"playtime_disconnected":0},{"appid":292030,"playtime_forever":12132,"playtime_windows_forever":3678,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1719123037,"playtime_disconnected":0},{"appid":530700,"playtime_forever":511,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1548037685,"playtime_disconnected":0},{"appid":507490,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":578080,"playtime_forever":3057,"playtime_windows_forever":945,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1737091468,"playtime_disconnected":0},{"appid":581630,"playtime_forever":200,"playtime_windows_forever":2,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1655345463,"playtime_disconnected":0},{"appid":391220,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":209080,"playtime_forever":33,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1533057515,"playtime_disconnected":0},{"appid":608800,"playtime_forever":33,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1533057519,"playtime_disconnected":0},{"appid":619910,"playtime_forever":252,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1529964325,"playtime_disconnected":0},{"appid":638490,"playtime_forever":12,"playtime_windows_forever":12,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1587501869,"playtime_disconnected":0},{"appid":651090,"playtime_forever":345,"playtime_windows_forever":54,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1738763392,"playtime_disconnected":0},{"appid":681280,"playtime_forever":1278,"playtime_windows_forever":1278,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1712895604,"playtime_disconnected":0},{"appid":414340,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":747350,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":700330,"playtime_forever":454,"playtime_windows_forever":54,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1655013410,"playtime_disconnected":0},{"appid":480430,"playtime_forever":542,"playtime_windows_forever":198,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1593691704,"playtime_disconnected":0},{"appid":799960,"playtime_forever":19,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1560833038,"playtime_disconnected":0},{"appid":209670,"playtime_forever":1093,"playtime_windows_forever":601,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1709046234,"playtime_disconnected":0},{"appid":464920,"playtime_forever":29,"playtime_windows_forever":29,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1623562537,"playtime_disconnected":0},{"appid":823130,"playtime_forever":138,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1545276105,"playtime_disconnected":0},{"appid":750920,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":863550,"playtime_forever":61,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1546192456,"playtime_disconnected":0},{"appid":877200,"playtime_forever":1156,"playtime_windows_forever":1156,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1741894304,"playtime_disconnected":0},{"appid":881100,"playtime_forever":2261,"playtime_windows_forever":2261,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1737604180,"playtime_disconnected":0},{"appid":356190,"playtime_forever":1757,"playtime_windows_forever":1757,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1736397509,"playtime_disconnected":0},{"appid":646910,"playtime_forever":12921,"playtime_windows_forever":7717,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1736978621,"playtime_disconnected":0},{"appid":737800,"playtime_forever":2127,"playtime_windows_forever":1926,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1649280813,"playtime_disconnected":0},{"appid":714010,"playtime_forever":1,"playtime_windows_forever":1,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1675485441,"playtime_disconnected":0},{"appid":304390,"playtime_forever":3653,"playtime_windows_forever":2786,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1736491970,"playtime_disconnected":0},{"appid":654310,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":730,"playtime_forever":8386,"playtime_windows_forever":7,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1698292627,"playtime_disconnected":0},{"appid":43110,"playtime_forever":495,"playtime_windows_forever":41,"playtime_mac_forever":0,"playtime_linux_forever":3,"playtime_deck_forever":0,"rtime_last_played":1727152137,"playtime_disconnected":0},{"appid":975370,"playtime_forever":458,"playtime_windows_forever":458,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1715292796,"playtime_disconnected":0},{"appid":231430,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":1012790,"playtime_forever":343,"playtime_windows_forever":343,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1725179687,"playtime_disconnected":0},{"appid":278360,"playtime_forever":63,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1549246047,"playtime_disconnected":0},{"appid":1021950,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":690790,"playtime_forever":839,"playtime_windows_forever":839,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1735517885,"playtime_disconnected":0},{"appid":1174180,"playtime_forever":3817,"playtime_windows_forever":3817,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1735756172,"playtime_disconnected":0},{"appid":203770,"playtime_forever":1496,"playtime_windows_forever":21,"playtime_mac_forever":1475,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1572750014,"playtime_disconnected":0},{"appid":232770,"playtime_forever":26,"playtime_windows_forever":0,"playtime_mac_forever":26,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1577848093,"playtime_disconnected":0},{"appid":1238840,"playtime_forever":78,"playtime_windows_forever":78,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1744611321,"playtime_disconnected":0},{"appid":582660,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":1245620,"playtime_forever":12662,"playtime_windows_forever":12662,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1742273250,"playtime_disconnected":0},{"appid":1281930,"playtime_forever":989,"playtime_windows_forever":989,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1723085633,"playtime_disconnected":0},{"appid":1368440,"playtime_forever":30,"playtime_windows_forever":30,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1605402155,"playtime_disconnected":0},{"appid":1238810,"playtime_2weeks":342,"playtime_forever":5233,"playtime_windows_forever":5233,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1745562378,"playtime_disconnected":0},{"appid":537800,"playtime_forever":11,"playtime_windows_forever":11,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1612142614,"playtime_disconnected":0},{"appid":616560,"playtime_forever":101,"playtime_windows_forever":101,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1642299192,"playtime_disconnected":0},{"appid":233860,"playtime_forever":7155,"playtime_windows_forever":7155,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1724466656,"playtime_disconnected":0},{"appid":1794680,"playtime_forever":1502,"playtime_windows_forever":1455,"playtime_mac_forever":0,"playtime_linux_forever":46,"playtime_deck_forever":0,"rtime_last_played":1740541016,"playtime_disconnected":0},{"appid":1812390,"playtime_forever":1883,"playtime_windows_forever":1883,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1673864775,"playtime_disconnected":0},{"appid":552500,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":40990,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":2684660,"playtime_forever":0,"playtime_windows_forever":0,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":0,"playtime_disconnected":0},{"appid":3058630,"playtime_forever":271,"playtime_windows_forever":271,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1744522705,"playtime_disconnected":0}]}};
const steamData1 = {
  "response": {
    "game_count": 193,
    "games": [
      {
        "playtime_forever": 1046,
        "playtime_windows_forever": 868,
        "playtime_mac_forever": 15,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1727933598,
        "playtime_disconnected": 0,
        "name": "Counter-Strike"
      },
      {
        "playtime_forever": 2635,
        "playtime_windows_forever": 2294,
        "playtime_mac_forever": 235,
        "playtime_linux_forever": 29,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1739322689,
        "playtime_disconnected": 0,
        "name": "Counter-Strike: Condition Zero"
      },
      {
        "playtime_forever": 6,
        "playtime_windows_forever": 6,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1589170416,
        "playtime_disconnected": 0,
        "name": "Counter-Strike: Condition Zero"
      },
      {
        "playtime_forever": 431,
        "playtime_windows_forever": 55,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1672333334,
        "playtime_disconnected": 0,
        "name": "Day of Defeat: Source"
      },
      {
        "playtime_forever": 22,
        "playtime_windows_forever": 1,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1601940325,
        "playtime_disconnected": 0,
        "name": "Team Fortress Classic"
      },
      {
        "playtime_forever": 1,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1499809038,
        "playtime_disconnected": 0,
        "name": "Day of Defeat"
      },
      {
        "playtime_forever": 5,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1499431071,
        "playtime_disconnected": 0,
        "name": "Deathmatch Classic"
      },
      {
        "playtime_forever": 19,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1505773977,
        "playtime_disconnected": 0,
        "name": "Half-Life: Opposing Force"
      },
      {
        "playtime_forever": 13,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 5,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1572227855,
        "playtime_disconnected": 0,
        "name": "Ricochet"
      },
      {
        "playtime_forever": 1323,
        "playtime_windows_forever": 1109,
        "playtime_mac_forever": 162,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1688403646,
        "playtime_disconnected": 53,
        "name": "Half-Life"
      },
      {
        "playtime_forever": 305,
        "playtime_windows_forever": 305,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1646437164,
        "playtime_disconnected": 0,
        "name": "Half-Life: Blue Shift"
      },
      {
        "playtime_forever": 1765,
        "playtime_windows_forever": 403,
        "playtime_mac_forever": 563,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1655345250,
        "playtime_disconnected": 0,
        "name": "Half-Life 2"
      },
      {
        "playtime_forever": 6,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1510095367,
        "playtime_disconnected": 0,
        "name": "Half-Life 2: Deathmatch"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Half-Life Deathmatch: Source"
      },
      {
        "playtime_forever": 2390,
        "playtime_windows_forever": 1126,
        "playtime_mac_forever": 6,
        "playtime_linux_forever": 69,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1736999110,
        "playtime_disconnected": 0,
        "name": "Counter-Strike: Source"
      },
      {
        "playtime_forever": 146,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1505772703,
        "playtime_disconnected": 0,
        "name": "Half-Life: Source"
      },
      {
        "playtime_forever": 16314,
        "playtime_windows_forever": 1097,
        "playtime_mac_forever": 983,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1722854115,
        "playtime_disconnected": 0,
        "name": "Garry's Mod"
      },
      {
        "playtime_forever": 80,
        "playtime_windows_forever": 23,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1596009171,
        "playtime_disconnected": 0,
        "name": "Thief: Deadly Shadows"
      },
      {
        "playtime_forever": 2460,
        "playtime_windows_forever": 1852,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1737101007,
        "playtime_disconnected": 4,
        "name": "Tomb Raider: Legend"
      },
      {
        "playtime_forever": 526,
        "playtime_windows_forever": 526,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1737786570,
        "playtime_disconnected": 0,
        "name": "Tomb Raider: Anniversary"
      },
      {
        "playtime_forever": 276,
        "playtime_windows_forever": 138,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1608875668,
        "playtime_disconnected": 0,
        "name": "Portal"
      },
      {
        "playtime_forever": 989,
        "playtime_windows_forever": 976,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 13,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1730665436,
        "playtime_disconnected": 0,
        "name": "RACE 07"
      },
      {
        "playtime_forever": 1,
        "playtime_windows_forever": 1,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1568238322,
        "playtime_disconnected": 0,
        "name": "Unknown AppID 44630"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Unreal 2: The Awakening"
      },
      {
        "playtime_forever": 34,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1545277531,
        "playtime_disconnected": 0,
        "name": "Unreal Tournament 3"
      },
      {
        "playtime_forever": 165,
        "playtime_windows_forever": 85,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1655163915,
        "playtime_disconnected": 0,
        "name": "Unreal Tournament 2004: Editor's Choice Edition"
      },
      {
        "playtime_forever": 114,
        "playtime_windows_forever": 11,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1727127708,
        "playtime_disconnected": 0,
        "name": "Unreal Tournament: Game of the Year Edition"
      },
      {
        "playtime_forever": 476,
        "playtime_windows_forever": 430,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1710586668,
        "playtime_disconnected": 0,
        "name": "Unreal Gold"
      },
      {
        "playtime_forever": 567,
        "playtime_windows_forever": 515,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 19,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1707000668,
        "playtime_disconnected": 0,
        "name": "Tom Clancy's Rainbow Six\u00ae Vegas"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Tom Clancy's Rainbow Six\u00ae Vegas 2"
      },
      {
        "playtime_forever": 494,
        "playtime_windows_forever": 55,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 7,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1707001395,
        "playtime_disconnected": 0,
        "name": "Tom Clancy's Rainbow Six Lockdown\u2122"
      },
      {
        "playtime_forever": 1129,
        "playtime_windows_forever": 16,
        "playtime_mac_forever": 397,
        "playtime_linux_forever": 1,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1691843192,
        "playtime_disconnected": 3,
        "name": "The Witcher: Enhanced Edition Director's Cut"
      },
      {
        "playtime_forever": 997,
        "playtime_windows_forever": 922,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 27,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1711081197,
        "playtime_disconnected": 0,
        "name": "Tom Clancy's Rainbow Six\u00ae 3 Gold"
      },
      {
        "playtime_forever": 1,
        "playtime_windows_forever": 1,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1711078650,
        "playtime_disconnected": 0,
        "name": "Unknown AppID 19840"
      },
      {
        "playtime_forever": 9,
        "playtime_windows_forever": 9,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1570219533,
        "playtime_disconnected": 0,
        "name": "Left 4 Dead"
      },
      {
        "playtime_forever": 572,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1564115575,
        "playtime_disconnected": 0,
        "name": "Call of Duty: World at War"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Tomb Raider: Underworld"
      },
      {
        "playtime_forever": 1798,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1533506964,
        "playtime_disconnected": 0,
        "name": "ARMA 2"
      },
      {
        "playtime_forever": 2312,
        "playtime_windows_forever": 290,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 2021,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1722406902,
        "playtime_disconnected": 0,
        "name": "The Elder Scrolls III: Morrowind\u00ae Game of the Year Edition"
      },
      {
        "playtime_forever": 197,
        "playtime_windows_forever": 197,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1715045359,
        "playtime_disconnected": 0,
        "name": "STAR WARS\u2122 Battlefront II (Classic, 2005)"
      },
      {
        "playtime_forever": 238,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1529709104,
        "playtime_disconnected": 0,
        "name": "Red Faction Guerrilla Steam Edition"
      },
      {
        "playtime_forever": 194,
        "playtime_windows_forever": 99,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1584940007,
        "playtime_disconnected": 0,
        "name": "Red Faction Guerrilla Re-Mars-tered"
      },
      {
        "playtime_forever": 871,
        "playtime_windows_forever": 476,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1677830525,
        "playtime_disconnected": 0,
        "name": "Left 4 Dead 2"
      },
      {
        "playtime_forever": 2040,
        "playtime_windows_forever": 1087,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1729131511,
        "playtime_disconnected": 0,
        "name": "Just Cause 2"
      },
      {
        "playtime_forever": 6663,
        "playtime_windows_forever": 6607,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 55,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1736876861,
        "playtime_disconnected": 0,
        "name": "The Elder Scrolls IV: Oblivion\u00ae Game of the Year Edition (2009)"
      },
      {
        "playtime_forever": 200,
        "playtime_windows_forever": 200,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1605078015,
        "playtime_disconnected": 0,
        "name": "LEGO\u00ae Batman\u2122: The Videogame"
      },
      {
        "playtime_forever": 278,
        "playtime_windows_forever": 89,
        "playtime_mac_forever": 10,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1588840948,
        "playtime_disconnected": 0,
        "name": "Spec Ops: The Line"
      },
      {
        "playtime_forever": 88,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1516054398,
        "playtime_disconnected": 0,
        "name": "Dino D-Day"
      },
      {
        "playtime_forever": 447,
        "playtime_windows_forever": 1,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1570320657,
        "playtime_disconnected": 0,
        "name": "Portal 2"
      },
      {
        "playtime_forever": 1859,
        "playtime_windows_forever": 1285,
        "playtime_mac_forever": 573,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1723085631,
        "playtime_disconnected": 0,
        "name": "Terraria"
      },
      {
        "playtime_forever": 9,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1536619198,
        "playtime_disconnected": 0,
        "name": "Warhammer 40,000: Space Marine - Anniversary Edition"
      },
      {
        "playtime_forever": 43,
        "playtime_windows_forever": 43,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1687642504,
        "playtime_disconnected": 0,
        "name": "Fallout: New Vegas"
      },
      {
        "playtime_forever": 144,
        "playtime_windows_forever": 91,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1656650180,
        "playtime_disconnected": 0,
        "name": "Worms Revolution"
      },
      {
        "playtime_forever": 681,
        "playtime_windows_forever": 43,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1632034277,
        "playtime_disconnected": 0,
        "name": "POSTAL 2"
      },
      {
        "playtime_forever": 609,
        "playtime_windows_forever": 609,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1717542073,
        "playtime_disconnected": 0,
        "name": "TrackMania Nations Forever"
      },
      {
        "playtime_forever": 183,
        "playtime_windows_forever": 23,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1567823566,
        "playtime_disconnected": 0,
        "name": "RaceRoom Racing Experience"
      },
      {
        "playtime_forever": 731,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1516509136,
        "playtime_disconnected": 0,
        "name": "Warframe"
      },
      {
        "playtime_forever": 6683,
        "playtime_windows_forever": 5087,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1744614913,
        "playtime_disconnected": 0,
        "name": "War Thunder"
      },
      {
        "playtime_forever": 25,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1491601514,
        "playtime_disconnected": 0,
        "name": "Fistful of Frags"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "DCS World Steam Edition"
      },
      {
        "playtime_forever": 201,
        "playtime_windows_forever": 14,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1596464622,
        "playtime_disconnected": 0,
        "name": "ARMA: Cold War Assault"
      },
      {
        "playtime_forever": 1560,
        "playtime_windows_forever": 1560,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1701052813,
        "playtime_disconnected": 9,
        "name": "ARMA: Gold Edition"
      },
      {
        "playtime_forever": 420,
        "playtime_windows_forever": 24,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1635741453,
        "playtime_disconnected": 0,
        "name": "GRID 2"
      },
      {
        "playtime_forever": 597,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 589,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1579765485,
        "playtime_disconnected": 0,
        "name": "Shadowrun Returns"
      },
      {
        "playtime_forever": 267,
        "playtime_windows_forever": 267,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1736821756,
        "playtime_disconnected": 0,
        "name": "Space Engineers"
      },
      {
        "playtime_forever": 39540,
        "playtime_windows_forever": 30015,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 1,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1743126972,
        "playtime_disconnected": 4,
        "name": "Assetto Corsa"
      },
      {
        "playtime_forever": 4156,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1549251853,
        "playtime_disconnected": 0,
        "name": "PAYDAY 2"
      },
      {
        "playtime_forever": 2916,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1554840087,
        "playtime_disconnected": 0,
        "name": "Tom Clancy\u2019s Splinter Cell Blacklist"
      },
      {
        "playtime_forever": 8132,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1560281319,
        "playtime_disconnected": 0,
        "name": "Rust"
      },
      {
        "playtime_forever": 2249,
        "playtime_windows_forever": 8,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1573443097,
        "playtime_disconnected": 0,
        "name": "Dishonored"
      },
      {
        "playtime_forever": 2555,
        "playtime_windows_forever": 161,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1654921185,
        "playtime_disconnected": 0,
        "name": "Borderlands 2"
      },
      {
        "playtime_forever": 1820,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1555908750,
        "playtime_disconnected": 0,
        "name": "Subnautica"
      },
      {
        "playtime_forever": 603,
        "playtime_windows_forever": 603,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1708487262,
        "playtime_disconnected": 0,
        "name": "Project Zomboid"
      },
      {
        "playtime_forever": 399,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 1,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1579580389,
        "playtime_disconnected": 0,
        "name": "XCOM\u00ae 2"
      },
      {
        "playtime_forever": 1097,
        "playtime_windows_forever": 87,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1687500518,
        "playtime_disconnected": 0,
        "name": "EVGA Precision X1"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Satellite Reign"
      },
      {
        "playtime_forever": 6224,
        "playtime_windows_forever": 3614,
        "playtime_mac_forever": 69,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1731226815,
        "playtime_disconnected": 0,
        "name": "American Truck Simulator"
      },
      {
        "playtime_forever": 11605,
        "playtime_windows_forever": 11605,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1735692393,
        "playtime_disconnected": 0,
        "name": "Grand Theft Auto V Legacy"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Grand Theft Auto V Enhanced"
      },
      {
        "playtime_forever": 2148,
        "playtime_windows_forever": 584,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 1,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1691663778,
        "playtime_disconnected": 0,
        "name": "Insurgency"
      },
      {
        "playtime_forever": 43,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1540077427,
        "playtime_disconnected": 0,
        "name": "Sven Co-op"
      },
      {
        "playtime_forever": 1,
        "playtime_windows_forever": 1,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1632031118,
        "playtime_disconnected": 0,
        "name": "Mount & Blade"
      },
      {
        "playtime_forever": 6114,
        "playtime_windows_forever": 1375,
        "playtime_mac_forever": 4738,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1731183675,
        "playtime_disconnected": 0,
        "name": "Mount & Blade: Warband"
      },
      {
        "playtime_forever": 14,
        "playtime_windows_forever": 14,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1584764429,
        "playtime_disconnected": 0,
        "name": "Mount & Blade: With Fire & Sword"
      },
      {
        "playtime_forever": 18364,
        "playtime_windows_forever": 12903,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1743735823,
        "playtime_disconnected": 0,
        "name": "BeamNG.drive"
      },
      {
        "playtime_forever": 40,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1545282475,
        "playtime_disconnected": 0,
        "name": "LEGO\u00ae The Hobbit\u2122"
      },
      {
        "playtime_forever": 6816,
        "playtime_windows_forever": 594,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1595994902,
        "playtime_disconnected": 0,
        "name": "METAL GEAR SOLID V: THE PHANTOM PAIN"
      },
      {
        "playtime_forever": 514,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1499806585,
        "playtime_disconnected": 0,
        "name": "Unturned"
      },
      {
        "playtime_forever": 1388,
        "playtime_windows_forever": 478,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1623612091,
        "playtime_disconnected": 0,
        "name": "DiRT Rally"
      },
      {
        "playtime_forever": 81,
        "playtime_windows_forever": 81,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1643499943,
        "playtime_disconnected": 0,
        "name": "Mountain"
      },
      {
        "playtime_forever": 716,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1565333647,
        "playtime_disconnected": 0,
        "name": "Tomb Raider"
      },
      {
        "playtime_forever": 2584,
        "playtime_windows_forever": 711,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1729134961,
        "playtime_disconnected": 0,
        "name": "Age of Empires II (Retired)"
      },
      {
        "playtime_forever": 1982,
        "playtime_windows_forever": 483,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1629446021,
        "playtime_disconnected": 0,
        "name": "Middle-earth\u2122: Shadow of Mordor\u2122"
      },
      {
        "playtime_forever": 1544,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1582071999,
        "playtime_disconnected": 0,
        "name": "Sleeping Dogs: Definitive Edition"
      },
      {
        "playtime_forever": 1137,
        "playtime_windows_forever": 210,
        "playtime_mac_forever": 5,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1597735964,
        "playtime_disconnected": 0,
        "name": "Besiege"
      },
      {
        "playtime_forever": 7548,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1566283676,
        "playtime_disconnected": 0,
        "name": "ARK: Survival Evolved"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "ARK: The Survival Of The Fittest"
      },
      {
        "playtime_forever": 73,
        "playtime_windows_forever": 73,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1648707987,
        "playtime_disconnected": 0,
        "name": "Downwell"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Black Mesa"
      },
      {
        "playtime_forever": 4067,
        "playtime_windows_forever": 4067,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1739789988,
        "playtime_disconnected": 0,
        "name": "rFactor 2"
      },
      {
        "playtime_forever": 7500,
        "playtime_windows_forever": 5255,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1731562606,
        "playtime_disconnected": 0,
        "name": "Blender"
      },
      {
        "playtime_forever": 126,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1562296037,
        "playtime_disconnected": 0,
        "name": "Don't Starve Together"
      },
      {
        "playtime_forever": 375,
        "playtime_windows_forever": 10,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1600926375,
        "playtime_disconnected": 0,
        "name": "Fishing Planet"
      },
      {
        "playtime_forever": 86,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1533527222,
        "playtime_disconnected": 0,
        "name": "Brawlhalla"
      },
      {
        "playtime_forever": 6800,
        "playtime_windows_forever": 697,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1735776639,
        "playtime_disconnected": 0,
        "name": "Scrap Mechanic"
      },
      {
        "playtime_forever": 5020,
        "playtime_windows_forever": 150,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1603952655,
        "playtime_disconnected": 0,
        "name": "Just Cause\u2122 3"
      },
      {
        "playtime_forever": 370,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1564213023,
        "playtime_disconnected": 0,
        "name": "Business Tour - Board Game with Online Multiplayer"
      },
      {
        "playtime_forever": 17,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1527488360,
        "playtime_disconnected": 0,
        "name": "Hacknet"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Wasteland 2: Director's Cut"
      },
      {
        "playtime_forever": 200,
        "playtime_windows_forever": 175,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 25,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1729806507,
        "playtime_disconnected": 0,
        "name": "Wasteland 2: Director's Cut"
      },
      {
        "playtime_forever": 207,
        "playtime_windows_forever": 207,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1713761250,
        "playtime_disconnected": 0,
        "name": "Godot Engine"
      },
      {
        "playtime_forever": 983,
        "playtime_windows_forever": 18,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1655085502,
        "playtime_disconnected": 0,
        "name": "Sniper Elite 3"
      },
      {
        "playtime_forever": 906,
        "playtime_windows_forever": 906,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1736328508,
        "playtime_disconnected": 0,
        "name": "Motorsport Manager"
      },
      {
        "playtime_forever": 2379,
        "playtime_windows_forever": 542,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1673408501,
        "playtime_disconnected": 0,
        "name": "DiRT 4"
      },
      {
        "playtime_forever": 17205,
        "playtime_windows_forever": 1933,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1708846321,
        "playtime_disconnected": 0,
        "name": "Tom Clancy's Rainbow Six\u00ae Siege"
      },
      {
        "playtime_forever": 36,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1535300237,
        "playtime_disconnected": 0,
        "name": "Unknown AppID 623990"
      },
      {
        "playtime_forever": 2080,
        "playtime_windows_forever": 1122,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1730855845,
        "playtime_disconnected": 0,
        "name": "Wallpaper Engine"
      },
      {
        "playtime_forever": 776,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1552679495,
        "playtime_disconnected": 0,
        "name": "Z1 Battle Royale"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Z1 Battle Royale: Test Server"
      },
      {
        "playtime_forever": 216,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 74,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1576102963,
        "playtime_disconnected": 0,
        "name": "Bit Blaster XL"
      },
      {
        "playtime_forever": 83,
        "playtime_windows_forever": 83,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1606834891,
        "playtime_disconnected": 0,
        "name": "Super Bit Blaster XL"
      },
      {
        "playtime_forever": 118,
        "playtime_windows_forever": 44,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1570343981,
        "playtime_disconnected": 0,
        "name": "Blood and Bacon"
      },
      {
        "playtime_forever": 251,
        "playtime_windows_forever": 235,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1720592663,
        "playtime_disconnected": 0,
        "name": "VRChat"
      },
      {
        "playtime_forever": 507,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1470620400,
        "playtime_disconnected": 0,
        "name": "SNOW - The Ultimate Edition"
      },
      {
        "playtime_forever": 692,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1498795356,
        "playtime_disconnected": 0,
        "name": "The Culling"
      },
      {
        "playtime_forever": 220,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1491605912,
        "playtime_disconnected": 0,
        "name": "Paladins\u00ae"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Unknown AppID 596350"
      },
      {
        "playtime_forever": 20,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1516325778,
        "playtime_disconnected": 0,
        "name": "Bloons TD Battles"
      },
      {
        "playtime_forever": 17711,
        "playtime_windows_forever": 9842,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1742529841,
        "playtime_disconnected": 0,
        "name": "Arma 3"
      },
      {
        "playtime_forever": 8633,
        "playtime_windows_forever": 8633,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1740650082,
        "playtime_disconnected": 0,
        "name": "No Man's Sky"
      },
      {
        "playtime_forever": 35,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1472814901,
        "playtime_disconnected": 0,
        "name": "Unknown AppID 310380"
      },
      {
        "playtime_forever": 39,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1549834459,
        "playtime_disconnected": 0,
        "name": "AdVenture Communist"
      },
      {
        "playtime_forever": 77,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1534730111,
        "playtime_disconnected": 0,
        "name": "Orwell: Keeping an Eye On You"
      },
      {
        "playtime_forever": 159,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1470621186,
        "playtime_disconnected": 0,
        "name": "Evolve Stage 2"
      },
      {
        "playtime_forever": 85,
        "playtime_windows_forever": 85,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1721199706,
        "playtime_disconnected": 0,
        "name": "Duck Season"
      },
      {
        "playtime_forever": 134,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1469490579,
        "playtime_disconnected": 0,
        "name": "Life is Strange - Episode 1"
      },
      {
        "playtime_forever": 2063,
        "playtime_windows_forever": 1108,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1676798927,
        "playtime_disconnected": 0,
        "name": "Street Legal Racing: Redline v2.3.1"
      },
      {
        "playtime_forever": 12132,
        "playtime_windows_forever": 3678,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1719123037,
        "playtime_disconnected": 0,
        "name": "The Witcher 3: Wild Hunt"
      },
      {
        "playtime_forever": 511,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1548037685,
        "playtime_disconnected": 0,
        "name": "Argo"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Ashes of the Singularity: Escalation"
      },
      {
        "playtime_forever": 3057,
        "playtime_windows_forever": 945,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1737091468,
        "playtime_disconnected": 0,
        "name": "PUBG: BATTLEGROUNDS"
      },
      {
        "playtime_forever": 200,
        "playtime_windows_forever": 2,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1655345463,
        "playtime_disconnected": 0,
        "name": "Sword With Sauce"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Rise of the Tomb Raider\u2122"
      },
      {
        "playtime_forever": 33,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1533057515,
        "playtime_disconnected": 0,
        "name": "Guns of Icarus Online"
      },
      {
        "playtime_forever": 33,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1533057519,
        "playtime_disconnected": 0,
        "name": "Guns of Icarus Alliance"
      },
      {
        "playtime_forever": 252,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1529964325,
        "playtime_disconnected": 0,
        "name": "Just Cause\u2122 3: Multiplayer Mod"
      },
      {
        "playtime_forever": 12,
        "playtime_windows_forever": 12,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1587501869,
        "playtime_disconnected": 0,
        "name": "Soldat"
      },
      {
        "playtime_forever": 345,
        "playtime_windows_forever": 54,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1738763392,
        "playtime_disconnected": 0,
        "name": "Aces High III"
      },
      {
        "playtime_forever": 1278,
        "playtime_windows_forever": 1278,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1712895604,
        "playtime_disconnected": 0,
        "name": "Descenders"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Hellblade: Senua's Sacrifice"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Hellblade: Senua's Sacrifice VR Edition"
      },
      {
        "playtime_forever": 454,
        "playtime_windows_forever": 54,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1655013410,
        "playtime_disconnected": 0,
        "name": "SCP: Secret Laboratory"
      },
      {
        "playtime_forever": 542,
        "playtime_windows_forever": 198,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1593691704,
        "playtime_disconnected": 0,
        "name": "Hide and Shriek"
      },
      {
        "playtime_forever": 19,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1560833038,
        "playtime_disconnected": 0,
        "name": "Wizard101"
      },
      {
        "playtime_forever": 1093,
        "playtime_windows_forever": 601,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1709046234,
        "playtime_disconnected": 0,
        "name": "Cortex Command"
      },
      {
        "playtime_forever": 29,
        "playtime_windows_forever": 29,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1623562537,
        "playtime_disconnected": 0,
        "name": "Surviving Mars"
      },
      {
        "playtime_forever": 138,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1545276105,
        "playtime_disconnected": 0,
        "name": "Totally Accurate Battlegrounds"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Shadow of the Tomb Raider: Definitive Edition"
      },
      {
        "playtime_forever": 61,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1546192456,
        "playtime_disconnected": 0,
        "name": "HITMAN\u2122 2"
      },
      {
        "playtime_forever": 1156,
        "playtime_windows_forever": 1156,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1741894304,
        "playtime_disconnected": 0,
        "name": "Zero Caliber VR"
      },
      {
        "playtime_forever": 2261,
        "playtime_windows_forever": 2261,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1737604180,
        "playtime_disconnected": 0,
        "name": "Noita"
      },
      {
        "playtime_forever": 1757,
        "playtime_windows_forever": 1757,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1736397509,
        "playtime_disconnected": 0,
        "name": "Middle-earth\u2122: Shadow of War\u2122"
      },
      {
        "playtime_forever": 12921,
        "playtime_windows_forever": 7717,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1736978621,
        "playtime_disconnected": 0,
        "name": "The Crew\u2122 2"
      },
      {
        "playtime_forever": 2127,
        "playtime_windows_forever": 1926,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1649280813,
        "playtime_disconnected": 0,
        "name": "F1 2018"
      },
      {
        "playtime_forever": 1,
        "playtime_windows_forever": 1,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1675485441,
        "playtime_disconnected": 0,
        "name": "Aimlabs"
      },
      {
        "playtime_forever": 3653,
        "playtime_windows_forever": 2786,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1736491970,
        "playtime_disconnected": 0,
        "name": "FOR HONOR\u2122"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Unknown AppID 654310"
      },
      {
        "playtime_forever": 8386,
        "playtime_windows_forever": 7,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1698292627,
        "playtime_disconnected": 0,
        "name": "Counter-Strike 2"
      },
      {
        "playtime_forever": 495,
        "playtime_windows_forever": 41,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 3,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1727152137,
        "playtime_disconnected": 0,
        "name": "Metro 2033"
      },
      {
        "playtime_forever": 458,
        "playtime_windows_forever": 458,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1715292796,
        "playtime_disconnected": 0,
        "name": "Dwarf Fortress"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Company of Heroes 2"
      },
      {
        "playtime_forever": 343,
        "playtime_windows_forever": 343,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1725179687,
        "playtime_disconnected": 0,
        "name": "Into the Radius VR"
      },
      {
        "playtime_forever": 63,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1549246047,
        "playtime_disconnected": 0,
        "name": "A Story About My Uncle"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "When the Darkness comes"
      },
      {
        "playtime_forever": 839,
        "playtime_windows_forever": 839,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1735517885,
        "playtime_disconnected": 0,
        "name": "DiRT Rally 2.0"
      },
      {
        "playtime_forever": 3817,
        "playtime_windows_forever": 3817,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1735756172,
        "playtime_disconnected": 0,
        "name": "Red Dead Redemption 2"
      },
      {
        "playtime_forever": 1496,
        "playtime_windows_forever": 21,
        "playtime_mac_forever": 1475,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1572750014,
        "playtime_disconnected": 0,
        "name": "Crusader Kings II"
      },
      {
        "playtime_forever": 26,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 26,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1577848093,
        "playtime_disconnected": 0,
        "name": "POSTAL"
      },
      {
        "playtime_forever": 78,
        "playtime_windows_forever": 78,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1744611321,
        "playtime_disconnected": 0,
        "name": "Battlefield\u2122 1"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Black Desert"
      },
      {
        "playtime_forever": 12662,
        "playtime_windows_forever": 12662,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1742273250,
        "playtime_disconnected": 0,
        "name": "ELDEN RING"
      },
      {
        "playtime_forever": 989,
        "playtime_windows_forever": 989,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1723085633,
        "playtime_disconnected": 0,
        "name": "tModLoader"
      },
      {
        "playtime_forever": 30,
        "playtime_windows_forever": 30,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1605402155,
        "playtime_disconnected": 0,
        "name": "Unknown AppID 1368440"
      },
      {
        "playtime_2weeks": 342,
        "playtime_forever": 5233,
        "playtime_windows_forever": 5233,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1745562378,
        "playtime_disconnected": 0,
        "name": "Battlefield\u2122 V"
      },
      {
        "playtime_forever": 11,
        "playtime_windows_forever": 11,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1612142614,
        "playtime_disconnected": 0,
        "name": "Bomber Crew"
      },
      {
        "playtime_forever": 101,
        "playtime_windows_forever": 101,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1642299192,
        "playtime_disconnected": 0,
        "name": "Ultimate Epic Battle Simulator"
      },
      {
        "playtime_forever": 7155,
        "playtime_windows_forever": 7155,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1724466656,
        "playtime_disconnected": 0,
        "name": "Kenshi"
      },
      {
        "playtime_forever": 1502,
        "playtime_windows_forever": 1455,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 46,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1740541016,
        "playtime_disconnected": 0,
        "name": "Vampire Survivors"
      },
      {
        "playtime_forever": 1883,
        "playtime_windows_forever": 1883,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1673864775,
        "playtime_disconnected": 0,
        "name": "The Elder Scrolls II: Daggerfall"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Warhammer: Vermintide 2"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "Mafia"
      },
      {
        "playtime_forever": 0,
        "playtime_windows_forever": 0,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 0,
        "playtime_disconnected": 0,
        "name": "The Witcher 3 REDkit"
      },
      {
        "playtime_forever": 271,
        "playtime_windows_forever": 271,
        "playtime_mac_forever": 0,
        "playtime_linux_forever": 0,
        "playtime_deck_forever": 0,
        "rtime_last_played": 1744522705,
        "playtime_disconnected": 0,
        "name": "Assetto Corsa EVO"
      }
    ]
  }
};



function formatTimestamp(unixSeconds) {
    if (!unixSeconds) return 'Never';
    const date = new Date(unixSeconds * 1000);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

$(document).ready(function () {
    const gameRows = steamData1.response.games
        .sort((a, b) => b.playtime_forever - a.playtime_forever)
        .map(game => {
            return [
                game.name,
                (game.playtime_forever / 60).toFixed(1), // Convert to hours
                formatTimestamp(game.rtime_last_played)
            ];
        });

    $('#gamesTable').DataTable({
        data: gameRows,
        columns: [
            { title: "App ID" },
            { title: "Playtime (hrs)" },
            { title: "Last Played" }
        ],
        pageLength: 25
    });
});



// Sort and take top 10 most played games
const topGames = steamData1.response.games
    .filter(game => game.playtime_forever > 0)
    .sort((a, b) => b.playtime_forever - a.playtime_forever)
    .slice(0, 20);

const labels = topGames.map(g => g.name);
const playtimes = topGames.map(g => (g.playtime_forever / 60).toFixed(1)); // in hours
const maxPlaytime = 700; // upper bound for gradient
const colors = topGames.map(game => {
    const ratio = Math.min(game.playtime_forever / 60 / maxPlaytime, 1); // convert to hours and clamp
    const hue = 240 - (240 * ratio); // from blue (240) to red (0)
    return `hsl(${hue}, 100%, 50%)`;
});


// Draw the chart
const ctx = document.getElementById('playtimeChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Playtime (hrs)',
            data: playtimes,
            backgroundColor: colors
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




//DRAWING VELOCITY CHART
function renderPlaytimeVelocityChart() {
    const canvas = document.getElementById("playtimeVelocityChart");
    if (!canvas) {
        console.warn("Canvas element not found.");
        return;
    }

    const ctx = canvas.getContext("2d");

    const monthlyPlaytime = {
        "2023-01": 22, "2023-02": 35, "2023-03": 40, "2023-04": 60,
        "2023-05": 20, "2023-06": 120, "2023-07": 356, "2023-08": 290,
        "2023-09": 60, "2023-10": 70, "2023-11": 15, "2023-12": 100,
        "2024-01": 90, "2024-02": 95, "2024-03": 110, "2024-04": 80,
        "2024-05": 12, "2024-06": 125, "2024-07": 160, "2024-08": 140,
        "2024-09": 70, "2024-10": 60, "2024-11": 20, "2024-12": 130,
        "2025-01": 212, "2025-02": 145, "2025-03": 135, "2025-04": 90, "2025-05": 5
    };

    const labels = Object.keys(monthlyPlaytime);
    const data = Object.values(monthlyPlaytime);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Playtime (hrs)',
                data: data,
                borderColor: 'rgba(75,192,192,1)',
                fill: true,
                backgroundColor: 'rgba(75,192,192,1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

console.log("Canvas:", document.getElementById("playtimeVelocityChart"));
console.log("Chart:", typeof Chart);


document.addEventListener("DOMContentLoaded", function () {
    renderPlaytimeVelocityChart();
});