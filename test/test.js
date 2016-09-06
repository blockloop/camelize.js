/* eslint-env mocha */

const expect = require("expect.js");
const camelize = require("../src/index.js");

describe("camelize", () => {
    it("should return non objects", () => {
        let expected = "asdf";
        let res = camelize(expected);
        expect(res).to.eql(expected);

        expected = 1;
        res = camelize(expected);
        expect(res).to.eql(expected);
    });

    it("should work on simple objs", () => {
        const res = camelize({
            Name: "Bob"
        });
        expect(res).to.eql({
            name: "Bob"
        });
    });

    it("should work on arrays", () => {
        const res = camelize([{
            Name: "Bob"
        }]);
        expect(res).to.eql([{
            name: "Bob"
        }]);
    });


    it("should work on nested items", () => {
        const res = camelize({
            Name: "Bob",
            Address: {
                Line1: "Line1",
                Line2: "Line2"
            }
        });
        expect(res).to.eql({
            name: "Bob",
            address: {
                line1: "Line1",
                line2: "Line2"
            }
        });
    });

    it("should work on nested array items", () => {
        const res = camelize({
            Name: "Bob",
            Addresses: [{
                Line1: "Line1",
                Line2: "Line2"
            }]
        });
        expect(res).to.eql({
            name: "Bob",
            addresses: [{
                line1: "Line1",
                line2: "Line2"
            }]
        });
    });

    it("should lower first upper char", () => {
        const res = camelize("Name");
        expect(res).to.eql("name");
    });

    it("should lower consecutives", () => {
        const res = camelize("NName");
        expect(res).to.eql("nname");
    });

    it("should leave singles, not first", () => {
        const res = camelize("NameName");
        expect(res).to.eql("nameName");
    });
});
