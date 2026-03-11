## https://prebuiltui.com/ adresinden hazır şablon ile oluşturuluyor

<ul>
  <li> AI Thumb benim yapmış olduğum bir parodi logo ve sayfadır, gerçek hayattan alınan bir logo veya isim değildir ❗ </li>
<img width="376" height="72" alt="logo" src="https://github.com/user-attachments/assets/90de4990-b36a-4e7a-8a47-b04046ab5cae" />
</ul>

<h2>💼 Geliştirici</h2>
<ul>
  <li><strong>Oğuzhan Sancar</strong></li>
  <li>💻 Full Stack Developer</li>
  <li>🌐 GitHub: <a href="https://github.com/sancarhan" target="_blank">github.com/sancarhan</a></li>
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


# AIThumb - Yapay Zeka YouTube Thumbnail Oluşturucu

AIThumb, OpenAI'nin DALL-E 3 modelini kullanarak profesyonel YouTube thumbnail'ları oluşturan tam yığın (full-stack) bir web uygulamasıdır.

## 📁 Proje Mimarisi

```
AIThumb/
├── client/                    # React frontend uygulaması
│   ├── src/
│   │   ├── assets/           # Görseller, tipler ve statik veriler
│   │   ├── components/       # Yeniden kullanılabilir UI bileşenleri
│   │   ├── configs/          # API konfigürasyonları
│   │   ├── context/          # React Context (AuthContext)
│   │   ├── data/             # Statik veri dosyaları
│   │   ├── pages/            # Sayfa bileşenleri
│   │   ├── sections/         # Büyük UI bölümleri
│   │   ├── App.tsx           # Ana uygulama bileşeni
│   │   ├── main.tsx          # Uygulama giriş noktası
│   │   ├── globals.css       # Global stiller
│   │   └── types.ts          # TypeScript tip tanımları
│   │
├── server/                    # Express backend sunucusu
│   ├── configs/              # Veritabanı ve AI konfigürasyonları
│   ├── controllers/         # Route kontrolcüleri (iş mantığı)
│   ├── middlewares/         # Ara yazılımlar (auth kontrolü)
│   ├── models/              # Mongoose veritabanı modelleri
│   ├── routes/              # API rotaları
│   └── server.ts            # Sunucu giriş noktası
│
└── README.md
```

---

## 🖥️ Client (Frontend) Yapısı

### Ana Dosyalar

#### `client/src/main.tsx`
React uygulamasının giriş noktasıdır. `App` bileşenini render eder ve provider'ları sarmalar.

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### `client/src/App.tsx`
Uygulamanın ana yönlendirme ve layout bileşenidir. React Router ile sayfa geçişlerini yönetir.

```tsx
export default function App() {
  const { pathname } = useLocation();

  // Sayfa değiştiğinde en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Toaster />           {/* Bildirim sistemi */}
      <LenisScroll />       {/* Yumuşak kaydırma */}
      <Navbar />            {/* Navigasyon */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/generate/:id" element={<Generate />} />
        <Route path="/my-generation" element={<MyGeneration />} />
        <Route path="/preview" element={<YtPreview />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
```

---

### Context (Durum Yönetimi)

#### `client/src/context/AuthContext.tsx`
Kullanıcı kimlik doğrulama durumunu yöneten React Context bileşenidir.

**Fonksiyonlar:**
- `signUp({name, email, password})` - Yeni kullanıcı kaydı
- `login({email, password})` - Kullanıcı girişi
- `logout()` - Kullanıcı çıkışı
- `fetchUser()` - Oturumdaki kullanıcıyı doğrulama

```tsx
interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  login: (user: { email: string; password: string }) => Promise<void>;
  signUp: (user: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}
```

**Kullanım:**
```tsx
const { isLoggedIn, user, login, signUp, logout } = useAuth();
```

---

### Sayfalar (Pages)

#### `client/src/pages/Generate.tsx`
Thumbnail oluşturma sayfası. Kullanıcının başlık, stil, renk şeması ve en-boy oranı seçerek thumbnail oluşturmasını sağlar.

