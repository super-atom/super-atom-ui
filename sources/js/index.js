import './module/share';
import '../scss/index.scss';

$(document).ready(function () {
  var longAndComplicatedFunction = function () {
    var deferred = $.Deferred();
    console.log('시작');
    try {
      // 로직
      deferred.resolve('성공');
    } catch (err) {
      deferred.reject(err);
    }
    return deferred.promise();
  };
  longAndComplicatedFunction()
    .done(function (message) {
      console.log(message);
    })
    .fail(function (error) {
      console.error(error);
    })
    .always(function () {
      console.log('완료!');
    });
});
