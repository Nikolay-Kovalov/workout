const t=document.querySelector(".input"),e=document.querySelector(".numbers_list"),n=document.querySelector(".equal"),l=document.querySelector(".on"),a=document.querySelector(".off");l.addEventListener("click",(function(){e.addEventListener("click",c),t.placeholder="0",t.value=""})),a.addEventListener("click",(function(){e.removeEventListener("click",c),t.placeholder="",t.value=""}));let u=0,r=1;const s=[];function c(e){e.target.dataset.id&&(t.placeholder="",t.value+=e.target.dataset.id),"AC"===e.target.textContent&&(t.value="",t.placeholder="0"),"+"===e.target.textContent&&(s.push(Number(t.value)),t.value=""),"*"===e.target.textContent&&(s.push(Number(t.value)),t.value="",n.classList.add("mult")),"/"===e.target.textContent&&(s.push(Number(t.value)),t.value="",n.classList.add("divide")),"-"===e.target.textContent&&(s.push(Number(t.value)),t.value="",n.classList.add("subtract")),"="===e.target.textContent&&(s.push(Number(t.value)),e.target.classList.contains("mult")?(t.value=function(...t){for(let e of t)r*=e;return r}(...s),s.length=0,r=1,n.classList.remove("mult")):e.target.classList.contains("divide")?(t.value=function(...t){let e=t[0];for(let n=1;n<t.length;n+=1)e/=t[n];return e}(...s),s.length=0,r=1,n.classList.remove("divide")):e.target.classList.contains("subtract")?(t.value=function(...t){r=t[0];for(let e=1;e<t.length;e+=1)r-=t[e];return r}(...s),s.length=0,r=1,n.classList.remove("subtract")):(t.value=function(...t){for(let e of t)u+=e;return u}(...s),s.length=0,u=0))}var o;console.log(-1===(o="https://www.tea.int").indexOf("#")?o.substr(0,o.length):o.substr(0,o.indexOf("#")));
//# sourceMappingURL=calculator.7942fa4b.js.map