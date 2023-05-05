let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class mySection extends HTMLElement{
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
            window.alert('click on the Section')
        };
        connectedCallback(){
            Promise.resolve(mySection.component()).then(html=>{
                this.shadowRoot.innerHTML=html;
                let section = this.shadowRoot.querySelector('button');
                section.addEventListener('click', this);
            })
        }
}
customElements.define(name, mySection)