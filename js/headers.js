function defineDefault()
{
    Object.defineProperty(default_settings, 'canvas_width', {
        value: screen.width,
        writable: false
    });

    Object.defineProperty(default_settings, 'canvas_height', {
        value: screen.height,
        writable: false
    });
    
    Object.defineProperty(default_settings, 'number_of_rectangles', {
        value: 5,
        writable: false
    });

    Object.defineProperty(default_settings, 'number_of_arcs', {
        value: 5,
        writable: false
    });

    Object.defineProperty(default_settings, 'max_rectangle_width', {
        value: Math.floor(screen.width / 2),
        writable: false
    });

    Object.defineProperty(default_settings, 'max_rectangle_height', {
        value: Math.floor(screen.height / 8),
        writable: false
    });

    Object.defineProperty(default_settings, 'max_arc_radius', {
        value: Math.floor(screen.width / 10),
        writable: false
    });

    Object.defineProperty(default_settings, "background_colour", {
        value: "#556CAF",
        writable: false
    });

    Object.defineProperty(default_settings, "fps_target", {
        value: 10,
        writable: false
    });

    Object.defineProperty(default_settings, "currently_animating", {
        value: false,
        writable: false
    });

    Object.defineProperty(default_settings, "form_hidden", {
        value: false,
        writable: false
    });
}

console.log("Hello, world!");