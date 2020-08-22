let {Node, push, buildOneTwoThree} = require('../list');
describe("tests for inserting a node before another node.", function() {
    it("", function() {
      expect(push(null, 1).data).toBe(1);
      expect(push(null, 1).next).toBe(null);
      expect(push(new Node(1), 2).data).toBe(2);
      expect(push(new Node(1), 2).next.data).toBe(1);
    });
  });
  
  describe("tests for building a linked list.", function() {
    it("", function() {
      expect(buildOneTwoThree().data).toBe(1);
      expect(buildOneTwoThree().next.data).toBe(2);
      expect(buildOneTwoThree().next.next.data).toBe(3);
      expect(buildOneTwoThree().next.next.next).toBe(null);
    });
  });