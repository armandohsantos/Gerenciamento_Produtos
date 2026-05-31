<template>
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Local</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="reagente in navegacaoStore.listaTabelaEstoque" :key="reagente.id" @click="reagenteStore.carregarReagente(reagente.quantidade, reagente.local, reagente.tb_tipos_reagentes.CAS_number, reagente.tb_tipos_reagentes.reagente, reagente.tb_tipos_reagentes.formula_molecular, reagente.validade)">
            {{ console.log(reagente) }}

            <td>{{ reagente.tb_tipos_reagentes.reagente }}</td>
            <td>{{ reagente.quantidade + ' ' + reagente.unidade }}</td>
            <td>{{ reagente.local }}</td>
        </tr>
    </tbody>
</table>

</template>

<script setup lang="js">
import { useNavegacaoStore } from '../store/navegacaoStore';
import { useReagenteStore } from '../store/reagenteStore';
import { onMounted } from 'vue';
const navegacaoStore = useNavegacaoStore();
const reagenteStore = useReagenteStore();

onMounted(() => {
  navegacaoStore.fetchItens()
})


</script>

<style>
</style>