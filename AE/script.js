// ===== ตั้งค่าระบบแจ้งเตือนเมื่อแฟนกดตกลง =====
const NOTIFICATION_CONFIG = {
    // 1. แจ้งเตือนเข้า Discord (เชื่อมต่อเรียบร้อยแล้ว):
    discordWebhookUrl: 'https://discord.com/api/webhooks/1562016411331862540/fgW5iRCDwvsU4AYLmWGVO5IUigWG-H84gN3-EcbfU9orptFgegSs8JE_K4x4VjKAh1nH', 

    // 2. แจ้งเตือนเข้า Telegram (ทางเลือก):
    telegramBotToken: '',
    telegramChatId: '',

    // 3. ข้อความแชร์เข้า LINE อัตโนมัติ:
    lineShareMessage: 'เค้าตอบตกลงแล้วนะ ต่อไปนี้ดูแลเค้าดีๆ ด้วยนะ 💕'
};

const slidesData = [
    {
        image: '557613010_1491399892201874_5845588359446759991_n.jpg',
        text: 'ตั้งแต่วันแรกที่เธอเดินเข้ามาในชีวิต โลกใบเดิมก็ไม่เหมือนเดิมอีกต่อไป 💕'
    },
    {
        image: '838964857_2180857109308185_6435713099212552625_n.jpg',
        text: 'จากคนแปลกหน้าในวันนั้น... กลายมาเป็นคนสำคัญที่สุดในหัวใจในวันนี้ ✨'
    },
    {
        image: '03959983-2DE1-49F9-BBEA-0A18B0052929.jpeg',
        text: 'รอยยิ้มของเธอตั้งแต่แรกเห็น คือสิ่งที่ทำให้หัวใจเต้นแรงไม่เคยเปลี่ยน 🌸'
    },
    {
        image: '0479F192-FC76-4987-97BF-753FE585FBEA.jpeg',
        text: 'ขอบคุณโชคชะตาที่พาให้เราได้มาเจอกัน และได้มารู้จักกันนะ 💫'
    },
    {
        image: '35502B54-D286-449B-AB0F-755781AD36BC.jpeg',
        text: 'ยิ่งได้รู้จัก ก็ยิ่งรู้สึกว่าเธอเป็นคนพิเศษที่หาที่ไหนไม่ได้อีกแล้ว 🌷'
    },
    {
        image: '3DABC157-D5F3-40E5-B87B-D531D566F77A.jpeg',
        text: 'ความสดใสของเธอ เหมือนแสงแดดยามเช้าที่คอยเติมพลังให้เค้าเสมอ ☀️'
    },
    {
        image: '6976EA24-B56E-4519-B1D3-0A2D4DE206B7.jpeg',
        text: 'ไม่ว่าจะทำอะไร ขอแค่ได้มีเธออยู่ใกล้ๆ ทุกอย่างก็มีความสุขขึ้นทันที 💖'
    },
    {
        image: '90F14ACF-02EE-46FA-943C-EA13A824611F.jpeg',
        text: 'ขอบคุณทุกๆ การพูดคุย ทุกเสียงหัวเราะที่เราแชร์ด้วยกันในทุกๆ วันนะ 💬'
    },
    {
        image: 'A886B9B8-D246-45CF-84D8-772F1BCA73F0.jpeg',
        text: 'ทุกสถานที่ที่เราไปด้วยกัน ล้วนกลายเป็นความทรงจำที่สวยงามที่สุด 🍃'
    },
    {
        image: 'AB235D03-CE13-47B9-83DF-2BC72C9AA6F2.jpeg',
        text: 'การได้เห็นเธอกินของอร่อยๆ แล้วยิ้มตาหยี เป็นภาพที่น่ารักที่สุดเลย 🍰'
    },
    {
        image: 'D1F49F47-DC7A-44C7-B742-3D9D5CF0981F.jpeg',
        text: 'เวลาที่ได้อยู่ข้างๆ เธอ คือช่วงเวลาที่เค้ารู้สึกสบายใจและเป็นตัวเองมากที่สุด 🛋️'
    },
    {
        image: 'D984F339-8BC2-48C6-ACF8-AA6AE20B529D.jpeg',
        text: 'ขอบคุณที่คอยเป็นพลังบวก และคอยส่งความอบอุ่นให้กันเสมอมานะ 🌈'
    },
    {
        image: 'E6CEFF8D-82BF-4F54-AC80-F73CEBF18B32.jpeg',
        text: 'เวลาเธอเหนื่อย เค้าอยากคอยเป็นอ้อมกอดที่ทำให้เธอหายล้าได้เสมอ 🧸'
    },
    {
        image: 'EB8F4AFA-5950-4FD5-B15A-7A8BAEF89757.jpeg',
        text: 'ทุกรูปถ่ายที่เราเก็บไว้ มันไม่ใช่แค่ภาพ แต่มันคือเรื่องราวความรักของเรา 📸'
    },
    {
        image: 'F8486CA0-8184-4B80-AD08-9B45342C4F6E.jpeg',
        text: 'มีหลายช่วงเวลาที่เค้าแอบมองเธอ แล้วก็เผลอยิ้มออกมาคนเดียวบ่อยๆ 🤭'
    },
    {
        image: '557613010_1491399892201874_5845588359446759991_n.jpg',
        text: 'ในวันที่เธอรู้สึกว่าโลกใจร้าย จำไว้นะว่ายังมีเค้าที่พร้อมใจดีกับเธอเสมอ 🤍'
    },
    {
        image: '838964857_2180857109308185_6435713099212552625_n.jpg',
        text: 'เค้าอาจจะไม่ได้สมบูรณ์แบบที่สุด แต่สัญญาว่าจะรักเธอให้ดีที่สุดในทุกๆ วัน ✨'
    },
    {
        image: '03959983-2DE1-49F9-BBEA-0A18B0052929.jpeg',
        text: 'ไม่ว่าเรื่องเล็กหรือเรื่องใหญ่ เธอสามารถเล่าและระบายให้เค้าฟังได้ทุกเรื่องเลยนะ 👂💕'
    },
    {
        image: '0479F192-FC76-4987-97BF-753FE585FBEA.jpeg',
        text: 'ขอบคุณที่อดทนและเข้าใจในบางครั้งที่เค้าอาจจะไม่น่ารักหรือไม่ทันคิดนะ 🥺'
    },
    {
        type: 'video',
        video: '56cb3bf6568f13e9ab9fe3af5a73a818.mp4',
        text: 'คลิปความทรงจำนี้ ทุกครั้งที่เปิดดู ก็ยืนยันได้เสมอว่าเธอน่ารักที่สุดในโลก 🎬💕'
    },
    {
        image: '35502B54-D286-449B-AB0F-755781AD36BC.jpeg',
        text: 'เค้าอยากเป็นคนที่เธอหันมาเมื่อไหร่ ก็จะเจอเสมอ ไม่ว่าจะทุกข์หรือสุข 🌟'
    },
    {
        image: '3DABC157-D5F3-40E5-B87B-D531D566F77A.jpeg',
        text: 'สัญญาว่าจะไม่มองข้ามความรู้สึกของเธอ จะคอยใส่ใจแม้ในเรื่องเล็กๆ น้อยๆ 🌷'
    },
    {
        image: '6976EA24-B56E-4519-B1D3-0A2D4DE206B7.jpeg',
        text: 'สัญญาว่าจะจับมือคู่นี้ไว้ให้แน่น และไม่มีวันปล่อยให้เธอต้องเดินคนเดียว 🤝'
    },
    {
        image: '90F14ACF-02EE-46FA-943C-EA13A824611F.jpeg',
        text: 'สัญญาว่าจะใจเย็น จะคอยรับฟัง และคุยกันด้วยความเข้าใจในทุกๆ เรื่อง 🕊️'
    },
    {
        image: 'A886B9B8-D246-45CF-84D8-772F1BCA73F0.jpeg',
        text: 'สัญญาว่าจะคอยเป็นกำลังใจ และคอยซัพพอร์ตทุกความฝันที่เธออยากทำ 🎯'
    },
    {
        image: 'AB235D03-CE13-47B9-83DF-2BC72C9AA6F2.jpeg',
        text: 'สัญญาว่าจะดูแลเรื่องสุขภาพ อาหารการกิน และความเป็นอยู่ของเธอเป็นอย่างดี 🍲'
    },
    {
        image: 'D1F49F47-DC7A-44C7-B742-3D9D5CF0981F.jpeg',
        text: 'สัญญาว่าจะไม่หยุดพัฒนาตัวเอง เพื่อเป็นคนที่พร้อมดูแลเธอไปตลอดชีวิต 💼'
    },
    {
        image: 'D984F339-8BC2-48C6-ACF8-AA6AE20B529D.jpeg',
        text: 'สัญญาว่าจะเป็นรอยยิ้ม และเป็นเซฟโซนที่อบอุ่นและปลอดภัยที่สุดให้เธอ 🏡'
    },
    {
        image: 'E6CEFF8D-82BF-4F54-AC80-F73CEBF18B32.jpeg',
        text: 'ขอบคุณที่คอยเป็นแรงบันดาลใจให้เค้าอยากเป็นคนที่ดีขึ้นในทุกๆ วันนะ 💖'
    },
    {
        image: 'EB8F4AFA-5950-4FD5-B15A-7A8BAEF89757.jpeg',
        text: 'ทุกเส้นทางข้างหน้า จะมีเค้าคอยเคียงข้างร่วมเดินทางไปด้วยกันเสมอ 🛣️'
    },
    {
        image: 'F8486CA0-8184-4B80-AD08-9B45342C4F6E.jpeg',
        text: 'เค้ารู้สึกโชคดีเหลือเกินที่มีเธอเข้ามาอยู่ในชีวิต ขอบคุณจริงๆ นะครับ 🍀'
    },
    {
        image: '557613010_1491399892201874_5845588359446759991_n.jpg',
        text: 'ในวันที่เหนื่อยล้า... แค่คิดถึงรอยยิ้มของเธอ ก็มีแรงสู้ต่อได้แล้ว 🔋'
    },
    {
        image: '838964857_2180857109308185_6435713099212552625_n.jpg',
        text: 'เค้าจะคอยทะนุถนอม และรักษาหัวใจของเธอไว้อย่างดีที่สุด ไม่ให้มีน้ำตา 💎'
    },
    {
        image: '03959983-2DE1-49F9-BBEA-0A18B0052929.jpeg',
        text: 'ต่อให้เวลาจะผ่านไปนานแค่ไหน ความรู้สึกที่เค้ามีให้เธอจะยังคงเดิมเสมอ ⏳'
    },
    {
        image: '0479F192-FC76-4987-97BF-753FE585FBEA.jpeg',
        text: 'อยากตื่นขึ้นมาแล้วเจอเธอ และอยากเป็นคนบอกฝันดีกับเธอในทุกๆ คืน 🌙'
    },
    {
        image: '35502B54-D286-449B-AB0F-755781AD36BC.jpeg',
        text: 'ขอบคุณที่เธอเลือกที่จะเปิดใจ และให้โอกาสเค้าได้เข้ามาใกล้ชิดนะ 💌'
    },
    {
        image: '3DABC157-D5F3-40E5-B87B-D531D566F77A.jpeg',
        text: 'อยากแก่ไปด้วยกัน และสร้างอนาคตที่เต็มไปด้วยความสุขด้วยกันนะ 👵👴'
    },
    {
        image: '6976EA24-B56E-4519-B1D3-0A2D4DE206B7.jpeg',
        text: 'รักเธอมากกว่าเมื่อวาน และจะรักเธอมากกว่าเดิมในทุกๆ วันนับจากนี้ ❤️'
    },
    {
        image: 'F8486CA0-8184-4B80-AD08-9B45342C4F6E.jpeg',
        text: 'และสุดท้ายนี้... มีสิ่งหนึ่งจากก้นบึ้งของหัวใจ ที่เค้าอยากจะขอเธออย่างจริงใจที่สุด...'
    },
    {
        type: 'proposal',
        text: 'ตั้งแต่วันแรกที่ได้รู้จัก และมีเธอเข้ามาในชีวิต\nเธอคือคนที่ทำให้ทุกวันมีความหมายและสดใสเสมอ\nจากวันนี้เป็นต้นไป สัญญาว่าจะรัก ทะนุถนอม และคอยดูแลห่วงใยเธอตลอดไป\n...',
        question: 'ให้เค้าได้ดูแลและห่วงใยเธอตลอดไปนะ? 💍'
    }
];

