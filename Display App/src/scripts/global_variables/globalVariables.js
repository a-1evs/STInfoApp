export let currentSectionIndex = 0;
export let sections = document.querySelectorAll("#sections-container section");
export function updateCurrentSectionIndex() {
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
}