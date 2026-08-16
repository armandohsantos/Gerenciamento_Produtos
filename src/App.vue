<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import Cabecalho from './components/Cabecalho.vue'
import { useNavegacaoStore } from './store/navegacaoStore';
import ConsultaEstoque from './components/ConsultaEstoque.vue';
import Modificacao_usuario from './components/Modificacao_usuario.vue';
import Menu from './components/Menu.vue';
import Login from './components/Login.vue';
import LogOut from './components/LogOut.vue';

// const dados = ref([])

// async function buscarDados() {
//   const { data, error } = await supabase.from('tb_estoque').select(`

//   id,
//   tb_tipos_reagentes (
//    reagente,
//    formula_molecular,
//    cas_number
//   ),
//   quantidade,
//   unidade,
//   validade,
//   local
//   `)
//   if (error) {
//     console.error('Erro ao buscar dados:', error)
//   } else {
//     dados.value = data
//   }
// }

// onMounted(() => {
//    buscarDados()
// })

const navegacaoStore = useNavegacaoStore();

</script>

<template>
  <div class="flex w-full justify-between">
   <Cabecalho />
   <LogOut v-if="navegacaoStore.autenticado==true" />


   </div>
  <div v-if="navegacaoStore.autenticado==true" class="flex">
    

    <Menu />
<ConsultaEstoque v-if="navegacaoStore.paginaAtual=='Pesquisar'" />
<Modificacao_usuario v-if="navegacaoStore.paginaAtual=='Add_um_frasco' || navegacaoStore.paginaAtual=='Editar_o_frasco'" />
  </div>
  <Login v-else />
  
  </template>


