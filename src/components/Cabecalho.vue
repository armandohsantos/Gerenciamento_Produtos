<template>
    <header class="cabecalho">
        <h1 class="text-red-600">LABSTOCK: Gerenciamento de Reagentes Químicos</h1>
        <h2>Estoque do Laboratório de Química</h2>
        <nav>
        <ul>
            <li><button @click="navegacaoStore.setPaginaAtual('Pesquisar')">Consultar estoque</button></li>
            <li><button @click="navegacaoStore.setPaginaAtual('Add_um_frasco')">Adicionar Novo Reagente</button></li>
            <li><button @click="navegacaoStore.setPaginaAtual('Emitir_Relatório')">Emitir Relatório</button></li>
        </ul>
        </nav>
    </header>
</template>

<script setup lang="js">
import { useNavegacaoStore } from '../store/navegacaoStore';
const navegacaoStore = useNavegacaoStore();

</script>




<style>
</style>