# GST Billing Software

A simple GST billing web application that helps generate item-wise invoices with GST calculations and a clean printable layout.  
Built using **Node.js**, **HTML/CSS**, and basic JavaScript for frontend interactions.

---

## 🚀 Features

- Add customer and invoice details
- Add multiple line items with quantity and price
- Automatic calculation of:
  - Subtotal
  - GST amount
  - Grand total
- Simple summary view for generated invoices
- Clean invoice-style UI suitable for printing or export (via browser print)

---

## 🛠 Tech Stack

- **Backend:** Node.js (basic HTTP/Express-style server)
- **Frontend:** HTML, CSS, JavaScript
- **Other:** Simple models for handling invoice data

---

## 📂 Project Structure

- `index.html` – Main billing/invoice input page  
- `summary.html` – Summary/preview page for generated bills  
- `invoice-style.css` – Styling for invoice layout  
- `server.js` – Node.js server to serve pages and handle basic routing  
- `models/` – Data/model-related files (for handling invoice data)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jamesjacob819i/gst-testing.git
cd gst-testing
