import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const r=document.querySelector(".feedback-form");let o={email:"",message:""};const s=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));o=e;for(const t in e)r.elements[t].value=e[t]}catch(e){console.log(e)}};s();const m=e=>{const{target:t}=e,a=t.value.trim(),l=t.name;o[l]=a,localStorage.setItem("feedback-form-state",JSON.stringify(o))};r.addEventListener("input",m);const n=e=>{e.preventDefault();const{currentTarget:t}=e;if(!o.email||!o.message){alert("Fill please all fields");return}console.log(o),t.reset(),localStorage.removeItem("feedback-form-state")};r.addEventListener("submit",n);
//# sourceMappingURL=2-form.js.map
