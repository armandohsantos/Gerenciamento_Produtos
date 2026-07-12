import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'


export const useNavegacaoStore = defineStore('navegacao', () => {
  const paginaAtual = ref('Pesquisar')
  const carregando = ref(false)
  const erro = ref(null)
  const listaTabelaEstoque = ref([])
  const listaTiposReagentes = ref([])
  const carregamentoTiposReagentes = ref(false)
  const erroTiposReagentes = ref(null)
 const erroBuscaLocalizacao = ref(null)
  const listaLocalizacoesSupabase = ref([])
  const localLimpo = ref([])
  const listaLocalEscolhidoFiltrado = ref([])
  const localEscolhido = ref('')

    const fetchTiposReagentes = async () => {
    // Evita fazer uma nova requisição se já houver dados carregados (opcional)
    if (listaTiposReagentes.value.length > 0) 
      return 

    carregamentoTiposReagentes.value = true
    erroTiposReagentes.value = null

    try {
      const { data, error: supabaseError } = await supabase
        .from('tb_tipos_reagentes') 
        
        .select(`
          *
        `)



      if (supabaseError) throw supabaseError

      listaTiposReagentes.value = data
    } catch (err) {
      erroTiposReagentes.value = err.message
      console.error('Erro ao buscar dados no Pinia:', err)
    } finally {
      carregamentoTiposReagentes.value = false
    }
  }

const fetchLocalizacoes = async () => {
    if (listaLocalizacoesSupabase.value.length > 0) 
      return 

    erroBuscaLocalizacao.value = null

    try {
      const { data, error: supabaseError } = await supabase
        .from('tb_ref_local') 
        
        .select(`
          *
        `)



      if (supabaseError) throw supabaseError

      listaLocalizacoesSupabase.value = data
      localLimpo.value = [...new Set(listaLocalizacoesSupabase.value.map(item => item.local))]
    } catch (err) {
      erroBuscaLocalizacao.value = err.message
      console.error('Erro ao buscar localizações no Supabase:', err)
    } 
  }



  const setPaginaAtual = (pagina) => {
    paginaAtual.value = pagina

  }
  const fetchItens = async () => {
    // Evita fazer uma nova requisição se já houver dados carregados (opcional)
    if (listaTabelaEstoque.value.length > 0) 
      return 

    carregando.value = true
    erro.value = null

    try {
      const { data, error: supabaseError } = await supabase
        .from('tb_estoque') 
        
        .select(`
          *,
          tb_tipos_reagentes (
            CASNumbr,
            ForMolcl,
            reagente)
        `)



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
    if (localEscolhido.value=='') return
    listaLocalEscolhidoFiltrado.value = listaLocalizacoesSupabase.value.filter(item => item.local === localEscolhido.value)

  } 

 
  return { paginaAtual, setPaginaAtual, listaTabelaEstoque, fetchItens, listaTiposReagentes, fetchTiposReagentes, carregamentoTiposReagentes, erroTiposReagentes, listaLocalizacoesSupabase, fetchLocalizacoes, localLimpo, localEscolhido, listaLocalEscolhidoFiltrado, localizacaoFiltra, }
})

