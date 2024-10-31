///script.ts code

// Select the skills section and create a toggle button
const skillsSection = document.querySelector('.skills') as HTMLElement;
const leftColumn = document.querySelector('.left-column') as HTMLElement;

// Create the toggle button dynamically
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Skills';
toggleButton.style.margin = '10px 0';

// Add the button to the bottom of the left column
leftColumn.appendChild(toggleButton);

// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
