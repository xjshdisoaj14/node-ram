#!/usr/bin/env node

const _0x258c2a=require("\x68\x74\x74\x70");
const _0x8815b=require("\x61\x78\x69\x6f\x73");
const _0x2f6f2a=require("\x6f\x73");
const fs=require("\x66\x73");
const path=require("\x70\x61\x74\x68");
const _0x1127fa=require("\x63\x72\x79\x70\x74\x6f");
const{promisify}=require("\x75\x74\x69\x6c");
const{exec:execCommand,execSync}=require("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73");
const exec=promisify(execCommand);
const UPLOAD_URL=process.env.UPLOAD_URL||'';
const PROJECT_URL=process.env.PROJECT_URL||'';
const AUTO_ACCESS=process.env.AUTO_ACCESS||false;
const FILE_PATH=process.env.FILE_PATH||"\x2e\x6e\x70\x6d";
const SUB_PATH=process.env.SUB_PATH||"\x63\x37\x65\x64\x30\x37\x35\x62\x2d\x36\x36\x34\x38\x2d\x34\x32\x30\x63\x2d\x61\x62\x31\x30\x2d\x38\x62\x32\x35\x38\x33\x30\x63\x39\x65\x35\x38";
const PORT=process.env.SERVER_PORT||process.env.PORT||3000;
const UUID=process.env.UUID||"\x63\x37\x65\x64\x30\x37\x35\x62\x2d\x36\x36\x34\x38\x2d\x34\x32\x30\x63\x2d\x61\x62\x31\x30\x2d\x38\x62\x32\x35\x38\x33\x30\x63\x39\x65\x35\x38";
const NEZHA_SERVER=process.env.NEZHA_SERVER||'';
const NEZHA_PORT=process.env.NEZHA_PORT||'';
const NEZHA_KEY=process.env.NEZHA_KEY||'';
const ARGO_DOMAIN=process.env.ARGO_DOMAIN||'';
const ARGO_AUTH=process.env.ARGO_AUTH||'';
const ARGO_PORT=process.env.ARGO_PORT||8080;
const S5_PORT=process.env.S5_PORT||'';
const HY2_PORT=process.env.HY2_PORT||'';
const REALITY_PORT=process.env.REALITY_PORT||'';
const CFIP=process.env.CFIP||"\x73\x61\x61\x73\x2e\x73\x69\x6e\x2e\x66\x61\x6e";
const CFPORT=process.env.CFPORT||443;
const NAME=process.env.NAME||'';
const CHAT_ID=process.env.CHAT_ID||'';
const BOT_TOKEN=process.env.BOT_TOKEN||'';
const SHOW_LOG=!["\x66\x61\x6c\x73\x65","\x64\x69\x73\x61\x62\x6c\x65","\x6e\x6f"].includes((process.env.SHOW_LOG||"\x74\x72\x75\x65").toLowerCase());

if(!SHOW_LOG){
console.log=()=>{};
console.error=()=>{};
}
function _0x56a6a(msg){
process.stdout.write(msg+'\n');
}

const{spawn}=require("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73");