let currentSlide = 0;
const slidesContainer = document.getElementById('slides-container');
const progress = document.getElementById('progress');
const particlesContainer = document.getElementById('particles-container');
const sparklesContainer = document.getElementById('sparkles');
const dotsContainer = document.getElementById('slide-dots');
const counterEl = document.getElementById('slide-counter');

// ===== สร้างสไลด์ (Initialize Slides) =====
function initSlides() {
    slidesContainer.innerHTML = '';
    dotsContainer.innerHTML = '';

    slidesData.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');
        if (index === 0) slideDiv.classList.add('active');

        if (slide.type === 'proposal') {
            slideDiv.classList.add('proposal-slide');
            slideDiv.innerHTML = `
                <div class="slide-card proposal-card">
                    <div class="slide-gift-tag"><span>🎁</span> ของขวัญกล่องสำคัญที่สุด</div>
                    <div class="proposal-icon gift-bounce">🎁</div>
                    <p class="proposal-text">${slide.text.replace(/\n/g, '<br>')}</p>
                    <h2 class="proposal-question">${slide.question}</h2>
                    <div class="proposal-buttons">
                        <button class="proposal-btn yes-btn" id="yes-btn">ตกลง 💕</button>
                        <button class="proposal-btn no-btn" id="no-btn">ขอคิดก่อน 🤔</button>
                    </div>
                    <div class="proposal-result" id="proposal-result"></div>
                </div>
            `;
        } else if (slide.type === 'video') {
            slideDiv.innerHTML = `
                <div class="slide-card">
                    <div class="slide-gift-tag"><span>🎁</span> ของขวัญความทรงจำที่ ${index + 1}</div>
                    <video src="${slide.video}" controls playsinline class="slide-video"></video>
                    <p class="slide-text">${slide.text}</p>
                </div>
            `;
        } else {
            slideDiv.innerHTML = `
                <div class="slide-card">
                    <div class="slide-gift-tag"><span>🎁</span> ของขวัญความทรงจำที่ ${index + 1}</div>
                    <img src="${slide.image}" alt="Slide ${index + 1}" class="slide-img" loading="lazy">
                    <p class="slide-text">${slide.text}</p>
                </div>
            `;
        }
        slidesContainer.appendChild(slideDiv);

        // สร้างจุด Dot (ปิดการใช้งานตามที่ผู้ใช้ต้องการ)
        if (dotsContainer) {
            // dotsContainer.style.display = 'none';
        }
    });
    updateProgress();
    updateCounter();
}

