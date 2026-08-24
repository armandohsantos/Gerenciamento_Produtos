import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

// essa seção possui dados e funções relacionado a permitem o carregamento das páginas e navegação entre elas;
export const useNavegacaoStore = defineStore('navegacao', () => {
  const paginaAtual = ref('Pesquisar') // var que armazena a página q deve ser renderizada ao usuário;
  const carregando = ref(false)
  const erro = ref(null)
  const listaTabelaEstoque = ref([])
  const listaTiposReagentes = ref([]) // essa variavel armazena os dados da tb tipo de reagentes;
  const carregamentoTiposReagentes = ref(false) //essa variavel mostra se está carregando os tipos de reagentes;
  const erroTiposReagentes = ref(null)// essa variavel armazena um possivel erro na busca dos tipos de reagentes;
  const erroBuscaLocalizacao = ref(null)
  const listaLocalizacoesSupabase = ref([])
  const localLimpo = ref([]) //conjunto de dados não repetidos da coluna local da tb ref local do SB, para que seja possivel mostrar apenas os locais sem repetição na tela de pesquisa no caso do coluna local do reagente;
  const listaLocalEscolhidoFiltrado = ref([]) //armazena os prateleiras dos locais escolhidos pelo usuário para no select local do reagente;
  const localEscolhido = ref('') // armazena o local escolhido pelo usuário para no select local do reagente;
  const autenticado = ref(false) // variavel que armazena se o usuário está autenticado ou não, para permitir o acesso a tela de pesquisa e cadastro de reagentes;
  const listaTabelaEstoqueFiltrada = ref([]) // armazena a lista de reagentes filtrada pelo usuário, para mostrar na tela de pesquisa;
  const semResultados = ref(false) // variavel que armazena se a lista de reagentes filtrada pelo usuário está vazia ou não, para mostrar uma mensagem de "sem resultados" na tela de pesquisa;
    function limparLocalEscolhido() {
        localEscolhido.value = '';
        listaLocalEscolhidoFiltrado.value = []; // limpar os dados das prateleiras filtradas quando o local escolhido for limpo;              
    }
    function RecarregarPaginaListaReagente()
    {
        listaTabelaEstoque.value =  [];
        fetchItens();
        setPaginaAtual('Pesquisar');
    }


    function carregarLocalReagente(local_recebido) { 
        localEscolhido.value = local_recebido;
        localizacaoFiltra(); // selecionar o local escolhido pelo usuário e filtrar as prateleiras correspondentes para o select local do reagente;
    }         
// essa seção permite a leitura da tb_tipos de reagentes ;
    const fetchTiposReagentes = async () => {
    // Evita fazer uma nova requisição se já houver dados carregados (opcional)
    if (listaTiposReagentes.value.length > 0) // verificar a questão de adionar mais reagentes;
      return 

    carregamentoTiposReagentes.value = true 
    erroTiposReagentes.value = null

    try {
      // tenta fazer o select na tb tipos de reagentes do SB;
      const { data, error: supabaseError } = await supabase
        .from('tb_tipos_reagentes') 
        
        .select(`
          *
        `)


// caso ocorra a variavel supabaseError, esse erro lançado para o catch pegar;
      if (supabaseError) throw supabaseError

      listaTiposReagentes.value = data // listaTiposReagentes recebe os dados da tb tipos de reagentes do Select SB;
    } catch (err) { 
      erroTiposReagentes.value = err.message // erroTposReagentes deixa de ser nul e passar a carregar a msg caso acontece um erro;
      console.error('Erro ao buscar dados no Pinia:', err) // mostra no console o erro caso aconteça;
    } finally { // o carregamento dos tipos de reagentes fica false independente de ficar certo ou erro; 
      carregamentoTiposReagentes.value = false
    }
  }
// fetchLocalizacoes fazer as leitura da tb ref local;
const fetchLocalizacoes = async () => {
    if (listaLocalizacoesSupabase.value.length > 0) // Caso a lista de localizações já tenha algum conteudo ela retorna;
      return 

    erroBuscaLocalizacao.value = null

    try {
      const { data, error: supabaseError } = await supabase // essa etapa faz o select na tb ref local do SB;
        .from('tb_ref_local') 
        
        .select(`
          *
        `);



      if (supabaseError) throw supabaseError; // lança o erro caso ocorra algum erro no select do SB;

      listaLocalizacoesSupabase.value = data; //listaLocalizazoesSupabase recebe os dados vindo do Select do SB; 
      localLimpo.value = [...new Set(listaLocalizacoesSupabase.value.map(item => item.local))] // localLimpo recebe os todos dados da listaLocalizacoesSupabase, mas sem repetição de local realizando um filtro com Set e map, para que seja possivel mostrar apenas os locais sem repetição na tela de pesquisa no caso do coluna local do reagente;
    } catch (err) {
      erroBuscaLocalizacao.value = err.message
      console.error('Erro ao buscar localizações no Supabase:', err)
    } 
  }



  const setPaginaAtual = (pagina) => { // função setPaginaAtual que recebe a pagina que o usuário selecionou e atualiza a var paginaAtual para renderizar a página correta;
    listaTabelaEstoqueFiltrada.value = [] // limpa a lista de reagentes filtrada quando o usuário muda de página, para evitar que a lista filtrada fique na tela de pesquisa quando o usuário muda de página;
    semResultados.value = false // limpa a variavel semResultados quando o usuário muda de página, para evitar que a mensagem de "sem resultados" fique na tela de pesquisa quando o usuário muda de página;  
    paginaAtual.value = pagina

  }
  const fetchItens = async () => { // faz a leitura da tb_estoque do SB e armazena na var listaTabelaEstoque;
    // Evita fazer uma nova requisição se já houver dados carregados (opcional)
    if (listaTabelaEstoque.value.length > 0) 
      return 

    carregando.value = true // carregamento dos dados primários de tb estoque;
    erro.value = null

    try {
      const { data, error: supabaseError } = await supabase
        .from('tb_estoque') 
        
        .select(` 
          *,
          tb_tipos_reagentes (
            CASNumbr,
            ForMolcl,
            reagente), 
          tb_ref_local ( local, prateleira)
        `) 
         .is('deleted_at', null)
        
        
        // essa linha faz a leitura da tb estoque do SB e também faz a leitura das tb tipos de reagentes e tb ref local, para que seja possivel mostrar os dados do reagente e local na tela de pesquisa, sem precisar fazer outro select para cada reagente e local, economizando tempo e processamento do SB;
// do SB criar as relações entre as tb como Inner Join entre elas;


      if (supabaseError) throw supabaseError

      listaTabelaEstoque.value = data
    } catch (err) {
      erro.value = err.message
      console.error('Erro ao buscar dados no Pinia:', err)
    } finally {
      carregando.value = false
    }
  }
  function localizacaoFiltra(){
    if (localEscolhido.value=='') return;
    listaLocalEscolhidoFiltrado.value = listaLocalizacoesSupabase.value.filter(item => item.local === localEscolhido.value) // essa função filtra a lista do local escolhido do Local Regente com a prateleira, para então mostrar as prateleiras correspondetes do local esolhido e seus rescpectivos códigos;

  } 

 function filtrarListaTabelaEstoquePorCAS(cas) {
    
      const casFiltrado = String(cas).replace(/-/g, '');
      listaTabelaEstoqueFiltrada.value = listaTabelaEstoque.value.filter(item => item.CASNumbr == casFiltrado);
      console.log('Lista filtrada por CAS:', listaTabelaEstoqueFiltrada.value);
      semResultados.value = listaTabelaEstoqueFiltrada.value.length === 0;
    
  }
function filtrarListaTabelaEstoquePorNome(nome) {
  const nomeFiltrado= String(nome).trim().toLowerCase();
      listaTabelaEstoqueFiltrada.value = listaTabelaEstoque.value.filter(item => item.tb_tipos_reagentes.reagente.trim().toLowerCase().includes(nomeFiltrado));
      
      semResultados.value = listaTabelaEstoqueFiltrada.value.length === 0;

}


  return { paginaAtual, setPaginaAtual, listaTabelaEstoque, fetchItens, listaTiposReagentes, fetchTiposReagentes, carregamentoTiposReagentes, erroTiposReagentes, listaLocalizacoesSupabase, fetchLocalizacoes, localLimpo, localEscolhido, listaLocalEscolhidoFiltrado, localizacaoFiltra,limparLocalEscolhido, carregarLocalReagente, RecarregarPaginaListaReagente, autenticado,listaTabelaEstoqueFiltrada, semResultados, carregando, erro, erroBuscaLocalizacao, filtrarListaTabelaEstoquePorCAS, filtrarListaTabelaEstoquePorNome }
})

