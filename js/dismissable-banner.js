window.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("[data-banner]").forEach((e=>{const t=`hideBanner/${e.getAttribute("data-banner")}`;localStorage.getItem(t)||e.classList.remove("Banner--hidden");const n=e.querySelector("[data-banner-dismiss]");n&&n.addEventListener("click",(()=>{e.classList.add("Banner--hiding"),localStorage.setItem(t,"true"),setTimeout((()=>e.classList.add("Banner--hidden")),300)}))}))}));