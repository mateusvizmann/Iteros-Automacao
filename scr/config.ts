export const SITE = {
  name: "Python Automate Solutions",
  description: "Automações inteligentes para eliminar processos manuais, reduzir erros e aumentar a produtividade da sua empresa.",
  url: "https://pythonautomatesolutions.com.br",
};

export const WHATSAPP = {
  number: "5543988552365",
  message: "Ola%2C%20vim%20pelo%20site%20e%20quero%20automatizar%20processos%20na%20minha%20empresa",
  get url() {
    return `https://wa.me/${this.number}?text=${this.message}`;
  },
};
