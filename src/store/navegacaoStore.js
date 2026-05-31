import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'


export const useNavegacaoStore = defineStore('navegacao', () => {
  const paginaAtual = ref('Pesquisar')
  const carregando = ref(false)
  const erro = ref(null)
  const listaTabelaEstoque = ref([])
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
            cas_number,
            formula_molecular,
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

 
  return { paginaAtual, setPaginaAtual, listaTabelaEstoque, fetchItens }
})

