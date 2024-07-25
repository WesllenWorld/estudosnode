const key = {
    value: "fn2187",
    permission: "admin",
}

//direct export

//cjs
/*
exports.getDataFromApi = () => {
    console.log("Dados da API sendo buscados")
}
*/

//esm
export const getDataFromApi = () =>{
    console.log("Dados da API sendo buscados")
}