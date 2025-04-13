// Poem text
const kiplingPoem = `<p>First, thank you to <span>God</span> for His <span>guidance</span> and <span>blessings</span>.  
Thank you to my <span>family</span>, <span>friends</span>, and <span>mentors</span> for their support and <span>guidance</span>.  
Your <span>encouragement</span> has shaped my <span>journey</span>.  
I appreciate everyone who has <span>believed</span> in my <span>work</span>.  

Grateful for your <span>time</span> in exploring my <span>portfolio</span>!</p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
