# Task Manager App

A simple Task Manager CRUD application built using Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL.

---

# Features

- Add new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Responsive UI
- PostgreSQL database integration

---

# Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL

---

# Project Structure

```bash
src/
│
├── app/
│   ├── components/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── actions/
│   └── taskActions.ts
│
├── lib/
│   └── prisma.ts
```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <your-repository-link>
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Setup Environment Variables

Create a `.env` file in the root folder.

Example:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/dashboard_db?schema=public"
```

---

## 4. Generate Prisma Client

```bash
npx prisma generate
```

---

## 5. Push Database Schema

```bash
npx prisma db push
```

---

## 6. Run Development Server

```bash
npm run dev
```

---

# Prisma Commands

## Generate Prisma Client

```bash
npx prisma generate
```

## Open Prisma Studio

```bash
npx prisma studio
```

---

# CRUD Operations

| Operation | Status |
|----------|----------|
| Create Task | ✅ |
| Read Tasks | ✅ |
| Update Task | ✅ |
| Delete Task | ✅ |

---

# Author

Developed by Gaurav
