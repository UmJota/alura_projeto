function info() {
    alert("Você terá que descobrir uma das escolas da Alura com alguns chutes. A cada chute serão mostradas as informações que você acertou e as que você errou para ficar mais fácil no seu próximo chute.");
}

function pesquisar() {
    let section = document.getElementById("aluraquiz__resultados");
    let placeHolder = document.getElementById("placeHolder").value;
    const minLength = 2;
    placeHolder = placeHolder.toLowerCase();
    let titulo = "";
    let resultados = "";

    // Verifica o número mínimo de caracteres
    if (placeHolder.length < minLength) {
        alert(`Por favor, insira pelo menos ${minLength} letras para pesquisar.`);
        return; // Interrompe a função se a condição não for atendida
    }

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        if (titulo.includes(placeHolder)) {
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
            alert(`${dado.resultado}`);
        }
    }

    // Verifica se há resultados e mostra a mensagem "Nada foi encontrado" se não houver.
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
}
