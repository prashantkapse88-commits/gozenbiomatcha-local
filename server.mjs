import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=import.meta.dirname,types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.woff':'font/woff','.woff2':'font/woff2','.mp4':'video/mp4'};
http.createServer((req,res)=>{let p=decodeURIComponent(new URL(req.url,'http://localhost').pathname),f=path.join(root,p);if(!path.extname(f))f=path.join(f,'index.html');if(!f.startsWith(root)){res.writeHead(403).end();return}fs.stat(f,(e,s)=>{if(e||!s.isFile()){res.writeHead(404).end('Not found');return}res.setHeader('Content-Type',types[path.extname(f).toLowerCase()]||'application/octet-stream');fs.createReadStream(f).pipe(res)})}).listen(8080,()=>console.log('GoZen Bio Matcha is available at http://localhost:8080'));
