## 📁 Struktur File
Helo ini Informasi Web Portofolio Saya

```
portfolio-react/
├── index.html                    ← Entry HTML
├── vite.config.js                ← Konfigurasi Vite
├── package.json                  ← Dependencies
├── public/
│   └── favicon.svg               ← Ikon browser
│   └── foto.jpg                  ← (Taruh foto kamu di sini)
└── src/
    ├── main.jsx                  ← Entry React
    ├── App.jsx                   ← Root component
    ├── data/
    │   └── index.js              ← Semua konten (proyek, skill, experience, dll)
    ├── styles/
    │   └── global.css            ← CSS global & design tokens
    ├── components/
    │   ├── Cursor.jsx / .css     ← Custom animated cursor
    │   ├── Navbar.jsx / .css     ← Fixed navbar + hamburger mobile
    │   ├── MockDesktop.jsx       ← Mock browser preview (proyek web)
    │   ├── MockMobile.jsx        ← Mock Android preview (proyek mobile)
    │   ├── MockPreview.css       ← Shared CSS untuk mock previews
    │   └── Footer.jsx / .css     ← Footer dengan social links
    └── pages/
        ├── Hero.jsx / .css       ← Landing section
        ├── About.jsx / .css      ← Tentang saya
        ├── Skills.jsx / .css     ← Keahlian teknis
        ├── Projects.jsx / .css   ← Proyek dengan filter
        ├── Experience.jsx / .css ← Timeline pengalaman kerja
        └── Contact.jsx / .css    ← Form kontak & info
```
## 🎨 Fitur

- ✅ **Dark theme** elegan dengan palet mint/teal
- ✅ **Custom cursor** animasi smooth
- ✅ **Navbar** fixed + hamburger menu mobile
- ✅ **Hero** section dengan floating orbs & avatar
- ✅ **About** — cerita & skill tags
- ✅ **Skills** — 4 kategori (Frontend, Backend, Mobile, DevOps)
- ✅ **Projects** — 6 proyek dengan filter & mock preview screenshot
  - Desktop projects → tampilan browser mock
  - Mobile projects → tampilan Android mock
- ✅ **Experience** — timeline karier
- ✅ **Contact** — form + info kontak
- ✅ **Footer** dengan social links
- ✅ **Scroll animations** (fade-in on scroll)
- ✅ **Fully responsive** (mobile, tablet, desktop)


### Ganti Identitas
```js
// Di komponen Hero & Navbar, ubah:
"Rizky Pratama"   → nama Anda
"Rizky.dev"       → nama domain Anda
```

### Tambah/Edit Proyek
```js
const PROJECTS = [
  {
    title: "Nama Proyek",
    desc: "Deskripsi singkat",
    tags: ["React", "Node.js"],
    type: "web",          // "web" | "mobile" | "fullstack"
    typeLabel: "Web App",
    mockType: "desktop",  // "desktop" | "mobile"
    mockBg: "#0a1628",    // warna background mock
    mockContent: "dashboard", // "ecommerce"|"dashboard"|"cms"|"fitness"|"finpay"|"foodorder"
    demo: "https://...",
    code: "https://github.com/..."
  }
]
```

### Ganti Foto Profil
Di komponen `Hero`, ganti `<div className="avatar-placeholder">RP</div>` dengan:
```jsx
<img src="foto-anda.jpg" alt="Nama" style={{width:'100%',height:'100%',borderRadius:'50%',objectFit:'cover'}}/>
```

### Edit Kontak
Di komponen `Contact`, ubah email, LinkedIn, GitHub, dan lokasi.

## 🌐 Deploy

- **Netlify**: Drag & drop folder ke netlify.com
- **Vercel**: `vercel --prod`  
- **GitHub Pages**: Upload ke repo, aktifkan Pages




---

## ⚡ Cara Menjalankan

**Prasyarat:** Node.js v18+ sudah terinstall

```bash
# 1. Masuk ke folder
cd portfolio-react

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka di browser
# → http://localhost:5173
```

**Build untuk produksi:**
```bash
npm run build
# hasil build ada di folder /dist
```

---

## ✏️ Cara Kustomisasi

### 1. Ganti Identitas (Nama, Brand)
Edit file: `src/components/Navbar.jsx` dan `src/pages/Hero.jsx`
```jsx
// Ubah "Rizky Pratama" → nama kamu udaaa
// Ubah "Rizky.dev" → nama brand kamu
```

### 2. Ganti Foto Profil
- Taruh foto kamu di `/public/foto.jpg` uda
- Buka `src/pages/Hero.jsx`, cari komentar `GANTI FOTO`, lalu ganti:
```jsx
// Sebelum (placeholder initials):
<span className="avatar-initials">RP</span>

// Sesudah (foto asli):
<img src="/foto.jpg" alt="Nama Kamu" />
```

### 3. Edit Proyek, Skill, Pengalaman
Semua data ada di satu file: **`src/data/index.js`**
- `PROJECTS` → tambah/edit/hapus proyek
- `SKILLS` → kategori dan daftar teknologi
- `EXPERIENCE` → riwayat pekerjaan
- `CONTACT_LINKS` → email, LinkedIn, GitHub, lokasi
- `HERO_STATS` → angka statistik (tahun exp, proyek, klien)

### 4. Tambah Mock Preview Baru
Untuk proyek desktop baru, tambah screen di `MockDesktop.jsx`:
```jsx
function NamaScreen() {
  return <svg>...</svg> // desain SVG kamu
}
// Daftarkan di SCREENS object:
const SCREENS = { ..., namakey: NamaScreen }
```

### 5. Ubah Warna Tema
Edit CSS variables di `src/styles/global.css`:
```css
:root {
  --accent: #45cef4;   /* warna utama (mint) */
  --accent2: #55f838;  /* warna kedua (biru) */
  --accent3: #ba32f9;  /* warna ketiga (pink) */
}
```

:root {
  --accent:  #D4B8F0; /* lilac mist */
  --accent2: #F9F5FF; /* putih susu */
  --accent3: #7B3FA0; /* plum kuat */
}
WAYAHE GANTI TEMA DAN MASUKKAN PROJECT
---

## 🌐 Deploy

```bash
# Netlify (paling mudah)
npm run build
# → drag-drop folder /dist ke netlify.com

# Vercel
npx vercel --prod

# GitHub Pages (perlu plugin vite-plugin-gh-pages)
npm run build && npx gh-pages -d dist
```
