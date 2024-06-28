let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   atletas.forEach(function(atleta){
   let notas = atleta.notas.sort(function(a, b){
        return a - b
    })
    let notasCorte = notas.slice(1, notas.length - 1)
    let soma = 0
    notasCorte.forEach(function(nota){
        soma = soma + nota
        return soma
    })
    let media = soma / notasCorte.length
    console.log(`
        Nome: ${atleta.nome}
        Notas Obitidas: ${atletas.notas.join(", ")}
        Notas Válidas: ${media}
        `)
   })
   
   