import { repeatWord } from "./index.js";

describe("test repeatWord", () => {
  it("repeatWord-3", () => {
    expect(repeatWord('word', 3)).toBe('word1, word2, word3, ');

  })
},
  it("invalid data_-1", () => {
    expect(repeatWord('word', -1)).toBe('');
  }),
  it("invalid data_0", () => {
    expect(repeatWord('word', 0)).toBe('');
  }),
  it("corner-case", () => {
    expect(repeatWord('word', 1)).toBe('word1, ');
  }),
  it("corner-case_'word is number'", () => {
    expect(repeatWord(1, 1)).toBe('2, ');
  }),
  it("corner-case_'word is '1'", () => {
    expect(repeatWord('1', 1)).toBe('11, ');
  }));
