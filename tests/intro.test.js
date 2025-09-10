import { describe, test, it, expect } from "vitest";
import { factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    //arrange
    const a = 3;
    const b = 2;
    //act
    const result = max(a, b);
    //assert
    expect(result).toBe(3);
    //or expect(max(3,2)).toBe(3)
  });
  it("should return the second argument if it is greater", () => {
    expect(max(4, 5)).toBe(5);
  });
  it("should return the first argument if they are equal", () => {
    expect(max(4, 4)).toBe(4);
  });
});

describe("fizzBuzz", () => {
  it("should return Fizz if the number is divisible by 3", () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });
  it('should return Buzz if the number is divisible by 5',()=>{
    expect(fizzBuzz(10)).toBe('Buzz')
  })
  it('should return FizzBuzz if the number is divisible by 3 and 5', ()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
  it('should return the number if it is not divisble by the numbers 3 and 5', ()=>{
    expect(fizzBuzz(7)).toBe('7')
  })
  
});



describe('factorial', ()=>{
  it('should return 1 if the number it 0', ()=>{
    expect(factorial(0)).toBe(1)
  })
  it('should return the number if it is 1', ()=>{
    expect(factorial(1)).toBe(1)
  })
  it('should return the number if it is 2',()=>{
    expect(factorial(3)).toBe(6)
  })
})