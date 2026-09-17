# Amazon Smart Extractor

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Manifest-V3-green?style=for-the-badge" alt="Manifest V3">
  <img src="https://img.shields.io/badge/License-Freemium-orange?style=for-the-badge" alt="Freemium">
  <img src="https://img.shields.io/badge/Size-<50KB-lightgrey?style=for-the-badge" alt="Lightweight">
</p>

---

## Overview

**Amazon Smart Extractor** is a **lightweight, zero-bloat browser utility** engineered for **e-commerce researchers, dropshippers, and arbitrage sellers** who need to instantly harvest product intelligence from any Amazon product page.

With a single click, extract the **Title**, **Current Price**, and **ASIN** — the three critical data points for product research, competitor analysis, and inventory management — without ever leaving the page.

> **No tracking. No analytics. No external dependencies.** Just clean, fast extraction that respects your privacy and your workflow.

---

## Key Features

| Feature | Description |
|---------|-------------|
| **One-Click Extraction** | Grab Title, Price & ASIN instantly from any Amazon product page |
| **Zero Bloat** | <50KB total footprint — no background scripts, no persistent connections |
| **Manifest V3** | Built on Chrome's modern extension platform for security & performance |
| **Offline-First** | All processing happens locally in your browser |
| **Dark Theme UI** | Beautiful, distraction-free interface designed for long research sessions |
| **Usage Counter** | Visual tracker shows remaining free extractions at a glance |

---

## Installation Guide (Developer Mode)

Since this extension is distributed as a source package (not on the Chrome Web Store), you'll install it via **Developer Mode**. This takes ~30 seconds.

### Step 1: Download the Package
Download the **`amazon_extractor_v1.zip`** file from this repository's [Releases](../../releases) page or the root of this repository.

### Step 2: Unpack Locally
Extract the ZIP file to a permanent folder on your computer:
```bash
# Example (adjust path as needed)
unzip amazon_extractor_v1.zip -d ~/Documents/amazon-smart-extractor
```
> ⚠️ **Important:** Keep this folder in a stable location. Chrome loads the extension directly from this directory — do not move or delete it after installation.

### Step 3: Enable Developer Mode
1. Open Google Chrome
2. Navigate to **`chrome://extensions/`**
3. Toggle **Developer mode** **ON** (top-right corner)

### Step 4: Load the Extension
1. Click **`Load unpacked`** (top-left button)
2. Select the **unzipped folder** from Step 2 (`amazon-smart-extractor/`)
3. The extension icon appears in your toolbar — you're ready!

---

## Usage

1. Navigate to **any Amazon product page** (e.g., `amazon.com/dp/B0XXXXXXXX`)
2. Click the **Amazon Smart Extractor** icon in your toolbar
3. Press **`Extract Product Info`**
4. Data appears instantly — **copy with one click**

```text
Product Information:

Title:    Wireless Noise-Cancelling Headphones Pro
Price:    $249.99
ASIN:     B0C9X7YZQ2
URL:      https://www.amazon.com/dp/B0C9X7YZQ2
Extracted at:  9/17/2026, 2:43:12 PM
```

---

## Freemium Model

### Free Tier — 5 Extractions
The extension grants **5 completely free extraction runs** — no account, no email, no strings attached. A visual counter in the popup shows your remaining extractions in real time.

### Premium Edition — Lifetime Access
After 5 extractions, the interface locks and presents a **Premium Upgrade** screen. Purchase a **lifetime license** via Lemon Squeezy to unlock:

- **Unlimited extractions** — forever
- **Priority processing** — no rate limits
- **Export to CSV / JSON** — bulk data workflows
- **Future updates included** — all v1.x releases

#### How to Upgrade
1. Click **`Purchase License on Lemon Squeezy`** in the locked overlay
2. Complete checkout at our secure Lemon Squeezy page
3. Copy your **unique confirmation key** from the receipt email
4. Paste the key into the license field and click **`Verify`**
5. Premium activates instantly — no restart required

---

## Technical Details

| Aspect | Specification |
|--------|---------------|
| **Manifest Version** | 3 |
| **Permissions** | `activeTab`, `storage`, `scripting` |
| **Architecture** | Popup-only (no service worker, no background) |
| **Storage** | `chrome.storage.local` (usage count + premium flag) |
| **Injection** | `chrome.scripting.executeScript` (isolated world) |
| **Supported Domains** | All `amazon.*` TLDs (.com, .co.uk, .de, .ca, etc.) |

### Data Extracted
| Field | Source | Selector Strategy |
|-------|--------|-------------------|
| **Title** | `#productTitle`, `[data-cy="product-title"]`, `span.a-text-normal` | Multi-selector fallback |
| **Price** | `.a-price .a-offscreen`, `[data-cy="price-recipe"]`, `.priceToPay` | Multi-selector fallback |
| **ASIN** | URL `/dp/ASIN`, `[data-asin]`, `#ASIN` | URL + DOM fallback |

---

## Privacy & Security

- **No data leaves your browser** — extraction happens entirely client-side
- **No analytics, no tracking, no telemetry** — ever
- **No external network requests** — except your optional license verification
- **Open source** — audit the code yourself in this repository
- **Manifest V3** — sandboxed, CSP-compliant, no `eval()` or unsafe patterns

---

## Roadmap (v1.x)

- [ ] CSV / JSON batch export (Premium)
- [ ] Multi-ASIN queue extraction (Premium)
- [ ] Historical price lookup integration
- [ ] Firefox / Edge port
- [ ] Keyboard shortcut support

---

## Support

| Channel | Link |
|---------|------|
| **Issues / Bug Reports** | [GitHub Issues](../../issues) |
| **Feature Requests** | [GitHub Discussions](../../discussions) |
| **License / Billing** | [Lemon Squeezy Support](https://thequietwishco.lemonsqueezy.com) |

---

## License

**Amazon Smart Extractor** is distributed under a **Freemium License**:

- **Free Tier:** Personal use, 5 extractions, no commercial redistribution
- **Premium Tier:** Lifetime commercial use, unlimited extractions, updates included

See [LICENSE](LICENSE) for full terms.

---

## Disclaimer

This tool is an independent utility and is **not affiliated with, endorsed by, or connected to Amazon.com, Inc.** or any of its subsidiaries. Amazon® and the Amazon logo® are trademarks of Amazon.com, Inc. Use responsibly and in accordance with Amazon's Terms of Service.

---

<p align="center">
  <strong>Built for sellers, by sellers.</strong><br>
  <em>Extract smarter. Ship faster. Scale easier.</em>
</p>