// ===== อัปเดตการแสดงผลสไลด์ =====
function updateSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach((slide, index) => {
        const video = slide.querySelector('video');
        if (index === currentSlide) {
            slide.classList.add('active');
            if (video) {
                video.currentTime = 0;
                video.play().catch(() => {});
            }
        } else {
            slide.classList.remove('active');
            if (video) {
                video.pause();
            }
        }
    });

    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    updateProgress();
    updateCounter();
}

function updateProgress() {
    const percent = ((currentSlide + 1) / slidesData.length) * 100;
    progress.style.width = percent + '%';
}

function updateCounter() {
    counterEl.textContent = `${currentSlide + 1} / ${slidesData.length}`;
}

// ===== ปุ่มควบคุมสไลด์ (Controls) =====
document.getElementById('next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slidesData.length;
    updateSlides();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
    updateSlides();
});

// เลื่อนสไลด์ด้วยปุ่มลูกศรคีย์บอร์ด
document.addEventListener('keydown', (e) => {
    if (document.getElementById('slideshow').classList.contains('hidden')) return;
    if (e.key === 'ArrowRight') {
        currentSlide = (currentSlide + 1) % slidesData.length;
        updateSlides();
    } else if (e.key === 'ArrowLeft') {
        currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
        updateSlides();
    }
});

