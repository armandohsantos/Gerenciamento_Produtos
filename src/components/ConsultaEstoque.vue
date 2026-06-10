<template>
    <div class="border-1 border-gray-700 my-0.5 bg-gray-700"> 
<h3 class="bg-gray-500 p-3">Estoque Disponível</h3 >
<table class="m-3 table-fixed border-collapse border border-gray-500">
    <thead>
        <tr>
            <th class="border border-gray-500 py-2 px-5">Nome</th>
            <th class="border border-gray-500 py-2 px-5">Quantidade</th>
            <th class="border border-gray-500 py-2 px-5">Local</th>
        </tr>
    </thead>
    <tbody>
        <tr class = "azul_claro_hover cursor-pointer" v-for="reagente in navegacaoStore.listaTabelaEstoque" :key="reagente.id" @click="reagenteStore.carregarReagente(reagente.quantidade, reagente.local, reagente.tb_tipos_reagentes.CAS_number, reagente.tb_tipos_reagentes.reagente, reagente.tb_tipos_reagentes.formula_molecular, reagente.validade, reagente.id)">
            {{ console.log(reagente) }}

            <td class="border border-gray-500 py-2 px-5">{{ reagente.tb_tipos_reagentes.reagente }}</td>
            <td class="border border-gray-500 py-2 px-5">{{ reagente.quantidade + ' ' + reagente.unidade }}</td>
            <td class="border border-gray-500 py-2 px-5">{{ reagente.local }}</td>
        </tr>
    </tbody>
</table>
</div>
</template>

<script setup lang="js">
import { useNavegacaoStore } from '../store/navegacaoStore';
import { useReagenteStore } from '../store/reagenteStore';
import { onMounted } from 'vue';
const navegacaoStore = useNavegacaoStore();
const reagenteStore = useReagenteStore();

onMounted(() => {
  navegacaoStore.fetchItens()
  navegacaoStore.fetchTiposReagentes()
})


</script>

<style>
</style>