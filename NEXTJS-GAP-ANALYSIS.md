# Next.js 15 Migration Plan

**Current:** Single React component (`vending-kiosk-enterprise.jsx` - 1460 lines)
**Target:** Next.js 15 App Router with TypeScript and CSS Modules
**Estimated Total Effort:** 3-4 days for experienced developer

---

## Next.js 15 Specific Considerations

| Feature | Impact on Migration |
|---------|---------------------|
| **Async Request APIs** | `cookies()`, `headers()`, `params`, `searchParams` are now async - plan accordingly |
| **Turbopack (stable)** | Default dev bundler - faster HMR, no config needed |
| **React 19** | New hooks available (`use`, `useFormStatus`), Server Actions stable |
| **Caching Changes** | `fetch` no longer cached by default - explicit `cache: 'force-cache'` needed |
| **Partial Prerendering** | Can mix static/dynamic in same route (experimental) |

---

## Phased Roadmap

```
Phase 0 ──→ Phase 1 ──→ Phase 2 ──→ Phase 3 ──→ Phase 4
 (1hr)      (4hrs)      (6hrs)      (8hrs)      (4hrs)
 Setup     Extract     Routing      Data       Polish
```

| Phase | Duration | Milestone | Gate Criteria |
|-------|----------|-----------|---------------|
| **0: Foundation** | 1 hour | Next.js 15 project initialized | `npm run dev` works, TypeScript compiles |
| **1: Component Split** | 4 hours | 15 components extracted | Each component renders in isolation |
| **2: Routing** | 6 hours | 4 routes working | Full user flow navigable |
| **3: Data & State** | 8 hours | API routes + state management | Products load from API, cart persists |
| **4: Polish** | 4 hours | Production ready | Lighthouse ≥ 90, no console errors |

---

## Dependency Graph

```
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 0: Foundation                                              │
│ [1] package.json → [2] TypeScript → [3] ESLint → [4] globals.css │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 1: Component Split                                         │
│ [5] Design Tokens → [6] UI Components → [7] Layout Components    │
│                          ↓                       ↓               │
│                    [8] Product Components  [9] Payment Components│
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 2: Routing                                                 │
│ [10] app/layout.tsx → [11] app/page.tsx → [12-14] Other pages   │
│           ↓                                                      │
│ [15] next/navigation integration                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 3: Data & State                                            │
│ [16] Products data file → [17] API routes → [18] Cart context   │
│                                 ↓                                │
│                    [19] Server Components                        │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 4: Polish                                                  │
│ [20] next/image → [21] next/font → [22] loading.tsx → [23] error.tsx │
└─────────────────────────────────────────────────────────────────┘
```

---

## Execution Checklist

### Phase 0: Foundation (1 hour)

| # | Task | Effort | Blocks | Success Criteria |
|---|------|--------|--------|------------------|
| 1 | `npx create-next-app@latest --typescript --tailwind=false --eslint --app` | S | - | Project created |
| 2 | Configure `tsconfig.json` strict mode | S | 1 | `"strict": true` |
| 3 | Add ESLint + Prettier config | S | 1 | `npm run lint` passes |
| 4 | Create `globals.css` with CSS variables | S | 1 | Variables defined |
| 5 | Configure `next/font` for Plus Jakarta Sans | S | 1 | Font loads without FOUT |

**Phase 0 Definition of Done:** `npm run dev` starts, TypeScript strict mode enabled, font renders.

---

### Phase 1: Component Split (4 hours)

| # | Task | Effort | Blocks | Success Criteria |
|---|------|--------|--------|------------------|
| 6 | Create design tokens in CSS variables | S | 4 | All colors/spacing as variables |
| 7 | Extract `Button.tsx` component | S | 6 | Primary/secondary variants work |
| 8 | Extract `Badge.tsx` component | S | 6 | All status badges render |
| 9 | Extract `Toast.tsx` component | M | 6 | Success/error/warning states |
| 10 | Extract `ProductCard.tsx` component | M | 7,8 | Handles all product states |
| 11 | Extract `ProductGrid.tsx` component | M | 10 | 3x3 grid renders correctly |
| 12 | Extract `CategorySidebar.tsx` component | M | 7 | Category switching works |
| 13 | Extract `PromoBanner.tsx` component | S | 6 | 16:9 placeholder renders |
| 14 | Extract `BottomBar.tsx` component | S | 7 | Help/QR/Lang buttons work |
| 15 | Extract `KioskContainer.tsx` layout | M | 6 | 540x960 container styles |
| 16 | Extract `ConfirmCard.tsx` component | M | 7,10 | Product confirm UI works |
| 17 | Extract `PaymentMethods.tsx` component | S | 6 | Payment icons display |
| 18 | Extract `ProcessingScreen.tsx` component | S | 6 | Spinner animates |
| 19 | Extract `SuccessScreen.tsx` component | M | 7 | Slot code displays |
| 20 | Extract `ErrorScreen.tsx` component | S | 7 | Retry/cancel buttons work |

**Phase 1 Definition of Done:** Original UI fully recreated from 15 separate components.

---

### Phase 2: Routing (6 hours)

| # | Task | Effort | Blocks | Success Criteria |
|---|------|--------|--------|------------------|
| 21 | Create `app/layout.tsx` with KioskContainer | M | 15 | Layout wraps all pages |
| 22 | Create `app/page.tsx` (browse products) | L | 11,12,13 | Category/product selection works |
| 23 | Create `app/confirm/page.tsx` | M | 16,17 | Shows selected product |
| 24 | Create `app/payment/page.tsx` | M | 18 | Processing animation plays |
| 25 | Create `app/success/page.tsx` | M | 19 | Slot code + done button |
| 26 | Create `app/error/page.tsx` | S | 20 | Retry navigation works |
| 27 | Implement `useRouter` navigation | M | 21-26 | All transitions work |
| 28 | Add `loading.tsx` for each route | S | 21-26 | Suspense boundaries work |

