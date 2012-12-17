'use strict';

/* Controllers */

function PublicationListCtrl($scope, $http) {
  $http.get('publications/publications.json').success(function(data) {
    $scope.publications = data;
  });

//  $scope.phones = [ { "name" : "Nexus S", "snippet" : "Fast just got faster with Nexus S." },
//      { "name" : "Motorola XOOM™ with Wi-Fi", "snippet" : "The Next, Next Generation tablet." },
//      { "name" : "MOTOROLA XOOM™", "snippet" : "The Next, Next Generation tablet." } ];
//
//
//  $scope.testing = [
//                   {"title": "Managing the Dynamism of Real-Time Java Applications on the OSGi Platform.",
//                    "conference": "In Proceedings of the 27th ACM Symposium on Applied Computing (SAC' 2012)",
//                    "year": 0},
//                   {"title": "Motorola XOOM™ with Wi-Fi",
//                    "conference": "In Proceedings of the 27th ACM Symposium on Applied Computing (SAC' 2012)",
//                    "year": 1},
//                   {"name": "MOTOROLA XOOM™",
//                    "conference": "The Next, Next Generation tablet.",
//                    "year": 2}
//                 ];


  // $scope.orderProp = 'age';
}

function HomeCtrl() {
}
HomeCtrl.$inject = [];

function ContactCtrl($scope, $http) {
//  $http.get('contact/contact.json').success(function(data) {
//    $scope.contact = data;
//  });

  $scope.contact = {
      "name": "Walter Rudametkin",
      "email_name": "Walter.Rudametkin",
      "email_domain": "imag",
      "email_tl": "fr",
      "address_1": "Equipe Adèle",
      "address_2": "Laboratoire d'Informatique de Grenoble (LIG)",
      "address_3": "Bat. C, 220 rue de la Chimie, Domaine Universitaire",
      "address_4": "BP 53, 38041 Grenoble Cedex 9, France",
      "telephone": "+33.(0)6.98.38.32.22",
  };

//  revealed_email = mail2("nobody","fake.address9z",0,"","Mr Nobody");
//  $scope.email = revealed_email;
//  $scope.email = "rudametkin@gqsdf.com";

}
//ContactCtrl.$inject = [];

function GetEmailCtrl($scope, $http) {
  $http.get('contact.json').success(function(data) {
    revealed_email = mail2("nobody","fake.address9z",0,"","Mr Nobody");
    $scope.email = revealed_email;
  });
}