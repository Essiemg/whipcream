// Web3.js - Initialize Web3 and connect wallet
window.onload = async () => {
    const connectButton = document.getElementById('connectWalletBtn');

    // Web3 setup
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            connectButton.innerHTML = "Wallet Connected";
            connectButton.style.backgroundColor = "#4CAF50";
        } catch (err) {
            connectButton.innerHTML = "Connection Failed";
            connectButton.style.backgroundColor = "#f44336";
        }
    } else {
        connectButton.innerHTML = "Install MetaMask";
        connectButton.style.backgroundColor = "#FF9800";
    }

    // Display alert on Read More button click
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            alert('Redirecting to full post page...');
        });
    });
};
