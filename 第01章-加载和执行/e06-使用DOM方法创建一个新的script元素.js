var script = document.createElement("script")
script.type = "text/javascript"
script.src = "file1.js"
document.getElementsByTagName("head")[0].appendChild(script)

/*
    说明:
    这个新创建的script元素加载了file1.js文件，文件在该元素被添加到页面时开始下载。
    这种技术的重点在于：无论何时启动下载，文件的下载和执行过程都不会阻塞页面其他进程。
    你甚至可以将代码放到页面<head>区域而不会影响其他页面部分（用于下载该文件的HTTP链接本身的影响除外）
*/