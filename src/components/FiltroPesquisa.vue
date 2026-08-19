<template>
  <div class="border-1 border-gray-700 my-0.5 mr-6  bg-gray-700 h-[35vh] w-[25vw]">
    <h3 class="bg-gray-500 p-3">Consulte o Reagente</h3 >
    <div class="flex flex-col m-3"> 
        <label for="CAS_NUMBER"> Número CAS :</label> 
        <input class="bg-gray-900 border border-black" id = "CAS_NUMBER" type="text" placeholder=" digite apenas números" v-model="casNumber">
    </div>
    <div class="flex flex-col m-3"> 
        <label for="NOME_USUAL"> Nome usual :</label> 
        <input class="bg-gray-900 border border-black" id = "NOME_USUAL" type="text" placeholder=" digite o nome usual" v-model="nomeUsual">
    </div>
    <div class="text-center m-3">
    <button class="bg-gray-700 text-white font-bold py-2 px-4 border border-gray-600 rounded azul_claro_hover cursor-pointer" @click="pesquisarReagente">Pesquisar</button>
    </div>
  </div>
</template>


<script setup lang="js">
import { ref } from 'vue';
import { useNavegacaoStore } from '../store/navegacaoStore'; 

const casNumber = ref('') // armazena o número CAS digitado pelo usuário para pesquisar o reagente;
const nomeUsual = ref('') // armazena o nome usual digitado pelo usuário para pesquisar o reagente;
const navegacaoStore = useNavegacaoStore();

function pesquisarReagente() { 
    console.log('entrou na funação')
    if (casNumber.value.trim() != '') {
        console.log(casNumber.value.trim())
        navegacaoStore.filtrarListaTabelaEstoquePorCAS(casNumber.value.trim())
    } else if (nomeUsual.value.trim() != '') {
        navegacaoStore.filtrarListaTabelaEstoquePorNome(nomeUsual.value.trim())
    } else {
        alert('Digite um número CAS ou um nome usual para pesquisar o reagente.')
    }
    
}

</script>