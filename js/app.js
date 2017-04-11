$(document).ready(function() {
  $('#tabela, #myInput').hide()
  $('#showList').on('click', function(){
    $('#tabela, #myInput').show() 
     
    // Reguest to github
    $.ajax({
      url: 'https://api.github.com/repos/angular/angular/contributors',
      data: {
        client_id: '0aa2918f3d449c0fc38d',
        client_secret: 'c67ac3cb2dda14b256b59b0b45c7929b191ac251',
      }
    }).done(function(users) {     
    $.each(users, function(index, user) {
      getUserDetails(user.login).done(function(info) {
        $('#info').append (`
          <tr class="item">
            <td class="userLogo"><img src="${user.avatar_url}" /></td>
            <td>${index+1}</td>
            <td class="userName">${user.login}</td>
            <td><span class="label label-default">${user.contributions}</span></td>
            <td><span id="userRepos" class="label label-primary">${info.public_repos}</span></td>
            <td><span id="userGists" class="label label-primary">${info.public_gists}</span></td>
            <td><span id="userFollowers" class="label label-info">${info.followers}</span></td>
            <td class="follow"><span id="userFollowing" class="label label-info">${info.following}</span></td>
            <td><a href="${user.html_url}" class="btn btn-warning" target="_blank">View Profile</a></td>
          </tr>             
        `);  
      }
    )});
  });

  function getUserDetails(username) {
    return $.ajax({
      url: 'https://api.github.com/users/' + username,
      data: {
        client_id: '0aa2918f3d449c0fc38d',
        client_secret: 'c67ac3cb2dda14b256b59b0b45c7929b191ac251',
      }
    });
  };
  });
});