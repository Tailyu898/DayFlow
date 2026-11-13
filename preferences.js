export const LANGUAGES=[['zh-Hant','繁體中文'],['zh-Hans','简体中文'],['en','English'],['ja','日本語'],['ko','한국어']];
export const THEMES=['forest','ocean','lavender','rose','sand','night','red','yellow','mono','custom'];
export const THEME_NAMES=['森林綠','海洋藍','薰衣草紫','玫瑰粉','暖沙色','夜間深色','楓葉紅','暖陽黃','黑白色調','自訂布景'];
export const DEFAULT_COLORS={primary:'#246451',background:'#f7f7f2'};
export const DEFAULT_NIGHT_COLOR='#a5d5bd';
export const NIGHT_COLORS=[['經典薄荷',DEFAULT_NIGHT_COLOR],['森林綠','#246451'],['海洋藍','#245b87'],['薰衣草紫','#685291'],['玫瑰粉','#974f68'],['暖沙色','#886032'],['楓葉紅','#a62f38'],['暖陽黃','#f4cf48'],['黑白色調','#ffffff']];
export const DEFAULT_PREFERENCES={language:'zh-Hant',theme:'forest',customColors:DEFAULT_COLORS,nightColor:DEFAULT_NIGHT_COLOR};
const validColor=s=>typeof s==='string'&&/^#[0-9a-f]{6}$/i.test(s);
export function normalizePreferences(value){return {language:LANGUAGES.some(([id])=>id===value?.language)?value.language:'zh-Hant',theme:THEMES.includes(value?.theme)?value.theme:'forest',customColors:Object.fromEntries(Object.entries(DEFAULT_COLORS).map(([key,color])=>[key,validColor(value?.customColors?.[key])?value.customColors[key].toLowerCase():color])),nightColor:validColor(value?.nightColor)?value.nightColor.toLowerCase():DEFAULT_NIGHT_COLOR};}
export function loadPreferences(storage){try{storage??=globalThis.localStorage;return normalizePreferences(JSON.parse(storage.getItem('dayflow-preferences-v1')||'null'));}catch{return {...DEFAULT_PREFERENCES};}}
export let preferences=loadPreferences();
const rgb=hex=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));
export function luminance(color){return rgb(color).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0);}
export function contrast(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
export function mix(a,b,ratio){return '#'+rgb(a).map((v,i)=>Math.round(v*(1-ratio)+rgb(b)[i]*ratio).toString(16).padStart(2,'0')).join('');}
function ink(background){return contrast('#000000',background)>=contrast('#ffffff',background)?'#000000':'#ffffff';}
function readable(color,background){const target=ink(background);for(let i=0;i<=20;i++){const candidate=mix(color,target,i/20);if(contrast(candidate,background)>=4.5)return candidate;}return target;}
export function customPalette(colors){const normalized=normalizePreferences({customColors:colors}).customColors,p=normalized.primary,b=normalized.background,text=ink(b),dark=text==='#ffffff',surface=mix(b,dark?'#000000':'#ffffff',dark?.12:.65),link=readable(p,b);
 const palette={'--canvas':b,'--ink':text,'--surface':surface,'--sidebar':mix(b,p,.07),'--soft':mix(b,p,.07),'--hover':mix(b,p,.12),'--active':mix(b,p,.15),'--active-ink':readable(p,mix(b,p,.15)),'--active-line':mix(b,p,.4),'--green':p,'--green-hover':mix(p,ink(p)==='#ffffff'?'#000000':'#ffffff',.08),'--muted':mix(text,b,.25),'--line':mix(b,text,.23),'--field':surface,'--field-line':mix(b,text,.35),'--note':mix(b,p,.08),'--note-line':mix(b,p,.25),'--done':mix(b,p,.05),'--accent':p,'--button-ink':ink(p),'--link-ink':link,'--ring':mix(b,p,.13),'--ring-soft':mix(b,p,.04),'--ring-edge':mix(b,p,.08),'--warning':dark?'#433323':'#fff4e8','--warning-ink':dark?'#f0c48d':'#855421','--success':dark?'#2d3f35':'#edf4e9','--success-ink':dark?'#c1dfb3':'#47633d','--danger':dark?'#ffb6a9':'#a14435','color-scheme':dark?'dark':'light'};
 for(const key of ['--sidebar','--soft','--hover','--active','--note','--done'])if(contrast(text,palette[key])<4.5)palette[key]=b;
 palette['--muted']=readable(mix(text,b,.25),b);palette['--active-ink']=readable(p,palette['--active']);return palette;
}
const customProperties=Object.keys(customPalette(DEFAULT_COLORS));
export function nightPalette(color){const chosen=validColor(color)?color:DEFAULT_NIGHT_COLOR,p=readable(chosen,'#34444c'),buttonInk=ink(p);return {'--green':p,'--green-hover':mix(p,buttonInk==='#ffffff'?'#000000':'#ffffff',.08),'--button-ink':buttonInk,'--link-ink':p,'--accent':p,'--active':mix('#232e35',p,.15),'--active-ink':p,'--active-line':mix('#232e35',p,.45),'--ring':mix('#171e23',p,.13),'--ring-soft':mix('#171e23',p,.04),'--ring-edge':mix('#171e23',p,.08)};}
export function applyPreferences(){if(!globalThis.document)return;const root=document.documentElement;root.lang=preferences.language;root.dataset.theme=preferences.theme;for(const key of customProperties)root.style.removeProperty(key);const palette=preferences.theme==='custom'?customPalette(preferences.customColors):preferences.theme==='night'?nightPalette(preferences.nightColor):null;if(palette)for(const [key,value]of Object.entries(palette))root.style.setProperty(key,value);const color={forest:'#246451',ocean:'#245b87',lavender:'#685291',rose:'#974f68',sand:'#886032',night:nightPalette(preferences.nightColor)['--green'],red:'#a62f38',yellow:'#f4cf48',mono:'#252525',custom:preferences.customColors.primary}[preferences.theme];document.querySelector('meta[name="theme-color"]')?.setAttribute('content',color);}
export function setPreferences(next,storage=globalThis.localStorage){const valid=normalizePreferences({...preferences,...next});storage.setItem('dayflow-preferences-v1',JSON.stringify(valid));preferences=valid;applyPreferences();}
export function locale(){return {'zh-Hant':'zh-TW','zh-Hans':'zh-CN',en:'en-US',ja:'ja-JP',ko:'ko-KR'}[preferences.language];}
applyPreferences();