**Phase 2 Definition of Done:** Full 4-step flow works via URL navigation.

---

### Phase 3: Data & State (8 hours)

| # | Task | Effort | Blocks | Success Criteria |
|---|------|--------|--------|------------------|
| 29 | Create `lib/data/products.ts` | M | - | All 39 products typed |
| 30 | Create `app/api/products/route.ts` | M | 29 | GET returns products JSON |
| 31 | Create `app/api/payment/route.ts` | M | - | POST simulates payment |
| 32 | Create `CartContext.tsx` provider | L | - | Selected product persists across routes |
| 33 | Create `ToastContext.tsx` provider | M | 9 | Toast shows from any page |
| 34 | Wrap app in context providers | S | 32,33 | Contexts available globally |
| 35 | Fetch products in Server Component | M | 30 | Products SSR'd on browse page |
| 36 | Implement category URL params | M | 22 | `?category=drinks` works |

**Phase 3 Definition of Done:** Products from API, cart persists, toasts work globally.

---

### Phase 4: Polish (4 hours)

| # | Task | Effort | Blocks | Success Criteria |
|---|------|--------|--------|------------------|
| 37 | Replace placeholder divs with `next/image` | M | - | Images optimized |
| 38 | Add `error.tsx` error boundaries | S | - | Errors caught gracefully |
| 39 | Add metadata to layout | S | 21 | Title/description set |
| 40 | Implement QR code generation | M | - | Dynamic QR renders |
| 41 | Add focus-visible styles | S | - | Keyboard navigation works |
| 42 | Lighthouse audit + fixes | M | 37-41 | Score ≥ 90 |
| 43 | Final accessibility review | M | 42 | WCAG AA passes |

**Phase 4 Definition of Done:** Production-ready, Lighthouse ≥ 90, accessible.

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| CSS Module conversion breaks complex animations | Medium | High | Test marquee/spinner animations early in Phase 1 |
| Cart state lost on navigation | Medium | High | Implement CartContext before routing (Phase 2) |
| Inline styles too complex for CSS Modules | Low | Medium | Fall back to CSS-in-JS for specific components |
| next/font causes layout shift | Low | Low | Use `display: swap` and test early |
| Server Component hydration mismatch | Medium | Medium | Keep interactive elements in Client Components |

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Functional Parity** | 100% | All original features work identically |
| **Lighthouse Performance** | ≥ 90 | Chrome DevTools audit |
| **Lighthouse Accessibility** | ≥ 90 | Chrome DevTools audit |
| **TypeScript Coverage** | 100% | No `any` types, strict mode |
| **Component Count** | 15-20 | Reasonable decomposition |
| **Build Size** | < 200KB JS | `npm run build` output |
| **Dev Server Start** | < 3s | Turbopack cold start |

---

## Effort Summary

| Effort | Meaning | Count |
|--------|---------|-------|
| **S** (Small) | < 30 min | 18 |
| **M** (Medium) | 30 min - 2 hrs | 21 |
| **L** (Large) | 2-4 hrs | 4 |

**Total Items:** 43
**Estimated Time:** 23 hours (3 days at 8hrs/day)

---

## Proposed File Structure

```
vending-ui/
├── app/
│   ├── layout.tsx              # Root layout + fonts + providers
│   ├── page.tsx                # Browse products (Step 1)
│   ├── loading.tsx             # Global loading state
│   ├── error.tsx               # Global error boundary
│   ├── confirm/
│   │   ├── page.tsx            # Confirm selection (Step 2)
│   │   └── loading.tsx
│   ├── payment/
│   │   ├── page.tsx            # Processing (Step 3)
│   │   └── loading.tsx
│   ├── success/
│   │   └── page.tsx            # Success (Step 4)
│   └── api/
│       ├── products/route.ts   # GET /api/products
│       └── payment/route.ts    # POST /api/payment
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   ├── Badge.tsx
│   │   ├── Badge.module.css
│   │   ├── Toast.tsx
│   │   └── Toast.module.css
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── ProductCard.module.css
│   │   ├── ProductGrid.tsx
│   │   └── CategorySidebar.tsx
│   ├── layout/
│   │   ├── KioskContainer.tsx
│   │   ├── KioskContainer.module.css
│   │   ├── BottomBar.tsx
│   │   └── PromoBanner.tsx
│   └── payment/
│       ├── ConfirmCard.tsx
│       ├── PaymentMethods.tsx
│       ├── ProcessingScreen.tsx
│       ├── SuccessScreen.tsx
│       └── ErrorScreen.tsx
├── contexts/
│   ├── CartContext.tsx
│   └── ToastContext.tsx
├── lib/
│   ├── data/
│   │   └── products.ts         # Product data + types
│   └── utils/
│       └── helpers.ts          # getDummyColor, getInitials
├── styles/
│   └── globals.css             # CSS variables + base styles
├── public/
│   └── images/                 # Product images (when available)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Quick Start (Phase 0 Commands)

```bash
# 1. Create Next.js 15 project
npx create-next-app@latest vending-ui-next --typescript --eslint --app --src-dir=false --import-alias="@/*" --tailwind=false

# 2. Navigate and install
cd vending-ui-next

# 3. Start dev server (uses Turbopack by default in Next.js 15)
npm run dev
```