// ปุ่มเริ่มต้น "เปิดดูความในใจ"
document.getElementById('start-btn').addEventListener('click', () => {
    const landing = document.getElementById('landing');
    landing.style.opacity = '0';
    landing.style.transform = 'scale(0.95)';
    landing.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        landing.classList.add('hidden');
        const slideshow = document.getElementById('slideshow');
        slideshow.classList.remove('hidden');
        slideshow.style.display = 'flex';
        slideshow.style.opacity = '1';
    }, 500);

    // เริ่มเล่นเพลง
    const music = document.getElementById('bg-music');
    music.play().then(() => {
        isPlaying = true;
        musicWave.classList.remove('paused');
    }).catch(e => {
        console.log("Auto-play blocked, click to play");
    });
});

// ===== เอฟเฟกต์รูปหัวใจและกล่องของขวัญลอย (Floating Particles) =====
const floatingEmojis = ['💕', '🎁', '💖', '🎀', '💝', '💗', '🧸', '🌸', '🎁', '✨', '🎁', '💐'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
    heart.style.fontSize = (Math.random() * 18 + 14) + 'px';

    particlesContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);

// ===== เอฟเฟกต์ประกายระยิบระยับ (Sparkles) =====
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDuration = (Math.random() * 2 + 1) + 's';
    sparkle.style.animationDelay = (Math.random() * 2) + 's';

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 4000);
}

