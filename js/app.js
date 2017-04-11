$(document).ready(function() {
  $('#searchUser').on('keyup' , function(e) {
    let username = e.target.value;

    // Reguest to github
    $.ajax({
      url: 'https://api.github.com/users/'+username,
      data: {
        client_id: '0aa2918f3d449c0fc38d',
        client_secret: 'c67ac3cb2dda14b256b59b0b45c7929b191ac251',
      }
    }).done(function(user) {
      $('#profile').html(`
        ${user.name}
      `);
    });
  });
});