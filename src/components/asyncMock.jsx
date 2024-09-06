const products = [
    {
        id: "1",
        name: "Jersey Argentina",
        price: 18,
        img: "https://raw.githubusercontent.com/Gomezimon/javascript/main/assets/img/jersey/argentina.jpg",
        stock: 100,
        category: "SeleccionNacional",
        description: "Equipacion deportiva futbol, Argentina"
    },
    {
        id: "2",
        name: "Jersey Venezuela",
        price: 16,
        img: "https://raw.githubusercontent.com/Gomezimon/javascript/main/assets/img/jersey/venezuela.jpg",
        stock: 80,
        category: "SeleccionNacional",
        descripcion: "Equipacion deportiva futbol, Venezuela"
    },
    {
        id: "3",
        name: "Jersey Colombia",
        price: 18,
        img: "https://raw.githubusercontent.com/Gomezimon/javascript/main/assets/img/jersey/colombia.jpg",
        stock: 85,
        category: "SeleccionNacional",
        descripcion: "Equipacion deportiva futbol, Colombia"
    },
    {
        id: "4",
        name: "FC Barcelona",
        price: 20,
        img: "https://us03-imgcdn.ymcart.com/92854/2024/08/24/a/7/a747a09cee6283c4.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp",
        stock: 58,
        category: "ClubEuropa",
        descripcion: "Equipacion deportiva futbol, FC Barcelona"
    },
    {
        id: "5",
        name: "Real Madrid CF",
        price: 20,
        img: "https://us03-imgcdn.ymcart.com/92854/2024/05/11/8/9/894d5655996a7bd4.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp",
        stock: 58,
        category: "ClubEuropa",
        descripcion: "Equipacion deportiva futbol, Real Madrid"
    },
    {
        id: "6",
        name: "Manchester City",
        price: 20,
        img: "https://us03-imgcdn.ymcart.com/92854/2024/06/19/f/e/fee2d81534ffa5f7.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp",
        stock: 58,
        category: "ClubEuropa",
        descripcion: "Equipacion deportiva futbol, Manchester City"
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
export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.find( prod => prod.category === productCategory))
        }, 500)
    })

}