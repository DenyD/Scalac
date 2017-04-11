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
      $('#info').append (`
            <tr class="item">
              <td><img src="${user.avatar_url}" /></td>
              <td>${index+1}</td>
              <td class="userName">${user.login}</td>
              <td><span class="label label-default">${user.contributions}</span></td>
              <td><span id="userRepos" class="label label-primary"></span></td>
              <td><span id="userGists" class="label label-primary"></span></td>
              <td><span id="userFollowers" class="label label-info"></span></td>
              <td><span id="userFollowing" class="label label-info"></span></td>
              <td><a href="${user.html_url}" class="btn btn-warning" target="_blank">View Profile</a></td>
            </tr>             
      `);      
    });
      var username = document.getElementsByClassName("userName")[1].innerHTML;
      console.log(username);
      $.ajax({
        url: 'https://api.github.com/users/' + username,
        data: {
        client_id: '0aa2918f3d449c0fc38d',
        client_secret: 'c67ac3cb2dda14b256b59b0b45c7929b191ac251',
      }
    }).done(function(info) {
        $('#info #userRepos').append(`<span>${info.public_repos}</span>`)
        $('#info #userGists').append(`<span>${info.public_gists}</span>`)
        $('#info #userFollowers').append(`<span>${info.followers}</span>`)
        $('#info #userFollowing').append(`<span>${info.following}</span>`)
      })
  });
});
});

