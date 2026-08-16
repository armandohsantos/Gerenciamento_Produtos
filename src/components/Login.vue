<template>
    <div class="max-h-[84vh] max-w-[25vw] border-1 border-gray-700 my-0.5 mx-5 bg-gray-700">
        <h2 class="bg-gray-500 p-3">Insira suas credenciais :</h2>
        <form class="px-3">
            <div  class="flex flex-col pt-3">
                <label for="email">Email:</label>
                <input class="bg-gray-900 border border-black" type="email" id="email" v-model="email" required>
            </div>
            <div class="flex flex-col pt-3">
                <label for="password">Senha:</label>
                <input class="bg-gray-900 border border-black" type="password" id="password" v-model="password" required>
            </div>
            <div class="text-right">
            <button class="bg-gray-700 text-white font-bold py-2 px-4 border border-gray-600 rounded azul_claro_hover cursor-pointer m-2" type="submit" @click="validarCredenciais">Entrar</button>
            </div>

        </form>
    </div>

</template> 


<script setup lang="js">
import { ref } from 'vue'; 
import { useNavegacaoStore } from '../store/navegacaoStore';
const email = ref('');
const password = ref('');
function validarCredenciais() {
    const navegacaoStore = useNavegacaoStore();
    // Aqui você pode adicionar a lógica para validar as credenciais do usuário
    if (email.value === 'admin@iq.usp.br' && password.value === 'admin') {
        email.value = '';
        password.value = '';
        navegacaoStore.autenticado = true; // Defina a variável de autenticação como verdadeira
    } else {
        email.value = '';
        password.value = '';
        alert('Credenciais inválidas. Tente novamente.');
    }
    }

</script>
