let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myHeader extends HTMLElement{
    static async component(){
        return await(await fetch(pathName.replace('.js','.html'))).text();}
        constructor(){
            super();
            this.attachShadow({mode:'open'});
        };
        handleEvent(e){
            (e.type==='click'? this.evento(e) : '')
        };
        evento(e){
            window.alert('Click on the  Heder')
        };
        connectedCallback(){
            Promise.resolve(myHeader.component()).then(html=>{
                this.shadowRoot.innerHTML=html;
                let header = this.shadowRoot.querySelector('button') ;
                header.addEventListener('click',this);               
            })
        };
}
customElements.define(name, myHeader)