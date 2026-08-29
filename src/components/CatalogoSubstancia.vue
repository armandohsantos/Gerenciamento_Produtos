<template>
    <div 
     class="border-1 border-gray-700 my-0.5 bg-gray-700"> 
<h3 class="bg-gray-500 p-3">Estoque Disponível</h3 >
<table class="m-3 table-fixed border-collapse border border-gray-500">
    <thead>
        <tr>
            <th class="border border-gray-500 py-2 px-5">Nome</th>
            <th class="border border-gray-500 py-2 px-5">CAS</th>
            <th class="border border-gray-500 py-2 px-5">Fórmula</th>
            <th class="border border-gray-500 py-2 px-5">Ações</th>
        </tr>
    </thead>
    <tbody>
        <tr  v-for="reagente in navegacaoStore.listaTiposReagentes" :key="reagente.CASNumbr" > 
            

            <td class="border border-gray-500 py-2 px-5">{{ reagente.reagente }}</td>
            <td class="border border-gray-500 py-2 px-5">{{ reagente.CASNumbr }}</td>
            <td class="border border-gray-500 py-2 px-5">{{ reagente.ForMolcl }}</td>
            <td class="flex border border-gray-500 py-2 px-5"><img src="../assets/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="Info" class="w-6 h-6"><img src="../assets/edit_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="Edit" class="w-6 h-6 azul_claro_item" @click="reagenteStore.carregarReagente(reagente.quantidade, reagente.cod_local, reagente.tb_tipos_reagentes.CASNumbr, reagente.tb_tipos_reagentes.reagente, reagente.tb_tipos_reagentes.ForMolcl, reagente.validade, reagente.id, reagente.unidade, reagente.Quantidade_Inicial);navegacaoStore.carregarLocalReagente(reagente.tb_ref_local.local)"><img src="../assets/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="Delete" class="w-6 h-6"> </td>
            
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