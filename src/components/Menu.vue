

<template>
    <nav class="w-[20vw] mx-5">
        <ul>
            <li><button :class="navegacaoStore.paginaAtual=='Pesquisar'||navegacaoStore.paginaAtual=='Editar_o_frasco'?'fundo_azul_claro':'bg-gray-700'" class="text-left cursor-pointer p-2 my-0.5 w-full border border-gray-700 azul_claro_hover" @click="navegacaoStore.setPaginaAtual('Pesquisar')">Estoque</button></li>
            <li><button :class="navegacaoStore.paginaAtual=='Add_um_frasco'?'fundo_azul_claro':'bg-gray-700'" class="text-left cursor-pointer p-2 my-0.5 w-full border border-gray-700 azul_claro_hover" @click="abrirAdicaoReagente()">Adicionar Reagente</button></li>
            <li><button :class="navegacaoStore.paginaAtual=='Catalogo_Substancia'?'fundo_azul_claro':'bg-gray-700'" class="text-left cursor-pointer p-2 my-0.5 w-full border border-gray-700 azul_claro_hover" @click="navegacaoStore.setPaginaAtual('Catalogo_Substancia')">Catálogo de Substâncias</button></li>
            <li><button :class="navegacaoStore.paginaAtual=='Emitir_Relatório'?'fundo_azul_claro':'bg-gray-700'" class="text-left cursor-pointer p-2 my-0.5 w-full border border-gray-700 azul_claro_hover" @click="navegacaoStore.setPaginaAtual('Emitir_Relatório')">Localizações</button></li>
        </ul>
        </nav>
</template>

<script setup lang="js">
import { useNavegacaoStore } from '../store/navegacaoStore';
import { useReagenteStore } from '../store/reagenteStore';
const navegacaoStore = useNavegacaoStore();
const reagenteStore = useReagenteStore();

function abrirAdicaoReagente() { 
    reagenteStore.limparDadosReagente();
    navegacaoStore.setPaginaAtual('Add_um_frasco')
}
</script>

<style scoped >
.azul_claro_hover:hover {
    background-color: #4E7EC5;
}

</style>