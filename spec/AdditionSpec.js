describe( "add", () => {
  it("should return the sum of 2 numbers", () => {
    expect( add(1,1) ).toEqual(2);
  })
});

describe("times", () => {
  it("should multiply two numbers", () => {
    expect( times(2,2) ).toEqual(4);
  })
});
