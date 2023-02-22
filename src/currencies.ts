import { data } from './data.js';

export const getByCode = (code: string) => data.find(({ code: currentCode }) => currentCode === code);
export const getByNumber = (number: string) => data.find(({ number: currentNumber }) => currentNumber === number);
export const getCodes = () => data.map(({ code }) => code);
