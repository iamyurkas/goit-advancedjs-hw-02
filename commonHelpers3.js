import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-651d7991.js";const n={form:document.querySelector("form"),submitButton:document.querySelector("button"),amount:document.querySelector('[name="amount"]'),step:document.querySelector('[name="step"]'),delay:document.querySelector('[name="delay"]')};n.submitButton.addEventListener("click",a);function u(t,e){return new Promise((r,m)=>{const o=Math.random()>.3;setTimeout(()=>{o?r({position:t,delay:e}):m({position:t,delay:e})},e)})}function i({position:t,delay:e}){s.success({message:`✅ Fulfilled promise ${t} in ${e}ms`,position:"topRight"})}function c({position:t,delay:e}){s.error({message:`❌ Rejected promise ${t} in ${e}ms`,position:"topRight"})}function a(t){t.preventDefault();let e=+n.delay.value,r=+n.amount.value,m=+n.step.value;for(let o=1;o<=r;o+=1)u(o,e).then(i).catch(c),e+=m;n.form.reset()}
//# sourceMappingURL=commonHelpers3.js.map