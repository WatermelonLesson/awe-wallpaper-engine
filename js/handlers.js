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

        dummy_canvas.width = settings[0];
        dummy_canvas.height = settings[1];
    }
    else if (e.target.id === "download-background-button")
    {
        let a = document.createElement("a");

        dummy_context.drawImage(canvas, 0, 0);

        dummy_context.save();
        fillCanvasBackgroundWithColor(dummy_canvas, dummy_context, settings[4]);
        dummy_context.restore();

        a.href = dummy_canvas.toDataURL();
        a.download = "awe-background-image.png";
        a.click();
        
        dummy_context.clearRect(0, 0, dummy_canvas.width, dummy_canvas.height);
    }
    else if (e.target.id === "reset-settings-button")
    {
        resetSettings();
    }
    else if (e.target.id === "hide-form-button")
    {
        if (settings[7] === 0)
        {
            settings[7] = 1;
            document.querySelector("form").classList.add("hidden");
        }
        else
        {
            settings[7] = 0;
            document.querySelector("form").classList.remove("hidden");
        }
    }
}