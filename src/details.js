document.addEventListener('DOMContentLoaded', () => {
    // Get the current color from URL parameters or default to 'black'
    const urlParams = new URLSearchParams(window.location.search);
    let currentColor = urlParams.get('color') || 'black';

    
    function updateContent(color) {
        const animal = animalDetails[color];
        if (!animal) return;


        document.getElementById('animal-name').textContent = animal.name;
        document.getElementById('scientific-name').textContent = animal.scientificName;
        document.getElementById('habitat').textContent = animal.habitat;
        document.getElementById('description').textContent = animal.description;
        document.getElementById('diet').textContent = animal.diet;
        document.getElementById('lifespan').textContent = animal.lifespan;

  
        document.getElementById('animal-image').src = `assets/${color}.png`;
        document.getElementById('animal-image').alt = animal.name;

  
        const funFactsList = document.getElementById('fun-facts');
        funFactsList.innerHTML = ''; // Clear existing facts
        animal.funFacts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            funFactsList.appendChild(li);
        });

        // Update background with gradient
        document.body.className = 'min-h-screen transition-all duration-500'; // Reset while preserving min-height
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
            case 'white':
                document.body.classList.add('bg-gradient-to-br', 'from-gray-50', 'via-white', 'to-gray-100');
                break;
            case 'black':
                document.body.classList.add('bg-gradient-to-br', 'from-neutral-50', 'via-white', 'to-neutral-100');
                break;
        }

        // Update URL without refreshing the page
        const newUrl = `${window.location.pathname}?color=${color}`;
        window.history.pushState({ color: color }, '', newUrl);
    }


    const colorButtons = {
        'r': 'red', 'o': 'orange', 'y': 'yellow', 'g': 'green',
        'b': 'blue', 'i': 'indigo', 'v': 'violet',
        'w': 'white', 'k': 'black'
    };

    Object.entries(colorButtons).forEach(([key, color]) => {
        document.getElementById(`color-btn-${key}`).addEventListener('click', () => {
            currentColor = color;
            updateContent(color);
        });
    });

    // Set up keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        if (colorButtons[key]) {
            currentColor = colorButtons[key];
            updateContent(colorButtons[key]);
        }
    });

    // Initial content load
    updateContent(currentColor);
}); 