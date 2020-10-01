/**
 * arithmetic.ts
 */
export const add0 = (a: number, b: number): number => a + b;

export const multiply0 = (a: number, b: number): number => a * b;

export const capitalize = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1);

export const hello = (name: string): string => "Hello " + capitalize(name);
