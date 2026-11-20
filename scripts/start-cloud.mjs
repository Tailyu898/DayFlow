import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';

const root=fileURLToPath(new URL('../',import.meta.url));
const port=Number(process.env.PORT||4178);
const url=`http://127.0.0.1:${port}/`;
async function current(){try{const r=await fetch(url,{signal:AbortSignal.timeout(1500)});if(!r.ok)throw Error(`HTTP ${r.status}`);const html=await r.text();if(!html.includes('src="app.js"')||!html.includes('Dayflow'))throw Error('Port is occupied by another application');return true;}catch(e){if(e.message?.includes('occupied'))throw e;return false;}}
if(await current()){console.log(`DAYFLOW already running: ${url}`);process.exit(0);}
const log=path.join(os.tmpdir(),'dayflow-codespaces.log');
const output=fs.openSync(log,'a');
const child=spawn(process.execPath,['server.mjs'],{cwd:root,env:{...process.env,PORT:String(port)},detached:true,stdio:['ignore',output,output]});
fs.closeSync(output);
let startError;
child.on('error',e=>{startError=e;});child.unref();
for(let i=0;i<30;i++){if(startError)throw startError;if(await current()){console.log(`DAYFLOW ready: ${url}\nKeep the forwarded port private. Log: ${log}`);process.exit(0);}await new Promise(r=>setTimeout(r,200));}
throw Error(`DAYFLOW did not start. Read ${log}`);
