const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const headingElement = document.querySelector(".dummy")

function setTextColor(element, color) {
    // Remove all possible color classes
    colors.forEach(c => element.classList.remove(`text-${c}-500`));
    element.classList.remove('text-black', 'text-white');
    
    // Add the new color class
    if (color === 'black' || color === 'white') {
        element.classList.add(`text-${color}`);
    } else {
        element.classList.add(`text-${color}-500`);
    }
    console.log(color)
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