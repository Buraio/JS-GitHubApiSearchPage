const userRepos = document.querySelector('#userRepos');

renderData()

// Renderizar dados do usuário ENCONTRADO
function renderData() {

  const user = localStorage.getItem('user');
  const toObj = JSON.parse(user);
  const repos = localStorage.getItem('repos');
  const reposToObj = JSON.parse(repos);
  console.log(reposToObj)

  userData(toObj);

  userRepos.innerHTML = '';
  reposToObj.forEach(element => {
    repoData(element);
  });

}

// Completo // Dados do perfil
function userData(userObj) {

  const userName = document.querySelector('.userName');
  const userImg  = document.querySelector('.userImg');
  const userBio  = document.querySelector('.userBio');

  userName.innerText = userObj.name;
  userImg.src = userObj.avatar_url;
  userBio.innerText = userObj.bio;

}

// Dados dos repositórios
function repoData(userObj) {

  const repository      = document.createElement('li');
  const repoName        = document.createElement('h2');
  const repoDescription = document.createElement('p');
  const repoLinkDiv     = document.createElement('div');
  const goToRepo        = document.createElement('button');
  // const linkRepo        = document.createElement('a');
  const repoDemo        = document.createElement('button');

  repository.classList.add('repository');
  repoName.classList.add('repoName');
  repoDescription.classList.add('repoDescription');
  repoLinkDiv.classList.add('repoLinkDiv');
  goToRepo.classList.add('goToRepo');
  repoDemo.classList.add('repoDemo');

  repoName.innerText = userObj.name;
  repoDescription.innerText = userObj.description;
  repoDemo.innerText = 'Demo';
  
  // linkRepo.href = userObj.repos_url;
  // console.log(userObj.repos_url)
  // linkRepo.innerText = 'Repositório';
  // goToRepo.append(linkRepo);

  repoLinkDiv.append(goToRepo, repoDemo);
  repository.append(repoName, repoDescription, repoLinkDiv);

  userRepos.append(repository);

}