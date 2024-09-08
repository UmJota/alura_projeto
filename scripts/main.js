function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("aluraquiz__resultados");

    // Pega o valor do input de pesquisa e converte para letras minúsculas
    let placeHolder = document.getElementById("placeHolder").value;
    const minLength = 2; // Define o número mínimo de caracteres exigido para a pesquisa
    placeHolder = placeHolder.toLowerCase(); // Converte o valor inserido para letras minúsculas
    let titulo = ""; // Variável que armazenará os títulos dos dados durante a comparação
    let resultados = ""; // Variável que armazenará o HTML gerado para os resultados

    // Verifica se o valor inserido no input é menor que o mínimo exigido
    if (placeHolder.length < minLength) {
        alert(`Por favor, insira pelo menos ${minLength} letras para pesquisar.`); // Exibe um alerta se o input for muito curto
        return; // Interrompe a execução da função se a condição não for atendida
    }

    // Itera sobre o array 'dados' (presumido que seja uma lista de objetos com títulos e outras informações)
    for (let dado of dados) {
        // Converte o título atual para letras minúsculas para facilitar a comparação
        titulo = dado.titulo.toLowerCase();

        // Verifica se o valor do input (placeHolder) está contido no título
        if (titulo.includes(placeHolder)) {
            // Se houver correspondência, adiciona o HTML correspondente ao resultado
            resultados += 
                `
                    <tr>
                        <th li class="aluraquiz__types__resposta">
                        <img class="aluraquiz__types__resposta__imagem" src="${dado.imagem}" alt="">
                        <br>
                        ${dado.titulo}
                        </th>
                        <th li class="aluraquiz__types__resposta">
                        <img class="aluraquiz__types__resposta__imagem" src="${dado.temNaalua}" alt="">
                        <br>
                            ${dado.temNaAlura}
                        </th>
                        <th li class="aluraquiz__types__resposta">
                        <img class="aluraquiz__types__resposta__imagem" src="${dado.programaçãoC}" alt="">
                        <br>
                            ${dado.programação}
                        </th>
                        <th li class="aluraquiz__types__resposta">
                            <img class="aluraquiz__types__resposta__imagem" src="${dado.diferencaForacoes}" alt="">
                            <br>
                            ${dado.formacoes}
                        </th>
                        <th li class="aluraquiz__types__resposta">
                            <img class="aluraquiz__types__resposta__imagem" src="${dado.diferencaCurso}" alt="">
                            <br>
                            ${dado.cursos}
                        </th>
                    </tr>
                `;
            // Exibe um alerta com o resultado encontrado (provavelmente outro campo de dado)
            alert(`${dado.resultado}`);
        }
    }
    // Insere o HTML gerado (resultados) dentro da seção de resultados no documento
    section.innerHTML = resultados;
}