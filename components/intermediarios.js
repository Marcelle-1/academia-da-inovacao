class CustomModal extends HTMLElement {
    constructor() {
    super();

    // Criação do Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Elementos internos do modal
    this.modalContainer = document.createElement('div');
    this.modalContent = document.createElement('div');
    this.closeButton = document.createElement('button');
    this.titleElement = document.createElement('h2');
    this.slotElement = document.createElement('slot');

    // Adicionar conteúdo e botão ao modal
    this.modalContent.appendChild(this.titleElement);
    this.modalContent.appendChild(this.slotElement);
    this.modalContent.appendChild(this.closeButton);
    this.modalContainer.appendChild(this.modalContent);
    shadow.appendChild(this.modalContainer);

    // Estilização do modal
    const style = document.createElement('style');
    style.textContent = `
        /* Container do Modal */
        div {
        display: none; /* Modal oculto por padrão */
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        align-items: center;
        justify-content: center;
        z-index: 1000;
        }

        /* Modal Content */
        .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        min-width: 300px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: relative;
        }

        h2 {
        margin: 0 0 15px 0;
        font-size: 1.5em;
        }

        button {
        padding: 8px 15px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
        }

        button:hover {
        background-color: #e53935;
        }
    `;
    shadow.appendChild(style);

    // Definir o texto do botão de fechar
    this.closeButton.textContent = "Fechar";

    // Adicionar evento de fechamento
    this.closeButton.addEventListener('click', () => this.closeModal());
    }

    // Método chamado quando o componente é conectado ao DOM
    connectedCallback() {
    // Atualizar o título e controlar a visibilidade com o atributo 'open'
    this.title = this.getAttribute('title') || 'Título do Modal';
    this.open = this.hasAttribute('open') && this.getAttribute('open') === 'true';

    this.titleElement.textContent = this.title;

    // Mostrar ou esconder o modal com base no atributo 'open'
    if (this.open) {
        this.modalContainer.style.display = 'flex';
    } else {
        this.modalContainer.style.display = 'none';
    }
    }

    // Método para controlar a visibilidade do modal
    static get observedAttributes() {
    return ['open'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'open') {
        this.open = newValue !== null && newValue === 'true';
        this.connectedCallback(); // Recalcular a visibilidade
    }
    }

    // Função para fechar o modal
    closeModal() {
    this.setAttribute('open', 'false');
    }
}

// Registrar o componente personalizado
customElements.define('custom-modal', CustomModal);

