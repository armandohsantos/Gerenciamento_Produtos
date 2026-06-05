

<template>
    <nav class="w-[20vw] mx-5">
        <ul>
            <li><button :class="navegacaoStore.paginaAtual=='Pesquisar'?'fundo_azul_claro':'bg-gray-700'" class="text-left cursor-pointer p-2 my-0.5 w-full border border-gray-700 azul_claro_hover" @click="navegacaoStore.setPaginaAtual('Pesquisar')">Consultar estoque</button></li>
            <li><button :class="navegacaoStore.paginaAtual=='Add_um_frasco'||navegacaoStore.paginaAtual=='Editar_o_frasco'?'fundo_azul_claro':'bg-gray-700'" class="text-left cursor-pointer p-2 my-0.5 w-full border border-gray-700 azul_claro_hover" @click="navegacaoStore.setPaginaAtual('Add_um_frasco')">Adicionar / Editar Reagente</button></li>
            <li><button :class="navegacaoStore.paginaAtual=='Emitir_Relatório'?'fundo_azul_claro':'bg-gray-700'" class="text-left cursor-pointer p-2 my-0.5 w-full border border-gray-700 azul_claro_hover" @click="navegacaoStore.setPaginaAtual('Emitir_Relatório')">Emitir Relatório</button></li>
        </ul>
        </nav>
</template>

<script setup lang="js">
import { useNavegacaoStore } from '../store/navegacaoStore';
const navegacaoStore = useNavegacaoStore();
</script>

<style scoped >
.azul_claro_hover:hover {
    background-color: #4E7EC5;
}

</style>