setInterval(createSparkle, 200);

// ===== ควบคุมเสียงเพลง (Music Player Toggle) =====
const musicBtn = document.getElementById('music-toggle');
const music = document.getElementById('bg-music');
const musicWave = document.querySelector('.music-wave');
let isPlaying = false;

// พยายามเล่นเพลงทันที
music.volume = 0.4;
music.play().then(() => {
    isPlaying = true;
    musicWave.classList.remove('paused');
}).catch(e => {
    musicWave.classList.add('paused');
    // เล่นเมื่อผู้ใช้คลิกส่วนใดๆ ของหน้าจอ
    document.addEventListener('click', function playOnce() {
        music.play().then(() => {
            isPlaying = true;
            musicWave.classList.remove('paused');
        }).catch(() => {});
        document.removeEventListener('click', playOnce);
    }, { once: true });
});

musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) {
        music.pause();
        musicWave.classList.add('paused');
    } else {
        music.play();
        musicWave.classList.remove('paused');
    }
    isPlaying = !isPlaying;
});

// ===== รองรับการปัดหน้าจอบนมือถือ (Touch Swipe) =====
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    if (document.getElementById('slideshow').classList.contains('hidden')) return;
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            currentSlide = (currentSlide + 1) % slidesData.length;
        } else {
            currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
        }
        updateSlides();
    }
}, { passive: true });

