# 📐 Metric-Imperial Converter

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![freeCodeCamp Certified](https://img.shields.io/badge/freeCodeCamp-QA%20Certification-blue)](https://www.freecodecamp.org/certification/fcc/quality-assurance-v7)

A full-stack conversion tool fulfilling [freeCodeCamp](https://www.freecodecamp.org/)'s Quality Assurance Certification requirements. Features robust unit testing and comprehensive measurement conversions between metric and imperial systems.

Instructions for building your project can be found at https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter

## 🌟 Features

### 📐 Conversion Capabilities

- **Supported Units**  
  ⚖️ Mass: `lbs` ↔ `kg`  
  📏 Distance: `mi` ↔ `km`  
  🫙 Volume: `gal` ↔ `L`

### 🔍 Advanced Input Handling

- ✅ Whole numbers (`5kg`)
- ✅ Decimals (`2.2mi`)
- ✅ Fractions (`3/2lbs`)
- ✅ Complex fractions (`3.4/2.1gal`)
- 🆎 Automatic default to `1` for missing numbers

### 🧠 Intelligent Error Handling

- ❌ Invalid unit detection (`32min` → error)
- 🛑 Double-fraction prevention (`3/2/3kg` → error)
- 🚫 Mixed number validation (`3.2/4kg` → error)

## 🚀 Quick Start

### Prerequisites

- Node.js ≥16.0
- npm ≥7.0

### Local Installation

```bash
git clone https://github.com/Golam-Rabby821/metric-imperial-converter-fcc.git
cd metric-imperial-converter-fcc
npm install
npm start
```
