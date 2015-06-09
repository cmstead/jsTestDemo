/// <reference path="../typings/jasmine/jasmine.d.ts"/>
//The above line was added for Visual Studio users.

//Describe blocks can be nested. They describe blocks of code
//and tell Jasmine/Mocha how to interact with your test suite
describe('testObject', function () {
	
	//This variable is enclosed in the describe block and is relatively safe.
	//Note this variable is declared, but not initialized. That's VERY important
	//for good, clean-room style testing.
	var testObject;
	
	//BeforeEach will execute before each test.
	//Anything you want to execute each time should be wrapped in an anonymous function
	beforeEach(function () {
		
		//Always initialize your test variables inside a beforeEach block.
		//It's critical that these variables always start at the same baseline so
		//all tests behave predictably.
		testObject = {
			foo: 'bar',
			baz: 'quux'
		};
		
	});
	
	//AfterEach will run after each test. 
	//The function names aren't very imaginative, but they are descriptive
	afterEach(function () {
		testObject = null; //Technically still an object. ; )
	});
	
	//it blocks are where you peform test operations. Each it block should
	//contain one test path and one expectation. Expectations can be equated
	//to assertions in jUnit.
    it('should be an object', function () {
        expect(typeof testObject).toBe('object'); //Hey! It passes. (Unless you changed the testObject)
    });
});