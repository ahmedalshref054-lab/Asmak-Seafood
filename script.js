// مصفوفة البيانات (عشان تعدل منها بسهولة)
const items = [
    { name: "وجبة البحار", price: "250", desc: "بوري سنجاري + جمبري", img: "2.png" },
    { name: "صينية الحبايب", price: "600", desc: "3 بلطي + 10 جمبري", img: "3.png" },
    { name: "صينية العيلة", price: "950", desc: "وليمة فسفور متكاملة", img: "4.png" },
    { name: "صينية الأكيلة", price: "500", desc: "فيليه وجمبري منوع", img: "5.png" },
    { name: "وجبة أز أز", price: "120", desc: "كابوريا وبلطي مقلي", img: "6.png" }
];

const grid = document.getElementById('offersGrid');

// بناء الكروت برمجياً
items.forEach((item, index) => {
    const card = `
        <div class="offer-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="price-circle">${item.price}</div>
            <img src="${item.img}" alt="${item.name}">
            <h3 style="margin: 20px 0 10px; font-size: 1.5rem;">${item.name}</h3>
            <p style="opacity: 0.7; margin-bottom: 20px;">${item.desc}</p>
            <button class="order-btn" style="width: 100%; padding: 12px; background: #0077b6; border: none; color: white; border-radius: 15px; font-weight: 900; cursor: pointer;">إضافة للسلة</button>
        </div>
    `;
    grid.innerHTML += card;
});

// تشغيل مكتبة الحركات
AOS.init({ duration: 1000, once: true });

// تأثير الماوس على الصورة الرئيسية
document.addEventListener('mousemove', (e) => {
    const img = document.querySelector('.floating-img');
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    img.style.transform = `translateX(${x}px) translateY(${y}px)`;
});