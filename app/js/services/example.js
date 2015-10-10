'use strict';

var servicesModule = require('./_index.js');
var apiKey = require('../api_config.js')

/**
 * @ngInject
 */
function ServeWord($q, $http) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();

    $http.get('http://api.wordnik.com/v4/words.json/randomWord?'
      + 'hasDictionaryDef=true'
      + '&excludePartOfSpeech=idiom,imperative,suffix'
      + '&minCorpusCount=0&maxCorpusCount=7000'
      + '&minDictionaryCount=1&maxDictionaryCount=10000'
      + '&minLength=4&maxLength=8'
      + '&api_key=' + apiKey.wordnik).success(function(data) {
        console.log(data);
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('ServeWord', ServeWord);
