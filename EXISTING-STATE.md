# Vending Kiosk Enterprise UI - Summary

## Overview

A React-based touch-screen vending kiosk interface with a modern fintech/smart locker aesthetic. Designed for enterprise environments with accessibility compliance and multi-language support.

**Tech Stack:** React, CSS-in-JS (inline styles), Plus Jakarta Sans font

**Dimensions:** 540px × 960px (portrait kiosk format)

---

## Design System

### Color Palette

| Purpose | Color | Hex |
|---------|-------|-----|
| Background | Cool Light Grey | `#F4F7FB` |
| Cards | White | `#FFFFFF` |
| Dividers | Light Blue-Grey | `#D6DFEA` |
| Primary Text | Near Black | `#111827` |
| Secondary Text | Grey | `#6B7280` |
| Primary CTA | Tech Blue | `#0284C7` |
| Accent | Teal | `#14B8A6` |
| Selection | Light Blue | `#E0F2FE` |

### Status Colors

| Status | Background | Text |
|--------|------------|------|
| Success | `#DCFCE7` | `#166534` |
| Error | `#FEE2E2` | `#DC2626` |
| Warning | `#FEF3C7` | `#92400E` |
| Deal/Promo | `#CCFBF1` | `#0D9488` |

### Typography

- **Font:** Plus Jakarta Sans
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

---

## UI Structure

### Main Layout

```
┌─────────────────────────────────┐
│       Promo Banner (16:9)       │
│          508 × 286px            │
├────────┬────────────────────────┤
│        │                        │
│ Sidebar│    Products Area       │
│  (90px)│    (3×3 Grid)          │
│        │                        │
│ Featured│                       │
│Sandwiches                       │
│ Drinks │                        │
│ Snacks │                        │
│ Fresh  │                        │
│ Sweets │                        │
│        │                        │
├────────┴────────────────────────┤
│  Help  │  QR Section  │  Lang   │
└─────────────────────────────────┘
```

### Key Components

1. **Promo Banner** - Top promotional image area
2. **Category Sidebar** - Vertical navigation (6 categories)
3. **Product Grid** - 3×3 layout with pagination
4. **Bottom Bar** - Help, QR code, language selector

---

## Product Categories

| Category | Slot Prefix | Products |
|----------|-------------|----------|
| Featured | H (Hero) | 6 hero items |
| Sandwiches | A, B | 9 items |
| Drinks | C | 6 items |
| Snacks | D | 6 items |
| Fresh | E | 6 items |
| Sweets | F | 6 items |

---

## Product States

| State | Badge | Visual Treatment |
|-------|-------|------------------|
| Available | None | Normal display |
| Sold Out | "OUT OF STOCK" (red) | 60% opacity, disabled |
| Low Stock | "LOW STOCK" (amber) | Warning indicator |
| Age Restricted | "ID REQUIRED" (amber) | Triggers verification toast |
| Promo | "DEAL" (teal) | Promotional highlight |

---

## User Flow (4 Steps)

### Step 1: Browse & Select
- View products by category
- Navigate with pagination (non-featured categories)
- Tap product to select

### Step 2: Confirm
- View selected product details
- See slot location
- Payment method options: Card, Mobile Pay, Cash
- Actions: Cancel or Pay Now

### Step 3: Payment Processing
- Loading spinner animation
- "Processing payment..." message
- 80% success rate (demo)

### Step 4: Success / Error
- **Success:** Shows slot code, "Item is being dispensed"
- **Error:** Retry or Cancel options

---

## Featured Page Layout

Uses a flexible grid configuration with card spanning:

```javascript
layout: [
  { id: 'hero1', col: 1, row: 1, colSpan: 2, rowSpan: 1 }, // Wide top-left
  { id: 'hero2', col: 3, row: 1, colSpan: 1, rowSpan: 2 }, // Tall right
  { id: 'hero3', col: 1, row: 2, colSpan: 1, rowSpan: 1 }, // Standard
  { id: 'hero4', col: 2, row: 2, colSpan: 1, rowSpan: 1 }, // Standard
  { id: 'hero5', col: 1, row: 3, colSpan: 1, rowSpan: 1 }, // Standard
  { id: 'hero6', col: 2, row: 3, colSpan: 2, rowSpan: 1 }, // Wide bottom-right
]
```

---

## Toast Notifications

| Type | Icon | Use Case |
|------|------|----------|
| Success | ✓ (green) | Purchase complete |
| Error | ✕ (red) | Out of stock, payment failed |
| Warning | ⚠ (amber) | Age verification required |

Auto-dismiss after 4 seconds.

---

## Accessibility Features

- **WCAG AA Compliant** - 4.5:1 contrast ratio
- **Touch Targets** - Minimum 48px
- **Focus States** - 3px blue outline on focus-visible
- **ARIA Labels** - On all interactive elements
- **Text Overflow** - Marquee animation for long product names
- **Multi-language Ready** - Text expansion support

---

## Animations

| Animation | Duration | Easing |
|-----------|----------|--------|
| fadeIn | 300ms | ease |
| slideDown (toast) | 300ms | ease |
| spin (loader) | 1000ms | linear |
| carousel-scroll | Variable | linear |

---

## State Management

Uses React `useState` hooks for:

- `currentStep` - User flow position (1-4)
- `activeCategory` - Selected category tab
- `currentPage` - Pagination state
- `currentAd` - Promo banner rotation
- `selectedProduct` - Product in cart
- `paymentState` - null / processing / success / error
- `toast` - Notification display

---

## Payment Methods Supported

- Credit/Debit Card
- Mobile Pay
- Cash
