// Configuration
const physicalReactions = [
    'Racing heart',
    'Sweating',
    'Shaking',
    'Tight chest',
    'Lump in throat',
    'Hot/cold flashes',
    'Fatigue',
    'Nausea',
    'Dizziness'
];

// Template generator
const reactionTemplate = (name) => `
    <div class="space-y-2">
        <label class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-2">
                <input type="checkbox" 
                       class="rounded border-gray-300"
                       name="reaction_${name.toLowerCase().replace(' ', '_')}"
                       id="reaction_${name.toLowerCase().replace(' ', '_')}">
                <span class="text-sm">${name}</span>
            </div>
            <div class="flex items-center gap-2 w-1/2">
                <input type="range" 
                       min="0" 
                       max="10" 
                       value="0"
                       name="reaction_${name.toLowerCase().replace(' ', '_')}_intensity"
                       class="reaction-slider w-full range-slider opacity-50 hover:opacity-100 transition-opacity disabled:opacity-30">
                <span class="slider-value text-xs text-gray-500 w-8">0</span>
            </div>
        </label>
    </div>
`;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Populate reactions
    const container = document.getElementById('reactions-container');
    physicalReactions.forEach(reaction => {
        container.innerHTML += reactionTemplate(reaction);
    });

    // Initialize sliders
    document.querySelectorAll('.reaction-slider').forEach(slider => {
        const valueDisplay = slider.parentElement.querySelector('.slider-value');
        valueDisplay.textContent = slider.value;

        slider.addEventListener('input', (e) => {
            valueDisplay.textContent = e.target.value;
        });

        const checkbox = slider.closest('label').querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', (e) => {
            slider.disabled = !e.target.checked;
            if (!e.target.checked) {
                slider.value = 0;
                valueDisplay.textContent = 0;
            }
        });
        slider.disabled = !checkbox.checked;
    });
});