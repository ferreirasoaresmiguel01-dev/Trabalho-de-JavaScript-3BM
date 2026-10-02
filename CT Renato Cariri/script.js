static void Main(string[] args)
        {
            //Exibir o cabeçalho do programa
            Cabeçalho("CT do Renato Cariri");
            Console.WriteLine("Bem-vindo ao programa de controle de frequência e treinos dos alunos do CT do Renato Cariri!");

            //Vetor de nomes dos alunos
            string[] nomes =
            {
                "Carlos",
                "Miguel",
                "Benevides",
                "Nelson",
                "Breno"
            };

            //Pesquisa sequencial de um nome no vetor de nomes
            Console.WriteLine("\nNome para ser procurado: ");
            string nomeProcurado = "Benevides";

            int posicao = PesquisaSequencial(nomes, nomeProcurado);

            if (posicao != -1)
            {
                Console.WriteLine($"O nome {nomeProcurado} foi encontrado na posição {posicao + 1}/5.");
            }
            else
            {
                Console.WriteLine($"O nome {nomeProcurado} não foi encontrado.");
            }

            //Frequencia dos alunos em uma matriz
            int[,] frequencia = new int[,]
            {
                {1, 1, 1, 0, 1, 1, 0 }, //Carlos
                {0, 1, 1, 1, 0, 1, 1 }, //Miguel
                {0, 1, 0, 1, 0, 1, 0 }, //Benevides
                {1, 1, 1, 1, 1, 1, 1 }, //Nelson
                {0, 1, 0, 1, 0, 0, 0 }  //Breno
            };

            string[][] treinos =
            {
                new string [] {"Peito", "Perna", "Costas", "Superiores", "Inferiores"},
                new string [] {"Quadriceps", "Superiores", "Posterior", "Glúteos", "Abdomen"},
                new string [] {"Posterior de Dorsal", "Inferior de Bacia", "Esternocleidomastóideo"},
                new string [] {"Peito", "bíceps", "Peito", "Antebraço", "Peito", "Glúteos", "Peito do pé" },
                new string [] {"Pescoço", "Glúteos" }
            };

            double[] mensalidade = { 150.00, 120.00, 167.42, 60.00, 200.00 };

            // Exibir os dados completos antes da ordenação
            Cabeçalho("Nomes antes de Ordenar");
            ExibirDadosCompletos(nomes, frequencia, treinos, mensalidade);

            // Ordenar os nomes em ordem alfabética usando Bubble Sort
            Cabeçalho("Nomes Em Ordem Alfabetica!");

            BubbleSort(nomes, frequencia, treinos, mensalidade);

            //Dados apos ordenaçao
            ExibirDadosCompletos(nomes, frequencia, treinos, mensalidade);

            // Pesquisa Binária (após ordenação)
            string nomeBuscaBinaria = "Nelson";
            int posBinaria = PesquisaBinaria(nomes, nomeBuscaBinaria);

            Console.WriteLine($"\n[Pesquisa Binária] Procurando {nomeBuscaBinaria} no vetor ordenado");
            if (posBinaria != -1)
                Console.WriteLine($"O nome {nomeBuscaBinaria} foi encontrado na posição ordenada {posBinaria + 1}/5.");
            else
                Console.WriteLine($"O nome {nomeBuscaBinaria} não foi encontrado.");
        }