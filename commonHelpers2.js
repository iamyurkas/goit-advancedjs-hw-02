import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l,i as f}from"./assets/vendor-651d7991.js";const e={input:document.querySelector("#datetime-picker"),startButton:document.querySelector("button[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};e.startButton.disabled=!0;e.startButton.addEventListener("click",y);let a=null;const m={title:"Error",message:"Please choose a date in the future",titleColor:"#ffffff",messageColor:"#ffffff",color:"#ff0000",position:"topRight"},h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),t[0]<=new Date?f.show(m):(a=t[0].getTime(),e.startButton.disabled=!1,e.input.disabled=!1)}};l("input#datetime-picker",h);function y(){e.startButton.disabled=!0,e.input.disabled=!0,setInterval(()=>{const t=new Date().getTime(),o=a-t;g(p(o))},1e3)}function p(t){const u=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:i,minutes:c,seconds:d}}const n=t=>t.toString().padStart(2,"0");function g({days:t,hours:o,minutes:r,seconds:s}){e.days.textContent=n(t),e.hours.textContent=n(o),e.minutes.textContent=n(r),e.seconds.textContent=n(s)}
//# sourceMappingURL=commonHelpers2.js.map