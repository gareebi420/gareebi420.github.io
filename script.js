const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');

// Show modals
loginBtn.onclick = () => loginModal.style.display = "flex";
registerBtn.onclick = () => registerModal.style.display = "flex";

// Close modals
closeLogin.onclick = () => loginModal.style.display = "none";
closeRegister.onclick = () => registerModal.style.display = "none";

// Click outside to close
window.onclick = function(e) {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === registerModal) registerModal.style.display = "none";
}

// Dummy Login/Register (simulate)
document.getElementById("doLogin").onclick = () => {
  alert("Login successful!");
  loginModal.style.display = "none";
};

document.getElementById("doRegister").onclick = () => {
  alert("Registered successfully!");
  registerModal.style.display = "none";
};
