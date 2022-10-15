const input          = document.querySelector('#githubUser');
const searchBtn      = document.querySelector('.searchUser');
const recentUserList = document.querySelector('#recentSearches');
const nav            = document.querySelector('.recents');
const animateImg     = document.createElement('img');
const message        = document.querySelector('.notFoundMessage');

const userArr = [];

localStorageRecentUsers();

// Evento de pesquisa de usuário
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const resp = input.value;
  main(resp);
})

// Completo // Ícones dos usuários
function recentUserIcon(userObj) {
  if (userObj) {
    const liUser = document.createElement('li');
    const userImg = document.createElement('img');
  
    liUser.classList.add('user');
    userImg.classList.add('avatar');
  
    userImg.src = userObj.avatar_url;
  
    liUser.append(userImg);
    recentUserList.append(liUser);
  }
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
  if (storage) {
    nav.classList.remove('noDisplay');
    const toArr = JSON.parse(storage);
    if (toArr.length > 0) {
      toArr.forEach(user => {
        userArr.push(user);
      })
    }
  }

  createUserElement(userArr);

}

function createUserElement(array) {
  array.forEach(user => {
    recentUserIcon(user);
  })
}