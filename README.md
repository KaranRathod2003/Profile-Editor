
# 📖 Profile Editor App (React)

## 📝 Project Overview

A step-by-step learning-based project to build a **Profile Editor App** in React.
The goal is not just to finish the app, but to **enhance React skills** by building features one by one with proper guidance, research, and self-coding (no copy-paste).

---

## 🚀 Features Roadmap

### ✅ Basic Features

* [ ] Display Profile (`ProfileCard`)
* [ ] Edit Profile (`ProfileForm`)
* [ ] Toggle between View & Edit mode
* [ ] Save & Cancel functionality

### 🔄 Intermediate Features

* [ ] Controlled Inputs for form fields (name, email, phone, bio)
* [ ] Validation for fields (email format, required fields)
* [ ] Cancel resets the form (no unwanted changes)
* [ ] Reusable Input & Button components

### 🎨 UX Enhancements

* [ ] Success / Error message alerts
* [ ] Animations (Framer Motion) while switching modes
* [ ] Avatar upload (basic base64)

### 📦 Advanced Features

* [ ] LocalStorage persistence
* [ ] Profile data via API (GET / PUT)
* [ ] Tabs for Profile sections (General Info, Preferences, Security)
* [ ] Cloudinary / Backend integration for avatar

---


---

## 📅 Daily Progress Log

| Date       | Work Planned                                      | Work Done         | Notes / Blockers                                         |
| ---------- | ------------------------------------------------- | ----------------- | -------------------------------------------------------- |
| 2025-09-01 | Setup file structure, decide flow (Card/Form)     | ✅ Done            | Base structure ready                                     |
| 2025-09-08 | Toggle edit/display mode                          | ✅ Done            | `isEditing` state implemented, ternary operator used     |
| 2025-09-08 | Controlled inputs for profile fields              | ✅ Done            | `profileData` state, single `handleChange` function used |
| 2025-09-08 | Save / Cancel functionality                       | ✅ Done            | `backupProfileData` implemented for Cancel revert        |
| 2025-09-08 | Separate handlers for each field (name/email/bio) | ✅ Done (optional) | Later replaced by single `handleChange`                  |
| 2025-09-08 | Props passing to Card and Form                    | ✅ Done            | All callbacks and data correctly passed                  |
| 2025-09-08 | UI basics for Card and Form                       | ✅ Done            | Basic styling, flex layout, buttons implemented          |
| 2025-09-09 | Restructure frontend/backend + Git branching      | ✅ Done            | New folder structure created, merge successful           |
| 2025-09-09 | README structure + roadmap                        | ✅ Done            | Maintained features + daily progress log                 |
| 2025-09-09 | Validation, Avatar upload, LocalStorage           | ⬜ Pending         | Next features planned                                    |


## 🛠️ Tech Stack
- **Frontend:** React + Vite  
- **Styling:** CSS  
- **Components:** Material UI (Snackbar)  
- **Package Manager:** npm  

---

## ⚙️ Setup and Run Locally

1. Clone the repo  
   ```bash
   git clone https://github.com/KaranRathod2003/Profile-Editor.git
   cd Profile-Editor/frontend



