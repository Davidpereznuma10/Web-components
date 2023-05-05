let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myFooter extends HTMLElement{
    static async component(){
        return await(await fetch(pathName.replace('.js','.html'))).text();}
        constructor(){
            super();
            this.attachShadow({mode:'open'});
        };
        handleEvent(e){
            (e.type==='click'? this.event(e):'')
        };
        event(){
            window.alert('click on the Footer')
        };
        connectedCallback(){
            Promise.resolve(myFooter.component()).then(html=>{
                this.shadowRoot.innerHTML=html;
                let footer = this.shadowRoot.querySelector('button');
                footer.addEventListener('click', this )
            })
        }
}
customElements.define(name, myFooter)