<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>บันทึกคำตอบ 💕</title>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Prompt', sans-serif;
            background: linear-gradient(135deg, #fce4ec, #f8bbd0);
            min-height: 100vh;
            margin: 0;
            padding: 40px 20px;
            color: #5c1a3a;
        }
        .container {
            max-width: 700px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(15px);
            border-radius: 24px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(244, 86, 140, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.8);
        }
        h1 {
            text-align: center;
            color: #f4568c;
            margin-bottom: 25px;
        }
        .record-card {
            background: white;
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            border-left: 6px solid #f4568c;
        }
        .record-card.thinking {
            border-left-color: #ffb703;
        }
        .badge {
            display: inline-block;
            padding: 6px 14px;
            border-radius: 20px;
            font-weight: 500;
            font-size: 0.95rem;
            margin-bottom: 10px;
        }
        .badge-yes {
            background: #ffe3ec;
            color: #f4568c;
        }
        .badge-thinking {
            background: #fff3cd;
            color: #856404;
        }
        .time {
            font-size: 0.9rem;
            color: #888;
        }
        .empty {
            text-align: center;
            padding: 40px;
            color: #888;
        }
        .btn-refresh {
            display: block;
            margin: 20px auto 0;
            background: #f4568c;
            color: white;
            border: none;
            padding: 10px 24px;
            border-radius: 20px;
            font-size: 1rem;
            cursor: pointer;
            font-family: inherit;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>💌 ประวัติคำตอบความรู้สึก</h1>
        <?php
        $file = __DIR__ . '/responses.json';
        if (file_exists($file)) {
            $data = json_decode(file_get_contents($file), true);
            if (!empty($data) && is_array($data)) {
                // แสดงรายการล่าสุดก่อน
                $data = array_reverse($data);
                foreach ($data as $item) {
                    $isYes = ($item['answer'] ?? '') === 'yes';
                    $badgeClass = $isYes ? 'badge-yes' : 'badge-thinking';
                    $badgeText = $isYes ? 'ตกลงยอมให้ดูแลแล้ว 💕' : 'ขอคิดดูก่อน 🤔';
                    $time = htmlspecialchars($item['timestamp'] ?? '-');
                    $device = htmlspecialchars($item['device'] ?? '-');
                    
                    echo '<div class="record-card ' . ($isYes ? 'yes' : 'thinking') . '">';
                    echo '<div class="badge ' . $badgeClass . '">' . $badgeText . '</div>';
                    echo '<div class="time">⏰ วันที่-เวลา: ' . $time . '</div>';
                    echo '</div>';
                }
            } else {
                echo '<div class="empty">ยังไม่มีข้อมูลคำตอบที่บันทึกไว้</div>';
            }
        } else {
            echo '<div class="empty">ยังไม่มีข้อมูลคำตอบที่บันทึกไว้ (จะถูกบันทึกอัตโนมัติเมื่อฝ่ายนั้นกดปุ่ม)</div>';
        }
        ?>
        <button class="btn-refresh" onclick="location.reload()">🔄 รีเฟรชดูข้อมูลล่าสุด</button>
    </div>
</body>
</html>
