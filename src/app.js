const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const headingElement = document.getElementById("animal-title");
const imageElement = document.getElementById("dynamic-image"); 
const detailsButton = document.getElementById("details-button");

function setTextColor(element, color) {
    element.className = 'text-black text-4xl font-bold'; // Reset to base classes
    
    // Update the body background with gradients
    document.body.className = 'min-h-screen transition-all duration-500'; // Reset body classes
    switch(color) {
        case 'red':
            document.body.classList.add('bg-gradient-to-br', 'from-red-50', 'via-white', 'to-red-100');
            break;
        case 'orange':
            document.body.classList.add('bg-gradient-to-br', 'from-orange-50', 'via-white', 'to-orange-100');
            break;
        case 'yellow':
            document.body.classList.add('bg-gradient-to-br', 'from-yellow-50', 'via-white', 'to-yellow-100');
            break;
        case 'green':
            document.body.classList.add('bg-gradient-to-br', 'from-green-50', 'via-white', 'to-green-100');
            break;
        case 'blue':
            document.body.classList.add('bg-gradient-to-br', 'from-blue-50', 'via-white', 'to-blue-100');
            break;
        case 'indigo':
            document.body.classList.add('bg-gradient-to-br', 'from-indigo-50', 'via-white', 'to-indigo-100');
            break;
        case 'violet':
            document.body.classList.add('bg-gradient-to-br', 'from-violet-50', 'via-white', 'to-violet-100');
            break;
        case 'black':
            document.body.classList.add('bg-gradient-to-br', 'from-gray-50', 'via-white', 'to-gray-100');
            break;
        case 'white':
            document.body.classList.add('bg-gradient-to-br', 'from-white', 'via-white', 'to-white');
            break;
    }

    element.textContent = animalDetails[color].name;
    
    if (imageElement) {
        imageElement.src = `assets/${color}.png`;
    }

    if (detailsButton) {
        detailsButton.href = `details.html?color=${color}`;
    }
}

// Define color mapping
const colorButtons = {
    'r': 'red', 'o': 'orange', 'y': 'yellow', 'g': 'green',
    'b': 'blue', 'i': 'indigo', 'v': 'violet',
    'w': 'white', 'k': 'black'
};

function updateButtonColors(selectedKey) {
    // Reset all buttons to default color
    Object.keys(colorButtons).forEach(key => {
        document.getElementById(`color-btn-${key}`).className = 'text-[#c9c9c9] active:scale-95 transition-all duration-100';
    });
    
    // Set selected button to white
    document.getElementById(`color-btn-${selectedKey}`).className = 'text-white active:scale-95 transition-all duration-100';
}

// Set up click handlers for color buttons
Object.entries(colorButtons).forEach(([key, color]) => {
    document.getElementById(`color-btn-${key}`).addEventListener('click', () => {
        setTextColor(headingElement, color);
        updateButtonColors(key);
    });
});

// Set up keyboard shortcuts
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (colorButtons[key]) {
        setTextColor(headingElement, colorButtons[key]);
        updateButtonColors(key);
    }
});

// Set default button (black) to white on page load
document.addEventListener('DOMContentLoaded', () => {
    updateButtonColors('k');
});