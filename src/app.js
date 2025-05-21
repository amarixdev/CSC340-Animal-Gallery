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
// color buttons
['r','o','y','g','b','i','v','w','k'].forEach(key => {
    document.getElementById(`color-btn-${key}`).addEventListener('click', () => {
        const colorMap = {
            r: 'red', o: 'orange', y: 'yellow', g: 'green',
            b: 'blue', i: 'indigo', v: 'violet',
            w: 'white', k: 'black'
        };
        setTextColor(headingElement, colorMap[key]);
    });
});
// keyboard shortcuts
 document.addEventListener('keydown', (event) => {
        switch(event.key.toLowerCase()) {
            case 'r':
                document.getElementById('color-btn-r').click();
                break;
            case 'o':
                document.getElementById('color-btn-o').click();
                break;
            case 'y':
                document.getElementById('color-btn-y').click();
                break;
            case 'g':
                document.getElementById('color-btn-g').click();
                break;
            case 'b':
                document.getElementById('color-btn-b').click();
                break;
            case 'i':
                document.getElementById('color-btn-i').click();
                break;
            case 'v':
                document.getElementById('color-btn-v').click();
                break;
            case 'w':
                document.getElementById('color-btn-w').click();
                break;
            case 'k':
                document.getElementById('color-btn-k').click();
                break;
        }
    })