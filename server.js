// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http' ซึ่งเป็นระบบพื้นฐานของ Node.js สำหรับทำเซิร์ฟเวอร์
const http = require('http');

// 2. กำหนดช่องทาง (Port) ที่เซิร์ฟเวอร์จะใช้สื่อสาร โดยใช้ของที่ Cloud กำหนดมา (process.env.PORT) ถ้าไม่มีให้ใช้ 3000
const port = process.env.PORT || 3000;

// 3. สร้างเครื่องแม่ข่าย (Server) ที่คอยรับคำขอ (req) และตอบกลับ (res)
const server = http.createServer((req, res) => {
  // 3.1 ตั้งรหัสสถานะ 200 หมายถึง "ทำงานสำเร็จ (OK)"
  res.statusCode = 200;

  // 3.2 บอกเบราว์เซอร์ของผู้ใช้ว่า สิ่งที่ส่งกลับไปคือไฟล์ข้อความแบบ HTML และรองรับภาษาไทย (utf-8)
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 3.3 สร้างหน้าเว็บ HTML ที่มีการตกแต่งสวยงาม โทนดำน้ำเงิน (Dark Blue) พร้อมข้อมูลส่วนตัว
  const html = `
  <!DOCTYPE html>
  <html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web Server - ลักษิกา เกตุศรีแก้ว</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        min-height: 100vh;
        font-family: 'Sarabun', 'Segoe UI', Tahoma, sans-serif;
        background: linear-gradient(135deg, #050a1a 0%, #0b1730 45%, #142b52 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        color: #e6ecff;
      }

      .card {
        width: 100%;
        max-width: 620px;
        background: rgba(15, 25, 50, 0.75);
        border: 1px solid rgba(120, 160, 255, 0.25);
        border-radius: 20px;
        padding: 40px 36px;
        box-shadow: 0 20px 60px rgba(0, 10, 40, 0.6),
                    0 0 0 1px rgba(90, 130, 220, 0.08) inset;
        backdrop-filter: blur(6px);
        position: relative;
        overflow: hidden;
      }

      .card::before {
        content: "";
        position: absolute;
        top: -60px;
        right: -60px;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(70, 120, 255, 0.35), transparent 70%);
        border-radius: 50%;
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(40, 200, 130, 0.12);
        border: 1px solid rgba(40, 200, 130, 0.4);
        color: #4ee6a5;
        padding: 6px 14px;
        border-radius: 999px;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 20px;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #4ee6a5;
        box-shadow: 0 0 8px #4ee6a5;
        animation: pulse 1.6s infinite;
      }

      @keyframes pulse {
        0%   { opacity: 1; }
        50%  { opacity: 0.4; }
        100% { opacity: 1; }
      }

      h1 {
        font-size: 26px;
        background: linear-gradient(90deg, #8fb8ff, #5b8dff, #a4c8ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin-bottom: 6px;
        line-height: 1.4;
      }

      .subtitle {
        color: #9fb3e0;
        font-size: 15px;
        margin-bottom: 28px;
      }

      .divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(120, 160, 255, 0.4), transparent);
        margin: 24px 0;
      }

      .info-title {
        font-size: 17px;
        font-weight: 700;
        color: #cfe0ff;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .info-title::before {
        content: "👤";
        font-size: 18px;
      }

      .info-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .info-list li {
        display: flex;
        gap: 10px;
        font-size: 15px;
        color: #dbe6ff;
        background: rgba(90, 130, 220, 0.08);
        border: 1px solid rgba(90, 130, 220, 0.15);
        border-radius: 10px;
        padding: 10px 14px;
      }

      .info-list .label {
        color: #7fa4ff;
        font-weight: 600;
        min-width: 90px;
        flex-shrink: 0;
      }

      footer {
        margin-top: 30px;
        text-align: center;
        font-size: 12.5px;
        color: #6b83b8;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="status-badge">
        <span class="status-dot"></span>
        เครื่องแม่ข่ายทำงานปกติบน Railway
      </div>

      <h1>สวัสดีค่ะ! นี่คือ Web Server ของ<br />นางสาวลักษิกา เกตุศรีแก้ว</h1>
      <p class="subtitle">รหัสนักศึกษา 69319010400</p>

      <div class="divider"></div>

      <div class="info-title">ข้อมูลส่วนตัวเจ้าของ Server</div>
      <ul class="info-list">
        <li><span class="label">ชื่อ-สกุล</span> นางสาวลักษิกา เกตุศรีแก้ว</li>
        <li><span class="label">ห้อง/รหัส</span> HIT.1/2</li>
        <li><span class="label">ชื่อเล่น</span> แพน</li>
        <li><span class="label">วันเกิด</span> 17/04</li>
        <li><span class="label">สถานศึกษา</span> วิทยาลัยเทคโนโลยีชลบุรี</li>
        <li><span class="label">ระดับชั้น</span> ปวส.1</li>
        <li><span class="label">สาขา</span> เทคโนโลยีสารสนเทศ</li>
      </ul>

      <footer>Powered by Node.js &amp; Railway 🚀</footer>
    </div>
  </body>
  </html>
  `;

  // 3.4 ส่งข้อมูลหน้าเว็บกลับไปหาผู้ใช้
  res.end(html);
});

// 4. สั่งให้เซิร์ฟเวอร์เริ่มต้นเปิดรับฟังการเชื่อมต่อตาม Port ที่กำหนดไว้
server.listen(port, () => {
  console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง:: ${port}`);
});
