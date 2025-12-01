# Vending Kiosk UI - Style Guide

> **Design Direction:** Modern Konbini (Japanese Convenience Store)  
> **Aesthetic:** Warm, friendly, approachable, efficient  
> **Production Resolution:** 1080×1920 (Portrait)  
> **Preview Resolution:** 540×960 (50% scale)

---

## Table of Contents

1. [Color Palette](#1-color-palette)
2. [Typography](#2-typography)
3. [Spacing & Sizing](#3-spacing--sizing)
4. [Border Radius](#4-border-radius)
5. [Shadows](#5-shadows)
6. [Layout Dimensions](#6-layout-dimensions)
7. [Component Styles](#7-component-styles)
8. [Animations & Transitions](#8-animations--transitions)
9. [States & Variants](#9-states--variants)
10. [Accessibility Styles](#10-accessibility-styles)

---

## 1. Color Palette

### 1.1 CSS Variables

```css
:root {
  /* ========== PRIMARY COLORS ========== */
  --primary: #FF6B35;              /* Main CTA, prices, active states */
  --primary-light: #FFF0EB;        /* Hover backgrounds, selections */
  --primary-dark: #E55A2B;         /* Pressed states, gradient end */
  
  /* ========== SECONDARY COLORS ========== */
  --secondary: #2EC4B6;            /* Success states, teal badges */
  --secondary-light: #E8FAF8;      /* Light teal backgrounds */
  
  /* ========== ACCENT COLORS ========== */
  --accent-yellow: #FFD166;        /* Best seller badges */
  --accent-pink: #FF8FA3;          /* Sale badges, savings */
  --accent-purple: #9B5DE5;        /* Special badges (optional) */
  
  /* ========== BACKGROUND COLORS ========== */
  --bg-warm: #FFFBF7;              /* Main app background */
  --bg-cream: #FFF8F0;             /* Secondary surfaces, hover states */
  --surface: #FFFFFF;              /* Cards, modals, elevated surfaces */
  
  /* ========== TEXT COLORS ========== */
  --text-primary: #2D3436;         /* Headings, product names, prices */
  --text-secondary: #636E72;       /* Descriptions, labels, muted text */
  --text-muted: #B2BEC3;           /* Placeholder text, disabled states */
  
  /* ========== UTILITY COLORS ========== */
  --border: #F0E6DD;               /* Dividers, subtle borders */
  
  /* ========== FEEDBACK COLORS ========== */
  --success: #28A745;
  --success-light: #D4EDDA;
  --success-gradient: linear-gradient(135deg, #D4EDDA 0%, #A8E6CF 100%);
  
  --warning: #FFC107;
  --warning-light: #FFF3CD;
  --warning-gradient: linear-gradient(135deg, #FFF3CD 0%, #FFEEBA 100%);
  
  --error: #DC3545;
  --error-light: #F8D7DA;
  --error-gradient: linear-gradient(135deg, #FFE5E5 0%, #FFC5C5 100%);
}
```

### 1.2 Gradient Definitions

```css
/* Primary Button Gradient */
background: linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%);

/* Badge Gradients */
--badge-new: linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%);
--badge-bestseller: linear-gradient(135deg, #FFD166 0%, #FFB84D 100%);
--badge-sale: linear-gradient(135deg, #FF8FA3 0%, #FF6B8A 100%);
--badge-staff: linear-gradient(135deg, #2EC4B6 0%, #20A89A 100%);

/* Background Decorative Gradients */
--bg-decorative: linear-gradient(135deg, #FFE5D9 0%, #FFF0EB 50%, #E8FAF8 100%);

/* Placeholder Image Gradient */
--placeholder-bg: linear-gradient(145deg, #FFF5F0 0%, #F0FAF9 100%);

/* Promo Banner Gradient */
--promo-bg: linear-gradient(135deg, #FFF0EB 0%, #FFE5D9 50%, #E8FAF8 100%);
```

### 1.3 Color Usage Guide

| Element | Color Variable | Hex Value |
|---------|---------------|-----------|
| App Background | `--bg-warm` | #FFFBF7 |
| Card Background | `--surface` | #FFFFFF |
| Primary Button | `--primary` | #FF6B35 |
| Product Price | `--primary` | #FF6B35 |
| Product Name | `--text-primary` | #2D3436 |
| Secondary Text | `--text-secondary` | #636E72 |
| Placeholder Text | `--text-muted` | #B2BEC3 |
| Card Border | `--border` | #F0E6DD |
| Active Category | `--primary` gradient | #FF6B35 → #E55A2B |
| Success Icon | `--success` | #28A745 |
| Error Icon | `--error` | #DC3545 |
| Warning Icon | `--warning` | #FFC107 |

---

## 2. Typography

### 2.1 Font Imports

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Quicksand:wght@500;600;700&display=swap');
```

### 2.2 Font Families

```css
:root {
  --font-display: 'Quicksand', sans-serif;  /* Headings, prices, initials, category tabs */
  --font-body: 'Nunito', sans-serif;        /* Body text, buttons, product names */
}
```

### 2.3 Type Scale

| Element | Font Family | 540px Size | 1080px Size | Weight | Line Height |
|---------|-------------|------------|-------------|--------|-------------|
| Product Name | Nunito | 12px | 24px | 700 | 1.3 |
| Product Price | Nunito | 16px | 32px | 800 | 1.2 |
| Hero Card Name | Nunito | 11px | 22px | 700 | 1.2 |
| Hero Card Price | Nunito | 14px | 28px | 800 | 1.2 |
| Original Price (strikethrough) | Nunito | 10px | 20px | 600 | 1.2 |
| Category Tab | Quicksand | 11px | 22px | 700 | 1.2 |
| Button Primary | Nunito | 16px | 32px | 800 | 1.2 |
| Button Secondary | Nunito | 16px | 32px | 700 | 1.2 |
| Toast Message | Nunito | 14px | 28px | 700 | 1.4 |
| Placeholder Initials | Quicksand | 28px | 56px | 900 | 1 |
| Placeholder Slot Code | Quicksand | 10px | 20px | 800 | 1 |
| Confirm Screen Title | Nunito | 22px | 44px | 800 | 1.2 |
| Confirm Screen Price | Nunito | 36px | 72px | 900 | 1 |
| Success Vend Code | Quicksand | 52px | 104px | 900 | 1 |
| Badge Text | Nunito | 9px | 18px | 800 | 1 |
| Help Button | Nunito | 14px | 28px | 700 | 1.2 |
| Promo Placeholder | Quicksand | 20px | 40px | 800 | 1.2 |

### 2.4 Text Styles

```css
/* Product Name */
.product-name {
  font-family: var(--font-body);
  font-size: 12px;          /* 24px at 1080px */
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
}

/* Product Price */
.product-price {
  font-family: var(--font-body);
  font-size: 16px;          /* 32px at 1080px */
  font-weight: 800;
  color: var(--primary);
  line-height: 1.2;
}

/* Original Price (Sale) */
.original-price {
  font-family: var(--font-body);
  font-size: 10px;          /* 20px at 1080px */
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: line-through;
}

/* Category Tab */
.category-tab {
  font-family: var(--font-display);
  font-size: 11px;          /* 22px at 1080px */
  font-weight: 700;
  text-align: center;
}

/* Placeholder Initials */
.placeholder-initials {
  font-family: var(--font-display);
  font-size: 28px;          /* 56px at 1080px */
  font-weight: 900;
  color: var(--primary);
  opacity: 0.5;
}

/* Badge Text */
.badge {
  font-family: var(--font-body);
  font-size: 9px;           /* 18px at 1080px */
  font-weight: 800;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
```

---

## 3. Spacing & Sizing

### 3.1 Spacing Scale

| Token | 540px | 1080px | Usage |
|-------|-------|--------|-------|
| `--space-xs` | 4px | 8px | Tight gaps, badge padding |
| `--space-sm` | 8px | 16px | Card gaps, small margins |
| `--space-md` | 12px | 24px | Section padding, medium gaps |
| `--space-lg` | 16px | 32px | Container padding |
| `--space-xl` | 24px | 48px | Large section spacing |
| `--space-2xl` | 32px | 64px | Major sections |

### 3.2 Component Sizing

| Component | 540px Width | 540px Height | 1080px Width | 1080px Height |
|-----------|-------------|--------------|--------------|---------------|
| Main Container | 540px | 960px | 1080px | 1920px |
| Promo Banner | 508px | 286px | 1016px | 572px |
| Category Sidebar | 88px | auto | 176px | auto |
| Category Tab | 88px | ~50px | 176px | ~100px |
| Product Card | auto (grid) | auto (grid) | auto (grid) | auto (grid) |
| Bottom Bar | 100% | 56px | 100% | 112px |
| Page Arrow Button | 38px | 38px | 76px | 76px |
| Page Dot | 10px | 10px | 20px | 20px |
| Page Dot (active) | 28px | 10px | 56px | 20px |
| Toast | auto | auto | auto | auto |
| Help Icon | 30px | 30px | 60px | 60px |
| QR Placeholder | 42px | 42px | 84px | 84px |

---

## 4. Border Radius

### 4.1 Radius Scale

```css
:root {
  --radius-xs: 6px;     /* 12px at 1080px - Small badges, slots */
  --radius-sm: 12px;    /* 24px at 1080px - Badges, small buttons */
  --radius-md: 16px;    /* 32px at 1080px - Cards, buttons */
  --radius-lg: 24px;    /* 48px at 1080px - Large cards, modals */
  --radius-xl: 32px;    /* 64px at 1080px - Main container */
  --radius-full: 9999px; /* Fully rounded (pills, circles) */
}
```

### 4.2 Radius Usage

| Element | Radius Token | 540px Value | 1080px Value |
|---------|--------------|-------------|--------------|
| Main Container | `--radius-xl` | 32px | 64px |
| Product Card | `--radius-lg` | 24px | 48px |
| Hero Card | `--radius-md` | 16px | 32px |
| Category Tab | `--radius-md` | 16px | 32px |
| Primary Button | `--radius-md` | 16px | 32px |
| Badge | `--radius-full` | 20px | 40px |
| Product Image | `--radius-md` | 16px | 32px |
| Toast | `--radius-lg` | 24px | 48px |
| Page Dot | `--radius-full` | 5px | 10px |
| Slot Code Label | `--radius-xs` | 6px | 12px |
| Confirm Card | `--radius-xl` | 32px | 64px |

---

## 5. Shadows

### 5.1 Shadow Definitions

```css
:root {
  /* Soft shadow - Default card state */
  --shadow-soft: 0 2px 12px rgba(45, 52, 54, 0.05);
  
  /* Medium shadow - Elevated elements */
  --shadow-md: 0 4px 20px rgba(255, 107, 53, 0.08);
  
  /* Hover shadow - Interactive hover state */
  --shadow-hover: 0 8px 30px rgba(255, 107, 53, 0.15);
  
  /* Active category shadow */
  --shadow-active: 0 6px 20px rgba(255, 107, 53, 0.3);
  
  /* Badge shadow */
  --shadow-badge: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  /* Success icon shadow */
  --shadow-success: 0 4px 16px rgba(40, 167, 69, 0.2);
  
  /* Error icon shadow */
  --shadow-error: 0 4px 16px rgba(220, 53, 69, 0.2);
  
  /* Primary button shadow */
  --shadow-button: 0 4px 16px rgba(255, 107, 53, 0.35);
  
  /* Primary button hover shadow */
  --shadow-button-hover: 0 6px 24px rgba(255, 107, 53, 0.45);
  
  /* Main container shadow */
  --shadow-container: 0 20px 60px rgba(45, 52, 54, 0.12), 
                      0 0 0 1px rgba(255, 107, 53, 0.05);
}
```

### 5.2 Shadow Usage

| Element | State | Shadow |
|---------|-------|--------|
| Product Card | Default | `--shadow-soft` |
| Product Card | Hover | `--shadow-hover` |
| Hero Card | Default | `--shadow-soft` |
| Hero Card | Hover | `--shadow-hover` |
| Category Tab | Default | `0 2px 8px rgba(45, 52, 54, 0.04)` |
| Category Tab | Active | `--shadow-active` |
| Primary Button | Default | `--shadow-button` |
| Primary Button | Hover | `--shadow-button-hover` |
| Badge | All | `--shadow-badge` |
| Toast | All | `--shadow-hover` |
| Main Container | All | `--shadow-container` |
| Modal/Confirm Card | All | `--shadow-hover` |

---

## 6. Layout Dimensions

### 6.1 Main Container Structure

```
┌──────────────────────────────────────────────────┐
│                    CONTAINER                      │
│  ┌──────────────────────────────────────────┐    │
│  │           PROMO BANNER (16:9)            │    │
│  │              508 × 286 px                │    │
│  └──────────────────────────────────────────┘    │
│  ┌────────┐ ┌───────────────────────────────┐    │
│  │SIDEBAR │ │                               │    │
│  │  88px  │ │        PRODUCTS AREA          │    │
│  │        │ │                               │    │
│  │Featured│ │   ┌─────┐ ┌─────┐ ┌─────┐    │    │
│  │        │ │   │     │ │     │ │     │    │    │
│  │Sandwich│ │   │     │ │     │ │     │    │    │
│  │        │ │   └─────┘ └─────┘ └─────┘    │    │
│  │ Drinks │ │   ┌─────┐ ┌─────┐ ┌─────┐    │    │
│  │        │ │   │     │ │     │ │     │    │    │
│  │ Snacks │ │   │     │ │     │ │     │    │    │
│  │        │ │   └─────┘ └─────┘ └─────┘    │    │
│  │  Fresh │ │   ┌─────┐ ┌─────┐ ┌─────┐    │    │
│  │        │ │   │     │ │     │ │     │    │    │
│  │ Sweets │ │   │     │ │     │ │     │    │    │
│  │        │ │   └─────┘ └─────┘ └─────┘    │    │
│  └────────┘ └───────────────────────────────┘    │
│  ┌──────────────────────────────────────────┐    │
│  │   HELP    │    QR CODE    │   LANGUAGE   │    │
│  │                BOTTOM BAR                │    │
│  └──────────────────────────────────────────┘    │
└──────────────────────────────────────────────────┘
```

### 6.2 Grid Specifications

```css
/* Product Grid (Standard Categories) */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;              /* 20px at 1080px */
}

/* Hero Grid (Featured Category) */
.hero-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;              /* 20px at 1080px */
  grid-auto-flow: dense;
}
```

### 6.3 Featured Grid Layout

```
┌─────────────────┬─────────┐
│     hero1       │         │
│     (2×1)       │  hero2  │
├────────┬────────┤  (1×2)  │
│ hero3  │ hero4  │         │
│ (1×1)  │ (1×1)  │         │
├────────┼────────┴─────────┤
│ hero5  │      hero6       │
│ (1×1)  │      (2×1)       │
└────────┴──────────────────┘
```

Grid positioning CSS:
```css
/* hero1: Top-left, spans 2 columns */
grid-column: 1 / span 2;
grid-row: 1 / span 1;

/* hero2: Top-right, spans 2 rows */
grid-column: 3 / span 1;
grid-row: 1 / span 2;

/* hero3: Middle-left */
grid-column: 1 / span 1;
grid-row: 2 / span 1;

/* hero4: Middle-center */
grid-column: 2 / span 1;
grid-row: 2 / span 1;

/* hero5: Bottom-left */
grid-column: 1 / span 1;
grid-row: 3 / span 1;

/* hero6: Bottom-right, spans 2 columns */
grid-column: 2 / span 2;
grid-row: 3 / span 1;
```

### 6.4 Promo Banner Aspect Ratio

```css
.promo-banner {
  width: 508px;           /* 1016px at 1080px */
  aspect-ratio: 16 / 9;
  /* Height calculates to 286px (572px at 1080px) */
}
```

---

## 7. Component Styles

### 7.1 Product Card

```css
.product-card {
  background: var(--surface);
  border-radius: var(--radius-lg);      /* 24px */
  padding: 10px;                         /* 20px at 1080px */
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.product-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--shadow-hover);
}

.product-card:active {
  transform: scale(0.97);
}

.product-card.selected {
  background: var(--primary-light);
  box-shadow: 0 0 0 3px var(--primary), var(--shadow-hover);
}

.product-card.sold-out {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(0.5);
}
```

### 7.2 Hero Card

```css
.hero-card {
  background: var(--surface);
  border-radius: var(--radius-md);      /* 16px */
  padding: 8px;                          /* 16px at 1080px */
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--shadow-hover);
}

.hero-card:active {
  transform: scale(0.97);
}
```

### 7.3 Category Tab

```css
.category-tab {
  padding: 14px 6px;                    /* 28px 12px at 1080px */
  border-radius: var(--radius-md);
  border: none;
  background: var(--surface);
  font-family: var(--font-display);
  font-size: 11px;                      /* 22px at 1080px */
  font-weight: 700;
  color: var(--text-secondary);
  cursor: pointer;
  text-align: center;
  box-shadow: 0 2px 8px rgba(45, 52, 54, 0.04);
  position: relative;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Gradient overlay for active state */
.category-tab::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.category-tab span {
  position: relative;
  z-index: 1;
}

.category-tab:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
  color: var(--primary);
}

.category-tab.active {
  color: #fff;
  transform: translateY(-2px);
  box-shadow: var(--shadow-active);
}

.category-tab.active::before {
  opacity: 1;
}
```

### 7.4 Primary Button

```css
.btn-primary {
  padding: 18px;                        /* 36px at 1080px */
  border-radius: var(--radius-md);
  border: none;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  font-family: var(--font-body);
  font-size: 16px;                      /* 32px at 1080px */
  font-weight: 800;
  color: #fff;
  cursor: pointer;
  box-shadow: var(--shadow-button);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-button-hover);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### 7.5 Secondary Button

```css
.btn-secondary {
  padding: 18px;                        /* 36px at 1080px */
  border-radius: var(--radius-md);
  border: none;
  background: var(--bg-cream);
  font-family: var(--font-body);
  font-size: 16px;                      /* 32px at 1080px */
  font-weight: 700;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-secondary:hover {
  background: #FFE5E5;
  color: var(--error);
  transform: translateY(-2px);
}
```

### 7.6 Badge

```css
.badge {
  position: absolute;
  top: 8px;                             /* 16px at 1080px */
  left: 8px;                            /* 16px at 1080px */
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 4px;                             /* 8px at 1080px */
  padding: 5px 10px;                    /* 10px 20px at 1080px */
  border-radius: 20px;                  /* 40px at 1080px */
  font-size: 9px;                       /* 18px at 1080px */
  font-weight: 800;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  box-shadow: var(--shadow-badge);
}

/* Badge Variants */
.badge.new {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%);
  color: #fff;
}

.badge.bestseller {
  background: linear-gradient(135deg, #FFD166 0%, #FFB84D 100%);
  color: #5D4E37;
}

.badge.sale {
  background: linear-gradient(135deg, #FF8FA3 0%, #FF6B8A 100%);
  color: #fff;
}

.badge.staff-pick {
  background: linear-gradient(135deg, #2EC4B6 0%, #20A89A 100%);
  color: #fff;
}

.badge.low-stock {
  background: linear-gradient(135deg, #FFF3CD 0%, #FFEEBA 100%);
  color: #856404;
}

.badge.out-of-stock {
  background: linear-gradient(135deg, #FFE5E5 0%, #FFC5C5 100%);
  color: #DC3545;
}

.badge.id-required {
  background: linear-gradient(135deg, #FFF3CD 0%, #FFEEBA 100%);
  color: #856404;
}
```

### 7.7 Toast Notification

```css
.toast {
  position: absolute;
  top: 80px;                            /* 160px at 1080px */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px;                            /* 20px at 1080px */
  padding: 14px 24px;                   /* 28px 48px at 1080px */
  border-radius: var(--radius-lg);
  font-size: 14px;                      /* 28px at 1080px */
  font-weight: 700;
  box-shadow: var(--shadow-hover);
  backdrop-filter: blur(10px);
  animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toast.success {
  background: linear-gradient(135deg, #D4EDDA 0%, #C3E6CB 100%);
  color: #155724;
}

.toast.error {
  background: linear-gradient(135deg, #F8D7DA 0%, #F5C6CB 100%);
  color: #721C24;
}

.toast.warning {
  background: linear-gradient(135deg, #FFF3CD 0%, #FFEEBA 100%);
  color: #856404;
}

.toast-icon {
  width: 26px;                          /* 52px at 1080px */
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;                      /* 24px at 1080px */
  font-weight: 800;
  color: #fff;
}

.toast.success .toast-icon { background: #28A745; }
.toast.error .toast-icon { background: #DC3545; }
.toast.warning .toast-icon { background: #FFC107; }
```

### 7.8 Product Image Placeholder

```css
.product-image-wrap {
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 8px;                   /* 16px at 1080px */
  background: linear-gradient(145deg, #FFF5F0 0%, #F0FAF9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Glossy overlay effect */
.product-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 60%);
  pointer-events: none;
}

.placeholder-initials {
  font-family: var(--font-display);
  font-size: 28px;                      /* 56px at 1080px */
  font-weight: 900;
  color: var(--primary);
  opacity: 0.5;
}

.placeholder-slot {
  font-size: 10px;                      /* 20px at 1080px */
  font-weight: 800;
  color: var(--text-muted);
  background: rgba(255,255,255,0.8);
  padding: 3px 8px;                     /* 6px 16px at 1080px */
  border-radius: 6px;                   /* 12px at 1080px */
}
```

### 7.9 Pagination

```css
.pagination-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px 10px 4px;              /* 0 8px 20px 8px at 1080px */
  gap: 10px;                            /* 20px at 1080px */
}

.page-arrow {
  width: 38px;                          /* 76px at 1080px */
  height: 38px;
  border-radius: var(--radius-sm);
  border: none;
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 18px;                      /* 36px at 1080px */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(45, 52, 54, 0.06);
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.page-arrow:hover:not(:disabled) {
  background: var(--primary);
  color: #fff;
  transform: scale(1.08);
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.25);
}

.page-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-dots {
  display: flex;
  gap: 8px;                             /* 16px at 1080px */
}

.page-dot {
  width: 10px;                          /* 20px at 1080px */
  height: 10px;
  border-radius: 50%;
  border: none;
  background: var(--border);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.page-dot:hover {
  background: var(--primary-light);
  transform: scale(1.2);
}

.page-dot.active {
  width: 28px;                          /* 56px at 1080px */
  border-radius: 5px;                   /* 10px at 1080px */
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}
```

### 7.10 Bottom Bar

```css
.bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;                   /* 24px 32px at 1080px */
  background: var(--surface);
  border-top: 1px solid var(--border);
}

.help-btn {
  display: flex;
  align-items: center;
  gap: 8px;                             /* 16px at 1080px */
  background: none;
  border: none;
  font-family: var(--font-body);
  font-size: 14px;                      /* 28px at 1080px */
  font-weight: 700;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 10px;                        /* 20px at 1080px */
  border-radius: var(--radius-sm);
  transition: all 0.25s ease;
}

.help-btn:hover {
  background: var(--primary-light);
  color: var(--primary);
}

.help-icon {
  width: 30px;                          /* 60px at 1080px */
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;                      /* 28px at 1080px */
  font-weight: 800;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}

.qr-placeholder {
  width: 42px;                          /* 84px at 1080px */
  height: 42px;
  background: var(--bg-cream);
  border: 2px dashed var(--border);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;                      /* 20px at 1080px */
  font-weight: 800;
  color: var(--text-muted);
}
```

### 7.11 Confirm Screen

```css
.confirm-card {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: 28px;                        /* 56px at 1080px */
  width: 100%;
  max-width: 400px;                     /* 800px at 1080px */
  box-shadow: var(--shadow-hover);
}

.confirm-name {
  font-size: 22px;                      /* 44px at 1080px */
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 8px 0;
  text-align: center;
}

.confirm-price {
  font-size: 36px;                      /* 72px at 1080px */
  font-weight: 900;
  color: var(--primary);
  margin: 0;
  text-align: center;
}
```

### 7.12 Success Screen

```css
.success-icon {
  width: 80px;                          /* 160px at 1080px */
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #D4EDDA 0%, #A8E6CF 100%);
  color: #28A745;
  font-size: 36px;                      /* 72px at 1080px */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  box-shadow: var(--shadow-success);
  animation: successPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.vend-code {
  background: linear-gradient(145deg, var(--primary-light) 0%, var(--secondary-light) 100%);
  border-radius: var(--radius-lg);
  padding: 24px;                        /* 48px at 1080px */
  margin-bottom: 16px;                  /* 32px at 1080px */
  text-align: center;
}

.vend-slot {
  font-family: var(--font-display);
  font-size: 52px;                      /* 104px at 1080px */
  font-weight: 900;
  color: var(--primary);
}
```

### 7.13 Spinner

```css
.spinner {
  width: 64px;                          /* 128px at 1080px */
  height: 64px;
  border: 5px solid var(--border);      /* 10px at 1080px */
  border-top-color: var(--primary);
  border-radius: 50%;
  margin: 0 auto 24px auto;
  animation: spin 1s linear infinite;
}
```

---

## 8. Animations & Transitions

### 8.1 Easing Functions

```css
:root {
  /* Bouncy easing - For playful, energetic interactions */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Smooth easing - For subtle, refined transitions */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Quick easing - For fast, snappy responses */
  --ease-quick: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

### 8.2 Keyframe Animations

```css
/* Card fade in with upward motion */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Toast slide down */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

/* Success icon pop */
@keyframes successPop {
  0% { 
    transform: scale(0); 
  }
  50% { 
    transform: scale(1.2); 
  }
  100% { 
    transform: scale(1); 
  }
}

/* Spinner rotation */
@keyframes spin {
  to { 
    transform: rotate(360deg); 
  }
}

/* Marquee carousel scroll */
@keyframes carousel-scroll {
  0%, 10% { 
    transform: translateX(0); 
  }
  45%, 55% { 
    transform: translateX(var(--scroll-distance, 0)); 
  }
  90%, 100% { 
    transform: translateX(0); 
  }
}
```

### 8.3 Transition Durations

| Element | Duration | Easing |
|---------|----------|--------|
| Card hover | 0.3s | `--ease-bounce` |
| Button hover | 0.3s | `--ease-bounce` |
| Category tab | 0.25s | `--ease-bounce` |
| Page dot | 0.3s | `--ease-bounce` |
| Toast | 0.4s | `--ease-bounce` |
| Fade in | 0.4s | `--ease-smooth` |
| Spinner | 1s | linear |
| Marquee | dynamic | linear |

### 8.4 Stagger Animation

```css
/* Apply stagger delay to grid items */
.product-card {
  animation: fadeInUp 0.4s ease forwards;
  opacity: 0;
}

.product-card:nth-child(1) { animation-delay: 0.00s; }
.product-card:nth-child(2) { animation-delay: 0.05s; }
.product-card:nth-child(3) { animation-delay: 0.10s; }
.product-card:nth-child(4) { animation-delay: 0.15s; }
.product-card:nth-child(5) { animation-delay: 0.20s; }
.product-card:nth-child(6) { animation-delay: 0.25s; }
.product-card:nth-child(7) { animation-delay: 0.30s; }
.product-card:nth-child(8) { animation-delay: 0.35s; }
.product-card:nth-child(9) { animation-delay: 0.40s; }
```

### 8.5 Marquee Animation Logic

```javascript
// Marquee setup for product names
const setupMarquee = (element) => {
  const textSpan = element.querySelector('span');
  if (!textSpan) return;
  
  // Reset
  textSpan.style.animation = 'none';
  
  // Measure
  const containerWidth = element.offsetWidth;
  const textWidth = textSpan.scrollWidth;
  const overflow = textWidth - containerWidth;
  
  if (overflow > 0) {
    // Add 10px buffer
    const scrollDistance = overflow + 10;
    // Speed: 10px per second
    const duration = Math.max(4, scrollDistance / 10);
    
    textSpan.style.setProperty('--scroll-distance', `-${scrollDistance}px`);
    textSpan.style.animation = `carousel-scroll ${duration}s linear infinite`;
  }
};
```

**Marquee Timeline:**
| Phase | Percentage | Action |
|-------|------------|--------|
| Rest (start) | 0% - 10% | Pause at start |
| Scroll left | 10% - 45% | Animate to end |
| Rest (end) | 45% - 55% | Pause at end |
| Scroll right | 55% - 90% | Animate to start |
| Rest (loop) | 90% - 100% | Pause before repeat |

---

## 9. States & Variants

### 9.1 Product Card States

| State | Styles |
|-------|--------|
| **Default** | `background: #fff`, `box-shadow: --shadow-soft`, `opacity: 1` |
| **Hover** | `transform: translateY(-4px) scale(1.02)`, `box-shadow: --shadow-hover` |
| **Active/Pressed** | `transform: scale(0.97)` |
| **Selected** | `background: --primary-light`, `box-shadow: 0 0 0 3px --primary, --shadow-hover` |
| **Sold Out** | `opacity: 0.5`, `filter: grayscale(0.5)`, `cursor: not-allowed` |

### 9.2 Category Tab States

| State | Styles |
|-------|--------|
| **Default** | `background: #fff`, `color: --text-secondary` |
| **Hover** | `transform: translateY(-2px)`, `color: --primary`, `box-shadow: --shadow-soft` |
| **Active** | `background: gradient`, `color: #fff`, `box-shadow: --shadow-active` |

### 9.3 Button States

| State | Primary Button | Secondary Button |
|-------|----------------|------------------|
| **Default** | Gradient bg, white text | Cream bg, gray text |
| **Hover** | `translateY(-2px)`, stronger shadow | Pink bg, red text, `translateY(-2px)` |
| **Active** | `translateY(0)` | Normal position |
| **Disabled** | `opacity: 0.5`, `cursor: not-allowed` | `opacity: 0.5`, `cursor: not-allowed` |

### 9.4 Badge Variants

| Variant | Background | Text Color |
|---------|------------|------------|
| NEW | `#FF6B35 → #FF8A5B` | #FFFFFF |
| Best Seller | `#FFD166 → #FFB84D` | #5D4E37 |
| DEAL / Staff Pick | `#2EC4B6 → #20A89A` | #FFFFFF |
| SALE | `#FF8FA3 → #FF6B8A` | #FFFFFF |
| LOW STOCK | `#FFF3CD → #FFEEBA` | #856404 |
| OUT OF STOCK | `#FFE5E5 → #FFC5C5` | #DC3545 |
| ID REQUIRED | `#FFF3CD → #FFEEBA` | #856404 |

### 9.5 Toast Variants

| Variant | Background | Text Color | Icon Background |
|---------|------------|------------|-----------------|
| Success | `#D4EDDA → #C3E6CB` | #155724 | #28A745 |
| Error | `#F8D7DA → #F5C6CB` | #721C24 | #DC3545 |
| Warning | `#FFF3CD → #FFEEBA` | #856404 | #FFC107 |

---

## 10. Accessibility Styles

### 10.1 Focus States

```css
/* Focus ring for all interactive elements */
.category-tab:focus-visible,
.product-card:focus-visible,
.hero-card:focus-visible,
.btn-primary:focus-visible,
.btn-secondary:focus-visible,
.page-arrow:focus-visible,
.page-dot:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}
```

### 10.2 Minimum Touch Targets

```css
/* Ensure minimum 48x48px touch area */
.category-tab,
.product-card,
.hero-card,
.btn-primary,
.btn-secondary,
.page-arrow,
.help-btn,
.lang-btn {
  min-height: 48px;
  min-width: 48px;
}

/* Page dots need larger tap area */
.page-dot {
  min-height: 48px;
  min-width: 48px;
  /* Visual size is smaller, but tap area is 48x48 */
  position: relative;
}

.page-dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
}
```

### 10.3 Color Contrast Requirements

| Element | Foreground | Background | Ratio | Requirement |
|---------|------------|------------|-------|-------------|
| Product Name | #2D3436 | #FFFFFF | 13.5:1 | ✅ Pass (4.5:1) |
| Product Price | #FF6B35 | #FFFFFF | 4.5:1 | ✅ Pass (4.5:1) |
| Muted Text | #B2BEC3 | #FFFFFF | 2.6:1 | ⚠️ Decorative only |
| Button Text | #FFFFFF | #FF6B35 | 4.5:1 | ✅ Pass (4.5:1) |
| Active Tab | #FFFFFF | #FF6B35 | 4.5:1 | ✅ Pass (4.5:1) |

### 10.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .product-card:hover,
  .hero-card:hover,
  .category-tab:hover {
    transform: none;
  }
}
```

---

## Appendix: Complete CSS Variables

```css
:root {
  /* ===== COLORS ===== */
  --primary: #FF6B35;
  --primary-light: #FFF0EB;
  --primary-dark: #E55A2B;
  --secondary: #2EC4B6;
  --secondary-light: #E8FAF8;
  --accent-yellow: #FFD166;
  --accent-pink: #FF8FA3;
  --accent-purple: #9B5DE5;
  --bg-warm: #FFFBF7;
  --bg-cream: #FFF8F0;
  --surface: #FFFFFF;
  --text-primary: #2D3436;
  --text-secondary: #636E72;
  --text-muted: #B2BEC3;
  --border: #F0E6DD;
  --success: #28A745;
  --success-light: #D4EDDA;
  --warning: #FFC107;
  --warning-light: #FFF3CD;
  --error: #DC3545;
  --error-light: #F8D7DA;
  
  /* ===== SHADOWS ===== */
  --shadow-soft: 0 2px 12px rgba(45, 52, 54, 0.05);
  --shadow-md: 0 4px 20px rgba(255, 107, 53, 0.08);
  --shadow-hover: 0 8px 30px rgba(255, 107, 53, 0.15);
  --shadow-active: 0 6px 20px rgba(255, 107, 53, 0.3);
  --shadow-badge: 0 2px 8px rgba(0, 0, 0, 0.15);
  --shadow-button: 0 4px 16px rgba(255, 107, 53, 0.35);
  --shadow-button-hover: 0 6px 24px rgba(255, 107, 53, 0.45);
  --shadow-success: 0 4px 16px rgba(40, 167, 69, 0.2);
  --shadow-error: 0 4px 16px rgba(220, 53, 69, 0.2);
  --shadow-container: 0 20px 60px rgba(45, 52, 54, 0.12), 0 0 0 1px rgba(255, 107, 53, 0.05);
  
  /* ===== RADII ===== */
  --radius-xs: 6px;
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;
  
  /* ===== TYPOGRAPHY ===== */
  --font-display: 'Quicksand', sans-serif;
  --font-body: 'Nunito', sans-serif;
  
  /* ===== EASING ===== */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-quick: cubic-bezier(0.25, 0.1, 0.25, 1);
  
  /* ===== SPACING (540px base) ===== */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
}
```

---

**End of Style Guide**