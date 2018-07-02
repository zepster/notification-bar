1. npm run build - create dist
2. npm run build -- --watch - develop mode
3. npm run start:node-server - simple server

Open terminal and run 

    npm run build -- --watch 

then open second terminal and run 

    npm run start:node-server

go http://127.0.0.1:8080 to see result


how use
- build
- run server
- run snippet (run.gif example)
```
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://127.0.0.1:8080/main.js";
    window.document.head.append(s);
```
    