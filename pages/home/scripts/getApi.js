const baseUrl   = 'https://api.github.com/users/';
const myHeaders = { 'content-Type': 'application/json' };

// Busca da API
function getUserFromApi(user) {

  fetch(`${baseUrl}${user}`, {
    method: 'GET',
    headers: myHeaders,
  })
  .then(response => {
    console.log(response)
    animateBtn();
    if (response.ok) {
      message.classList.add('noDisplay');
      // resetBtn()
      return response.json();
    }
    else {
      userNotFound();
    }
  })
  .then(response => {
    localStorage.setItem('user', JSON.stringify(response));
    verifyUserArr(response);
    const stringArr = JSON.stringify(userArr);
    localStorage.setItem('userArr', stringArr);
    recentUserList.innerHTML = '';
    createUserElement(userArr);
  })

}

function getReposFromApi(user) {

  fetch(`${baseUrl}${user}/repos`, {
    method: 'GET',
    headers: myHeaders,
  })
  .then(resp => {
    return resp.json()
  })
  .then(resp => {
    localStorage.setItem('repos', JSON.stringify(resp));
    window.location.replace('pages/profile/profile.html');
    resetBtn();
    console.log(resp)
  })

}