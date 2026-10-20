<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// รับข้อมูลที่ส่งมา
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

$answer = isset($data['answer']) ? $data['answer'] : 'unknown';
$time = date('Y-m-d H:i:s');
$ip = $_SERVER['REMOTE_ADDR'] ?? 'Unknown IP';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown Device';

// ข้อมูลที่จะบันทึก
$record = [
    'timestamp' => $time,
    'answer' => $answer,
    'message' => ($answer === 'yes') ? 'ตอบตกลงที่จะให้ดูแล 💕' : 'ขอคิดดูก่อน 🤔',
    'ip' => $ip,
    'device' => $userAgent
];

$file = __DIR__ . '/responses.json';
$history = [];

if (file_exists($file)) {
    $existing = json_decode(file_get_contents($file), true);
    if (is_array($existing)) {
        $history = $existing;
    }
}

$history[] = $record;
file_put_contents($file, json_encode($history, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo json_encode([
    'status' => 'success',
    'message' => 'บันทึกคำตอบเรียบร้อยแล้ว',
    'data' => $record
], JSON_UNESCAPED_UNICODE);
