import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useNavegacaoStore } from './navegacaoStore'
import { supabase } from '../lib/supabaseClient'

export const useReagenteStore = defineStore('reagente', () => {

    const quantidade = ref(0)
    const localizacao = ref('')
    const CAS = ref('') 
    const nome_do_reagente = ref('')
    const formula_do_reagente = ref('')
    const validade_do_reagente = ref(null)
    const id = ref(null)
    const quantidade_inicial = ref(0)
  

    function carregarReagente(quantidade_recebida, localizacao_recebida, CAS_recebido, nome_do_reagente_recebido, formula_do_reagente_recebida, validade_do_reagente_recebida, id_recebido) {
        quantidade.value = quantidade_recebida;
        localizacao.value = localizacao_recebida;
        CAS.value = CAS_recebido;
        nome_do_reagente.value = nome_do_reagente_recebido;
        formula_do_reagente.value = formula_do_reagente_recebida;
        validade_do_reagente.value = validade_do_reagente_recebida;
        id.value = id_recebido;
        const navegacaoStore = useNavegacaoStore();
        navegacaoStore.setPaginaAtual('Editar_o_frasco');
    }
    async function inserir_Reagente() {
        const {data, error} = await supabase.from('tb_estoque').insert([{
            id_reagente: 6,
            validade: validade_do_reagente.value,
            local: localizacao.value,
            quantidade: String(quantidade.value),
            unidade: 'g',
            Quantidade_Inicial: quantidade_inicial.value,

        }]).select();
        if (error) {
            console.error('Error inserting new reagente:', error);
            return;
        }
        if (!data || data.length === 0) {
            console.error('Nenhum reagente foi inserido');
            return;
        }
        alert('Novo reagente inserido com sucesso!');
    }

    async function atualizarDadosReagente() {
        console.log(id.value)
        console.log(quantidade.value)
        const {data, error} = await supabase.from ('tb_estoque').update({
            quantidade: String(quantidade.value)
            ,
            local: localizacao.value, }).eq('id', Number(id.value))
            .select();
            if (error)
                 {

                console.error('Error updating reagente data:', error);
            return;
            }
        if (!data || data.length === 0) {
            console.error('Nenhum reagente foi encontrado ');
            return;
        }
            alert('Dados do reagente atualizados com sucesso!');
        }
            
    return { quantidade, localizacao, carregarReagente, CAS, nome_do_reagente, formula_do_reagente, validade_do_reagente,atualizarDadosReagente,inserir_Reagente, id, quantidade_inicial }        
}) 