**Bileşen Durumu (State):**
```tsx
const [title, setTitle] = useState("");                    // Thumbnail başlığı
const [additionalDetails, setAdditionalDetails] = useState(""); // Ek detaylar
const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null); // Oluşturulan thumbnail
const [loading, setLoading] = useState(false);            // Yükleniyor durumu
const [aspectRatio, setAspectRatio] = useState<AspectRatio>("16:9"); // En-boy oranı
const [colorSchemeId, setColorSchemeId] = useState<string>(colorSchemes[0].id); // Renk şeması
const [style, setStyle] = useState<ThumbnailStyle>("Bold & Graphic"); // Stil
```


**Ana Fonksiyonlar:**

1. `handleGenerate()` - Thumbnail oluşturma isteği gönderir
```tsx
const handleGenerate = async () => {
  if (!isLoggedIn) return toast.error('Thumbnail oluşturmak için giriş yapın.') 
  if (!title.trim()) return toast.error('Başlık gerekli') 
  
  setLoading(true)
  
  const api_payload = {
    title,
    prompt: additionalDetails,
    style,
    aspect_ratio: aspectRatio,
    color_scheme: colorSchemeId,
    text_overlay: true,
  }
  
  try {
    const {data} = await api.post('/api/thumbnail/generate', api_payload);
    if(data.thumbnail){
      navigate('/generate/' + data.thumbnail._id);
      toast.success(data.message)
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.message || 'Thumbnail oluşturulamadı');
  } finally {
    setLoading(false);
  }
};
```

2. `fetchThumbnail()` - ID'ye göre thumbnail detaylarını getirir
```tsx
const fetchThumbnail = async () => {
  try {
    const {data} = await api.get('/api/user/thumbnail/${id}');
    setThumbnail(data?.thumbnail as IThumbnail);
    setAdditionalDetails(data?.thumbnail?.user_prompt)
    setTitle(data?.thumbnail?.title)
    // ... diğer state güncellemeleri
  } catch (error: any) {
    toast.error(error?.response?.data?.message || error.message)
  }
};
```

**Kullanılan Bileşenler:**
- `SoftBackdrop` - Arka plan efekti
- `AspectRatioSelector` - En-boy oranı seçici
- `StyleSelector` - Thumbnail stili seçici
- `ColorSchemeSelector` - Renk şeması seçici
- `PreviewPanel` - Önizleme paneli

---

### API Konfigürasyonu

#### `client/src/configs/api.ts`
Axios tabanlı HTTP istemcisi. Backend API ile iletişim kurar.

```tsx
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000",
  withCredentials: true,  // Çerezlerin gönderilmesi için
});

export default api;
```

---

### Assets ve Veri Yapıları

#### `client/src/assets/assets.ts`
Uygulamanın merkezi veri ve tip tanımlarını içerir.

**Tip Tanımları:**
```ts
export type AspectRatio = "16:9" | "1:1" | "9:16";
export type ThumbnailStyle = "Bold & Graphic" | "Tech/Futuristic" | "Minimalist" | "Photorealistic" | "Illustrated";

export interface IThumbnail {
    _id: string;
    userId: string;
    title: string;
    style: ThumbnailStyle;
    aspect_ratio: AspectRatio;
    color_scheme: string;
    text_overlay: boolean;
    image_url?: string;
    prompt_used?: string;
    user_prompt?: string;
    isGenerating?: boolean;
    createdAt?: Date;
}
```

