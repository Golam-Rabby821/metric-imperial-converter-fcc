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
npm run dev
```

### Access the API: ``` http://localhost:3000 ```

## 📚 API Documentation
### Conversion Endpoint
``` http
GET /api/convert?input={value}
```

### Example Request
```bash
curl "http://localhost:3000/api/convert?input=10L"
```

### Successful Response
```json
{
  "initNum": 10,
  "initUnit": "L",
  "returnNum": 2.64172,
  "returnUnit": "gal",
  "string": "10 liters converts to 2.64172 gallons"
}
```
### Error Responses:

```json
{"error": "invalid unit"}
{"error": "invalid number"}
{"error": "invalid number and unit"}
```
## 🏗 Project Structure
```
metric-imperial-converter-fcc/
├── controllers/
│   └── convertHandler.js   # Core conversion logic
├── routes/
│   └── api.js              # API endpoint handlers
├── tests/
│   ├── 1_unit-tests.js     # 16 unit tests
│   └── 2_functional-tests.js # 5 functional tests
└── server.js               # Express configuration
```

## 📜 Certification Compliance
Fully satisfies all 13 freeCodeCamp requirements:

1. Proper project structure ✅
2. Valid input parsing ✅
3. Gal↔L conversion accuracy ✅
4. Lbs↔Kg conversion accuracy ✅
5. Mi↔Km conversion accuracy ✅
6. Case-insensitive unit handling ✅
7. Comprehensive error handling ✅
8. Fraction/decimal support ✅
9. Proper string formatting ✅
10. 16/16 unit tests ✅
11. 5/5 functional tests ✅

## 👨💻 Author
**Golam Rabby**
<p>
  <a href="https://www.linkedin.com/in/golamrabby-" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
</p>

