<template> 
    <div>
        <label for="CAS_NUMBER">Número CAS</label> \\ usar o nome do campo ligando linhas.
        <input id = "CAS_NUMBER" type="text" v-model="reagenteStore.CAS" placeholder="digite apenas números">
    </div>
    <div>
        <label for="nome_do_reagente">Nome do Reagente</label> \\ usar o nome do campo ligando linhas.
        <input id = "nome_do_reagente" type="text" v-model="reagenteStore.nome_do_reagente" disabled> 
    </div>
    <div>
        <label for="formula_do_reagente">Fórmula do Reagente</label> \\ usar o nome do campo ligando linhas.
        <input id = "formula_do_reagente" type="text" v-model="reagenteStore.formula_do_reagente" disabled> 
    </div>
    <div>
        <label for="validade_do_reagente">Validade do Reagente</label> \\ usar o nome do campo ligando linhas.
        <input id = "validade_do_reagente" type="date" v-model="reagenteStore.validade_do_reagente" > 
    </div>
    <div>
        <label for="local_do_reagente">Local do Reagente</label> \\ usar o nome do campo ligando linhas.
        <select id = "local_do_reagente" v-model="reagenteStore.localizacao" > 
            <option value="prateleira_a1_almox">Prateleira A1 - Almox</option> 
            <option value="capela">Capela</option>
            <option value="armario_vermelho">Armário Vermelho</option>  
        </select>
    </div>
    <div>
        <label for="quantidade">Quantidade</label> \\ usar o nome do campo ligando linhas.
        <input id = "quantidade" type="text" v-model="reagenteStore.quantidade" > 
        <label for="unidade">Unidade</label>
        <select id = "unidade" v-model="reagenteStore.unidade" > 
            <option value="g">Gramas (g)</option> 
            <option value="ml">Mililitros (ml)</option>
            <option value="l">Litros (l)</option>
        </select>
    </div>
</template>



<script setup lang="js">
import {useReagenteStore} from '../store/reagenteStore';
const reagenteStore = useReagenteStore();





</script>