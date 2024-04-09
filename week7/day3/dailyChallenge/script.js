const codeURL = 'https://v6.exchangerate-api.com/v6/7370a513c071d425531101f1/codes';
const pairURL = 'https://v6.exchangerate-api.com/v6/7370a513c071d425531101f1/pair/';

const currencyFrom = document.getElementById("currencyFrom");
const currencyTo = document.getElementById("currencyTo");
const result = document.getElementById("result");
const submit = document.getElementById('submit');
const search = document.getElementById('search');
console.log(result);

const fetchCodes = async (e) => {
    if (e) {
        e.preventDefault();
    }
    
    try {
        const response = await fetch(codeURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const currencyData = data.supported_codes;

        for (const currArr of currencyData) {
            const currencyHTML = document.createElement("option");
            currencyHTML.textContent = currArr[1];
            currencyHTML.value = currArr[0]; 
            currencyFrom.appendChild(currencyHTML.cloneNode(true));
            currencyTo.appendChild(currencyHTML.cloneNode(true));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    submit.addEventListener('click', async () => {
        const selectedCurrency1 = currencyFrom.value;
        const selectedCurrency2 = currencyTo.value;
        const amount = parseFloat(search.value);

        try {
            const response = await fetch(`${pairURL}/${selectedCurrency1}/${selectedCurrency2}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const convertedAmount = amount * parseFloat(data.conversion_rate);
            result.textContent = `${amount} ${selectedCurrency1} = ${convertedAmount.toFixed(2)} ${selectedCurrency2}`;
        } catch (error) {
            console.error('Error fetching pair data:', error);
        }
    });
}

fetchCodes();


