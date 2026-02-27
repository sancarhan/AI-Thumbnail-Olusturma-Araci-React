<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Thumb</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0d1117;
      --card: #161b22;
      --border: #30363d;
      --text: #e6edf3;
      --muted: #8b949e;
      --accent: #2f81f7;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
    }

    body {
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 40px 20px;
    }

    .container {
      max-width: 1100px;
      margin: auto;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 28px;
      margin-bottom: 28px;
      transition: all 0.25s ease;
    }

    .card:hover {
      transform: translateY(-6px);
      border-color: var(--accent);
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 1.6rem;
      margin-bottom: 16px;
    }

    h3 {
      margin: 18px 0 10px;
      color: var(--accent);
    }

    p {
      color: var(--muted);
    }

    ul {
      list-style: none;
      margin-top: 12px;
    }

    li {
      padding: 8px 0;
      color: var(--text);
      transition: all 0.2s ease;
    }

    li:hover {
      color: var(--accent);
      transform: translateX(6px);
    }

    .logo {
      margin-top: 10px;
      max-width: 260px;
      border-radius: 10px;
      border: 1px solid var(--border);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .preview-img {
      width: 100%;
      border-radius: 14px;
      border: 1px solid var(--border);
      transition: all 0.25s ease;
    }

    .preview-img:hover {
      transform: scale(1.04);
      border-color: var(--accent);
    }

    .badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 999px;
      background: rgba(47,129,247,0.15);
      color: var(--accent);
      font-size: 0.8rem;
      margin-bottom: 10px;
    }

    .footer {
      text-align: center;
      color: var(--muted);
      margin-top: 30px;
      font-size: 0.9rem;
    }

    a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      h1 { font-size: 1.8rem; }
    }
  </style>
</head>
<body>
  <div class="container">

    <div class="card">
      <span class="badge">🚀 AI Thumbnail Generator</span>
      <h1>AI Thumb</h1>
      <p>AI Thumb benim yapmış olduğum bir parodi logo ve sayfadır, gerçek hayattan alınan bir logo veya isim değildir ❗</p>
      <img class="logo" src="https://github.com/user-attachments/assets/90de4990-b36a-4e7a-8a47-b04046ab5cae" alt="logo" />
    </div>

    <div class="card">
      <h2>✨ Özellikler</h2>
      <ul>
        <li>🤖 AI destekli thumbnail üretimi</li>
        <li>⚡ Hızlı ve modern React arayüzü</li>
        <li>🎯 Kullanıcı dostu tasarım</li>
        <li>📱 Responsive yapı</li>
        <li>🔄 Dinamik veri yönetimi</li>
        <li>🎨 Görsel odaklı UI/UX</li>
      </ul>
    </div>

    <div class="card">
      <h2>🖼️ Proje Önizleme</h2>
      <div class="grid">
        <img class="preview-img" src="https://github.com/user-attachments/assets/7040b3cd-59d0-4441-a9ab-ccaa8a747f3c" alt="preview" />
        <img class="preview-img" src="https://github.com/user-attachments/assets/54aa6aba-60ef-49fa-8750-577495840065" alt="preview" />
      </div>
    </div>

    <div class="card">
      <h2>⚙️ Geliştirici Notları</h2>
      <ul>
        <li>Component tabanlı mimari kullanılmıştır</li>
        <li>Reusable React component yapısı</li>
        <li>Async API yönetimi</li>
        <li>Modern folder structure</li>
        <li>Performans odaklı render yaklaşımı</li>
      </ul>
    </div>

    <div class="card">
      <h2>🛠️ Kullanılan Teknolojiler</h2>
      <h3>Frontend</h3>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>JavaScript (ES6+)</li>
        <li>CSS / Tailwind</li>
        <li>Axios</li>
      </ul>

      <h3>AI & Entegrasyon</h3>
      <ul>
        <li>OpenAI API / Image API</li>
        <li>REST API iletişimi</li>
      </ul>
    </div>

    <div class="card">
      <h2>🧱 Bu Projede Öğrendiklerim</h2>
      <ul>
        <li>AI API entegrasyonu</li>
        <li>React state yönetimi</li>
        <li>Asenkron veri akışı yönetimi</li>
        <li>Prompt tabanlı görsel üretim mantığı</li>
        <li>Responsive UI geliştirme</li>
      </ul>
    </div>

    <div class="card">
      <h2>💼 Geliştirici</h2>
      <ul>
        <li><strong>Oğuzhan Sancar</strong></li>
        <li>💻 Full Stack Developer</li>
        <li>🌐 GitHub: <a href="https://github.com/sancarhan" target="_blank">github.com/sancarhan</a></li>
      </ul>
    </div>

    <div class="footer">MIT License • Built with ❤️</div>
  </div>
</body>
</html>
