let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class mySelection extends HTMLElement{
    static async component(){
        return await(await fetch(pathName.replace('.js','.html'))).text();}
        constructor(){
            super();
            this.attachShadow({mode:'open'});
        };
        handleEvent(e){
            (e.type==='click'? this.event(e):'')
        };
        event(e){
            window.alert('click on the selection')
        };
        connectedCallback(){
            Promise.resolve(mySelection.component()).then(html=>{
                this.shadowRoot.innerHTML=html;
                let selection= this.shadowRoot.querySelector('button');
                selection.addEventListener('click', this);
            })
        }
}
customElements.define(name, mySelection)