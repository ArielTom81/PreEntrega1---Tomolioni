import data from "../data/data.json";

export const pedirDatos = () => {
    return new Promise ((resolve) => {
        setTimeout( () => {
            resolve(data);
        }, 2000)
    })
}

export const pedirDatosId = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const item = data.find((el) => el.id === id);
            if (item) {
                resolve(item)
            } else {
                reject({
                    error: "No se encuentra la remera que está buscando"
                })
            }
        }, 2000)
    })
}

export const pedirDatosCategory = (category) =>{
    return new Promise ((resolve) =>{
        resolve(data.filter((product) => product.category === category));
    })
}