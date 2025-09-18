# 🌡️ Temperature Converter CLI – Technical Documentation

## 1️⃣ Main Variables

* `value` → Number from terminal input, the temperature to convert
* `fromUnit` → String representing the source unit (`c`, `f`, `k`)
* `toUnit` → String representing the target unit (`c`, `f`, `k`)

## 2️⃣ Operations Object

Contains functions for all conversions:

```text
operations.celsiusToFahrenheit()      // °C → °F
operations.celsiusToKelvin()          // °C → K
operations.fahrenheitToCelsius()      // °F → °C
operations.fahrenheitToKelvin()       // °F → K
operations.kelvinToCelsius()          // K → °C
operations.kelvinToFahrenheit()       // K → °F
```

* Each function **returns a Number**.
* Formatting (integers vs decimals) is handled separately before printing.

## 3️⃣ convertTemperature() Function

* Reads `value`, `fromUnit`, `toUnit`
* Uses a `switch` statement to determine which conversion to run
* Computes the result using `operations` functions
* Dynamically formats the result:

  * Integers are printed as is (`50`)
  * Numbers with decimals are printed with one decimal (`37.8`)
* Prints a friendly output to console:

```text
10°C => 50ºF
```

* Returns the result as Number (optional for further processing)

## 4️⃣ Usage Notes

* CLI arguments must be **separated**: `node main.js 10 c f`
* Unit strings are **case-insensitive**
* Invalid inputs trigger a helpful error message:

```text
You have to use the correct format: (value) (fromUnit) (toUnit)
```