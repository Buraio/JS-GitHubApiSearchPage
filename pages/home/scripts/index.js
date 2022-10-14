const input          = document.querySelector('#githubUser');
const searchBtn      = document.querySelector('.searchUser');
const recentUserList = document.querySelector('#recentSearches');

const userArr   = [];

localStorageRecentUsers();

// Evento de pesquisa de usuário
searchBtn.addEventListener('click', (e) => {

  e.preventDefault();
  const resp = input.value;
  main(resp);

})

function main(response) {
  getReposFromApi(response);
  getUserFromApi(response);
}


// Usuários pesquisados recentemente
function createUserElement(array) {
  array.forEach(user => {
    recentUserIcon(user);
  })
}

// Completo // Ícones dos usuários
function recentUserIcon(userObj) {

  const liUser = document.createElement('li');
  const userImg = document.createElement('img');

  liUser.classList.add('user');
  userImg.classList.add('avatar');

  userImg.src = userObj.avatar_url;

  liUser.append(userImg);
  recentUserList.append(liUser);

}

function verifyUserArr(response) {

  if (userArr.length === 3) {
    userArr.shift();
    userArr.push(response);
  }
  else {
    userArr.push(response);
  }

}

function localStorageRecentUsers() {

  const storage = localStorage.getItem('userArr');
  const toArr = JSON.parse(storage);

  toArr.forEach(user => {
    userArr.push(user);
  })

  createUserElement(userArr);

}