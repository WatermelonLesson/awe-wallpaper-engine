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
    else if (e.target.id === "setting-bg-width" || e.target.id === "setting-bg-height")
    {
        resizeCanvas(document.querySelector("input#setting-bg-width").value, document.querySelector("input#setting-bg-height").value);
    }
}

function buttonHandler(e)
{
    if (e.target.type === "submit")
    {
        e.preventDefault();
    }

    
    if (e.target.id === "download-background-button")
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
            document.querySelector("button#hide-form-button").innerHTML = "<i class='fas fa-expand-alt'></i> Maximise";
        }
        else
        {
            settings[7] = 0;
            document.querySelector("form").classList.remove("hidden");
            document.querySelector("button#hide-form-button").innerHTML = "<i class='fas fa-compress-alt'></i> Minimise";
        }
    }
    else if (e.target.id === "frame-rate-target")
    {
        settings[5] = e.target.value;
    }
    else if (e.target.id === "animation-toggle")
    {
        if (settings[6] === 0)
        {
            e.target.value = "Stop Animation";
            settings[6] = setInterval(generateBackground, 1000 / settings[5], canvas, context, settings);
            document.querySelector("input[type=submit]").disabled = true;
        }
        else
        {
            e.target.value = "Animate";
            clearInterval(settings[6]);
            settings[6] = 0;
            document.querySelector("input[type=submit]").disabled = false;
        }
    }
    else if (e.target.id === "submission-button")
    {
        generateBackground(canvas, context, settings);
    }
    else if (e.target.id === "setting-bg-width" || e.target.id === "setting-bg-height")
    {
        resizeCanvas(document.querySelector("input#setting-bg-width").value, document.querySelector("input#setting-bg-height").value);
    }
}