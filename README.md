# 🚗 MechanIQ

MechanIQ is a web application designed for car workshops and vehicle owners to simplify the process of **diagnosis, quoting, and appointment scheduling**.

It allows users to:
- Self-diagnose common vehicle issues
- Get an estimated repair cost
- Book an appointment for a detailed inspection
- Keep a history of diagnostics by vehicle

It allows workshops to:
- Manage incoming requests
- Confirm or correct estimations
- Organize their agenda
- Track customers and vehicles

This project is also part of my professional portfolio, focused on **Next.js + TypeScript** to expand my stack beyond Ruby on Rails & React.

---

## 🎯 Purpose

- Gain hands-on experience with **Next.js (App Router)**
- Implement a real-world, industry-focused solution
- Apply best practices in architecture and clean code
- Build a production-ready app to showcase in interviews
- Expand my skills in the JavaScript / React ecosystem

---

## ✨ Main Features

### For Customers
- Register vehicles (brand, model, year, engine)
- Guided self-diagnosis based on symptoms
- Approximate budget estimation
- Image / video upload for better analysis
- Appointment booking
- Diagnosis & repair history

### For Workshops
- Admin dashboard
- View incoming diagnostics
- Confirm or adjust estimated quotes
- Manage appointments
- Customer & vehicle management

---

## 🛠 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **TailwindCSS**
- **shadcn/ui**
- **Prisma**
- **PostgreSQL** (Supabase or Railway)
- **NextAuth / Clerk (Authentication)**
- **React Hook Form + Zod (Forms + Validation)**
- **Cloudinary / AWS S3 (Media upload)**
- **Vercel (Deployment)**

Optional / Future enhancement:
- AI-assisted diagnostics (OpenAI or similar)

## 🚀 Getting Started

### 1. Clone repository

```bash
git clone https://github.com/your-username/mechaniq.git
cd mechaniq
```




# Entity Relationship Diagram

This ERD represents the database schema for the Mechaniq application.

```mermaid
erDiagram
    User ||--o{ Vehicle : "owns"
    User ||--o{ Appointment : "books"
    User ||--o{ Quote : "requests"
    Workshop ||--o{ Appointment : "hosts"
    Vehicle ||--o{ Appointment : "scheduled_for"
    Vehicle ||--o{ Quote : "quoted_for"

    User {
        string id PK
        string name
        string email UK
        enum role "CLIENT|MECHANIC|ADMIN"
        datetime createdAt
        datetime updatedAt
    }

    Workshop {
        string id PK
        string name
        string address
        string phone "nullable"
        string email "nullable"
        string description "nullable"
        datetime createdAt
        datetime updatedAt
    }

    Vehicle {
        string id PK
        string brand
        string model
        int year
        string plate UK
        string ownerId FK
        datetime createdAt
        datetime updatedAt
    }

    Appointment {
        string id PK
        datetime date
        string description
        enum status "PENDING|CONFIRMED|CANCELLED|DONE"
        string userId FK
        string vehicleId FK
        string workshopId FK
        datetime createdAt
        datetime updatedAt
    }

    Quote {
        string id PK
        string problem
        float estimatedMin
        float estimatedMax
        enum status "PENDING|APPROVED|REJECTED"
        string userId FK
        string vehicleId FK
        datetime createdAt
        datetime updatedAt
    }
```

## Relationships

- **User → Vehicle**: One-to-Many (One user can own multiple vehicles)
- **User → Appointment**: One-to-Many (One user can book multiple appointments)
- **User → Quote**: One-to-Many (One user can request multiple quotes)
- **Workshop → Appointment**: One-to-Many (One workshop can host multiple appointments)
- **Vehicle → Appointment**: One-to-Many (One vehicle can have multiple appointments)
- **Vehicle → Quote**: One-to-Many (One vehicle can have multiple quotes)

## Legend

- **PK**: Primary Key
- **FK**: Foreign Key
- **UK**: Unique Key