**Renk Şemaları:**
```ts
export const colorSchemes = [
    { id: "vibrant", name: "Vibrant", colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"] },
    { id: "sunset", name: "Sunset", colors: ["#FF8C42", "#FF3C38", "#A23B72"] },
    { id: "ocean", name: "Ocean", colors: ["#0077B6", "#00B4D8", "#90E0EF"] },
    { id: "forest", name: "Forest", colors: ["#2D6A4F", "#40916C", "#95D5B2"] },
    { id: "purple", name: "Purple Dream", colors: ["#7B2CBF", "#9D4EDD", "#C77DFF"] },
    { id: "monochrome", name: "Monochrome", colors: ["#212529", "#495057", "#ADB5BD"] },
    { id: "neon", name: "Neon", colors: ["#FF00FF", "#00FFFF", "#FFFF00"] },
    { id: "pastel", name: "Pastel", colors: ["#FFB5A7", "#FCD5CE", "#F8EDEB"] },
];
```

---

## ⚙️ Server (Backend) Yapısı

### Ana Sunucu Dosyası

#### `server/server.ts`
Express sunucusunun giriş noktası. Tüm konfigürasyonları ve rotaları birleştirir.

```ts
import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from "cors";
import connectDB from "./configs/db.js";
import session from 'express-session'
import MongoStore from 'connect-mongo'

// Veritabanı bağlantısı
await connectDB()

const app = express();

// Middleware'ler
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(express.json());

// Oturum yapılandırması
app.use(session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}, // 7 gün
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI as string,
        collectionName: 'sessions'
    })
}))

// API Rotaları
app.use('/api/auth', AuthRouter)
app.use('/api/thumbnail', ThumbnailRouter)
app.use('/api/user', UserRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

---

### Veritabanı Modelleri

#### `server/models/User.ts`
Kullanıcı veritabanı modeli.

```ts
export interface IUser extends Document{
    name: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
 name: {type: String, required: true, trim: true},
 email: {type: String, required: true, trim: true, unique: true, lowercase: true},
 password: {type: String, required: true,}
},{timestamps: true})
```

#### `server/models/Thumbnail.ts`
Thumbnail veritabanı modeli.

```ts
export interface IThumbnail extends Document {
    userId: string;
    title: string;
    description?: string;
    style: "Bold & Graphic" | "Tech/Futuristic" | "Minimalist" | "Photorealistic" | "Illustrated";
    aspect_ratio?: "16:9" | "1:1" | "9:16";
    color_scheme?: "vibrant" | "sunset" | "forest" | "neon" | "purple" | "monochrome" | "ocean" | "pastel";
    text_overlay?: boolean;
    image_url?: string;
    prompt_used?: string;
    user_prompt?: string;
    isGenerating?: boolean;
}
```

---

### Controllers (İş Mantığı)

#### `server/controllers/AuthControllers.ts`
Kullanıcı kimlik doğrulama işlemlerini yönetir.

**Fonksiyonlar:**

1. `registerUser(req, res)` - Yeni kullanıcı kaydı
```ts
export const registerUser = async (req: Request, res: Response) => {
  // 1. Email kontrolü
  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ message: "Kullanıcı zaten mevcut" });

  // 2. Şifre hash'leme
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 3. Kullanıcı oluşturma
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  // 4. Oturum ayarlama
  req.session.isLoggedIn = true;
  req.session.userId = newUser._id;

  return res.json({ message: "Hesap başarıyla oluşturuldu", user: {...} });
};
```

2. `loginUser(req, res)` - Kullanıcı girişi
```ts
export const loginUser = async (req: Request, res: Response) => {
  // 1. Email ile kullanıcı bulma
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Şifre veya email hatalı" });

  // 2. Şifre karşılaştırma
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) return res.status(400).json({ message: "Şifre veya email hatalı" });

  // 3. Oturum ayarlama
  req.session.isLoggedIn = true;
  req.session.userId = user._id;

  return res.json({ message: "Giriş başarılı", user: {...} });
};
```

3. `logoutUser(req, res)` - Kullanıcı çıkışı
```ts
export const logoutUser = async (req: Request, res: Response) => {
  req.session.destroy((error: any) => {
    if (error) return res.status(500).json({ message: error.message });
  });
  return res.json({ message: "Çıkış Yapıldı" });
};
```

4. `verifyUser(req, res)` - Oturum doğrulama
```ts
export const verifyUser = async (req: Request, res: Response) => {
  const { userId } = req.session;
  const user = await User.findById(userId).select("-password");
  if (!user) return res.status(400).json({ message: "Geçersiz kullanıcı" });
  return res.json({ user });
};
```

---

#### `server/controllers/ThumbnailController.ts`
Thumbnail oluşturma ve silme işlemlerini yönetir. OpenAI DALL-E 3 entegrasyonu buradadır.

**Prompt Yapılandırması:**
```ts
const stylePrompts: Record<string, string> = {
 'Bold & Graphic': 'Eye-catching thumbnail, bold typography, vibrant colors, impactful facial expressions, dramatic lighting, high contrast, click-worthy composition, professional style',

 'Tech/Futuristic': 'Futuristic thumbnail, sleek modern design, digital UI elements, glowing highlights, holographic effects, cyber-tech aesthetics, sharp lighting, high-tech atmosphere',

 'Minimalist': 'Minimalist thumbnail, clean layout, simple shapes, limited color palette, ample negative space, modern flat design, clear focal point',

 'Photorealistic': 'Photorealistic thumbnail, ultra-realistic lighting, natural skin tones, candid moment, DSLR-style photography, lifestyle realism, shallow depth of field',

 'Illustrated': 'Illustrated thumbnail style, custom digital illustration, stylized characters, bold outlines, vibrant colors, creative cartoon or vector art style',
}