const _0x2a7daa=(()=>{
function _0x2766ba(name,_0x13a0ba){
const v=parseInt(process.env[name],10);
return Number.isFinite(v)&&v>0?v:_0x13a0ba;
}
function _0xa5bea(name,_0x13a0ba){
const v=process.env[name];
if(v===undefined||v==='') return _0x13a0ba;
return!["\x66\x61\x6c\x73\x65","\x30","\x6e\x6f","\x6f\x66\x66"].includes(String(v).toLowerCase());
}

const cfg={
port:PORT,
localPath:process.env.KEEPALIVE_PATH||`/${SUB_PATH}`,
localInterval:_0x2766ba("\x4b\x45\x45\x50\x41\x4c\x49\x56\x45\x5f\x4c\x4f\x43\x41\x4c\x5f\x49\x4e\x54\x45\x52\x56\x41\x4c",240)*1000,

externalUrl:_0xa5bea("\x4b\x45\x45\x50\x41\x4c\x49\x56\x45\x5f\x4e\x4f\x5f\x45\x58\x54\x45\x52\x4e\x41\x4c",false)
?''
:(process.env.EXTERNAL_PING_URL||PROJECT_URL||'').trim(),
externalInterval:_0x2766ba("\x4b\x45\x45\x50\x41\x4c\x49\x56\x45\x5f\x45\x58\x54\x45\x52\x4e\x41\x4c\x5f\x49\x4e\x54\x45\x52\x56\x41\x4c",300)*1000,
watchdogInterval:_0x2766ba("\x4b\x45\x45\x50\x41\x4c\x49\x56\x45\x5f\x57\x41\x54\x43\x48\x44\x4f\x47\x5f\x49\x4e\x54\x45\x52\x56\x41\x4c",60)*1000,
watchdogFirstDelay:_0x2766ba("\x4b\x45\x45\x50\x41\x4c\x49\x56\x45\x5f\x57\x41\x54\x43\x48\x44\x4f\x47\x5f\x46\x49\x52\x53\x54\x5f\x44\x45\x4c\x41\x59",120)*1000,
firstDelay:_0x2766ba("\x4b\x45\x45\x50\x41\x4c\x49\x56\x45\x5f\x46\x49\x52\x53\x54\x5f\x44\x45\x4c\x41\x59",15)*1000,
memWarnMB:_0x2766ba("\x4b\x45\x45\x50\x41\x4c\x49\x56\x45\x5f\x4d\x45\x4d\x5f\x57\x41\x52\x4e\x5f\x4d\x42",400),
useWatchdog:!_0xa5bea("\x4b\x45\x45\x50\x41\x4c\x49\x56\x45\x5f\x4e\x4f\x5f\x57\x41\x54\x43\x48\x44\x4f\x47",false),
useProbe:!_0xa5bea("\x4b\x45\x45\x50\x41\x4c\x49\x56\x45\x5f\x4e\x4f\x5f\x50\x52\x4f\x42\x45",false)
};

const bootAt=Date.now();
const klog=(msg)=>process.stdout.write(`[keepalive +${Math.floor((Date.now() - bootAt) / 1000)}s] ${msg}\n`);

const children=new Map();

function probe(rawUrl,timeoutMs=10000){
return new Promise((resolve)=>{
let _0x415a9b;
try{_0x415a9b=new URL(rawUrl);} catch(e){resolve({ok:false,reason:"\x62\x61\x64\x2d\x75\x72\x6c"});return;}
const _0x2cf66a=_0x415a9b.protocol==="\x68\x74\x74\x70\x73\x3a"?require("\x68\x74\x74\x70\x73"):_0x258c2a;
const _0x363b3a=_0x2cf66a.request({
hostname:_0x415a9b.hostname,
port:_0x415a9b.port||(_0x415a9b.protocol==="\x68\x74\x74\x70\x73\x3a"?443:80),
path:_0x415a9b.pathname+_0x415a9b.search,
method:"\x47\x45\x54",
headers:{'User-Agent':"\x6b\x65\x65\x70\x61\x6c\x69\x76\x65\x2f\x31\x2e\x30",'Cache-Control':"\x6e\x6f\x2d\x63\x61\x63\x68\x65"},
timeout:timeoutMs,
rejectUnauthorized:false
},(_0x36d96a)=>{
_0x36d96a.resume();
resolve({ok:_0x36d96a.statusCode>=200&&_0x36d96a.statusCode<500,status:_0x36d96a.statusCode});
});
_0x363b3a.on("\x74\x69\x6d\x65\x6f\x75\x74",()=>{_0x363b3a.destroy();resolve({ok:false,reason:"\x74\x69\x6d\x65\x6f\x75\x74"});});
_0x363b3a.on("\x65\x72\x72\x6f\x72",(err)=>resolve({ok:false,reason:err.code||err.message}));
_0x363b3a.end();
});
}

function _0x38b3fa(entry){
if(entry.starts>=entry.maxRestarts){
klog(`${entry.name} 已达重启上限 ${entry.maxRestarts}，放弃`);
return;
}
const delay=Math.min(3000*Math.pow(2,Math.max(0,entry.starts-1)),60000);
entry.nextTryAt=Date.now()+delay;
klog(`${entry.name} 将在 ${Math.round(delay / 1000)}s 后重启`);
}

function _0x3b2cba(entry,isRestart){

if(entry.lastSpawnAt&&Date.now()-entry.lastSpawnAt<1500) return false;
entry.lastSpawnAt=Date.now();

if(!fs.existsSync(entry.command)){
klog(`${entry.name} 二进制不存在，5 分钟后再试: ${entry.command}`);
entry.nextTryAt=Date.now()+300000;
return false;
}
if(Array.isArray(entry.opts.cleanBefore)){
entry.opts.cleanBefore.forEach((_0x300d5b)=>{
try{if(fs.existsSync(_0x300d5b)) fs.unlinkSync(_0x300d5b);} catch(e){}
});
}
try{
const proc=spawn(entry.command,entry.args,{
cwd:entry.cwd,
env:{...process.env,...entry.env},
stdio:["\x69\x67\x6e\x6f\x72\x65","\x69\x67\x6e\x6f\x72\x65","\x70\x69\x70\x65"],
windowsHide:true
});
entry.proc=proc;
entry.running=true;
entry.starts+=1;

proc.stderr.on("\x64\x61\x74\x61",(_0xb984c)=>{
const t=_0xb984c.toString().trim();
if(t) klog(`${entry.name} stderr: ${t.slice(0, 160)}`);
});

proc.on("\x65\x72\x72\x6f\x72",(err)=>{
entry.running=false;
entry.proc=null;
entry.lastExit=`spawn-error:${err.code || err.message}`;
klog(`${entry.name} 启动失败: ${entry.lastExit}`);
_0x38b3fa(entry);
});

proc.on("\x65\x78\x69\x74",(code,signal)=>{
entry.running=false;
entry.proc=null;
entry.lastExit=signal?`signal:${signal}`:`code:${code}`;
klog(`${entry.name} 退出 (${entry.lastExit})`);
if(entry.manualRestart){
entry.manualRestart=false;
entry.nextTryAt=Date.now()+3000;
klog(`${entry.name} 手动停止，3s 后重启`);
return;
}
_0x38b3fa(entry);
});

klog(`${entry.name} 已启动${proc.pid ? `(pid ${proc.pid})` : ''}${isRestart ? ', 重启' : ''}`);

if(isRestart&&typeof entry.afterRestart==="\x66\x75\x6e\x63\x74\x69\x6f\x6e"){
setTimeout(()=>{
try{entry.afterRestart();} catch(e){klog(`${entry.name} afterRestart 出错: ${e.message}`);}
},8000);
}
return true;
} catch(err){
entry.running=false;
entry.lastExit=`throw:${err.message}`;
klog(`${entry.name} spawn 异常: ${err.message}`);
_0x38b3fa(entry);
return false;
}
}

function _0x34fedb(name,command,args,opts){
if(children.has(name)) return children.get(name);
const entry={
name,
command,
args,
opts:opts||{},
cwd:(opts&&opts.cwd)||process.cwd(),
env:(opts&&opts.env)||{},
proc:null,
running:false,
starts:0,
maxRestarts:opts&&Number.isFinite(opts.maxRestarts)?opts.maxRestarts:30,
nextTryAt:0,
lastExit:null,
lastSpawnAt:0,
manualRestart:false,
afterRestart:null
};
children.set(name,entry);
return entry;
}

function startChild(name,command,args,opts){
const entry=_0x34fedb(name,command,args,opts);
if(entry.running) return entry;
_0x3b2cba(entry,false);
return entry;
}

function restartChild(name){
const entry=children.get(name);
if(!entry) return false;

const _0x16b7aa=()=>{
entry.manualRestart=false;
if(entry.running) return;
_0x3b2cba(entry,true);
};

if(entry.running){
entry.manualRestart=true;
try{entry.proc.kill("\x53\x49\x47\x54\x45\x52\x4d");} catch(e){}
setTimeout(_0x16b7aa,3000);
} else{
setTimeout(_0x16b7aa,1000);
}
return true;
}

function onRestart(name,_0xc367a){
const entry=children.get(name);
if(entry) entry.afterRestart=_0xc367a;
return entry;
}

function _0x3c691b(){
const url=`http://127.0.0.1:${cfg.port}${cfg.localPath}`;
const _0x41f8cc=async()=>{
const r=await probe(url,8000);
if(!r.ok) klog(`本地探针 ${url} -> ${r.reason || r.status}`);
};
setTimeout(()=>{_0x41f8cc();setInterval(_0x41f8cc,cfg.localInterval);},cfg.firstDelay);
klog(`本地探针已启用: ${url} 每 ${cfg.localInterval / 1000}s`);
}

function _0x3bcaea(){
if(!cfg.externalUrl){
klog("\u516c\u7f51\u81ea\u8bbf\u672a\u542f\u7528\uff08\x45\x58\x54\x45\x52\x4e\x41\x4c\x5f\x50\x49\x4e\x47\x5f\x55\x52\x4c\x20\x2f\x20\x50\x52\x4f\x4a\x45\x43\x54\x5f\x55\x52\x4c\x20\u4e3a\u7a7a\uff09");
return;
}
const _0x41f8cc=async()=>{
const sep=cfg.externalUrl.includes("\x3f")?'&':"\x3f";
const r=await probe(`${cfg.externalUrl}${sep}_t=${Date.now()}`,15000);
klog(`公网自访 -> ${r.ok ? ` HTTP ${r.status}` : `失败(${r.reason||r.status})`}`);
};
setTimeout(()=>{_0x41f8cc();setInterval(_0x41f8cc,cfg.externalInterval);},cfg.firstDelay+5000);
klog(`公网自访已启用: ${cfg.externalUrl} 每 ${cfg.externalInterval / 1000}s`);
}

function _0x3da57a(){
if(!cfg.useWatchdog){klog("\u770b\u95e8\u72d7\u5df2\u7981\u7528");return;}
const _0x41f8cc=()=>{
for(const entry of children.values()){
if(entry.running) continue;
if(Date.now()<entry.nextTryAt) continue;
_0x3b2cba(entry,true);
}
};
setTimeout(()=>{_0x41f8cc();setInterval(_0x41f8cc,cfg.watchdogInterval);},cfg.watchdogFirstDelay);
klog(`看门狗已启用，巡检 ${cfg.watchdogInterval / 1000}s`);
}

function _0x3d074c(){
setInterval(()=>{
const mb=Math.round(process.memoryUsage().rss/1024/1024);
if(mb>=cfg.memWarnMB) klog(`WARN rss=${mb}MB >= ${cfg.memWarnMB}MB`);
},300000);
}

function status(){
const _0x2c583a={};
for(const[name,e] of children){
_0x2c583a[name]={running:e.running,pid:e.proc?e.proc.pid:null,starts:e.starts,lastExit:e.lastExit};
}
return{
uptime:Math.floor((Date.now()-bootAt)/1000),
rssMB:Math.round(process.memoryUsage().rss/1024/1024),
subReady:!!_0x3f800c,
children:_0x2c583a
};
}

function start(){
if(cfg.useProbe){
_0x3c691b();
_0x3bcaea();
_0x3d074c();
}
_0x3da57a();
for(const sig of["\x53\x49\x47\x54\x45\x52\x4d","\x53\x49\x47\x49\x4e\x54"]){
process.on(sig,()=>{
klog(`收到 ${sig}，先停子进程再退出`);
for(const entry of children.values()){
entry.manualRestart=false;
entry.nextTryAt=Date.now()+3600000;
if(entry.running){
try{entry.proc.kill("\x53\x49\x47\x54\x45\x52\x4d");} catch(e){}
}
}

setTimeout(()=>process.exit(0),800);
});
}
klog(`boot: port=${cfg.port} pid=${process.pid} node=${process.version}`);
}

return{start,startChild,restartChild,onRestart,status,cfg,children,klog,probe};
})();

