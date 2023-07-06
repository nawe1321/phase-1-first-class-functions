function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      // Function body
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // Function body
    };
  }
  