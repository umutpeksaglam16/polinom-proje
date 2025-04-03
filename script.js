const data = {
    "polinom özellikleri": [
        "Polinomlar terimlerin derecelerine göre sınıflandırılır.",
        "Toplama, çıkarma ve çarpma işlemleri uygulanabilir.",
        "Bir polinomun derecesi, en büyük üslü terimin derecesidir.",
        "Sabit polinomların derecesi 0'dır.",
        "Çarpma işleminde polinomların dereceleri toplanır.",
        "Bir polinomun katsayıları sabit sayılardır.",
        "Polinomlar, cebirsel ifadelerin özel bir türüdür.",
        "Bir polinom P(x) = 0 olduğunda x değeri polinomun köküdür.",
        "Bir polinomun sabit terimi, x=0 için polinomun aldığı değerdir.",
        "Bir polinomun türevi, polinomun değişim oranını gösterir.",
        "Bir polinomun grafiği, o polinomun davranışını gösterir.",
        "İki polinomun toplamı veya farkı yine bir polinomdur.",
        "Polinomların çarpımı yine bir polinomdur.",
        "Polinomlar, rasyonel veya irrasyonel katsayılara sahip olabilir.",
        "Polinom fonksiyonlarının türev ve integral kuralları vardır."
    ],
    "polinom çeşitleri": [
        "Sabit Polinom: Derecesi 0 olan polinomlardır. Örnek: P(x) = 5.",
        "Doğrusal (Birinci Dereceden) Polinom: En yüksek dereceli terimi x olan polinomdur. Örnek: P(x) = 2x + 3.",
        "İkinci Derece (Kare) Polinom: En yüksek dereceli terimi x² olan polinomdur. Örnek: P(x) = x² - 4x + 3.",
        "Üçüncü Derece (Kübik) Polinom: En yüksek dereceli terimi x³ olan polinomdur. Örnek: P(x) = x³ - x + 1.",
        "Dördüncü ve Daha Yüksek Dereceli Polinomlar: Örneğin, P(x) = x⁴ - 2x² + x - 7."
    ],
    "polinom işlemleri": [
        "Polinomların Toplamı: Aynı dereceli terimler toplanır. Örnek: (2x² + 3x) + (x² - x) = 3x² + 2x.",
        "Polinomların Farkı: Aynı dereceli terimler çıkarılır. Örnek: (5x³ + x) - (2x³ - x) = 3x³ + 2x.",
        "Polinomların Çarpımı: Her terim birbiriyle çarpılır. Örnek: (x + 2)(x - 1) = x² + x - 2.",
        "Polinomların Bölümü: Bir polinom başka bir polinoma bölünerek elde edilir.",
        "Horner Yöntemi: Bir polinomu bir kök adayına göre hızlıca bölebilmek için kullanılan yöntemdir."
    ],
    "örnek problemler": [
        "Örnek: P(x) = x² - 4x + 3 polinomunun köklerini bulun. Çözüm: (x - 1)(x - 3) = 0, kökler x = 1 ve x = 3.",
        "Örnek: P(x) = x³ + 2x² - x - 2 polinomunun köklerini bulun. Çözüm: (x + 2)(x - 1)(x - 1) = 0, kökler x = -2, 1, 1.",
        "Örnek: P(x) = 2x³ - 3x² + x - 5 polinomunun sabit terimi nedir? Çözüm: Sabit terim -5'tir.",
        "Örnek: P(x) = x^4 - 3x^3 + x^2 - x + 5 polinomunun derecesi nedir? Çözüm: Derece 4'tür.",
        "Örnek: P(x) = 3x³ + 4x² - 5x + 2 için P(2) değerini bulun. Çözüm: P(2) = 3(2³) + 4(2²) - 5(2) + 2 = 24 + 16 - 10 + 2 = 32.",
        "Örnek: P(x) = x³ - 4x² + 6x - 2 polinomunun x = 2’deki türevini bulun. Çözüm: P'(x) = 3x² - 8x + 6, P'(2) = 3(2²) - 8(2) + 6 = 12 - 16 + 6 = 2."
    ]
};

// Arama fonksiyonu
function searchInfo() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let category = document.getElementById("category").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Önce içeriği temizleyelim

    let found = false;

    for (let key in data) {
        if ((category === "hepsi" || key === category) && key.includes(query)) {
            let title = `<h2 class="mt-3">${key.toUpperCase()}</h2>`;
            let list = "";

            data[key].forEach(item => {
                list += `<div class="result-card">${item}</div>`;
            });

            resultDiv.innerHTML = title + list;
            found = true;
            break;
        }
    }

    if (!found) {
        resultDiv.innerHTML = `<div class="alert alert-warning">Bilgi bulunamadı.</div>`;
    }
}

// Tema değiştirme fonksiyonu
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function drawGraph() {
    let ctx = document.getElementById("polynomialGraph").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: [-3, -2, -1, 0, 1, 2, 3],
            datasets: [{
                label: "P(x) = x² - x - 2",
                data: [(9 - 3 - 2), (4 - 2 - 2), (1 - 1 - 2), (0 - 0 - 2), (1 - 1 - 2), (4 - 2 - 2), (9 - 3 - 2)],
                borderColor: "blue",
                fill: false
            }]
        },
        options: {
            responsive: true
        }
    });
}
