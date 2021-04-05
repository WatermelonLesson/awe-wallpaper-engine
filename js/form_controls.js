document.querySelectorAll("input").forEach(element => {
	element.addEventListener("input", function(e) {

		if (e.target.nextElementSibling.tagName === "OUTPUT") {
			e.target.nextElementSibling.textContent = e.target.value;
		}

		if (e.target.id === "bg_width") {
			CANVAS_ELEMENT.width = e.target.value;
		}
		else if (e.target.id === "bg_height") {
			console.log("Height");
			CANVAS_ELEMENT.height = e.target.value;
		}
		else if (e.target.id === "num_rectangles") {
			console.log("Number of rectangles: ");
			num_rect = e.target.value;
		}
		else if (e.target.id === "num_arcs") {
			console.log("Number of arcs");
			num_arcs = e.target.value;
		}
		else if (e.target.id === "bg_color") {
			console.log("Background color");
			document.querySelector("main").style.backgroundColor = e.target.value;
		}
		else if (e.target.id === "animation_checkbox") {
			if (e.target.checked) {
				console.log("Animation checkbox");
				animation_interval = setInterval(resetBackground, document.querySelector("input[type=range]#animation_range").value);
			}
			else {
				clearInterval(animation_interval);
			}
		}
	});
});