<template>
    <div 
     class="border-1 border-gray-700 my-0.5 bg-gray-700"> 
<div class="flex justify-between" ><h3 class="bg-gray-500 p-3">Locais Cadastrados </h3><button class="fundo_azul_claro text-white font-bold py-2 px-4 border border-gray-600 rounded  cursor-pointer">Adicionar</button></div>
<table class="m-3 table-fixed border-collapse border border-gray-500">
    <thead>
        <tr>
            <th class="border border-gray-500 py-2 px-5">Localização</th>
            <th class="border border-gray-500 py-2 px-5">Prateleira</th>
            <th class="border border-gray-500 py-2 px-5">Ações</th>
        </tr>
    </thead>
    <tbody> 
        <tr  v-for="local in navegacaoStore.listaLocalizacoesSupabase" :key="local.cod_local" > 
            

            <td class="border border-gray-500 py-2 px-5">{{ local.local }}</td>
            <td class="border border-gray-500 py-2 px-5">{{ local.prateleira }}</td>
            <td class="flex border border-gray-500 py-2 px-5"><img src="../assets/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="Info" class="w-6 h-6"><img src="../assets/edit_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="Edit" class="w-6 h-6 azul_claro_item"><img src="../assets/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="Delete" class="w-6 h-6"> </td>
            
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
  navegacaoStore.fetchLocalizacoes()
})


</script>

<style>
</style>