// ===== ระบบส่งการแจ้งเตือนเมื่อฝ่ายนั้นตอบกลับ =====
function sendNotification(answer) {
    const timestamp = new Date().toLocaleString('th-TH');

    // 1. บันทึกลงไฟล์ responses.json ผ่าน PHP (XAMPP)
    fetch('save_response.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            answer: answer,
            timestamp: timestamp
        })
    }).catch(err => console.log('Save response error:', err));

    // 2. ส่งแจ้งเตือนเข้า Discord (หากมีการระบุ Webhook URL)
    if (NOTIFICATION_CONFIG.discordWebhookUrl) {
        const isYes = answer === 'yes';
        const title = isYes ? '🎉 แฟนตอบตกลงให้ดูแลแล้วนะ! 💕💍' : '🤔 แฟนกดขอคิดก่อน';
        const color = isYes ? 0xff4d88 : 0xffcc00;
        
        fetch(NOTIFICATION_CONFIG.discordWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'แจ้งเตือนความรัก 💕',
                content: isYes ? '@everyone 📢 **มีข่าวดีสุดพิเศษ! แฟนตอบตกลงแล้วนะ!** 💖' : '',
                embeds: [{
                    title: title,
                    description: isYes 
                        ? `💖 **คำตอบ:** ตกลงยอมให้ดูแลตลอดไปแล้ว 🥹\n⏰ **เวลาที่ตอบ:** ${timestamp}\n\n💌 *ยินดีด้วยมากๆ เลยนะ ขอให้รักกันหวานชื่นแบบนี้ตลอดไป!* ✨`
                        : `🤔 **คำตอบ:** แฟนกดขอคิดดูก่อนนะ 😜\n⏰ **เวลา:** ${timestamp}`,
                    color: color,
                    footer: { text: 'ระบบแจ้งเตือนความรัก Forever & Always 💕' }
                }]
            })
        }).catch(err => console.log('Discord notification error:', err));
    }

    // 3. ส่งแจ้งเตือนเข้า Telegram (หากมีการตั้งค่า)
    if (NOTIFICATION_CONFIG.telegramBotToken && NOTIFICATION_CONFIG.telegramChatId) {
        const msg = answer === 'yes'
            ? `🎉 ข่าวดี! แฟนตอบตกลงให้ดูแลแล้วนะ 💕💍\n⏰ เวลา: ${timestamp}`
            : `🤔 แฟนกดขอคิดดูก่อนนะ\n⏰ เวลา: ${timestamp}`;
        
        fetch(`https://api.telegram.org/bot${NOTIFICATION_CONFIG.telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: NOTIFICATION_CONFIG.telegramChatId,
                text: msg
            })
        }).catch(err => console.log('Telegram error:', err));
    }
}

// ===== สไลด์บอกความในใจและสัญญา (Proposal / Promise Buttons) =====
function setupProposal() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const result = document.getElementById('proposal-result');

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            // ส่งแจ้งเตือนทันที!
            sendNotification('yes');

            const encodedLineMsg = encodeURIComponent(NOTIFICATION_CONFIG.lineShareMessage);
            const lineShareUrl = `https://line.me/R/msg/text/?${encodedLineMsg}`;

            result.innerHTML = `
                <div class="result-yes">
                    <h2 class="result-title">ขอบคุณนะที่ไว้ใจกัน 🥹💕</h2>
                    <p class="result-text">สัญญาว่าจะรัก ดูแลเอาใจใส่ และห่วงใยเธอตลอดไป จะทำให้เธอมีความสุขที่สุดเลยนะ</p>
                    <div class="result-hearts">💖💗💕💓💝</div>
                    <div style="margin-top: 25px;">
                        <a href="${lineShareUrl}" target="_blank" class="btn" style="text-decoration: none; padding: 14px 28px; font-size: 1.05rem; background: #06c755; color: white; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(6,199,85,0.4);">
                            <span>กดส่งบอกเค้าทาง LINE ได้เลย 💬</span>
                        </a>
                    </div>
                </div>
            `;
            result.style.display = 'block';
            yesBtn.style.display = 'none';
            noBtn.style.display = 'none';
            launchConfetti();
        });
    }

    if (noBtn) {
        // ฟังก์ชันให้ปุ่มวิ่งหนี
        const moveNoBtn = () => {
            const maxX = window.innerWidth - noBtn.offsetWidth - 50;
            const maxY = window.innerHeight - noBtn.offsetHeight - 50;
            const randomX = Math.max(20, Math.floor(Math.random() * maxX));
            const randomY = Math.max(20, Math.floor(Math.random() * maxY));
            noBtn.style.position = 'fixed';
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
            noBtn.style.zIndex = '9999';
        };

        noBtn.addEventListener('mouseover', moveNoBtn);
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            moveNoBtn();
        });

        noBtn.addEventListener('click', () => {
            sendNotification('thinking');
            result.innerHTML = `
                <div class="result-thinking">
                    <p class="result-text">ไม่เป็นไรนะ... แต่สัญญาไว้ตรงนี้เลยว่าจะรักและดูแลเธอให้ดีที่สุดแน่นอน 😜💕</p>
                </div>
            `;
            result.style.display = 'block';
        });
    }
}

// ===== เอฟเฟกต์เฉลิมฉลอง (Confetti) =====
function launchConfetti() {
    const colors = ['#ff6b8a', '#ff8fab', '#ffb3c6', '#ffd6e0', '#f4568c', '#d4a373', '#fff0f3'];
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}vw;
                top: -10px;
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                z-index: 10000;
                pointer-events: none;
                animation: confettiFall ${Math.random() * 2 + 2}s linear forwards;
            `;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }, i * 20);
    }
}

// แอนิเมชันสำหรับโปรย Confetti
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
`;
document.head.appendChild(confettiStyle);

// เริ่มต้นการทำงาน
initSlides();
setupProposal();
