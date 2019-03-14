const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      }
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    //A new ionstance of ship is created with two arguments being declared
    //passed into the object as parameters
    //When the new instance is created the fly function is invoked and 'this' is logged
    //'this' will refer to the global window object as the functions
    //is being written with an ES6 arrow function which does not have its' own
    //'this' but is directed/bound to the window.
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }

    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    //fn is simply a function. No new object is being instantiate.
    //'this' has a default of 'global window object' which is used
    //since there is no object property for this.value to refer to
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation:
    // 'this' refers to the element(el) that has the attached addEventListener
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){

        const innerFunction = function() {
          console.log(this.breed);
        };

        return innerFunction;
      }
    };

    var breed = dog.getBreed();

    // What is the value of `this` when we call breed()?
    const result = 'global window object';
    return result;

    // Annotation:
    //'this' is being logged inside a function that is invoked as the value for
    //the property getBreed, which is called on as the assigned value of the
    //variable breed
    //'this' refers to the global window object because .call, .apply, .bind,
    //nor a dot is used when the function is invoked
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    //'this' refers to the global window object becuase there is no instance of
    //a new object and value is not a key is would be a reassignment of a
    //variable, the way it is written
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation:
    // 'this' refers to the new instance of the Hero object and will return the
    //object keys and value
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation:
    // 'this' is used in the function setTimeout which is called inside the function
    //restart thus, 'this' refers to the global window object as it is not tied
    //to the object context
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => {
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation:
    // 'this' refers to obj becuase 'this' is called inside the object as part of a method
  },

  exerciseI() {
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation:
    // 'this' is being called inside a function that should return 'this'
    // The function is the callback function for the poets.map prototype
    // poets is passed through as current value(what will be processed through the array)
    // and as the arguement, the value to use as 'this'
    // Thus 'this' is retuned as 'poets'
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation:
    // 'this' refers to the element with the eventlistener (el)
  }

};

module.exports = context;
