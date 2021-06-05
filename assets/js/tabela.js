function criar(){
    var li = document.createElement("div");
    li.innerHTML = (`<li data-uuid="7" draggable="true" ondragleave="onDragLeave(event,this)" ondragenter="onDragEnter(event,this)" ondragover=" onDragOver(event,this);" ondrop=" onDrop(event,this);">
        <div class="tarefa">
            <div class="tarefa_pronta"></div>
            <div class="tarefa_titulo">tarefa adicionadas</div>
            <div class="tarefa_data_inicio">02/06/1999</div>
            <div class="tarefa_data_fim">14/04/2021</div>
            <div class="tarefa_dependencias"></div>
        </div>
        <div class="tarefa_dragdrop"></div>
    </li>`);


    var tabela = document.querySelector("#tabela");
    tabela.appendChild(li);
}
