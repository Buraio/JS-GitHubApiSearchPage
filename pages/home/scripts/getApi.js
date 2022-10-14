const baseUrl   = 'https://api.github.com/users/';
const myHeaders = { 'content-Type': 'application/json' };

// Busca da API
function getUserFromApi(user) {
  
  fetch(`${baseUrl}${user}`, {
    method: 'GET',
    headers: myHeaders,
  })
  .then(response => {
    searchBtn.innerText = 'Carregando...';
    return response.json();
  })
  .then(response => {
    searchBtn.innerText = 'Buscar Usuário';
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
    console.log(resp)
  })
  .then(() => {
    window.location.replace('pages/profile/index.html');
  });

}