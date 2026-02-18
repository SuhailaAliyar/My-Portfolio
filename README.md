# Suhaila Aliyar — Portfolio (Separated Components)

Modern portfolio website with **each section in its own file** for easy editing!

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        ← Navigation menu
│   ├── Home.jsx          ← Home section (your photo + name)
│   ├── About.jsx         ← Summary/About section
│   ├── Experience.jsx    ← Work experience
│   ├── Skills.jsx        ← Technical skills
│   ├── Projects.jsx      ← Personal projects
│   ├── Education.jsx     ← Education & certifications
│   └── Contact.jsx       ← Contact information
├── data/
│   └── resume.js         ← ALL YOUR DATA HERE
├── App.jsx               ← Main file (imports all components)
└── App.css               ← ALL STYLES HERE
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open **http://localhost:5173**

---

## ✏️ How to Edit

### 📸 **Add Your Photo**

1. **Put your photo** in the `public/` folder
2. **Rename it** to `profile.jpg`
3. **Done!** It will show automatically

**Folder location:**
```
portfolio-react-separated/
├── public/
│   └── profile.jpg    ← PUT YOUR PHOTO HERE
```

---

### 🎨 **Change Colors**

**File:** `src/App.css`

Find line 10-11:
```css
--accent: #00e5c3;     /* ← Main color */
--accent2: #7c6fff;    /* ← Second color */
```

**Try these combinations:**

**Blue:**
```css
--accent: #3b82f6;
--accent2: #06b6d4;
```

**Green:**
```css
--accent: #10b981;
--accent2: #8b5cf6;
```

**Orange:**
```css
--accent: #f97316;
--accent2: #eab308;
```

**Pink:**
```css
--accent: #ec4899;
--accent2: #a855f7;
```

---

### 📝 **Edit Your Information**

**File:** `src/data/resume.js`

This ONE file contains ALL your data:

```javascript
export const resumeData = {
  hero: {
    name: "Suhaila Aliyar",        // ← Your name
    title: "Java Full Stack Developer",  // ← Your title
    description: "...",             // ← Your summary
    // ...
  },
  
  experiences: [ /* ... */ ],       // ← Work history
  skills: [ /* ... */ ],            // ← Technical skills
  projects: [ /* ... */ ],          // ← Your projects
  education: [ /* ... */ ],         // ← Degrees
  contact: { /* ... */ }            // ← Email, phone, LinkedIn
}
```

Just edit the text inside the quotes!

---

### 🏠 **Edit Home Section**

**File:** `src/components/Home.jsx`

This file controls:
- Your photo display
- Your name
- Title
- Buttons

**Example changes:**
```jsx
<h1 className="hero-name">{resumeData.hero.name}</h1>
<p className="hero-title">{resumeData.hero.title}</p>

// Change button text:
<a href="#about" className="btn btn-primary">Learn More ↓</a>
```

---

### 📄 **Edit About/Summary Section**

**File:** `src/components/About.jsx`

This shows:
- Your description
- Stats (years of experience, etc.)
- Technology badges
- Availability status

---

### 💼 **Edit Work Experience**

**File:** `src/components/Experience.jsx`

To add/remove jobs, edit `src/data/resume.js`:

```javascript
experiences: [
  {
    period: "May 2024 – Dec 2025",
    company: "Your Company",
    location: "Your City",
    role: "Your Role",
    highlights: [
      "Achievement 1",
      "Achievement 2"
    ],
    tags: ["Java", "Spring Boot"]
  }
]
```

---

### 🛠️ **Edit Skills**

**File:** `src/components/Skills.jsx`

To change skills, edit `src/data/resume.js`:

```javascript
skills: [
  {
    category: "Languages & Frameworks",
    items: ["Java 17/21", "Spring Boot", "React"]
  },
  {
    category: "Cloud & DevOps",
    items: ["GCP", "AWS", "Docker"]
  }
]
```

---

### 🚀 **Edit Projects**

**File:** `src/components/Projects.jsx`

Add/edit in `src/data/resume.js`:

```javascript
projects: [
  {
    name: "Project Name",
    period: "Oct 2024 – Mar 2025",
    description: "What you built...",
    tags: ["Java", "React", "MySQL"],
    githubUrl: "https://github.com/your-username/repo"  // ← Change this
  }
]
```

---

### 🎓 **Edit Education**

**File:** `src/components/Education.jsx`

Modify `src/data/resume.js`:

```javascript
education: [
  {
    degree: "MSc in Global Software Development",
    school: "Hochschule Fulda, Germany",
    meta: "Graduated Oct 2023"
  }
]
```

---

### 📧 **Edit Contact Info**

**File:** `src/components/Contact.jsx`

Update in `src/data/resume.js`:

```javascript
contact: {
  email: "your.email@gmail.com",       // ← Change
  phone: "+49 123 456789",              // ← Change
  linkedin: "https://linkedin.com/...", // ← Change
  location: "Your City, Country"        // ← Change
}
```

---

### 🧭 **Edit Navigation**

**File:** `src/components/Navbar.jsx`

Add/remove menu items:

```jsx
<ul className="nav-links">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  // Add more items here
</ul>
```

---

## 📋 Quick Reference

| What to Edit | File |
|-------------|------|
| **Your data** (name, experience, skills) | `src/data/resume.js` |
| **Colors** | `src/App.css` (lines 10-11) |
| **Add photo** | Put in `public/profile.jpg` |
| **Home section** | `src/components/Home.jsx` |
| **About section** | `src/components/About.jsx` |
| **Experience** | `src/components/Experience.jsx` |
| **Skills** | `src/components/Skills.jsx` |
| **Projects** | `src/components/Projects.jsx` |
| **Education** | `src/components/Education.jsx` |
| **Contact** | `src/components/Contact.jsx` |
| **Navigation** | `src/components/Navbar.jsx` |

---

## 🌐 Deploy

### Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Deploy!

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Build: `npm run build`
5. Publish: `dist`

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
},
"homepage": "https://your-username.github.io/portfolio"
```

Deploy:
```bash
npm run deploy
```

---

## 🆘 Need Help?

**Each section is in its own file** — just open the file you want to change!

- **Can't find something?** Check `src/data/resume.js` first
- **Want different colors?** Edit `src/App.css` lines 10-11
- **Need to change layout?** Edit the component file (e.g., `Home.jsx`)

---

## ✅ Checklist

- [ ] Add photo to `public/profile.jpg`
- [ ] Choose colors in `App.css`
- [ ] Update all data in `resume.js`
- [ ] Test locally with `npm run dev`
- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify

---

Good luck! 🎉