const colorSchemeDescriptions: Record<string, string> = {
 vibrant: 'vibrant and energetic colors, high saturation, strong contrast, eye-catching color palette',
 sunset: 'warm sunset tones, orange pink and purple hues, soft transitions, cinematic glow',
 forest: 'natural green tones, earth colors, calm and organic palette, fresh atmosphere',
 neon: 'neon glow effects, electric blue and pink tones, cyberpunk lighting, high contrast glow',
 purple: 'purple-dominant color palette, magenta and violet tones, modern and stylish atmosphere',
 monochrome: 'black and white color scheme, high contrast, dramatic lighting, timeless aesthetic',
 ocean: 'cool blue and turquoise tones, water-themed color palette, fresh and clean atmosphere',
 pastel: 'soft pastel colors, low saturation, gentle tones, calm and friendly aesthetic', 
}
```

**`generateThumbnail(req, res)` Fonksiyonu:**

Thumbnail oluşturma sürecinin adımları:

```ts
export const generateThumbnail = async (req: Request, res: Response)=>{
 try {
  const {userId} = req.session;
  const { title, prompt, style, aspect_ratio, color_scheme, text_overlay } = req.body;

  // 1. MongoDB'de thumbnail belgesi oluştur
  const thumbnail = await Thumbnail.create({
   userId,
   title,
   prompt_used: prompt,
   user_prompt: prompt,
   aspect_ratio,
   color_scheme,
   text_overlay,
   isGenerating: true  // Oluşturuluyor durumu
  })

  // 2. Prompt oluştur
  let prompt = `${stylePrompts[style]} for: "${title}"`;
  if (color_scheme) prompt += `. Use a ${colorSchemeDescriptions[color_scheme]} color scheme.`;
  if (user_prompt) prompt += `. Additional details: ${user_prompt}.`;
  prompt += ` The thumbnail should be ${aspect_ratio} aspect ratio, visually striking...`;
  if (text_overlay) prompt += ` Include bold, readable text: "${title}"`;

  // 3. DALL-E 3 ile görsel oluştur
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    size: "1792x1024", // 16:9
    quality: "standard",
    n: 1,
  })

  const imageUrl = response.data[0].url;

  // 4. Görseli Cloudinary'ye yükle
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
  const filename = `final-output-${Date.now()}.png`;
  
  fs.writeFileSync(filePath, imageBuffer);
  const uploadResult = await cloudinary.uploader.upload(filePath)

  // 5. Veritabanını güncelle
  thumbnail.image_url = uploadResult.url;
  thumbnail.isGenerating = false;
  await thumbnail.save()

  res.json({message: 'Thumbnail Oluşturuldu', thumbnail})
  
  // 6. Yerel dosyayı sil
  fs.unlinkSync(filePath)

 } catch (error: any) {
  res.status(500).json({message: error.message || 'Sunucu hatası oluştu'});
 }
}
```

---

#### `server/controllers/UserController.ts`
Kullanıcının thumbnail'larını getiren fonksiyonlar.

**Fonksiyonlar:**

1. `getUsersThumbnails(req, res)` - Tüm thumbnail'ları getirir
```ts
export const getUsersThumbnails = async (req: Request, res: Response) =>{
  const {userId} = req.session;
  const thumbnail = await Thumbnail.find({userId}).sort({createdAt: 1})
  res.json({thumbnail})
}
```

2. `getThumbnailbyId(req, res)` - Tek thumbnail getirir
```ts
export const getThumbnailbyId = async (req: Request, res: Response) =>{
  const {userId} = req.session;
  const {id} = req.params;
  const thumbnail = await Thumbnail.findOne({userId,_id: id});
  res.json({thumbnail})
}
```

---

### Middleware

#### `server/middlewares/auth.ts`
API rotalarını koruyan kimlik doğrulama middleware'ı.

```ts
import { Request, Response, NextFunction } from 'express';

