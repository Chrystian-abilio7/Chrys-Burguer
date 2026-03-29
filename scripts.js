const cardsElements = document.querySelectorAll(".card");
const preçosElements = document.querySelectorAll(".item-price span");
const totalPrice = document.querySelector(".total-price");
const stylePrice = document.querySelector(".total-price-container");
const veganButton = document.querySelector(".vegan");
//Função para mostrar ou esconder os itens do cardápio
let mostrando = false;
function mostrarTudo() {
    mostrando = !mostrando;

    cardsElements.forEach(element => {
        if (mostrando) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

//Desconto todos os itens em 10%

const desconto = menuOptions.map(item => {
    return {
        ...item,
        price: Number((item.price * 0.9).toFixed(2))
    }
});

function mapear() {
    preçosElements.forEach((element, index) => {
        element.textContent = `🔥 R$${desconto[index].price.toFixed(2).replace(".", ",")}`;
    });
}

//Função pra mostrar o preço total dos itens do cardápio

function somarTudo() {
    if (stylePrice.style.display === "none") {
        stylePrice.style.display = "block";
    } else {
        stylePrice.style.display = "none";
    }

    const total = menuOptions.reduce((acc, item) => acc + item.price, 0);
    totalPrice.textContent = `O preço total dos itens do cardápio é: R$ ${total.toFixed(2).replace(".", ",")}`;
};

//Função para filtrar os itens veganos do cardápio

const veganos = menuOptions.filter(item => item.vegan);
function filtrar() {
    const veganos = menuOptions.filter(item => item.vegan);

    cardsElements.forEach(card => {
        const nome = card.querySelector(".name-burguer").textContent;

        const éVegano = veganos.some(item => item.name === nome);

        if (éVegano) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
