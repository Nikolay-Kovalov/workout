!function(){var o=document.getElementById("color_button"),e=document.querySelector(".colorText"),n=document.querySelector(".colorHex");console.log(n.firstElementChild),o.addEventListener("click",(function(){var o=document.querySelector(".form-control").value.trim(),e=r.onload();console.log(e);var n=e.find((function(e){var n=e.name,r=e.hex;return n.toLowerCase()===o.toLowerCase()||r===o.toLowerCase()}));console.log(o),console.log(n),n?document.body.style.backgroundColor=n.hex:alert("there is no such a color in this array")}));var r=new XMLHttpRequest;r.open("GET","https://unpkg.com/color-name-list@10.10.0/dist/colornames.json"),r.responseType="json",r.onload=function(){var o=r.response;if(null===n.firstElementChild&&null===e.firstElementChild){var t=o.map((function(o){var e=o.name;return'<li class="color">'.concat(e,"</li>")})).join(""),l=function(o){return o.map((function(o){var e=o.hex;return'<li class="color">'.concat(e,"</li>")})).join("")}(o);e.innerHTML=t,n.innerHTML=l}return console.log(o),o},r.send()}();
//# sourceMappingURL=btn.fb0ad637.js.map