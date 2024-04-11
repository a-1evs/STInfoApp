import { currentSectionIndex, updateCurrentSectionIndex, sections } from "./global_variables/globalVariables.js";

export default () => {
   
    sections.forEach((section, index) => {
        if (index === currentSectionIndex) {
        section.classList.remove("hidden-section");
        } else {
        section.classList.add("hidden-section");
        }
    });

    updateCurrentSectionIndex(); // Update the value of currentSectionIndex
};