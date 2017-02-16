describe('ola', function() {
	
	var hello;

	beforeEach(function() {
		hello = new Hello();
	});

	it('Hello World Yasmine', function() {
		expect( hello.sayHi('Ola') ).toEqual('Ola testando yasmin!');
	});
});