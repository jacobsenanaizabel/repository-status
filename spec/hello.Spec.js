describe('ola', function() {
	
	var hello;

	beforeEach(function() {
		hello = new Hello();
	});

	it('Diga meu nome corretamente', function() {
		expect( hello.sayHi('Ola') ).toEqual('Ola testando yasmin!');
	});
});