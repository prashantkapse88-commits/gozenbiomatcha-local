import fs from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd(),output=path.join(root,'dist');
const excluded=new Set(['.git','.vercel','dist','server.mjs','mirror-site.mjs','serve-local.bat']);
await fs.rm(output,{recursive:true,force:true});await fs.mkdir(output,{recursive:true});
for(const entry of await fs.readdir(root,{withFileTypes:true})){if(excluded.has(entry.name))continue;await fs.cp(path.join(root,entry.name),path.join(output,entry.name),{recursive:true})}
console.log('Static website prepared in dist');
