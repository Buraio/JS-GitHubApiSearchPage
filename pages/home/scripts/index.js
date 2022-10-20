const input           = document.querySelector('#githubUser');
const searchBtn       = document.querySelector('.searchUser');
const recentUserList  = document.querySelector('#recentSearches');
const nav             = document.querySelector('.recents');
const historyList = document.querySelector('#recentSearches');
const animateImg      = document.createElement('img');
const message         = document.querySelector('.notFoundMessage');

const userArr = [];

localStorageRecentUsers();

input.addEventListener('input', (e) => {

  const inputValue = e.target.value;

  if (inputValue) {
    searchBtn.disabled = false;
  }
  else {
    searchBtn.disabled = true;
  }

})

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  animateBtn();
  const resp = input.value;
  getUserFromApi(resp);
  searchBtn.disabled = true;
})

function recentUserIcon(userObj) {
  if (userObj) {
    const liUser = document.createElement('li');
    const userImg = document.createElement('img');
    const spanDropdown = document.createElement('span');
  
    liUser.classList.add('user');
    userImg.classList.add('avatar');
    spanDropdown.classList.add('access');
  
    userImg.src = userObj.avatar_url;
    spanDropdown.innerText = 'Acessar este perfil';
    spanDropdown.id = userObj.login;
  
    liUser.append(userImg, spanDropdown);
    recentUserList.append(liUser);

    spanDropdown.addEventListener('click', (e) => {

      console.log(e.target.id)
      getUserFromApi(e.target.id)

    })
  }
}

function verifyUserArr(response) {
  if (response) {
    if (userArr.length === 3) {
      userArr.shift();
      userArr.push(response);
    }
    else {
      userArr.push(response);
    }
  }
}

function localStorageRecentUsers() {

  const storage = localStorage.getItem('userArr');
  if (storage) {
    nav.classList.remove('noDisplay');
    const toArr = JSON.parse(storage);
    console.log(toArr)
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
    console.log(user)
    recentUserIcon(user);
  })
}