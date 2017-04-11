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
              <td id="userName">${user.login}</td>
              <td><span class="label label-default">${user.contributions}</span></td>
              <td><span id="userRepos" class="label label-primary"></span></td>
              <td><span id="userGists" class="label label-primary"></span></td>
              <td><span id="userFollowers" class="label label-info"></span></td>
              <td><span id="userFollowing" class="label label-info"></span></td>
            </tr>             
      `);      
    });
      
      let username = document.getElementById("userName").innerHTML;
      console.log(username);
      $.ajax({
        url: 'https://api.github.com/users/' + username,
        data: {
        client_id: '0aa2918f3d449c0fc38d',
        client_secret: 'c67ac3cb2dda14b256b59b0b45c7929b191ac251',
      }
    }).done(function(info) {
        $('#userRepos').append(`<span>${info.public_repos}</span>`)
        $('#userGists').append(`<span>${info.public_gists}</span>`)
        $('#userFollowers').append(`<span>${info.followers}</span>`)
        $('#userFollowing').append(`<span>${info.following}</span>`)
      })
  });
});
});

