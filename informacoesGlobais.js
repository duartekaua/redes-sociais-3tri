const url='https://raw.githubusercontent.com/silviosjr/CienciaDeDados-criandoGraficosDinamicosComJavaScrip/refs/heads/Aula01/trabalho-dados-gerais.json

async function vizualizarinformacoesGlobais() {
    const res= await fetch9(ur1)
    const dados= await res.json()
    console.log(dados)
    const paragrafos= document.createElementnt('p')
    paragrafo.classLiat.add('graficos-conteiner_texto')
    paragrafo.innnerHTML='voce sabia que do total de ${dados.total_pessoas_mundo} de pessoas no mundo'
}'