class Heroi {
    constructor(nome, idade, tipoClasse) {
        this.nome = nome;
        this.idade = idade;
        this.tipoClasse = tipoClasse;
    }

    atacar() {
        let atk;
        
        switch (this.tipoClasse) {
            case "Mago":
                atk = "magia";
                break;
            case "Guerreiro":
                atk = "espada";
                break;
            case "Ninja":
                atk = "shuriken";
                break;
            case "Monge":
                atk = "artes marciais";
                break;
            default:
                atk = "ataque desconhecido";
        }

        return `O ${this.tipoClasse} ${this.nome} atacou usando ${atk}.`;
    }
}

const classes = ["Mago", "Guerreiro", "Ninja", "Monge"];
const heroi = new Heroi("Yuto", 24, classes[2]);
console.log(heroi.atacar());