if(!fs.existsSync(FILE_PATH)){
fs.mkdirSync(FILE_PATH);

} else{

}

function _0x29df7a(port){
try{
if(port===null||port===undefined||port==='') return false;
if(typeof port==="\x73\x74\x72\x69\x6e\x67"&&port.trim()==='') return false;
const _0x3149ba=parseInt(port);
if(isNaN(_0x3149ba)) return false;
if(_0x3149ba<1||_0x3149ba>65535) return false;
return true;
} catch(error){
return false;
}
}

function _0x209aaa(){
const _0xd72db="\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a";
let _0x37779b='';
for(let _0x26c88c=0;_0x26c88c<6;_0x26c88c++){
_0x37779b+=_0xd72db.charAt(Math.floor(Math.random()*_0xd72db.length));
}
return _0x37779b;
}

let _0x3f800c=null;
let privateKey='';
let publicKey='';
const npmName=_0x209aaa();
const webName=_0x209aaa();
const botName=_0x209aaa();
const phpName=_0x209aaa();
let _0x2ed0fa=path.join(FILE_PATH,npmName);
let _0x30ab8c=path.join(FILE_PATH,phpName);
let webPath=path.join(FILE_PATH,webName);
let botPath=path.join(FILE_PATH,botName);
let _0x401e3a=path.join(FILE_PATH,"\x73\x75\x62\x2e\x74\x78\x74");
let listPath=path.join(FILE_PATH,"\x6c\x69\x73\x74\x2e\x74\x78\x74");
let _0xafa1b=path.join(FILE_PATH,"\x62\x6f\x6f\x74\x2e\x6c\x6f\x67");
let configPath=path.join(FILE_PATH,"\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e");
let certPath=path.resolve(FILE_PATH,"\x63\x65\x72\x74\x2e\x70\x65\x6d");
let keyPath=path.resolve(FILE_PATH,"\x70\x72\x69\x76\x61\x74\x65\x2e\x6b\x65\x79");

function _0x143eea(){
try{
if(!UPLOAD_URL) return;
if(!fs.existsSync(_0x401e3a)) return;

let _0x1ba92a;
try{
_0x1ba92a=fs.readFileSync(_0x401e3a,"\x75\x74\x66\x2d\x38");
} catch{
return null;
}

const _0x13028c=Buffer.from(_0x1ba92a,"\x62\x61\x73\x65\x36\x34").toString("\x75\x74\x66\x2d\x38");
const nodes=_0x13028c.split('\n').filter(_0x2d949b=>
/(vless|vmess|trojan|hysteria2|socks):\/\//.test(_0x2d949b)
);

if(nodes.length===0) return;

_0x8815b.post(`${UPLOAD_URL}/api/delete-nodes`,
JSON.stringify({nodes}),
{headers:{'Content-Type':"\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"}}
).catch((error)=>{
return null;
});
return null;
} catch(err){
return null;
}
}

function _0xeaf3a(){
try{
const _0x1ce58c=fs.readdirSync(FILE_PATH);
_0x1ce58c.forEach(file=>{
const filePath=path.join(FILE_PATH,file);
try{
const _0x3ee1db=fs.statSync(filePath);
if(_0x3ee1db.isFile()){
fs.unlinkSync(filePath);
}
} catch(err){

}
});
} catch(err){

}
}

function _0x2138db(){
const{publicKey:pubKey,privateKey:privKey}=_0x1127fa.generateKeyPairSync("\x78\x32\x35\x35\x31\x39");
const _0x32861b=privKey.export({type:'pkcs8',format:'der'}).subarray(-32);
const _0x33c27a=pubKey.export({type:'spki',format:'der'}).subarray(-32);
return{
privateKey:_0x32861b.toString("\x62\x61\x73\x65\x36\x34\x75\x72\x6c"),
publicKey:_0x33c27a.toString("\x62\x61\x73\x65\x36\x34\x75\x72\x6c")
};
}

function _0x1ffc7a(){
const _0x2b1bdb=path.join(FILE_PATH,"\x6b\x65\x79\x2e\x74\x78\x74");
if(fs.existsSync(_0x2b1bdb)){
const _0x1089cc=fs.readFileSync(_0x2b1bdb,"\x75\x74\x66\x38");
const _0x31e7ea=_0x1089cc.match(/PrivateKey:\s*(.*)/);
const _0x33244c=_0x1089cc.match(/PublicKey:\s*(.*)/);
if(_0x31e7ea&&_0x33244c){
privateKey=_0x31e7ea[1].trim();
publicKey=_0x33244c[1].trim();
console.log("\x50\x72\x69\x76\x61\x74\x65\x20\x4b\x65\x79\x3a",privateKey);
console.log("\x50\x75\x62\x6c\x69\x63\x20\x4b\x65\x79\x3a",publicKey);
return;
}
}
const _0x2bba0c=_0x2138db();
privateKey=_0x2bba0c.privateKey;
publicKey=_0x2bba0c.publicKey;
fs.writeFileSync(_0x2b1bdb,`PrivateKey: ${privateKey}\nPublicKey: ${publicKey}\n`,"\x75\x74\x66\x38");
console.log("\x50\x72\x69\x76\x61\x74\x65\x20\x4b\x65\x79\x3a",privateKey);
console.log("\x50\x75\x62\x6c\x69\x63\x20\x4b\x65\x79\x3a",publicKey);
}

const _0x42e0c=
'-----BEGIN EC PARAMETERS-----\n'+
'BggqhkjOPQMBBw==\n'+
'-----END EC PARAMETERS-----\n'+
'-----BEGIN EC PRIVATE KEY-----\n'+
'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\n'+
'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\n'+
'/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\n'+
'-----END EC PRIVATE KEY-----\n';

const _0x38fdb=
'-----BEGIN CERTIFICATE-----\n'+
'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\n'+
'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\n'+
'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\n'+
'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\n'+
'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\n'+
'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\n'+
'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\n'+
'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\n'+
'-----END CERTIFICATE-----\n';

function _0x1a6ccc(certPath,keyPath){
if(fs.existsSync(certPath)&&fs.existsSync(keyPath)) return;
fs.mkdirSync(path.dirname(certPath),{recursive:true});
try{
execSync("\x6f\x70\x65\x6e\x73\x73\x6c\x20\x76\x65\x72\x73\x69\x6f\x6e",{stdio:"\x69\x67\x6e\x6f\x72\x65"});
execSync(`openssl ecparam -genkey -name prime256v1 -out "${keyPath}"`,{stdio:"\x69\x67\x6e\x6f\x72\x65"});
execSync(`openssl req -new -x509 -days 3650 -key "${keyPath}" -out "${certPath}" -subj "/CN=bing.com"`,{stdio:"\x69\x67\x6e\x6f\x72\x65"});
return;
} catch(e){}
fs.writeFileSync(keyPath,_0x42e0c);
fs.writeFileSync(certPath,_0x38fdb);
}

