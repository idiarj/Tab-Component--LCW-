import { tabsClientes } from './tabsClientes.js';

export class ahoraSiDesacoplado{
    constructor(){
        this.personalizacion = [
            { buttonText: 'Los inventores del racismo', panelContent: '<img src="https://www.elchiguirebipolar.net/wp/wp-content/uploads/2021/11/Montaje-Backyardigans-echan-del-grupo-a-Pablo-por-cantar-en-el-cumplean%CC%83os-de-Maduro-1060x555.jpg">' },
            { buttonText: 'Soy el Boton 2', panelContent: document.createElement('input') },
            { buttonText: 'Yo cuando me gradue', panelContent: '<img src="https://media.tenor.com/IWOe1FcDUCIAAAAC/jotaro-plane-window.gif">' },
            { buttonText: 'Need For Comandante', panelContent: '<img  src="https://i.pinimg.com/originals/71/37/0d/71370d50402cc4065f85d714247e8336.jpg">' },
            { buttonText: 'Me llamo Boton 352', panelContent: '<p>Haaland Balon de Or</p>' }
        ];
        this.tabInstancia();
    }
    tabInstancia(){
        let tabDesacoplado = new tabsClientes(this.personalizacion);

    }
}