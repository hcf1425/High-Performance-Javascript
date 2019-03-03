var script = document.createElement("script")
script.type = "text/javascript"

// IE 特别提供了一个readystatechange事件，需对此事件进行处理。
script.onreadystatechange = function(){
    if (script.readyState  == "loaded" || script.readyState =="complete"){
        script.onreadystatechange == null;
        alert("Script loaded.")
    }
}

script.src = "file1.js"
document.getElementsByTagName("head")[0].appendChild(script)
