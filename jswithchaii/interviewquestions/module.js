var module = (function () {
    function privateMethod() {
        console.log('private');
    }
    return {
        publicMethod: function () {
            console.log('public');
        },
        privateMethod: function () {
            console.log('private');
        }
    }
})();
module.privateMethod();
module.publicMethod();