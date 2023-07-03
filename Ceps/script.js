function buscar(){
    let cod = document.querySelector("#cod").value
    let cidade = document.querySelector("#cidade")
    let estado = document.querySelector("#estado")
    let bairro = document.querySelector("#bairro")
    let pais = document.querySelector("#pais")
    let url = "./ceps.json"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(var cep of data.ceps){
            if(cod == cep.codigo){
                cidade.value = cep.cidade
                estado.value = cep.estado
                bairro.value = cep.bairro
                pais.value = cep.pais
                break
        }
        }
    } )
}