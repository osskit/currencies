# @osskit/currencies

A TypeScript library for handling currency codes, symbols, and conversions.

## Installation

```sh
yarn add @osskit/currencies
```

or

```sh
npm install @osskit/currencies
```

## Usage

### Importing the library

```typescript
import {
  getByCode,
  getByNumber,
  isCurrencyCode,
  toMajorUnit,
  toMinorUnit,
  getSymbolByCode,
  isAmount,
  calculateRate,
  applyRate,
} from '@osskit/currencies';
```

### Examples

#### Get currency by code

```typescript
const currency = getByCode('EUR');
console.log(currency);
```

#### Get currency by number

```typescript
const currency = getByNumber('978');
console.log(currency);
```

#### Check if a string is a valid currency code

```typescript
const isValid = isCurrencyCode('USD');
console.log(isValid); // true
```

#### Convert to major unit

```typescript
const majorUnit = toMajorUnit({ value: 100_000, currency: 'USD' });
console.log(majorUnit); // 1000
```

#### Convert to minor unit

```typescript
const minorUnit = toMinorUnit(1000, 'USD');
console.log(minorUnit); // 100_000
```

#### Get symbol by currency code

```typescript
const symbol = getSymbolByCode('USD');
console.log(symbol); // $
```

#### Check if an object is a valid amount

```typescript
const validAmount = isAmount({ value: 1000, currency: 'USD' });
console.log(validAmount); // true
```

#### Calculate exchange rate

```typescript
const rate = calculateRate({ value: 1000, currency: 'USD' }, { value: 800, currency: 'EUR' });
console.log(rate); // 0.8
```

#### Apply exchange rate to amount

```typescript
const convertedAmount = applyRate({ value: 100_000, currency: 'USD' }, 'EUR', 0.8);
console.log(convertedAmount); // { value: 80_000, currency: 'EUR' }
```

## Running Tests

To run the tests, use the following command:

```sh
yarn test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
