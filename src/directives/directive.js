import Vue from 'vue';
import globalJs from '@/service/global.js';

Vue.directive('onlydigits', (el, binding) => {
  if (/[\d\.]+/i.test(el.value)) {
    // console.log('ok');
  } else {
    const newValue = el.value.replace(/[a-zA-Z]+/gi, '');
    el.value = newValue;
    // console.log('should fix', newValue);
    binding.value = el.value;
  }
});

//   .directive("onlyAlpha", function() {
//     return {
//       require: "ngModel",
//       link: function(scope, element, attr, ngModelCtrl) {
//         function fromUser(text) {
//           var transformedInput = text.replace(/[^a-zA-Z\s]+/g, "");
//           if (transformedInput !== text) {
//             ngModelCtrl.$setViewValue(transformedInput);
//             ngModelCtrl.$render();
//           }
//           return transformedInput; // or return Number(transformedInput)
//         }
//         ngModelCtrl.$parsers.push(fromUser);
//       }
//     };
//   });