const protect = (req: Request, res: Response, next: NextFunction) => {
  const { isLoggedIn, userId } = req.session;
  
  if (!isLoggedIn || !userId) {
    return res.status(401).json({ message: "Giriş yapmanız gerekiyor" });
  }
  
  next();
};

export default protect;
```

---

### API Rotaları

#### `server/routes/AuthRoutes.ts`
```ts
import express from "express";
import { registerUser, loginUser, logoutUser, verifyUser } from "../controllers/AuthControllers.js";

const AuthRouter = express.Router();

AuthRouter.post('/register', registerUser);
AuthRouter.post('/login', loginUser);
AuthRouter.post('/logout', logoutUser);
AuthRouter.get('/verify', verifyUser);

export default AuthRouter;
```

#### `server/routes/ThumbnailRoutes.ts`
```ts
import express from "express";
import { deleteThumbnail, generateThumbnail } from "../controllers/ThumbnailController.js";
import protect from "../middlewares/auth.js";

const ThumbnailRouter = express.Router();

ThumbnailRouter.post('/generate', protect, generateThumbnail)
ThumbnailRouter.delete('/delete/:id', protect, deleteThumbnail)

export default ThumbnailRouter;
```

#### `server/routes/UserRoutes.ts`
```ts
import express from 'express';
import { getThumbnailbyId, getUsersThumbnails } from '../controllers/UserController.js';
import protect from '../middlewares/auth.js';

const UserRouter = express.Router();

UserRouter.get('/thumbnails', protect, getUsersThumbnails)
UserRouter.get('/thumbnail/:id', protect, getThumbnailbyId)

export default UserRouter;
```

---

## 📝 API Endpoints

### Kimlik Doğrulama

| Method | Endpoint | Açıklama | Request Body |
|--------|----------|----------|--------------|
| POST | `/api/auth/register` | Yeni kullanıcı kaydı | `{name, email, password}` |
| POST | `/api/auth/login` | Kullanıcı girişi | `{email, password}` |
| POST | `/api/auth/logout` | Kullanıcı çıkışı | - |
| GET | `/api/auth/verify` | Oturum doğrulama | (Çerez ile) |

### Thumbnail

| Method | Endpoint | Açıklama | Koruma |
|--------|----------|----------|--------|
| POST | `/api/thumbnail/generate` | Yeni thumbnail oluştur | ✅ |
| DELETE | `/api/thumbnail/delete/:id` | Thumbnail sil | ✅ |

### Kullanıcı

| Method | Endpoint | Açıklama | Koruma |
|--------|----------|----------|--------|
| GET | `/api/user/thumbnails` | Tüm thumbnail'lar | ✅ |
| GET | `/api/user/thumbnail/:id` | Thumbnail detayı | ✅ |

---





