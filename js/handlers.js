function inputHandler(e)
{
    if (e.target.id === "bg-color-button")
    {
        settings["background_colour"] = e.target.value;
        document.body.style.backgroundColor = settings["background_colour"];
    }
    else if (e.target.id === "amount-rectangles")
    {
        settings["number_of_rectangles"] = e.target.value;
    }
    else if (e.target.id === "amount-arcs")
    {
        settings["number_of_arcs"] = e.target.value;
    }
    else if (e.target.id === "frame-rate-target")
    {
        settings["fps_target"] = e.target.value;
    }
    else if (e.target.id === "setting-bg-width" || e.target.id === "setting-bg-height")
    {
        resizeCanvas(document.querySelector("input#setting-bg-width").value, document.querySelector("input#setting-bg-height").value);
    }
    else if (e.target.id === "max-rectangle-width" || e.target.id === "max-rectangle-height" || e.target.id === "max-arc-radius")
    {
        settings[e.target.id.replaceAll("-", "_")] = e.target.value; 
    }
}

function buttonHandler(e)
{
    if (e.target.type === "submit" || e.target.type === "button" || e.target.tagName === "BUTTON")
    {
        e.preventDefault();
    }

    if (e.target.id === "download-background-button")
    {
        let a = document.createElement("a");

        dummy_context.drawImage(canvas, 0, 0);

        dummy_context.save();
        fillCanvasBackgroundWithColor(dummy_canvas, dummy_context, settings["background_colour"]);
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
        if (settings["form_hidden"] === false)
        {
            settings["form_hidden"] = true;

            document.querySelector("form").classList.add("hidden");
            document.querySelector("button#hide-form-button > i").classList.add("fa-expand-alt");
            document.querySelector("button#hide-form-button > i").classList.remove("fa-compress-alt");
            document.querySelector("button#hide-form-button > span").textContent = "Maximise";
        }
        else
        {
            settings["form_hidden"] = false;
            document.querySelector("form").classList.remove("hidden");
            document.querySelector("button#hide-form-button > i").classList.add("fa-compress-alt");
            document.querySelector("button#hide-form-button > i").classList.remove("fa-expand-alt");
            document.querySelector("button#hide-form-button > span").textContent = "Minimise";
        }
    }
    else if (e.target.id === "frame-rate-target")
    {
        settings["fps_target"] = e.target.value;
    }
    else if (e.target.id === "animation-toggle")
    {
        if (settings["currently_animating"] === false)
        {
            e.target.value = "Stop Animation";
            settings["currently_animating"] = setInterval(generateBackground, 1000 / settings["fps_target"], canvas, context, settings);
            document.querySelector("input[type=submit]").disabled = true;
        }
        else
        {
            e.target.value = "Animate";
            clearInterval(settings["currently_animating"]);
            settings["currently_animating"] = false;
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