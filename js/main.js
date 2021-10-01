function generateBackground(canvas, context, settings)
{
    context.clearRect(0, 0, settings[0], settings[1]);

    for(let i = 0; i < (settings[2] + settings[3]); ++i)
    {
        if (i < settings[2])
        {
            
            let color = randomColor();
            context.fillStyle = "rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ", " + color[3] + ")";

            let x = Math.floor(Math.random() * settings[0]),
                y = Math.floor(Math.random() * settings[1]);
            
            context.fillRect(x, y, Math.floor(Math.random() * 250), Math.floor(Math.random() * 250));
        }

        if (i < settings[3])
        {
            
            let color = randomColor();
            context.fillStyle = "rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ", " + color[3] + ")";

            let x = Math.floor(Math.random() * settings[0]),
                y = Math.floor(Math.random() * settings[1]);

            context.beginPath();
						
            let radius = Math.floor(Math.random() * 250);
            let startAngle = Math.random() * (2 * Math.PI);
            let endAngle = Math.random() * (2 * Math.PI);
        
            context.arc(x, y, radius, startAngle, endAngle);
            context.fill();
        }
    }

    document.querySelector('main').style.backgroundImage = "url(" + canvas.toDataURL() + ")";

    if (document.querySelector("body").backgroundColor !== settings[4])
    {
        document.body.style.backgroundColor = settings[4];
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
    settings = new Array();

    for (let i = 0; i < default_settings.length; ++i)
    {
        settings.push(default_settings[i]);
    }

    resizeCanvas(settings[0], settings[1]);
    
    document.querySelector("input#setting-bg-width").value  = settings[0];
    document.querySelector("input#setting-bg-height").value = settings[1];
    document.querySelector("input#amount-rectangles").value = settings[2];
    document.querySelector("input#amount-arcs").value       = settings[3];
    document.querySelector("input#bg-color-button").value   = settings[4];
    document.querySelector("input#frame-rate-target").value = settings[5];
}

function resizeCanvas(width, height)
{
    settings[0] = width;
    settings[1] = height;

    canvas.width = settings[0];
    canvas.height = settings[1];
    canvas.style.width = settings[0];
    canvas.style.height = settings[1];

    dummy_canvas.width = settings[0];
    dummy_canvas.height = settings[1];
    dummy_canvas.style.width = settings[0];
    dummy_canvas.style.height = settings[1];
}