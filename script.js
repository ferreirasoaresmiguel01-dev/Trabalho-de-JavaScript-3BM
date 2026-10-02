            //Vetor de nomes dos alunos
            let nomes =
            [
                "Carlos",
                "Miguel",
                "Benevides",
                "Nelson",
                "Breno"
            ];

            //Frequencia dos alunos em uma matriz
                let frequencia = 
            [
                [1, 1, 1, 0, 1, 1, 0], //Carlos
                [0, 1, 1, 1, 0, 1, 1], //Miguel
                [0, 1, 0, 1, 0, 1, 0] , //Benevides
                [1, 1, 1, 1, 1, 1, 1] , //Nelson
                [0, 1, 0, 1, 0, 0, 0]   //Breno
            ];

            let treinos =
            [
                ["Peito", "Perna", "Costas", "Superiores", "Inferiores"],
                ["Quadriceps", "Superiores", "Posterior", "Glúteos", "Abdomen"],
                ["Posterior de Dorsal", "Inferior de Bacia", "Esternocleidomastóideo"],
                ["Peito", "Glúteos", "Peito", "Glúteos", "Peito", "Glúteos", "Peito"],
                ["Pescoço", "Glúteos"]
            ];

            let mensalidade = [ 150.00, 120.00, 167.42, 60.00, 200.00 ];

            Main();

        function Main()
        {
            //Exibir o cabeçalho do programa
            Cabeçalho("CT do Renato Cariri");
            console.log("Bem-vindo ao programa de controle de frequência e treinos dos alunos do CT do Renato Cariri!");

            //Pesquisa sequencial de um nome no vetor de nomes
            console.log("\nNome para ser procurado: ");
            let nomeProcurado = "Benevides";

            let posicao = PesquisaSequencial(nomes, nomeProcurado);

            if (posicao != -1)
            {
                console.log(`O nome ${nomeProcurado} foi encontrado na posição ${posicao + 1}/5.`);
            }
            else
            {
                console.log(`O nome ${nomeProcurado} não foi encontrado.`);
            }

            function calcularFaturamento(mensalidade) 
            {
                let total = 0;
                for (let i = 0; i < mensalidade.length; i++) {
                total += mensalidade[i];
                }
                return total;
            }

            let fatMensal = calcularFaturamento(mensalidade);

            // Exibir os dados completos antes da ordenação
            Cabeçalho("Nomes antes de Ordenar");
            ExibirDadosCompletos(nomes, frequencia, treinos, mensalidade);

            // Ordenar os nomes em ordem alfabética usando Bubble Sort
            Cabeçalho("Nomes Em Ordem Alfabetica!");

            BubbleSort(nomes, frequencia, treinos, mensalidade);

            //Dados apos ordenaçao
            ExibirDadosCompletos(nomes, frequencia, treinos, mensalidade);

            // Pesquisa Binária (após ordenação)
            let nomeBuscaBinaria = "Nelson";
            let posBinaria = PesquisaBinaria(nomes, nomeBuscaBinaria);

            console.log(`\n[Pesquisa Binária] Procurando ${nomeBuscaBinaria} no vetor ordenado`);
            if (posBinaria != -1)
                console.log(`O nome ${nomeBuscaBinaria} foi encontrado na posição ordenada ${posBinaria + 1}/5.`);
            else
                console.log(`O nome ${nomeBuscaBinaria} não foi encontrado.`);

            //Exibiçao da funçao local
            console.log(`\nO faturamento do CT DO CARIRI este mês foi de R${fatMensal.toFixed(2)}`);

            Cabeçalho("     FIM DO PROGRAMA");

        }
