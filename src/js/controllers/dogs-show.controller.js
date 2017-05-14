angular
.module('DogApp')
.controller('DogShowCtrl', DogShowCtrl);

DogShowCtrl.$inject = ['Dog', '$stateParams', '$state'];

function DogShowCtrl (Dog, $stateParams, $state) {
  const vm = this;
  vm.delete= dogDelete;
  Dog
  .get($stateParams)
  .$promise
  .then(data => {
    vm.dog = data;
  });
  function dogDelete () {
    Dog
    .remove($stateParams)
    .$promise
    .then(() => {
      $state.go('dogsIndex');
    });
  }
}
