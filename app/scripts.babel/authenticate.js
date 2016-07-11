Trello.setKey('30e9c70ecbef5cfb5ad12aac8758da0b');

// Check if page load is a redirect back from the auth procedure
// if (HashSearch.keyExists('token')) {
//     Trello.authorize(
//         {
//             name: 'Trello Helper Extension',
//             expiration: 'never',
//             interactive: false,
//             scope: {read: true, write: true},
//             success: function () {
//               console.log('working!');
//
//               chrome.storage.local.set({'token': window.localStorage.trello_token});
//               var test;
//
//               test = chrome.storage.local.get('token');
//               console.log(test);
//             },
//             error: function () {
//                 alert('Failed to authorize with Trello')
//             }
//         });
// }

window.Trello.authorize({
  type: 'redirect',
  name: 'Getting Started Application',
  scope: {
    read: true,
    write: true },
    expiration: 'never',
    success: authenticationSuccess,
    error: authenticationFailure
  });

function authenticationSuccess () {
  console.log('working!');

  chrome.storage.local.set({'token': window.localStorage.trello_token});
  var test;

  test = chrome.storage.local.get('token', function (result) {
    console.log(result.token);
  });
}

function authenticationFailure () {
  console.log('you done faied');
}
