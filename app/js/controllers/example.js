'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 * @ServeWord
 */


function Scrambler(ServeWord) {

  // ViewModel
  var vm = this;

  // Get word from API
  vm.getWord = function() {
    console.log(ServeWord);
    ServeWord.get();
    console.log('boom');
  };

  // Transform word to Array, scramble letters

  // Loop through each letter, transform each into a letter-div

  // Return rendering-code

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;


}

controllersModule.controller('Scrambler', Scrambler);
