let atletas = [
   {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
   },
   {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
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

for (let i = 0; i < atletas.length; i++) {
   let atleta = atletas[i];
   let nome = atleta.nome;
   let notasOriginais = atleta.notas;
   let notasParaExibicao = [...notasOriginais].sort();
   let notasOrdenadas = [...notasOriginais].sort((a, b) => a - b);
   let notasComputadas = notasOrdenadas.slice(1, 4);
   let soma = notasComputadas.reduce((total, nota) => total + nota, 0);
   let media = soma / notasComputadas.length;
   console.log(`Atleta: ${nome}`);
   console.log(`Notas Obtidas: ${notasParaExibicao.join(',')}`);
   console.log(`Média Válida: ${media}`);
   console.log("");
}