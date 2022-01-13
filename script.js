/////////////////////////////////////////////////////////////////////////////////
///////////////////////////DOM Elements///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const returnToMainPage = document.querySelectorAll('.return-to-mainPage');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightElement = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');
const loginUserInfo = document.querySelector('.login-user-info');
const loginPassword = document.querySelector('.login-password');
const inputUserInfo = document.querySelector('.user-info');
const inputPassword = document.querySelector('.password');
const loginModalWrapper = document.querySelector('.login-wrapper');
const logout = document.querySelector('.logout');
const rememberMeCheck = document.getElementById('check');
//////////////////////////////////////////////////////////////////////////////
////////////////////////Functions/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//mainpage
const goToLoginPage = () => {
   mainPage.style.display = 'none';
   loginPage.style.display = 'grid';
   newsFeedPage.style.display = 'none';
};
const displayLoginModal = () => {
   loginModal.style.display = 'block';
   loginModalWrapper.classList.add('login-wrapper-display');
};
const changeOpacity = (x) => {
   modalPostBtn.style.opacity = x;
   modalFooterPlus.style.opacity = x;
};
const goToMainpage = function () {
   mainPage.style.display = 'grid';
   loginPage.style.display = 'none';
   newsFeedPage.style.display = 'none';
};
const lsRememberMe = function () {
   if (rememberMeCheck.checked && loginUserInfo.value !== '') {
      localStorage.username = loginUserInfo.value;
      localStorage.checkbox = rememberMeCheck.value;
   } else {
      localStorage.username = '';
      localStorage.checkbox = '';
   }
};
/////////////////////////////////////////////////////////////////////////////////
///////////////////////////Event Listeners///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//sign up and login button
middleContent.addEventListener('click', (e) => {
   if (e.target.classList[1] === 'main-btn') {
      goToLoginPage();
   }
});
//mainpage login button
btnTop.addEventListener('click', () => {
   if (inputUserInfo.value !== '' && inputPassword.value !== '') {
      mainPage.style.display = 'none';
      newsFeedPage.style.display = 'block';
   } else {
      goToLoginPage();
      displayLoginModal();
   }
});
//login page
modalX.addEventListener('click', () => {
   loginModal.style.display = 'none';
   loginModalWrapper.classList.remove('login-wrapper-display');
});
loginFormBtn.addEventListener('click', () => {
   if (loginUserInfo.value !== '' && loginPassword.value !== '') {
      loginPage.style.display = 'none';
      newsFeedPage.style.display = 'block';
   } else {
      displayLoginModal();
   }
});
//Post Modal
postBtn.addEventListener('click', () => {
   modal.style.display = 'block';
   modalWrapper.classList.add('modal-wrapper-display');
});
postModalX.addEventListener('click', () => {
   modal.style.display = 'none';
   modalWrapper.classList.remove('modal-wrapper-display');
   if (modalInput.value !== '') {
      modalInput.value = '';
      changeOpacity(0.5);
   }
});

modalInput.addEventListener('keypress', (e) => {
   //checks if any input has been given from the
   //keyboard or not
   if (e.target.value !== '') {
      //if input field is not empty
      changeOpacity(1);
   }
});

modalInput.addEventListener('blur', function (e) {
   if (e.target.value === '') {
      //if input field is  empty
      changeOpacity(0.5);
   }
});
//sidebar
user.addEventListener('click', () => {
   sidebar.classList.add('sidebar-display');
   sidebarWrapper.classList.add('sidebar-wrapper-display');
});
xBtn.addEventListener('click', () => {
   sidebar.classList.remove('sidebar-display');
   sidebarWrapper.classList.remove('sidebar-wrapper-display');
});
//dark-mode

toggle.addEventListener('click', () => {
   circle.classList.toggle('move');
   //querySelectorAll returns nodeList which is array like objects
   //in order to simultaneously assign css to the selected classes
   //1st we trasnform node list into an array--> use Array.from()
   // then we cycle through the array and assign the clasname to each element -->array.map()
   Array.from(darkElements1).map((darkEl1) =>
      darkEl1.classList.toggle('dark-1')
   );
   Array.from(darkElements2).map((darkEl2) =>
      darkEl2.classList.toggle('dark-2')
   );
   Array.from(lightElement).map((lightEl) => lightEl.classList.toggle('light'));
   Array.from(borders).map((border) => border.classList.toggle('border-color'));
});
//logout

logout.addEventListener('click', () => {
   goToMainpage();

   if (inputUserInfo.value !== '' && inputPassword.value !== '') {
      inputUserInfo.value = '';
      inputPassword.value = '';
   }
   if (loginUserInfo.value !== '' && loginPassword.value !== '') {
      loginUserInfo.value = '';
      loginPassword.value = '';
   }
});
//Remember Me check-box
if (localStorage.checkbox && localStorage.checkbox !== '') {
   rememberMeCheck.setAttribute('checked', 'checked');
   loginUserInfo.value = localStorage.username;
} else {
   rememberMeCheck.removeAttribute('checked');
   loginUserInfo.value = '';
}
//Loginpage home and icon button

returnToMainPage.addEventListener('click', () => {
   goToMainpage();
});