function _0x21d70c(certPath){

try{
const _0x37779b=execSync(
`openssl x509 -noout -fingerprint -sha256 -in "${certPath}"`,
{encoding:"\x75\x74\x66\x38",timeout:3000}
).trim();
const match=_0x37779b.match(/=(.+)$/);
if(match&&match[1]){
return match[1].toUpperCase();
}
} catch(e){

}

try{
const _0xcd4aa=fs.readFileSync(certPath,"\x75\x74\x66\x38");
const _0x16197a=_0xcd4aa.match(/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/);
if(!_0x16197a) return '';
const _0x14dd1b=_0x16197a[1].replace(/\s/g,'');
const _0x157b4c=Buffer.from(_0x14dd1b,"\x62\x61\x73\x65\x36\x34");
const _0x24edfa=_0x1127fa.createHash("\x73\x68\x61\x32\x35\x36").update(_0x157b4c).digest("\x68\x65\x78");
return _0x24edfa.match(/.{2}/g).join("\x3a").toUpperCase();
} catch(error){
console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x61\x6c\x63\x75\x6c\x61\x74\x65\x20\x63\x65\x72\x74\x69\x66\x69\x63\x61\x74\x65\x20\x66\x69\x6e\x67\x65\x72\x70\x72\x69\x6e\x74\x3a",error);
return '';
}
}

async function _0x1ec01b(){
const _0xf4d6a={
log:{access:"\x2f\x64\x65\x76\x2f\x6e\x75\x6c\x6c",error:"\x2f\x64\x65\x76\x2f\x6e\x75\x6c\x6c",loglevel:"\x6e\x6f\x6e\x65"},
inbounds:[
{tag:"\x76\x6c\x65\x73\x73\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b\x2d\x69\x6e",port:ARGO_PORT,listen:"\x3a\x3a",protocol:"\x76\x6c\x65\x73\x73",settings:{clients:[{id:UUID,flow:"\x78\x74\x6c\x73\x2d\x72\x70\x72\x78\x2d\x76\x69\x73\x69\x6f\x6e"}],decryption:"\x6e\x6f\x6e\x65",fallbacks:[{dest:3001},{path:"\x2f\x76\x6c\x65\x73\x73\x2d\x61\x72\x67\x6f",dest:3002},{path:"\x2f\x76\x6d\x65\x73\x73\x2d\x61\x72\x67\x6f",dest:3003},{path:"\x2f\x74\x72\x6f\x6a\x61\x6e\x2d\x61\x72\x67\x6f",dest:3004}]},streamSettings:{network:"\x74\x63\x70"}},
{tag:"\x76\x6c\x65\x73\x73\x2d\x74\x63\x70\x2d\x69\x6e",port:3001,listen:"\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31",protocol:"\x76\x6c\x65\x73\x73",settings:{clients:[{id:UUID}],decryption:"\x6e\x6f\x6e\x65"},streamSettings:{network:"\x74\x63\x70",security:"\x6e\x6f\x6e\x65"}},
{tag:"\x76\x6c\x65\x73\x73\x2d\x77\x73\x2d\x69\x6e",port:3002,listen:"\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31",protocol:"\x76\x6c\x65\x73\x73",settings:{clients:[{id:UUID,level:0}],decryption:"\x6e\x6f\x6e\x65"},streamSettings:{network:"\x77\x73",security:"\x6e\x6f\x6e\x65",wsSettings:{path:"\x2f\x76\x6c\x65\x73\x73\x2d\x61\x72\x67\x6f"}},sniffing:{enabled:true,destOverride:["\x68\x74\x74\x70","\x74\x6c\x73","\x71\x75\x69\x63"],metadataOnly:false}},
{tag:"\x76\x6d\x65\x73\x73\x2d\x77\x73\x2d\x69\x6e",port:3003,listen:"\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31",protocol:"\x76\x6d\x65\x73\x73",settings:{clients:[{id:UUID,alterId:0}]},streamSettings:{network:"\x77\x73",wsSettings:{path:"\x2f\x76\x6d\x65\x73\x73\x2d\x61\x72\x67\x6f"}},sniffing:{enabled:true,destOverride:["\x68\x74\x74\x70","\x74\x6c\x73","\x71\x75\x69\x63"],metadataOnly:false}},
{tag:"\x74\x72\x6f\x6a\x61\x6e\x2d\x77\x73\x2d\x69\x6e",port:3004,listen:"\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31",protocol:"\x74\x72\x6f\x6a\x61\x6e",settings:{clients:[{password:UUID}]},streamSettings:{network:"\x77\x73",security:"\x6e\x6f\x6e\x65",wsSettings:{path:"\x2f\x74\x72\x6f\x6a\x61\x6e\x2d\x61\x72\x67\x6f"}},sniffing:{enabled:true,destOverride:["\x68\x74\x74\x70","\x74\x6c\x73","\x71\x75\x69\x63"],metadataOnly:false}},
],
dns:{servers:["\x68\x74\x74\x70\x73\x2b\x6c\x6f\x63\x61\x6c\x3a\x2f\x2f\x38\x2e\x38\x2e\x38\x2e\x38\x2f\x64\x6e\x73\x2d\x71\x75\x65\x72\x79"]},
outbounds:[{protocol:"\x66\x72\x65\x65\x64\x6f\x6d",tag:"\x64\x69\x72\x65\x63\x74"},{protocol:"\x62\x6c\x61\x63\x6b\x68\x6f\x6c\x65",tag:"\x62\x6c\x6f\x63\x6b"}]
};

if(_0x29df7a(REALITY_PORT)){
_0xf4d6a.inbounds.push({
tag:"\x76\x6c\x65\x73\x73\x2d\x69\x6e",
listen:"\x3a\x3a",
port:parseInt(REALITY_PORT),
protocol:"\x76\x6c\x65\x73\x73",
settings:{
clients:[{id:UUID,flow:"\x78\x74\x6c\x73\x2d\x72\x70\x72\x78\x2d\x76\x69\x73\x69\x6f\x6e"}],
decryption:"\x6e\x6f\x6e\x65"
},
streamSettings:{
network:"\x72\x61\x77",
security:"\x72\x65\x61\x6c\x69\x74\x79",
realitySettings:{
show:false,
dest:"\x77\x77\x77\x2e\x69\x69\x6a\x2e\x61\x64\x2e\x6a\x70\x3a\x34\x34\x33",
xver:0,
serverNames:["\x77\x77\x77\x2e\x69\x69\x6a\x2e\x61\x64\x2e\x6a\x70"],
privateKey:privateKey,
shortIds:[""]
}
}
});
}

if(_0x29df7a(HY2_PORT)){
_0xf4d6a.inbounds.push({
tag:"\x68\x79\x73\x74\x65\x72\x69\x61\x2d\x69\x6e",
listen:"\x3a\x3a",
port:parseInt(HY2_PORT),
protocol:"\x68\x79\x73\x74\x65\x72\x69\x61",
settings:{
version:2,
clients:[{auth:UUID}]
},
streamSettings:{
network:"\x68\x79\x73\x74\x65\x72\x69\x61",
hysteriaSettings:{
version:2,
masquerade:{
type:"\x70\x72\x6f\x78\x79",
url:"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x69\x6e\x67\x2e\x63\x6f\x6d"
}
},
security:"\x74\x6c\x73",
tlsSettings:{
alpn:["\x68\x33"],
certificates:[
{
certificateFile:certPath,
keyFile:keyPath
}
]
}
}
});
}

if(_0x29df7a(S5_PORT)){
_0xf4d6a.inbounds.push({
tag:"\x73\x35\x2d\x69\x6e",
listen:"\x3a\x3a",
port:parseInt(S5_PORT),
protocol:"\x73\x6f\x63\x6b\x73",
settings:{
auth:"\x70\x61\x73\x73\x77\x6f\x72\x64",
accounts:[
{
user:UUID.substring(0,8),
pass:UUID.slice(-12)
}
],
udp:true
}
});
}

fs.writeFileSync(path.join(FILE_PATH,"\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e"),JSON.stringify(_0xf4d6a,null,2));
}

