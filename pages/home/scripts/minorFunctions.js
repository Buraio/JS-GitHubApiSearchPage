function main(response) {
  getReposFromApi(response);
  getUserFromApi(response);
}

function animateBtn() {
  searchBtn.innerHTML = '';
  animateImg.classList.add('loader');
  animateImg.src = 'assets/spinner.png';
  searchBtn.append(animateImg);
}

function userNotFound() {
  message.classList.remove('noDisplay');
  resetBtn();
}

function resetBtn() {
  searchBtn.innerHTML = '';
  searchBtn.innerText = 'Ver perfil no github';
}