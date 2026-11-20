import {ui,t} from './i18n.js';
// This page's text nodes are fixed interface copy; entered notes stay in form controls.
for(const option of document.querySelectorAll('option'))option.value=option.getAttribute('value')??option.textContent;
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
const nodes=[];while(walker.nextNode()){const node=walker.currentNode;if(!node.parentElement.closest('script,style,textarea,input'))nodes.push(node);}
for(const node of nodes)node.textContent=ui(node.textContent);
for(const el of document.querySelectorAll('[placeholder],[aria-label]'))for(const attr of ['placeholder','aria-label'])if(el.hasAttribute(attr))el.setAttribute(attr,ui(el.getAttribute(attr)));
document.title=t('日序')+' · '+t('手機試用紀錄');
for(const target of document.querySelectorAll('#saved,.timestamp'))new MutationObserver(()=>{const translated=ui(target.textContent);if(translated!==target.textContent)target.textContent=translated;}).observe(target,{childList:true,characterData:true,subtree:true});