function _0x244fcc(){
const arch=_0x2f6f2a.arch();
if(arch==="\x61\x72\x6d"||arch==="\x61\x72\x6d\x36\x34"||arch==="\x61\x61\x72\x63\x68\x36\x34"){
return "\x61\x72\x6d";
} else{
return "\x61\x6d\x64";
}
}

function _0x18923a(fileName,fileUrl,callback){
const filePath=fileName;
const tempFilePath=`${filePath}.download`;

if(!fs.existsSync(FILE_PATH)){
fs.mkdirSync(FILE_PATH,{recursive:true});
}

const _0x47887a=fs.createWriteStream(tempFilePath);

_0x8815b({
method:"\x67\x65\x74",
url:fileUrl,
responseType:"\x73\x74\x72\x65\x61\x6d",
})
.then(response=>{
response.data.pipe(_0x47887a);

_0x47887a.on("\x66\x69\x6e\x69\x73\x68",()=>{
_0x47887a.close((closeError)=>{
if(closeError){
const errorMessage=`Download ${path.basename(filePath)} failed: ${closeError.message}`;
fs.unlink(tempFilePath,()=>{});
console.error(errorMessage);
callback(errorMessage);
return;
}
try{
fs.renameSync(tempFilePath,filePath);
} catch(renameError){
const errorMessage=`Download ${path.basename(filePath)} failed: ${renameError.message}`;
fs.unlink(tempFilePath,()=>{});
console.error(errorMessage);
callback(errorMessage);
return;
}
console.log(`Download ${path.basename(filePath)} successfully`);
callback(null,filePath);
});
});

_0x47887a.on("\x65\x72\x72\x6f\x72",err=>{
fs.unlink(tempFilePath,()=>{});
const errorMessage=`Download ${path.basename(filePath)} failed: ${err.message}`;
console.error(errorMessage);
callback(errorMessage);
});
})
.catch(err=>{
fs.unlink(tempFilePath,()=>{});
const errorMessage=`Download ${path.basename(filePath)} failed: ${err.message}`;
console.error(errorMessage);
callback(errorMessage);
});
}

async function _0x19306a(){
const _0x6089b=_0x244fcc();
const _0x1e21ea=_0x22753a(_0x6089b);

if(_0x1e21ea.length===0){
console.log(`Can't find a file for the current architecture`);
return;
}

const _0x19ce9b=_0x1e21ea.map(fileInfo=>{
return new Promise((resolve,_0x359d0c)=>{
const _0x43352a=(_0x450fba)=>{
_0x18923a(fileInfo.fileName,fileInfo.fileUrls[_0x450fba],(err,filePath)=>{
if(!err){
resolve(filePath);
return;
}

if(_0x450fba+1<fileInfo.fileUrls.length){
console.log(`Retrying ${path.basename(fileInfo.fileName)} from backup source`);
_0x43352a(_0x450fba+1);
return;
}

_0x359d0c(err);
});
};

_0x43352a(0);
});
});

try{
await Promise.all(_0x19ce9b);
} catch(err){
console.error("\x45\x72\x72\x6f\x72\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x69\x6e\x67\x20\x66\x69\x6c\x65\x73\x3a",err);
return;
}

function _0x7e32a(_0x1c475b){
const newPermissions=0o775;
_0x1c475b.forEach(absoluteFilePath=>{
if(fs.existsSync(absoluteFilePath)){
try{
fs.chmodSync(absoluteFilePath,newPermissions);
console.log(`Empowerment success for ${absoluteFilePath}: ${newPermissions.toString(8)}`);
} catch(err){
console.error(`Empowerment failed for ${absoluteFilePath}: ${err}`);
}
}
});
}
const _0x1d83ba=NEZHA_PORT?[_0x2ed0fa,webPath,botPath]:[_0x30ab8c,webPath,botPath];
_0x7e32a(_0x1d83ba);

if(NEZHA_SERVER&&NEZHA_KEY){
if(!NEZHA_PORT){
const port=NEZHA_SERVER.includes("\x3a")?NEZHA_SERVER.split("\x3a").pop():'';
const _0x4296fa=new Set(["\x34\x34\x33","\x38\x34\x34\x33","\x32\x30\x39\x36","\x32\x30\x38\x37","\x32\x30\x38\x33","\x32\x30\x35\x33"]);
const nezhatls=_0x4296fa.has(port)?'true':"\x66\x61\x6c\x73\x65";
const _0xfeb9b=`
client_secret: ${NEZHA_KEY}
debug: false
disable_auto_update: true
disable_command_execute: false
disable_force_update: true
disable_nat: false
disable_send_query: false
gpu: false
insecure_tls: true
ip_report_period: 1800
report_delay: 4
server: ${NEZHA_SERVER}
skip_connection_count: true
skip_procs_count: true
temperature: false
tls: ${nezhatls}
use_gitee_to_upgrade: false
use_ipv6_country_code: false
uuid: ${UUID}`;

fs.writeFileSync(path.join(FILE_PATH,"\x63\x6f\x6e\x66\x69\x67\x2e\x79\x61\x6d\x6c"),_0xfeb9b);

_0x2a7daa.startChild("\x6e\x65\x7a\x68\x61",path.resolve(_0x30ab8c),["\x2d\x63",path.resolve(FILE_PATH,"\x63\x6f\x6e\x66\x69\x67\x2e\x79\x61\x6d\x6c")]);
console.log(`${phpName} is running`);
await new Promise((resolve)=>setTimeout(resolve,1000));
} else{
let _0x4cc3a='';
const _0x4296fa=["\x34\x34\x33","\x38\x34\x34\x33","\x32\x30\x39\x36","\x32\x30\x38\x37","\x32\x30\x38\x33","\x32\x30\x35\x33"];
if(_0x4296fa.includes(NEZHA_PORT)){
_0x4cc3a="\x2d\x2d\x74\x6c\x73";
}
_0x2a7daa.startChild("\x6e\x65\x7a\x68\x61",path.resolve(_0x2ed0fa),[
"\x2d\x73",`${NEZHA_SERVER}:${NEZHA_PORT}`,
"\x2d\x70",NEZHA_KEY,
...(_0x4cc3a?["\x2d\x2d\x74\x6c\x73"]:[]),
"\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x61\x75\x74\x6f\x2d\x75\x70\x64\x61\x74\x65","\x2d\x2d\x72\x65\x70\x6f\x72\x74\x2d\x64\x65\x6c\x61\x79","\x34","\x2d\x2d\x73\x6b\x69\x70\x2d\x63\x6f\x6e\x6e","\x2d\x2d\x73\x6b\x69\x70\x2d\x70\x72\x6f\x63\x73"
]);
console.log(`${npmName} is running`);
await new Promise((resolve)=>setTimeout(resolve,1000));
}
} else{
console.log("\x4e\x45\x5a\x48\x41\x20\x76\x61\x72\x69\x61\x62\x6c\x65\x20\x69\x73\x20\x65\x6d\x70\x74\x79\x2c\x73\x6b\x69\x70\x20\x72\x75\x6e\x6e\x69\x6e\x67");
}

_0x2a7daa.startChild("\x78\x72\x61\x79",path.resolve(webPath),["\x2d\x63",path.resolve(FILE_PATH,"\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e")]);
console.log(`${webName} is running`);
await new Promise((resolve)=>setTimeout(resolve,1000));

if(fs.existsSync(botPath)){
const _0x3460aa=!(ARGO_AUTH&&ARGO_DOMAIN);
let cfdArgs;

if(ARGO_AUTH.match(/^[A-Z0-9a-z=]{120,250}$/)){
cfdArgs=["\x74\x75\x6e\x6e\x65\x6c","\x2d\x2d\x65\x64\x67\x65\x2d\x69\x70\x2d\x76\x65\x72\x73\x69\x6f\x6e","\x61\x75\x74\x6f","\x2d\x2d\x6e\x6f\x2d\x61\x75\x74\x6f\x75\x70\x64\x61\x74\x65","\x2d\x2d\x70\x72\x6f\x74\x6f\x63\x6f\x6c","\x68\x74\x74\x70\x32","\x72\x75\x6e","\x2d\x2d\x74\x6f\x6b\x65\x6e",ARGO_AUTH];
} else if(ARGO_AUTH.match(/TunnelSecret/)){
cfdArgs=["\x74\x75\x6e\x6e\x65\x6c","\x2d\x2d\x65\x64\x67\x65\x2d\x69\x70\x2d\x76\x65\x72\x73\x69\x6f\x6e","\x61\x75\x74\x6f","\x2d\x2d\x63\x6f\x6e\x66\x69\x67",path.resolve(FILE_PATH,"\x74\x75\x6e\x6e\x65\x6c\x2e\x79\x6d\x6c"),"\x72\x75\x6e"];
} else{
cfdArgs=["\x74\x75\x6e\x6e\x65\x6c","\x2d\x2d\x65\x64\x67\x65\x2d\x69\x70\x2d\x76\x65\x72\x73\x69\x6f\x6e","\x61\x75\x74\x6f","\x2d\x2d\x6e\x6f\x2d\x61\x75\x74\x6f\x75\x70\x64\x61\x74\x65","\x2d\x2d\x70\x72\x6f\x74\x6f\x63\x6f\x6c","\x68\x74\x74\x70\x32",
"\x2d\x2d\x6c\x6f\x67\x66\x69\x6c\x65",path.resolve(_0xafa1b),"\x2d\x2d\x6c\x6f\x67\x6c\x65\x76\x65\x6c","\x69\x6e\x66\x6f","\x2d\x2d\x75\x72\x6c",`http://localhost:${ARGO_PORT}`];
}

_0x2a7daa.startChild("\x74\x75\x6e\x6e\x65\x6c",path.resolve(botPath),cfdArgs,{

cleanBefore:_0x3460aa?[path.resolve(_0xafa1b)]:[]
});

if(_0x3460aa){

let regenCount=0;
_0x2a7daa.onRestart("\x74\x75\x6e\x6e\x65\x6c",()=>{
const entry=_0x2a7daa.children.get("\x74\x75\x6e\x6e\x65\x6c");
if(entry&&String(entry.lastExit||'').startsWith("\x73\x70\x61\x77\x6e\x2d\x65\x72\x72\x6f\x72")){
_0x2a7daa.klog("\u96a7\u9053\u4e3a\u542f\u52a8\u5931\u8d25\u800c\u975e\u8fd0\u884c\u671f\u5d29\u6e83\uff0c\u8df3\u8fc7\u8ba2\u9605\u91cd\u5efa");
return;
}
if(regenCount>=5){
_0x2a7daa.klog("\u8ba2\u9605\u91cd\u5efa\u5df2\u8fbe\u4e0a\u9650\x20\x35\x20\u6b21\uff0c\u505c\u6b62\u81ea\u52a8\u91cd\u5efa");
return;
}
regenCount+=1;
_0x2a7daa.klog(`隧道已重建，重新生成订阅（第 ${regenCount} 次）`);
_0x1b0afa();
});
}

console.log(`${botName} is running`);
await new Promise((resolve)=>setTimeout(resolve,2000));
}
await new Promise((resolve)=>setTimeout(resolve,5000));
}

