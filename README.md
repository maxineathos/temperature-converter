# 🌡️ Temperature Converter CLI

A simple **command-line tool** to convert temperatures between **Celsius, Fahrenheit, and Kelvin**!

---

## 📚 Features

* 🔄 Convert temperatures between **Celsius, Fahrenheit, and Kelvin**
* 🧮 Dynamic formatting: shows decimals only when necessary
* 💻 Easy to run directly from terminal
* ⚡ Lightweight and fast, no dependencies

---

## 🚀 Installation

1. Clone the repo:

```bash
git clone https://github.com/maxineathos/temperature-converter.git
```

2. Go to the project folder:

```bash
cd temperature-converter
```

3. Make sure Node.js is installed:

```bash
node -v
```

---

## 💡 Usage

Run the script with **3 arguments**:

```bash
node main.js <value> <fromUnit> <toUnit>
```

* `<value>` → temperature number
* `<fromUnit>` → source unit (`c`, `f`, `k`)
* `<toUnit>` → destination unit (`c`, `f`, `k`)

> Units can also be spelled fully: `celsius`, `fahrenheit`, `kelvin`.

---

## 🔧 Examples

```bash
node main.js 10 c f
# Output: 10°C => 50ºF

node main.js 100 f c
# Output: 100ºF => 37.8ºC

node main.js 0 c k
# Output: 0°C => 273.1K
```

---

## 🗂 Project Structure

```
temperature-converter/
│
├── main.js          # Main CLI script
├── README.md        # Project documentation
├── docs/            # Technical documentation folder
└── LICENSE          # License (LIT License)
```

---

## 📄 Technical Documentation

The **technical documentation** for this project is located in the [docs/](./docs/) folder. It contains detailed explanations of the variables, functions, and the conversion logic.

---

## 📝 License

**Maxine Athos © 2025 — LIT License**

Free to use, modify, and distribute under the terms of the **LIT License**.