## https://prebuiltui.com/ adresinden hazır şablon ile oluşturuluyor

<ul>
  <li> AI Thumb benim yapmış olduğum bir parodi logo ve sayfadır, gerçek hayattan alınan bir logo veya isim değildir ❗ </li>
<img width="376" height="72" alt="logo" src="https://github.com/user-attachments/assets/90de4990-b36a-4e7a-8a47-b04046ab5cae" />
</ul>



<h2>✨ Özellikler</h2>
<ul>
  <li>🤖 AI destekli thumbnail üretimi</li>
  <li>⚡ Hızlı ve modern React arayüzü</li>
  <li>🎯 Kullanıcı dostu tasarım</li>
  <li>📱 Responsive yapı</li>
  <li>🔄 Dinamik veri yönetimi</li>
  <li>🎨 Görsel odaklı UI/UX</li>
</ul>

<ul>
 <img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/7040b3cd-59d0-4441-a9ab-ccaa8a747f3c" />
  <br/>
 <img width="400" height="600" alt="image" src="https://github.com/user-attachments/assets/54aa6aba-60ef-49fa-8750-577495840065" />

</ul>

<h2>⚙️ Geliştirici Notları</h2>
<ul>
  <li>Component tabanlı mimari kullanılmıştır</li>
  <li>Reusable React component yapısı</li>
  <li>Async API yönetimi</li>
  <li>Modern folder structure</li>
  <li>Performans odaklı render yaklaşımı</li>
</ul>

<h2>🛠️ Kullanılan Teknolojiler</h2>

<h3>Frontend</h3>
<ul>
  <li>React</li>
  <li>Vite</li>
  <li>JavaScript (ES6+)</li>
  <li>CSS / Tailwind</li>
  <li>Axios</li>
</ul>

<h3>AI &amp; Entegrasyon</h3>
<ul>
  <li>OpenAI API / Image API</li>
  <li>REST API iletişimi</li>
</ul>
<h2>📄 Lisans</h2>
<p>MIT License</p>

<h2>🧱 Bu Projede Öğrendiklerim</h2>
<ul>
  <li>AI API entegrasyonu</li>
  <li>React state yönetimi</li>
  <li>Asenkron veri akışı yönetimi</li>
  <li>Prompt tabanlı görsel üretim mantığı</li>
  <li>Responsive UI geliştirme</li>
</ul>

<h1>🚀 AI Thumbnail Oluşturma Aracı — Backend</h1>

<p>
Bu klasör, AI destekli thumbnail oluşturma uygulamasının backend servislerini içerir.
Frontend’den gelen istekleri işleyerek yapay zeka servisleri ile iletişim kurar ve üretilen görselleri kullanıcıya döner.
</p>

<h2>📌 Amaç</h2>
<ul>
  <li>Frontend’den gelen prompt isteklerini karşılamak</li>
  <li>AI görsel üretim API’sine istek göndermek</li>
  <li>Üretilen thumbnail verisini işlemek</li>
  <li>Güvenli ve ölçeklenebilir API sunmak</li>
</ul>

<h2>✨ Özellikler</h2>
<ul>
  <li>🤖 AI API entegrasyonu</li>
  <li>🔗 RESTful API yapısı</li>
  <li>⚡ Hızlı ve asenkron istek yönetimi</li>
  <li>🔐 Environment variable güvenliği</li>
  <li>📡 Frontend ile tam uyumlu veri akışı</li>
  <li>🧱 Modüler backend mimarisi</li>
</ul>

<h2>🛠️ Kullanılan Teknolojiler</h2>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>TypeScript</li>
  <li>JavaScript (ES6+)</li>
  <li>Axios</li>
  <li>Mongoose</li>
</ul>

<h3>AI &amp; Entegrasyon</h3>
<ul>
  <li>OpenAI API / Image Generation</li>
  <li>REST API iletişimi</li>
</ul>

<h2>📦 Gerekli Kurulumlar</h2>
<ul>
  <li><code>npm init -y</code></li>
  <li><code>npm install express cors dotenv</code></li>
  <li><code>npm install mongoose</code></li>
  <li><code>npm install -D typescript tsx @types/node ts-node @types/express nodemon @types/cors</code></li>
  <li><code>npx tsc --init</code></li>
</ul>

<h2>📂 Proje Yapısı</h2>
<ul>
  <li>server/</li>
  <li>routes/</li>
  <li>controllers/</li>
  <li>services/</li>
  <li>utils/</li>
  <li>app.ts / server.ts</li>
  <li>package.json</li>
</ul>

<h2>🚀 Kurulum</h2>
<ul>
  <li>Server klasörüne gir: <code>cd AIThumb/server</code></li>
  <li>Bağımlılıkları yükle: <code>npm install</code></li>
  <li>Geliştirme modunda çalıştır: <code>npm run dev</code></li>
</ul>

<h2>🔐 Ortam Değişkenleri</h2>
<ul>
  <li>.env dosyası oluştur</li>
  <li><code>OPENAI_API_KEY=your_api_key</code></li>
  <li><code>PORT=5000</code></li>
</ul>

<h2>🔌 API Endpoint</h2>

<h3>Thumbnail Oluştur</h3>
<ul>
  <li><strong>POST</strong> /api/thumbnail</li>
  <li>Request Body: <code>{ "prompt": "YouTube thumbnail about AI" }</code></li>
  <li>Response: <code>{ "imageUrl": "generated-image-url" }</code></li>
</ul>

<h2>🎮 Veri Akışı</h2>
<ul>
  <li>Frontend prompt gönderir</li>
  <li>Backend isteği alır</li>
  <li>OpenAI Image API çağrılır</li>
  <li>Görsel URL’i döndürülür</li>
  <li>Frontend ekranda gösterir</li>
</ul>

<h2>⚙️ Geliştirici Notları</h2>
<ul>
  <li>Async/await tabanlı istek yönetimi</li>
  <li>Temiz katmanlı mimari</li>
  <li>Hata yakalama mekanizması</li>
  <li>Environment tabanlı yapılandırma</li>
  <li>Ölçeklenebilir servis yapısı</li>
</ul>

<h2>💼 Geliştirici</h2>
<ul>
  <li><strong>Oğuzhan Sancar</strong></li>
  <li>💻 Full Stack Developer</li>
  <li>🌐 GitHub: <a href="https://github.com/sancarhan" target="_blank">github.com/sancarhan</a></li>
</ul>

## 🚀 Kurulum

### Gereksinimler
- Node.js v18+
- MongoDB (yerel veya Atlas)
- OpenAI API Key
- Cloudinary Hesabı

### Backend Kurulumu
```bash
cd server
npm install
```

`.env` dosyası:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/AIThumb
SESSION_SECRET=guvenli_anahtar
OPENAI_API_KEY=sk-...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

### Frontend Kurulumu
```bash
cd client
npm install
npm run dev
```

---

## 🔧 Kullanılan Teknolojiler

### Frontend
- **React 19** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS 4** - Styling
- **React Router DOM 7** - Routing
- **Axios** - HTTP Client
- **Motion** - Animations
- **Lenis** - Smooth Scroll

### Backend
- **Express.js** - Web Framework
- **TypeScript** - Type Safety
- **MongoDB + Mongoose** - Database
- **Express Session** - Session Management
- **Bcrypt** - Password Hashing

### AI & Services
- **OpenAI DALL-E 3** - Image Generation
- **Cloudinary** - Image Hosting

---

## 📄 Lisans

MIT License









