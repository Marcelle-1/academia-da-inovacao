class HelloWorld extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'})

        const ola = document.createElement('h1')
        ola.textContent = "Olá mundo! Sou um componente"

        const style = document.createElement('style')
        style.textContent = `
            h1 {
                font-size:25px;
                color: blue;
                text-aling: center;
            }
        `

        shadow.appendChild(style);
        shadow.appendChild(ola)
    }
}

customElements.define('hello-world', HelloWorld)


class CustomButton extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'})

        const button = document.createElement('button')

        const style = document.createElement('style')
        style.textContent = `
            button {
                background-color: green;
                color: white;
                border: none;
                padding: 10px 20px;
                text-aling: center;
                text-decoration:none;
                font-size: 15px;
                border-radius: 10px;
                cursor: pointer;
            }
        `

        shadow.appendChild(style)
        shadow.appendChild(button)

        const label = this.getAttribute('label')
        button.textContent = label || 'Clique aqui'

        button.addEventListener('click', () => {
            alert('Botão clicado!')
        })

    }
}

customElements.define('custom-button', CustomButton)



    class CustomCounter extends HTMLElement {
      constructor() {
        super();

        // Criação do Shadow DOM
        const shadow = this.attachShadow({mode: 'open'});

        // Criar o contador inicial
        this.counter = 0;

        // Elementos de interface
        this.counterDisplay = document.createElement('span');
        this.incrementarButton = document.createElement('button');
        this.decrementarButton = document.createElement('button');

        // Definir o texto dos botões
        this.incrementarButton.textContent = 'Incrementar';
        this.decrementarButton.textContent = 'Decrementar';

        // Adicionar o contador e botões ao Shadow DOM
        shadow.appendChild(this.counterDisplay);
        shadow.appendChild(this.incrementarButton);
        shadow.appendChild(this.decrementarButton);


        // Estilização do Shadow DOM
        const style = document.createElement('style');
        style.textContent = `
        span {
            font-size: 25px;
            margin: 5px;
        }
        button {
            font-size: 15px;
            background-color: green;
            color: white;
            border: none;
            text-decoration: none;
            border-radius: 10px;
            padding: 10px;
            margin: 10px;
            cursor: pointer;
          }
          button:hover {
            background-color: blue;
          }
        `;
        shadow.appendChild(style);

        // Atualizar o contador na tela
        this.updateCounterDisplay();

        // Adicionar eventos para os botões
        this.incrementarButton.addEventListener('click', () => this.increment());
        this.decrementarButton.addEventListener('click', () => this.decrement());
      }

      // Função para atualizar a exibição do contador
      updateCounterDisplay() {
        this.counterDisplay.textContent = this.counter;
      }

      // Função para incrementar o contador
      increment() {
        this.counter++;
        this.updateCounterDisplay();
      }

      // Função para decrementar o contador
      decrement() {
        this.counter--;
        this.updateCounterDisplay();
      }
    }

    // Definir o novo elemento
    customElements.define('custom-counter', CustomCounter);




        class UserCard extends HTMLElement {
          // Construtor do componente
          constructor() {
            super();
    
            // Criação do Shadow DOM
            const shadow = this.attachShadow({ mode: 'open' });
    
            // Elementos internos do cartão
            this.card = document.createElement('div');
            this.nameElement = document.createElement('h2');
            this.emailElement = document.createElement('p');
            this.imageElement = document.createElement('img');
            this.detailsButton = document.createElement('button');
    
            // Estilização do cartão
            const style = document.createElement('style');
            style.textContent = `
              div {
                width: 250px;
                padding: 20px;
                border-radius: 10px;
                background-color: #f8f8f8;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                text-align: center;
              }
              img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-bottom: 15px;
              }
              h2 {
                font-size: 1.4em;
                margin: 0 0 10px 0;
              }
              p {
                font-size: 1em;
                color: #555;
                margin: 0 0 15px 0;
              }
              button {
                padding: 10px 15px;
                background-color: #4CAF50;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
              button:hover {
                background-color: #45a049;
              }
            `;
            shadow.appendChild(style);
    
            // Adicionar os elementos ao cartão
            this.card.appendChild(this.imageElement);
            this.card.appendChild(this.nameElement);
            this.card.appendChild(this.emailElement);
            this.card.appendChild(this.detailsButton);
            shadow.appendChild(this.card);
    
            // Definir o texto do botão
            this.detailsButton.textContent = "Detalhes";
    
            // Adicionar o evento de clique no botão
            this.detailsButton.addEventListener('click', () => {
              console.log(`Detalhes do usuário: ${this.name}, ${this.email}`);
            });
          }
    
          // Método chamado quando o componente é conectado ao DOM
          connectedCallback() {
            // Ler os atributos passados para o componente
            this.name = this.getAttribute('name') || 'Nome não informado';
            this.email = this.getAttribute('email') || 'Email não informado';
            this.image = this.getAttribute('image') || 'https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135_1280.png';
    
            // Atualizar o conteúdo do cartão
            this.nameElement.textContent = this.name;
            this.emailElement.textContent = this.email;
            this.imageElement.src = this.image;
          }
        }
    
        // Registrar o componente personalizado
        customElements.define('user-card', UserCard);


        

    
