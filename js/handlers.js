function inputHandler(e)
{
    if (e.target.id === "bg-color-button")
    {
        settings[4] = e.target.value;
        document.body.style.backgroundColor = settings[4];
    }
    else if (e.target.id === "amount-rectangles")
    {
        settings[2] = e.target.value;
    }
    else if (e.target.id === "amount-arcs")
    {
        settings[3] = e.target.value;
    }
    else if (e.target.id === "frame-rate-target")
    {
        settings[5] = e.target.value;
    }
}

function buttonHandler(e)
{
    if (e.target.type === "submit")
    {
        e.preventDefault();
    }

    if (e.target.id === "frame-rate-target")
    {
        settings[5] = e.target.value;
    }
    else if (e.target.id === "animation-toggle")
    {
        if (settings[6] === 0)
        {
            e.target.value = "Stop Animation";
            settings[6] = setInterval(generateBackground, 1000 / settings[5], canvas, context, settings);
        }
        else
        {
            e.target.value = "Begin Animation";
            clearInterval(settings[6]);
            settings[6] = 0;
        }
    }
    else if (e.target.id === "submission-button")
    {
        generateBackground(canvas, context, settings);
    }
    else if (e.target.id === "setting-bg-width" || e.target.id === "setting-bg-height")
    {
        settings[0] = document.querySelector("input#setting-bg-width").value;
        settings[1] = document.querySelector("input#setting-bg-height").value;

        canvas.width = settings[0];
        canvas.height = settings[1];
        canvas.style.width = settings[0];
        canvas.style.height = settings[1];
    }
    else if (e.target.id === "download-background-button")
    {
        let a = document.createElement("a");

        context.save();

        fillCanvasBackgroundWithColor(canvas, context, settings[4]);
        a.href = canvas.toDataURL();
        a.download = "image.png";
        a.click();

        context.restore();
    }
    else if (e.target.id === "reset-settings-button")
    {
        resetSettings();
    }
}