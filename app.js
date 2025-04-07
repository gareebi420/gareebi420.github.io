// File: frontend/app.js
let currentUser = null;

async function login() {
  const mobile = document.getElementById('mobile').value;
  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mobile })
  });
  const data = await res.json();
  currentUser = data.user;
  document.getElementById('gameUI').style.display = 'block';
  updateBalance();
}

async function updateBalance() {
  document.getElementById('balance').innerText = currentUser.wallet.balance.toFixed(2);
}

async function playGame() {
  const betAmount = Number(document.getElementById('bet').value);
  const prediction = document.getElementById('color').value;
  const res = await fetch('http://localhost:5000/api/game/play', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      mobile: currentUser.mobile,
      betAmount,
      prediction
    })
  });
  const data = await res.json();
  if (data.success) {
    alert(data.win ? '🎉 You Won!' : '😢 You Lost!');
    currentUser.wallet = data.wallet;
    updateBalance();
  }
}
