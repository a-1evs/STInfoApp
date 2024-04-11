import { currentSectionIndex } from "./global_variables/globalVariables.js"
export default (sections) => {
    console.log("showCurrentSection");
    console.log(sections);
    console.log(currentSectionIndex);
    sections.forEach((section, index) => {
        if (index === currentSectionIndex) {
        section.classList.remove("hidden-section");
        section.classList.add("text-box");
        } else {
        section.classList.add("hidden-section");
        section.classList.remove("text-box");
        }
    });

};