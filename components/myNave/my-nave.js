let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myNave extends HTMLElement{
    static async component(){
        return await(await fetch(pathName.replace('.js','.html'))).text();}
        constructor(){
            super();
            this.attachShadow({mode:'open'});
        };
        handleEvent(e){
            (e.type==='click'? this.event(e): '')
        };
        event(e){
            window.alert('click on the Nav')
        };
        connectedCallback(){
            Promise.resolve(myNave.component()).then(html=>{
                this.shadowRoot.innerHTML=html;
                let nav = this.shadowRoot.querySelector('button');
                nav.addEventListener('click', this);
            })
        }
}
customElements.define(name, myNave)