# Specification

## Summary
**Goal:** Build a full department website for the Department of Artificial Intelligence and Data Science at Priyadarshini Engineering College, with a Motoko backend for storing contact form submissions.

**Planned changes:**
- Sticky responsive navigation bar with smooth-scroll links to all sections and a mobile hamburger menu with active section highlighting
- Hero section with department name, tagline "Innovating the Future with AI & Data Science", AI abstract animated background, and two CTA buttons (Explore Programs, Contact Us)
- About the Department section with Vision, Mission, introductory text, and three highlight cards (Established Year, Intake Capacity, Accreditation)
- Programs Offered section with a B.Tech in AI & Data Science card (curriculum highlights) and a "Coming Soon" M.Tech placeholder card
- Faculty section with a responsive grid of at least 6 faculty cards (avatar, name, designation, specialization) with hover effects
- Laboratories & Infrastructure section with four cards: AI Lab, Data Analytics Lab, Computing Facilities, and Smart Classroom (each with icon and description)
- Student Achievements section with three subsections: Hackathon Wins, Research Publications, and Internship Highlights (at least 3 sample entries each, with impact metrics)
- Events & Workshops section with an Upcoming Events list (at least 3 entries) and a Past Events gallery (at least 4 thumbnail cards with captions)
- Placement & Industry Collaboration section with animated stat cards (placement rate, average package, highest package), partner company logo placeholders, and an internship opportunities subsection with CTA
- Research & Projects section with Ongoing Projects cards (title, description, team lead) and a Student Project Showcase grid (name, description, tech stack tags), at least 3 entries each
- Contact section with address, email, phone, a static Google Maps embed for Priyadarshini Engineering College, and a contact form (Name, Email, Subject, Message) that submits to the backend
- Footer with quick links, contact details, social media icons (LinkedIn, Twitter, YouTube, Instagram), and copyright notice
- Blue/white/gradient color theme, professional typography, scroll-triggered fade-in/slide-up animations, and hover effects on all interactive elements
- Motoko backend actor with `submitContactMessage` update call (stores Name, Email, Subject, Message, timestamp in stable memory) and `getContactMessages` query

**User-visible outcome:** Visitors can browse the full department website across all sections on any device, learn about programs, faculty, labs, achievements, events, and placements, and submit a contact message that is stored on-chain.
