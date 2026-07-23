// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http' ซึ่งเป็นระบบพื้นฐานของ Node.js สำหรับทำเซิร์ฟเวอร์
const http = require('http');

// 2. กำหนดช่องทาง (Port) ที่เซิร์ฟเวอร์จะใช้สื่อสาร โดยใช้ของที่ Cloud กำหนดมา (process.env.PORT) ถ้าไม่มีให้ใช้ 3000
const port = process.env.PORT || 3000;

// รูปโปรไฟล์เจ้าของเซิร์ฟเวอร์ (แปลงเป็น Base64 ฝังไว้ในไฟล์เดียว ไม่ต้องอัปโหลดไฟล์รูปแยก)
const profileImage = "data:image/jpeg;base64,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";

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
        text-align: center;
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

      .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #5b8dff;
        box-shadow: 0 0 0 6px rgba(91, 141, 255, 0.15),
                    0 10px 30px rgba(0, 0, 0, 0.5);
        margin: 0 auto 20px auto;
        display: block;
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
        justify-content: center;
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
        text-align: left;
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
      <img class="avatar" src="${profileImage}" alt="รูปโปรไฟล์ ลักษิกา เกตุศรีแก้ว" />

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
