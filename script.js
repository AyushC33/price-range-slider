const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const minPriceValue = document.getElementById('minPriceValue');
const maxPriceValue = document.getElementById('maxPriceValue');

function updatePriceValues() {
    const minValue = parseInt(minPriceInput.value, 10);
    const maxValue = parseInt(maxPriceInput.value, 10);

    if (minValue > maxValue) {
        minPriceInput.value = maxValue;
    }

    minPriceValue.textContent = `$${minPriceInput.value}`;
    maxPriceValue.textContent = `$${maxPriceInput.value}`;
}

// Initialize slider values
updatePriceValues();
typeof(updatePriceValues());

minPriceInput.addEventListener('input', updatePriceValues);
maxPriceInput.addEventListener('input', updatePriceValues);
