'use strict';

console.log('\'Allo \'Allo! Popup');
Trello.setKey('30e9c70ecbef5cfb5ad12aac8758da0b');

var login = document.getElementById('authenticate');
console.log(login);


// Check if page load is a redirect back from the auth procedure
if (HashSearch.keyExists('token')) {
    Trello.authorize(
        {
            name: 'Trello Helper Extension',
            expiration: 'never',
            interactive: false,
            scope: {read: true, write: true},
            success: function () {
              console.log('working?');

              chrome.storage.sync.set({'token': window.localStorage.trello_token}, function() {
                // Notify that we saved.
                message('Settings saved');
              });
            },
            error: function () {
                alert('Failed to authorize with Trello')
            }
        });
}


login.addEventListener('click', function (e) {
  e.preventDefault();
  chrome.tabs.create({url: 'authenticate.html'});
  // window.Trello.authorize({
  //   type: 'redirect',
  //   name: 'Getting Started Application',
  //   scope: {
  //     read: true,
  //     write: true },
  //     expiration: 'never',
  //     success: authenticationSuccess,
  //     error: authenticationFailure
  //   });
});

function authenticationSuccess () {
  console.log('success');
}

function authenticationFailure () {
  console.log('you done faied');
}
