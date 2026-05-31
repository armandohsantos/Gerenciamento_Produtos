import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useNavegacaoStore } from './navegacaoStore'
export const useReagenteStore = defineStore('reagente', () => {

    const quantidade = ref(0)
    const localizacao = ref('')
    const CAS = ref('') 
    const nome_do_reagente = ref('')
    const formula_do_reagente = ref('')
    const validade_do_reagente = ref(null)
  

    function carregarReagente(quantidade_recebida, localizacao_recebida, CAS_recebido, nome_do_reagente_recebido, formula_do_reagente_recebida, validade_do_reagente_recebida) {
        quantidade.value = quantidade_recebida;
        localizacao.value = localizacao_recebida;
        CAS.value = CAS_recebido;
        nome_do_reagente.value = nome_do_reagente_recebido;
        formula_do_reagente.value = formula_do_reagente_recebida;
        validade_do_reagente.value = validade_do_reagente_recebida;
        const navegacaoStore = useNavegacaoStore();
        navegacaoStore.setPaginaAtual('Add_um_frasco');
    }

    return { quantidade, localizacao, carregarReagente, CAS, nome_do_reagente, formula_do_reagente, validade_do_reagente }        
}) 







