# LoanLink (Client)

**Project:** LoanLink — Microloan Request & Approval Tracker System 
** purpose:** Through UI / UX user interaction, authentication (Firebase), dashboard, loan listing, loan details, apply form, এবং Stripe redirect handling।  
  

---

## Key Features 
- রেসপন্সিভ Landing Page (Hero, Available Loans, How It Works, Feedback)  
- Authentication (Firebase Email/Password)  
- All-Loans (3-column grid) এবং Loan Details পেজ  
- Apply Form (auto-filled fields, validation via react-hook-form)  
- Dashboard (Admin / Manager / Borrower) — role-based Dashboard

- Admin: Manage Users (role change, suspend with reason), All Loans, Loan Applications  
- Manager: Add Loan, Manage Loans, Pending / Approved lists  
- Borrower: My Loans, Pay (Stripe redirect for $10), Cancel pending application  

- Theme toggle (light/dark) + persisted in localStorage  
- Loading spinner, Toast / SweetAlert notifications, 404 page, dynamic page titles  
- Pagination , Search & Filters (All Loans / Manage Users / Applications)

---

## Important UI/UX Requirements 
- Clean color contrast, consistent heading & button styles  
- Cards equal height / consistent spacing / accessible elements (aria)  
- No errors on refresh of any route (configure hosting rewrites / client routing correctly)  
- Firebase authorized

---

## Tech Stack & Major Packages
- React (Vite)
- Tailwind CSS
- react-router-dom  
- framer-motion (for animations)  
- react-hook-form (form validation)  
- react-query or @tanstack/react-query 
- react-icons,
- recharts (charts)  
- react-hot-toast or sweetalert2 
- axios / fetch for API calls  
- stripe-js (frontend stripe redirect)  



##  How to Clone & Run the Client Side (Frontend)

### 1️⃣ Clone the repository
- 1. git clone YOUR_CLIENT_REPO_LINK

### 2️⃣ Go to the project folder
- 2. cd client

### 3️⃣ Install dependencies
- 3. npm install

### 5️⃣ Start the development server
- 4. npm run dev

**Live URL:** ``




⭐ Important Notes
You must add your client domain to Firebase Authentication → Authorized Domains.
You must add your live frontend URL into backend CORS allowed origins.
Without .env, the project will NOT run.



🙏 Thanks for Visiting This Project!
If you want to run this project locally:
👉 Clone both client & server using the instructions above.
👉 Add the required .env files.
👉 Start both servers.
Feel free to ⭐ star the repo if you like the project!
For any issue, feel free to open a Pull Request or Issue.