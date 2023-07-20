import assert from 'assert';
import greet from '../greet.js'


describe('this test' , function(){
    it('should return Hello, Bob' , function(){
        assert.equal("Hello, Bob",greet('Bob'), 'Hello, Bob');
    });
    
});