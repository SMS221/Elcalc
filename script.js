// Dark Mode Toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.body;

darkModeSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeSwitch.checked);
});

// Ohms Lov Kalkulator
const ohmsForm = document.getElementById('ohmsForm');
const ohmsResult = document.getElementById('ohmsResult');

ohmsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const V = parseFloat(document.getElementById('spenning').value);
    const P = parseFloat(document.getElementById('effekt').value);
    if (V === 0) {
        ohmsResult.textContent = 'Spenning kan ikke være null.';
        return;
    }
    const I = P / V;
    ohmsResult.textContent = `Strøm (I) = ${I.toFixed(2)} A`;
});
