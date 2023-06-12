const name = "Joe";
const height = 74;
const message = console.log (`${name} is ${height} inches tall`);

console.log(message);

const { name, height, message } = require("../index.js");

/*
describe("Name", () => {
    it('returns "Joe"', () => {
      expect(name).toEqual("Joe");
    });
  });

  describe("Height", () => {
    it("is less than 74", () => {
      expect(height).toBeLessThan(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
  */