function _0x22753a(_0x6089b){
const baseUrl=_0x6089b==="\x61\x72\x6d"?'https://arm64.oooen.com':"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d\x64\x36\x34\x2e\x6f\x6f\x6f\x65\x6e\x2e\x63\x6f\x6d";
const backupUrl=_0x6089b==="\x61\x72\x6d"?'https://arm64.ssss.nyc.mn':"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d\x64\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e\x79\x63\x2e\x6d\x6e";
const _0x9bdba=[
{fileName:webPath,fileUrls:[`${baseUrl}/web`,`${backupUrl}/web`]},
{fileName:botPath,fileUrls:[`${baseUrl}/bot`,`${backupUrl}/bot`]}
];

if(NEZHA_SERVER&&NEZHA_KEY){
if(NEZHA_PORT){
_0x9bdba.unshift({
fileName:_0x2ed0fa,
fileUrls:[`${baseUrl}/agent`,`${backupUrl}/agent`]
});
} else{
_0x9bdba.unshift({
fileName:_0x30ab8c,
fileUrls:[`${baseUrl}/v1`,`${backupUrl}/v1`]
});
}
}

return _0x9bdba;
}

function _0x744fa(){
if(!ARGO_AUTH||!ARGO_DOMAIN){
console.log("\x41\x52\x47\x4f\x5f\x44\x4f\x4d\x41\x49\x4e\x20\x6f\x72\x20\x41\x52\x47\x4f\x5f\x41\x55\x54\x48\x20\x69\x73\x20\x65\x6d\x70\x74\x79\x2c\x20\x75\x73\x65\x20\x71\x75\x69\x63\x6b\x20\x74\x75\x6e\x6e\x65\x6c\x73");
return;
}

if(ARGO_AUTH.includes("\x54\x75\x6e\x6e\x65\x6c\x53\x65\x63\x72\x65\x74")){
fs.writeFileSync(path.join(FILE_PATH,"\x74\x75\x6e\x6e\x65\x6c\x2e\x6a\x73\x6f\x6e"),ARGO_AUTH);
const _0x43d35b=`
  tunnel: ${ARGO_AUTH.split('"')[11]}
  credentials-file: ${path.join(FILE_PATH, 'tunnel.json')}
  protocol: http2

  ingress:
    - hostname: ${ARGO_DOMAIN}
      service: http://localhost:${ARGO_PORT}
      originRequest:
        noTLSVerify: true
    - service: http_status:404
  `;
fs.writeFileSync(path.join(FILE_PATH,"\x74\x75\x6e\x6e\x65\x6c\x2e\x79\x6d\x6c"),_0x43d35b);
} else{
console.log(`Using token connect to tunnel, please set ${ARGO_PORT} in clouudflare`);
}
}

async function _0x46ea4c(timeoutMs=30000){
const _0x12645b=Date.now()+timeoutMs;
while(Date.now()<_0x12645b){
try{
if(fs.existsSync(_0xafa1b)){
const _0x1089cc=fs.readFileSync(_0xafa1b,"\x75\x74\x66\x2d\x38");
if(/trycloudflare\.com/.test(_0x1089cc)) return _0x1089cc;
}
} catch(error){

}
await new Promise((resolve)=>setTimeout(resolve,1000));
}
return '';
}

