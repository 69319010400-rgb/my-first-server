// เรียกใช้งานโมดูล http
const http = require("http");

// กำหนด Port
const PORT = process.env.PORT || 3000;

// สร้าง Server
const server = http.createServer((req, res) => {
  // กำหนด Header
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  // หน้าเว็บ HTML
  const html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Web Server - ลักษิกา เกตุศรีแก้ว</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    font-family:'Sarabun','Segoe UI',sans-serif;
    background:linear-gradient(135deg,#050a1a,#0b1730,#142b52);
    color:#fff;
}

.card{
    width:100%;
    max-width:620px;
    padding:40px;
    border-radius:20px;
    background:rgba(15,25,50,.75);
    border:1px solid rgba(120,160,255,.25);
    box-shadow:0 20px 60px rgba(0,0,0,.5);
}

.status{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:8px 15px;
    border-radius:30px;
    background:#113322;
    color:#4ee6a5;
    margin-bottom:20px;
}

.dot{
    width:10px;
    height:10px;
    border-radius:50%;
    background:#4ee6a5;
}

h1{
    margin-bottom:10px;
    color:#9cc2ff;
}

.subtitle{
    margin-bottom:25px;
    color:#b7c7e6;
}

hr{
    margin:20px 0;
    border:none;
    border-top:1px solid #335;
}

ul{
    list-style:none;
}

li{
    padding:10px;
    margin-bottom:10px;
    border-radius:8px;
    background:#1b2948;
}

strong{
    color:#7fa4ff;
}

footer{
    text-align:center;
    margin-top:25px;
    color:#8ca3d6;
}
</style>
</head>

<body>

<div class="card">

<div class="status">
<div class="dot"></div>
เครื่องแม่ข่ายทำงานปกติบน Railway
</div>

<h1>สวัสดีค่ะ! นี่คือ Web Server ของ<br>นางสาวลักษิกา เกตุศรีแก้ว</h1>

<p class="subtitle">รหัสนักศึกษา 69319010400</p>

<hr>

<ul>
<li><strong>ชื่อ-สกุล :</strong> นางสาวลักษิกา เกตุศรีแก้ว</li>
<li><strong>ห้อง :</strong> HIT.1/2</li>
<li><strong>ชื่อเล่น :</strong> แพน</li>
<li><strong>วันเกิด :</strong> 17/04</li>
<li><strong>สถานศึกษา :</strong> วิทยาลัยเทคโนโลยีชลบุรี</li>
<li><strong>ระดับชั้น :</strong> ปวส.1</li>
<li><strong>สาขา :</strong> เทคโนโลยีสารสนเทศ</li>
</ul>

<footer>Powered by Node.js & Railway 🚀</footer>

</div>

</body>
</html>
`;

  res.end(html);
});

// เปิด Server
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
