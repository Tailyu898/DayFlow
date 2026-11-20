import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const root=fileURLToPath(new URL('../',import.meta.url));
function run(args){const r=spawnSync(process.execPath,args,{cwd:root,stdio:'inherit'});if(r.error)throw r.error;if(r.status!==0)process.exit(r.status||1);}
const assets=fs.readdirSync(path.join(root,'dist'));
for(const name of assets.filter(n=>n.endsWith('.js')))run(['--check',`dist/${name}`]);
for(const name of fs.readdirSync(path.join(root,'scripts')).filter(n=>n.endsWith('.mjs')))run(['--check',`scripts/${name}`]);
const trial=fs.readFileSync(path.join(root,'dist','trial.html'),'utf8');
for(const match of trial.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g))if(!/\bsrc=/.test(match[1])&&match[2].trim())new vm.Script(match[2],{filename:'trial.html inline script'});
const html=fs.readFileSync(path.join(root,'dist','index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const value=match[1];if(/^(https?:|data:)/.test(value))continue;if(!fs.existsSync(path.join(root,'dist',value)))throw Error(`Missing asset: ${value}`);}
for(const filename of ['manifest.webmanifest'])JSON.parse(fs.readFileSync(path.join(root,'dist',filename),'utf8'));
const dev=JSON.parse(fs.readFileSync(path.join(root,'.devcontainer','devcontainer.json'),'utf8'));
if(!dev.forwardPorts?.includes(4178))throw Error('Cloud preview port 4178 is missing');
const tests=fs.readdirSync(path.join(root,'tests')).filter(n=>n.endsWith('.test.mjs')).map(n=>`tests/${n}`);
if(!tests.length)throw Error('No tests found');
run(['--test',...tests]);
console.log('DAYFLOW syntax, static assets, cloud preview configuration and tests verified.');
