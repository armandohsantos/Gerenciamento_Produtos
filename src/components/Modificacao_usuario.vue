<template> 
    <div class="max-h-[84vh] max-w-[75vw] border-1 border-gray-700 my-0.5 bg-gray-700">
        <h3 class="bg-gray-500 p-3">
            {{ navegacaoStore.paginaAtual == 'Add_um_frasco' ? 'Adicionar um novo reagente' : 'Editar o reagente selecionado' }}
        </h3>
<div class="grid grid-cols-1 gap-4 m-3">
    <div class="flex flex-col"> 
        <label for="CAS_NUMBER"> Número CAS :</label> 
        <input class="bg-gray-900 border border-black" id = "CAS_NUMBER" :disabled="navegacaoStore.paginaAtual=='Editar_o_frasco'" type="text" v-model="reagenteStore.CAS" placeholder=" digite apenas números">
    </div>
    <div class="flex flex-col">
        <label for="nome_do_reagente">Nome do Reagente</label> 
        <select class="bg-gray-900 border border-black"  :disabled="navegacaoStore.paginaAtual=='Editar_o_frasco'" id = "nome_do_reagente" v-model="reagenteStore.nome_do_reagente" @change = "reagenteStore.encontrarReagentePeloNome"> 
            <option value="">Selecione um reagente</option>
            <option v-for="tipo in navegacaoStore.listaTiposReagentes" :key="tipo.id" :value="tipo.reagente">
                {{ tipo.reagente }}
            </option>
        </select>
    </div>
    <div class="flex flex-col">
        <label for="formula_do_reagente">Fórmula do Reagente</label> 
        <input class="bg-gray-900 border border-black" :disabled="navegacaoStore.paginaAtual=='Editar_o_frasco'" id = "formula_do_reagente" type="text" v-model="reagenteStore.formula_do_reagente" disabled> 
    </div>
    <div class="flex flex-col">
        <label for="validade_do_reagente">Validade do Reagente</label> 
        <input class="bg-gray-900 border border-black" id = "validade_do_reagente" :disabled="navegacaoStore.paginaAtual=='Editar_o_frasco'" type="date" v-model="reagenteStore.validade_do_reagente" > 
    </div>
    
     
    <div class="flex flex-col">
        <label for="local_do_reagente">Local do Reagente</label> 
        <select class="bg-gray-900 border border-black" id = "local_do_reagente" v-model="navegacaoStore.localEscolhido" @change="navegacaoStore.localizacaoFiltra"  > 
            <option v-for="(localizacao, index) in navegacaoStore.localLimpo" :key="index">{{ localizacao }}</option>  
        </select>
    </div>
    <div class="flex flex-col">
        <label for="prateleira_do_reagente">Prateleira</label> 
        <select class="bg-gray-900 border border-black" id = "prateleira_do_reagente" v-model="reagenteStore.localizacao" @change="debugg"> 
            <option v-for="(localizacao, index) in navegacaoStore.listaLocalEscolhidoFiltrado" :key="index" :value="localizacao.cod_local">{{ localizacao.prateleira }}</option> 
        </select>
    </div>
    

    <div class="flex">
        <div class="flex flex-col mr-4">   
        <label for="quantidade">Quantidade</label> 
        <input class="bg-gray-900 border border-black" id = "quantidade" type="text" v-model="reagenteStore.quantidade" > 
        </div>
        <div class="flex flex-col">
        <label for="unidade">Unidade</label>
        <select class="bg-gray-900 border border-black" id = "unidade" v-model="reagenteStore.unidade" @change="debugg" > 
            <option value="g">Gramas (g)</option> 
            <option value="mL">Mililitros (mL)</option>
            <option value="L">Litros (L)</option>
        </select>
        </div>
    </div>

    <div class="flex ">
        <div class="flex flex-col mr-4">
        <label for="quantidade_inicial">Quantidade Inicial</label> 
        <input class="bg-gray-900 border border-black" id = "quantidade_inicial" type="text" v-model="reagenteStore.quantidade_inicial" > 
        </div>
        <div class="flex flex-col">
        <label for="unidade">Unidade</label>
        <select class="bg-gray-900 border border-black" id = "unidade" v-model="reagenteStore.unidade" > 
            <option value="g">Gramas (g)</option> 
            <option value="mL">Mililitros (mL)</option>
            <option value="L">Litros (L)</option>
        </select>
        </div>
    </div>
</div>
<div class="text-center mb-2">
    <button class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 border border-gray-600 rounded azul_claro_hover cursor-pointer" @click="salvar()">Salvar</button>
</div>

    </div>

    
</template>



<script setup lang="js">
import { useNavegacaoStore } from '../store/navegacaoStore';
import {useReagenteStore} from '../store/reagenteStore';
const reagenteStore = useReagenteStore();
const navegacaoStore = useNavegacaoStore();

function mostrarMensagem() {
    console.log('EVENTO FUNCIONANDO')
}
function salvar () { 
   
    
  if (navegacaoStore.paginaAtual == 'Editar_o_frasco') {
    reagenteStore.atualizarDadosReagente();

  }
else {
    // Lógica para adicionar um novo reagente
  reagenteStore.inserir_Reagente();}
}

function debugg() {
    console.log(reagenteStore.localizacao);
    console.log(navegacaoStore.listaLocalEscolhidoFiltrado);
  }








</script>