const myHeaders = { 'Content-Type': 'application/json' };
const userRepos = document.querySelector('#userRepos');
const userObj = JSON.parse(localStorage.getItem('user'));
const repoArr = JSON.parse(localStorage.getItem('repos'));
console.log(repoArr)

userData(userObj);
renderData(repoArr);

function renderData(arr) {

  repoData(arr);

  userRepos.innerHTML = '';
  arr.forEach(element => {
    repoData(element);
  });

}

function userData(userObj) {

  const userName = document.querySelector('.userName');
  const userImg  = document.querySelector('.userImg');
  const userBio  = document.querySelector('.userBio');

  userName.innerText = userObj.name;
  userImg.src = userObj.avatar_url;
  userBio.innerText = userObj.bio;

}

function repoData(userObj) {

  const repository      = document.createElement('li');
  const repoName        = document.createElement('h2');
  const repoDescription = document.createElement('p');
  const repoLinkDiv     = document.createElement('div');
  const goToRepo        = document.createElement('button');
  const repoDemo        = document.createElement('button');

  repository.classList.add('repository');
  repoName.classList.add('repoName');
  repoDescription.classList.add('repoDescription');
  repoLinkDiv.classList.add('repoLinkDiv');
  goToRepo.classList.add('goToRepo');
  repoDemo.classList.add('repoDemo');

  repoName.innerText = userObj.name;
  repoDescription.innerText = userObj.description;
  goToRepo.innerText = 'Repositório';
  repoDemo.innerText = 'Demo';

  repoLinkDiv.append(goToRepo, repoDemo);
  repository.append(repoName, repoDescription, repoLinkDiv);

  userRepos.append(repository);
}