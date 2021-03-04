# awe-wallpaper-engine

# Introduction

The abstract wallpaper engine (AWE) is a tool to (pseudo)-randomly generate a wallpaper for any resolution using only the tools provided by HTML Canvas.
Currently, the abstract wallpaper engine can accomplish this task using rectangles and arcs drawn in a Canvas element. The pseudorandomness affects the
placement, size, colour, and transparency of each individual shape. It's not uncommon to see shapes overlapping.

The user can choose the number of individual types of shapes (e.g., 25 rectangles and 15 arcs), they can choose the background colour of the page; and, if
they so desire, can elect to begin an animation where the canvas is redrawn every 100ms. Do note that this is known to cause issues in some browsers (notably Firefox).

## To-Do List

This is a simple unordered list of things I'd like to add before I can call this complete. Not all of the features will be added.

- Add more shape choices.
- Refine the UI controls.
- Automatically determine user's device resolution
- Create scaled preview and blur background
	- The `css blur-background` attribute doesn't have support in Firefox unless the user enables it, so this might require a polyfill.
	- The scaled preview will probably just determine aspect ratio from the device resolution and then scale according to window size.
- Fix `javascript setInterval()` performance issues in Firefox.
	- This might require using `javascript requestAnimationFrame()` after some cursory investigations.
- Change the canvas background colour so that the wallpaper isn't transparent.
	- I will keep the option to download with a transparent background.
- Create a proper favicon.
- Make the download link more obvious and accessible.
- Refine text size.
- Work on responsive design.
- Investigate using cookies (using only JavaScript) to store user's choices. So far, only Firefox will keep settings upon refresh.
- Investigate methods to reduce time on DOM Event after clicking refresh. Firefox currently records 180-200ms event times.
- Implement colour wheel, and show current background in RGB, HSL, and hexadecimal values.
- Investigate ways to determine / provide colour and transparency of individual shapes.
- Finish this README.

## License

Obviously, I coded this myself but the code is distributed under the MIT License. You're free to do whatever you want with this code.