<template>
    <div class="m-7 px-6 py-3 bg-gray-700  cursor-pointer azul_claro_hover" @click="logout" >
        <img src="../assets/logout_icon.svg" alt="icone de logout" class="w-6 h-6">
        <p class="text-white">Sair</p>
    </div>
</template>

<script setup lang="js">    
import { useNavegacaoStore } from '../store/navegacaoStore';
const navegacaoStore = useNavegacaoStore(); 
function logout() {
    
    navegacaoStore.autenticado = false; // Defina a variável de autenticação como falsa
}
</script>