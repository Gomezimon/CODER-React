const products = [
    {
        id: "1",
        name: "Jersey Argentina",
        price: 18,
        img: "https://raw.githubusercontent.com/Gomezimon/javascript/main/assets/img/jersey/argentina.jpg",
        stock: 100,
        description: "Equipacion deportiva futbol, Argentina"
    },
    {
        id: "2",
        name: "Jersey Venezuela",
        price: 16,
        img: "https://raw.githubusercontent.com/Gomezimon/javascript/main/assets/img/jersey/venezuela.jpg",
        stock: 80,
        descripcion: "Equipacion deportiva futbol, Venezuela"
    },
    {
        id: "3",
        name: "Jersey Colombia",
        price: 18,
        img: "https://raw.githubusercontent.com/Gomezimon/javascript/main/assets/img/jersey/colombia.jpg",
        stock: 85,
        descripcion: "Equipacion deportiva futbol, Colombia"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500)
    })
}

export const getProducById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.find( prod => prod.id === productId))
        }, 500)
    })
}