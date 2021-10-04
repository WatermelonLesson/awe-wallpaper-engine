function generateBackground(canvas, context, settings)
{
    context.clearRect(0, 0, settings["canvas_width"], settings["canvas_height"]);

    for(let i = 0; i < (settings["number_of_rectangles"] + settings["number_of_arcs"]); ++i)
    {
        if (i < settings["number_of_rectangles"])
        {
            
            let color = randomColor();
            context.fillStyle = "rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ", " + color[3] + ")";

            let x = Math.floor(Math.random() * settings["canvas_width"]),
                y = Math.floor(Math.random() * settings["canvas_height"]);
            
            context.fillRect(x, y, Math.floor(Math.random() * settings["max_rectangle_width"]), Math.floor(Math.random() * settings["max_rectangle_height"]));
        }

        if (i < settings["number_of_arcs"])
        {
            
            let color = randomColor();
            context.fillStyle = "rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ", " + color[3] + ")";

            let x = Math.floor(Math.random() * settings["canvas_width"]),
                y = Math.floor(Math.random() * settings["canvas_height"]);

            context.beginPath();
						
            let radius = Math.floor(Math.random() * settings["max_arc_radius"]);
            let startAngle = Math.random() * (2 * Math.PI);
            let endAngle = Math.random() * (2 * Math.PI);
        
            context.arc(x, y, radius, startAngle, endAngle);
            context.fill();
        }
        
        // font: font-family, font-size, font-stretch, font-style, font-variant, font-weight, line-height;
        // context.font = "small-caps bold 50px sans-serif";
        // context.fillText(word_list[Math.floor(Math.random() * word_list.length)], Math.random() * settings[0], Math.random() * settings[1]);
    }

    document.querySelector('main').style.backgroundImage = "url(" + canvas.toDataURL() + ")";

    if (document.querySelector("body").backgroundColor !== settings["background_colour"])
    {
        document.body.style.backgroundColor = settings["background_colour"];
    }
}

function fillCanvasBackgroundWithColor(canvas, context, color)
{
    context.globalCompositeOperation = 'destination-over';
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function randomColor(greyscale = false)
{
    return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.random()];
}

function resetSettings()
{
    resizeCanvas(default_settings["canvas_width"], default_settings["canvas_height"]);

    settings["number_of_rectangles"]    = default_settings["number_of_rectangles"];
    settings["number_of_arcs"]          = default_settings["number_of_arcs"];
    settings["max_rectangle_width"]     = default_settings["max_rectangle_width"];
    settings["max_rectangle_height"]    = default_settings["max_rectangle_height"];
    settings["max_arc_radius"]          = default_settings["max_arc_radius"];
    settings["background_colour"]       = default_settings["background_colour"];
    settings["fps_target"]              = default_settings["fps_target"];
    settings["currently_animating"]     = default_settings["currently_animating"];
    settings["form_hidden"]             = default_settings["form_hidden"];
    
    document.querySelector("input#setting-bg-width").value      = settings["canvas_width"];
    document.querySelector("input#setting-bg-height").value     = settings["canvas_height"];
    document.querySelector("input#amount-rectangles").value     = settings["number_of_rectangles"];
    document.querySelector("input#amount-arcs").value           = settings["number_of_arcs"];

    document.querySelector("input#max-rectangle-width").value   = settings["max_rectangle_width"];
    document.querySelector("input#max-rectangle-height").value  = settings["max_rectangle_height"];
    document.querySelector("input#max-arc-radius").value        = settings["max_arc_radius"];

    document.querySelector("input#bg-color-button").value       = settings["background_colour"];
    document.querySelector("input#frame-rate-target").value     = settings["fps_target"];

    document.querySelector("input#max-rectangle-width").max     = settings["canvas_width"];
    document.querySelector("input#max-rectangle-height").max    = settings["canvas_height"];
    document.querySelector("input#max-arc-radius").max          = settings["canvas_width"];
}

function resizeCanvas(width, height)
{
    settings["canvas_width"] = width;
    settings["canvas_height"] = height;

    canvas.width = settings["canvas_width"];
    canvas.height = settings["canvas_height"];
    canvas.style.width = settings["canvas_width"];
    canvas.style.height = settings["canvas_height"];

    dummy_canvas.width = settings["canvas_width"];
    dummy_canvas.height = settings["canvas_height"];
    dummy_canvas.style.width = settings["canvas_width"];
    dummy_canvas.style.height = settings["canvas_height"];
}