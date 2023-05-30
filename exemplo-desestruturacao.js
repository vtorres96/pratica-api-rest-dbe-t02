let requestBody = {
    "prop1": "valor1",
    "prop2": "valor2",
    "prop3": "valor3",
    "prop4": "valor4",
    "prop5": "valor5",
    "prop6": "valor6",
    "prop7": "valor7",
    "prop8": "valor8",
    "prop9": "valor9",
    "prop10": "valor10"
}

// suponhamos que necessitamos remover a propriedade `prop5`
const { prop5, ...restante } = requestBody

console.log(restante)