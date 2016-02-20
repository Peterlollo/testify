var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
      expect(todo).to.have.property('setup');
      expect(todo).to.have.property('init');
    });
  });
});

describe('the todo.util methods', function() {
  assert(todo.util.trimTodoName('hi ') === 'hi', 'white space gets trimmed out of todos');
  todo.util.isValidTodoName('a').should.equal(false);
  assert.typeOf(todo.util.getUniqueId(), 'number', 'getUniqueId returns a number');
});
