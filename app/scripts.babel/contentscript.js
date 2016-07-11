'use strict';

var myList = '5773be9985f20b5f3f86bc36';
var creationSuccess = function(data) {
  console.log('Card created successfully. Data returned:' + JSON.stringify(data));
};

// chrome.storage.local.get('token', function (result) {
//   Trello.setKey('30e9c70ecbef5cfb5ad12aac8758da0b');
//   Trello.setToken(result.token);
//   console.log(result.token);
//   var newCard = {
//     name: 'New Test Card',
//     desc: 'This is the description of our new card.',
//     // Place this card at the top of our list
//     idList: myList,
//     pos: 'top'
//   };
//   Trello.post('/cards/', newCard, creationSuccess);
// });