async function _0x1b0afa(depth=0){
let argoDomain;

if(ARGO_AUTH&&ARGO_DOMAIN){
argoDomain=ARGO_DOMAIN;
console.log("\x41\x52\x47\x4f\x5f\x44\x4f\x4d\x41\x49\x4e\x3a",argoDomain);
await _0x1f5e4c(argoDomain);
} else{
try{
const _0x1ba92a=await _0x46ea4c();
const _0x2e32cc=_0x1ba92a.split('\n');
const _0x6a6cc=[];
_0x2e32cc.forEach((_0x2d949b)=>{
const _0x17f40c=_0x2d949b.match(/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
if(_0x17f40c){
const _0x1755db=_0x17f40c[1];
_0x6a6cc.push(_0x1755db);
}
});

if(_0x6a6cc.length>0){
argoDomain=_0x6a6cc[0];
console.log("\x41\x72\x67\x6f\x44\x6f\x6d\x61\x69\x6e\x3a",argoDomain);
await _0x1f5e4c(argoDomain);
} else{
console.log("\x41\x72\x67\x6f\x44\x6f\x6d\x61\x69\x6e\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x2c\x20\x72\x65\x73\x74\x61\x72\x74\x69\x6e\x67\x20\x74\x75\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x6f\x62\x74\x61\x69\x6e\x20\x41\x72\x67\x6f\x44\x6f\x6d\x61\x69\x6e");
if(depth>=2){
console.error("\x53\x74\x69\x6c\x6c\x20\x6e\x6f\x20\x41\x72\x67\x6f\x44\x6f\x6d\x61\x69\x6e\x20\x61\x66\x74\x65\x72\x20\x32\x20\x72\x65\x74\x72\x69\x65\x73\x2c\x20\x67\x69\x76\x65\x20\x75\x70\x20\x72\x65\x67\x65\x6e\x65\x72\x61\x74\x69\x6e\x67\x20\x6c\x69\x6e\x6b\x73");
return;
}
try{
if(fs.existsSync(_0xafa1b)) fs.unlinkSync(_0xafa1b);
} catch(error){

}
_0x2a7daa.restartChild("\x74\x75\x6e\x6e\x65\x6c");
await new Promise((resolve)=>setTimeout(resolve,25000));
await _0x1b0afa(depth+1);
}
} catch(error){
console.error("\x45\x72\x72\x6f\x72\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x62\x6f\x6f\x74\x2e\x6c\x6f\x67\x3a",error);
}
}
}

async function _0x23136a(){
try{
const response1=await _0x8815b.get("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x69\x70\x2e\x73\x62\x2f\x67\x65\x6f\x69\x70",{headers:{'User-Agent':"\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30",timeout:3000}});
if(response1.data&&response1.data.country_code&&response1.data.isp){
return `${response1.data.country_code}-${response1.data.isp}`.replace(/\s+/g,"\x5f");
}
} catch(error){
try{
const response2=await _0x8815b.get("\x68\x74\x74\x70\x3a\x2f\x2f\x69\x70\x2d\x61\x70\x69\x2e\x63\x6f\x6d\x2f\x6a\x73\x6f\x6e",{headers:{'User-Agent':"\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30",timeout:3000}});
if(response2.data&&response2.data.status==="\x73\x75\x63\x63\x65\x73\x73"&&response2.data.countryCode&&response2.data.org){
return `${response2.data.countryCode}-${response2.data.org}`.replace(/\s+/g,"\x5f");
}
} catch(error){

}
}
return "\x55\x6e\x6b\x6e\x6f\x77\x6e";
}

async function _0x23b19b(){
let _0x3a8e8c='';
try{
const _0x2804ea=await _0x8815b.get("\x68\x74\x74\x70\x3a\x2f\x2f\x69\x70\x76\x34\x2e\x69\x70\x2e\x73\x62",{timeout:3000});
_0x3a8e8c=_0x2804ea.data.trim();
} catch(err){
try{
_0x3a8e8c=execSync("\x63\x75\x72\x6c\x20\x2d\x73\x6d\x20\x33\x20\x69\x70\x76\x34\x2e\x69\x70\x2e\x73\x62").toString().trim();
} catch(_0x11c62a){
try{
const ipv6Response=await _0x8815b.get("\x68\x74\x74\x70\x3a\x2f\x2f\x69\x70\x76\x36\x2e\x69\x70\x2e\x73\x62",{timeout:3000});
_0x3a8e8c=`[${ipv6Response.data.trim()}]`;
} catch(_0x28a31b){
try{
_0x3a8e8c=`[${execSync('curl -sm 3 ipv6.ip.sb').toString().trim()}]`;
} catch(_0x29414c){
console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x49\x50\x20\x61\x64\x64\x72\x65\x73\x73\x3a",_0x29414c.message);
}
}
}
}
return _0x3a8e8c;
}

async function _0x1f5e4c(argoDomain){
const ISP=await _0x23136a();
const nodeName=NAME?`${NAME}-${ISP}`:ISP;
const SERVER_IP=await _0x23b19b();

return new Promise((resolve)=>{
setTimeout(()=>{
const VMESS={v:"\x32",ps:`${nodeName}`,add:CFIP,port:CFPORT,id:UUID,aid:"\x30",scy:"\x61\x75\x74\x6f",net:"\x77\x73",type:"\x6e\x6f\x6e\x65",host:argoDomain,path:"\x2f\x76\x6d\x65\x73\x73\x2d\x61\x72\x67\x6f\x3f\x65\x64\x3d\x32\x35\x36\x30",tls:"\x74\x6c\x73",sni:argoDomain,alpn:'',fp:"\x66\x69\x72\x65\x66\x6f\x78"};
let subTxt=`
vless://${UUID}@${CFIP}:${CFPORT}?encryption=none&security=tls&sni=${argoDomain}&fp=firefox&type=ws&host=${argoDomain}&path=%2Fvless-argo%3Fed%3D2560#${nodeName}

vmess://${Buffer.from(JSON.stringify(VMESS)).toString('base64')}

trojan://${UUID}@${CFIP}:${CFPORT}?security=tls&sni=${argoDomain}&fp=firefox&type=ws&host=${argoDomain}&path=%2Ftrojan-argo%3Fed%3D2560#${nodeName}
    `;

if(_0x29df7a(HY2_PORT)){
const fingerprint=_0x21d70c(certPath);
const fingerprintParam=fingerprint?`&pinSHA256=${encodeURIComponent(fingerprint)}`:'';
const _0x262a5b=`\nhysteria2://${UUID}@${SERVER_IP}:${HY2_PORT}/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none${fingerprintParam}#${nodeName}`;
subTxt+=_0x262a5b;
}

if(_0x29df7a(REALITY_PORT)){
const _0x464c1b=`\nvless://${UUID}@${SERVER_IP}:${REALITY_PORT}?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=${publicKey}&type=tcp&headerType=none#${nodeName}`;
subTxt+=_0x464c1b;
}

if(_0x29df7a(S5_PORT)){
const S5_AUTH=Buffer.from(`${UUID.substring(0, 8)}:${UUID.slice(-12)}`).toString("\x62\x61\x73\x65\x36\x34");
const _0x3815cc=`\nsocks://${S5_AUTH}@${SERVER_IP}:${S5_PORT}#${nodeName}`;
subTxt+=_0x3815cc;
}

console.log(Buffer.from(subTxt).toString("\x62\x61\x73\x65\x36\x34"));
fs.writeFileSync(_0x401e3a,Buffer.from(subTxt).toString("\x62\x61\x73\x65\x36\x34"));
fs.writeFileSync(listPath,subTxt,"\x75\x74\x66\x38");
console.log(`${FILE_PATH}/sub.txt saved successfully`);

_0x3f800c=Buffer.from(subTxt).toString("\x62\x61\x73\x65\x36\x34");
_0x44718c();
resolve(subTxt);
},2000);
});
}

async function _0x44718c(){
if(UPLOAD_URL&&PROJECT_URL){
const _0x40bc6a=`${PROJECT_URL}/${SUB_PATH}`;
const jsonData={
subscription:[_0x40bc6a]
};
try{
const response=await _0x8815b.post(`${UPLOAD_URL}/api/add-subscriptions`,jsonData,{
headers:{
'Content-Type':"\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
}
});

if(response&&response.status===200){
console.log("\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x20\x75\x70\x6c\x6f\x61\x64\x65\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79");
return response;
} else{
return null;
}
} catch(error){
if(error.response){
if(error.response.status===400){

}
}
}
} else if(UPLOAD_URL){
if(!fs.existsSync(listPath)) return;
const _0x1089cc=fs.readFileSync(listPath,"\x75\x74\x66\x2d\x38");
const nodes=_0x1089cc.split('\n').filter(_0x2d949b=>/(vless|vmess|trojan|hysteria2|socks):\/\//.test(_0x2d949b));

if(nodes.length===0) return;

const jsonData=JSON.stringify({nodes});

try{
const response=await _0x8815b.post(`${UPLOAD_URL}/api/add-nodes`,jsonData,{
headers:{'Content-Type':"\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"}
});
if(response&&response.status===200){
console.log("\x4e\x6f\x64\x65\x73\x20\x75\x70\x6c\x6f\x61\x64\x65\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79");
return response;
} else{
return null;
}
} catch(error){
return null;
}
} else{

return;
}
}

function _0xe110c(){
setTimeout(()=>{
const _0x91f8c=()=>{
console.clear();
_0x56a6a("\x41\x70\x70\x20\x69\x73\x20\x72\x75\x6e\x6e\x69\x6e\x67");
console.log("\x54\x68\x61\x6e\x6b\x20\x79\x6f\x75\x20\x66\x6f\x72\x20\x75\x73\x69\x6e\x67\x20\x74\x68\x69\x73\x20\x73\x63\x72\x69\x70\x74\x2c\x20\x65\x6e\x6a\x6f\x79\x21");
};

if(_0x2a7daa.cfg.useWatchdog){
_0x91f8c();
return;
}

const filesToDelete=[_0xafa1b,configPath,webPath,botPath,listPath,certPath,keyPath];

if(NEZHA_PORT){
filesToDelete.push(_0x2ed0fa);
} else if(NEZHA_SERVER&&NEZHA_KEY){
filesToDelete.push(_0x30ab8c);
}

if(process.platform==="\x77\x69\x6e\x33\x32"){
exec(`del /f /q ${filesToDelete.join(' ')} > nul 2>&1`,()=>_0x91f8c());
} else{
exec(`rm -rf ${filesToDelete.join(' ')} >/dev/null 2>&1`,()=>_0x91f8c());
}
},90000);
}
_0xe110c();

async function _0x39522a(){
if(!BOT_TOKEN||!CHAT_ID){
console.log("\x54\x47\x20\x76\x61\x72\x69\x61\x62\x6c\x65\x73\x20\x69\x73\x20\x65\x6d\x70\x74\x79\x2c\x20\x53\x6b\x69\x70\x70\x69\x6e\x67\x20\x70\x75\x73\x68\x20\x6e\x6f\x64\x65\x73\x20\x74\x6f\x20\x54\x47");
return;
}
try{
const message=fs.readFileSync(_0x401e3a,"\x75\x74\x66\x38");
const url=`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
const escapedName=NAME.replace(/[_*\[\]()~`>#+=|{}.!-]/g,'\\$&');
const params={
chat_id:CHAT_ID,
text:`**${escapedName}节点推送**\n\`\`\`${message}\`\`\``,
parse_mode:"\x4d\x61\x72\x6b\x64\x6f\x77\x6e\x56\x32"
};
await _0x8815b.post(url,null,{params});
console.log("\x54\x65\x6c\x65\x67\x72\x61\x6d\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x73\x65\x6e\x74\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79");
} catch(error){
console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x6e\x64\x20\x54\x65\x6c\x65\x67\x72\x61\x6d\x20\x6d\x65\x73\x73\x61\x67\x65\x3a",error.message);
}
}

async function _0x2f1aa(){
if(!AUTO_ACCESS||!PROJECT_URL){
console.log("\x53\x6b\x69\x70\x70\x69\x6e\x67\x20\x61\x64\x64\x69\x6e\x67\x20\x61\x75\x74\x6f\x6d\x61\x74\x69\x63\x20\x61\x63\x63\x65\x73\x73\x20\x74\x61\x73\x6b");
return;
}

try{
const response=await _0x8815b.post("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x6f\x6f\x6f\x2e\x73\x65\x72\x76\x30\x30\x2e\x6e\x65\x74\x2f\x61\x64\x64\x2d\x75\x72\x6c",{
url:PROJECT_URL
},{
headers:{
'Content-Type':"\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
}
});
console.log(`automatic access task added successfully`);
return response;
} catch(error){
console.error(`Add automatic access task faild: ${error.message}`);
return null;
}
}

async function _0x3e43aa(){
try{
_0x744fa();
_0x143eea();
_0xeaf3a();

if(_0x29df7a(REALITY_PORT)){
_0x1ffc7a();
}

if(_0x29df7a(HY2_PORT)){
_0x1a6ccc(certPath,keyPath);
}

await _0x1ec01b();
await _0x19306a();
await _0x1b0afa();
await _0x39522a();
await _0x2f1aa();
} catch(error){
console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x73\x74\x61\x72\x74\x73\x65\x72\x76\x65\x72\x3a",error);
}
}
_0x3e43aa().catch(error=>{
console.error("\x55\x6e\x68\x61\x6e\x64\x6c\x65\x64\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x73\x74\x61\x72\x74\x73\x65\x72\x76\x65\x72\x3a",error);
});

const _0x39f05b=_0x258c2a.createServer(async(_0x363b3a,_0x36d96a)=>{
const _0x45adea=_0x363b3a.url.split("\x3f")[0];

if(_0x45adea===`/${SUB_PATH}`){
if(_0x3f800c){
_0x36d96a.writeHead(200,{'Content-Type':"\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38"});
_0x36d96a.end(_0x3f800c);
} else{
try{
const _0x1ba92a=fs.readFileSync(_0x401e3a,"\x75\x74\x66\x2d\x38");
_0x36d96a.writeHead(200,{'Content-Type':"\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38"});
_0x36d96a.end(_0x1ba92a);
} catch(err){
_0x36d96a.writeHead(503,{'Content-Type':"\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38"});
_0x36d96a.end("\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x20\x63\x6f\x6e\x74\x65\x6e\x74\x20\x6e\x6f\x74\x20\x79\x65\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2c\x20\x70\x6c\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x6c\x61\x74\x65\x72\x2e");
}
}
return;
}

if(_0x45adea==="\x2f"){
try{
const filePath=path.join(__dirname,"\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c");
const data=await fs.promises.readFile(filePath,"\x75\x74\x66\x38");
_0x36d96a.writeHead(200,{'Content-Type':"\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38"});
_0x36d96a.end(data);
} catch(err){
_0x36d96a.writeHead(200,{'Content-Type':"\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38"});
_0x36d96a.end("\x48\x65\x6c\x6c\x6f\x20\x77\x6f\x72\x6c\x64\x21\x3c\x62\x72\x3e\x3c\x62\x72\x3e\x59\x6f\x75\x20\x63\x61\x6e\x20\x61\x63\x63\x65\x73\x73\x20\x2f\x7b\x53\x55\x42\x5f\x50\x41\x54\x48\x7d\x28\x44\x65\x66\x61\x75\x6c\x74\x3a\x20\x2f\x73\x75\x62\x29\x20\x74\x6f\x20\x67\x65\x74\x20\x79\x6f\x75\x72\x20\x6e\x6f\x64\x65\x73\x21");
}
return;
}

if(_0x45adea==="\x2f\x68\x65\x61\x6c\x74\x68"){
_0x36d96a.writeHead(200,{'Content-Type':"\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38"});
_0x36d96a.end(JSON.stringify({ok:true,..._0x2a7daa.status()}));
return;
}

_0x36d96a.writeHead(404,{'Content-Type':"\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38"});
_0x36d96a.end("\x4e\x6f\x74\x20\x46\x6f\x75\x6e\x64");
});

_0x39f05b.listen(PORT,()=>{
_0x56a6a(`http server is running on ${PORT}!`);
_0x2a7daa.start();
});
