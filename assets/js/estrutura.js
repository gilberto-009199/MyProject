var LOCK_DRAGDROP = false;
var UUID_ROW_DRAGDROP = "";


$("li[data-uuid]").on("dblclick",function(event){

    var ul = $(this).find("ul:first");

    if( $(this).toggleClass("esconder") && !$(this).hasClass("esconder")){

        ul.slideDown(700);

    } else ul.slideUp(700);
    
    console.log(this);

    event.preventDefault();
    event.stopPropagation();
    
    return false;
})

function onDragLeave(event, elem){
    //console.log("@onDragLeave",elem);
    $(".tarefa_dragdrop").css("display","none");
    elem.querySelector(".tarefa_dragdrop").style.display = "block";    
       

    event.preventDefault();
    event.stopPropagation();   
}
function onDragEnter(event, elem){
//    console.log("@onDragEnter",elem);
    $(elem).find(".tarefa_dragdrop").css("display","none");
    //elem.querySelector(".tarefa_dragdrop").style.display = "none";     

    event.preventDefault();
    event.stopPropagation();
}
function onDragOver(event,elem) {
  
    if(!LOCK_DRAGDROP){
      //console.log("@onDragOver")
      UUID_ROW_DRAGDROP = elem.getAttribute("data-uuid");
    }
    event.preventDefault();
    event.stopPropagation();
    LOCK_DRAGDROP = true;
      
}
function onDrop(event,elem) {
    try{

        if(LOCK_DRAGDROP){
            LOCK_DRAGDROP = false;

            const id = UUID_ROW_DRAGDROP;
            const draggableElement = document.querySelector("li[data-uuid=\""+id+"\"]");
            const dropzone = elem;
            
            var sub = dropzone.querySelector("ul");

            if(dropzone.getAttribute("data-uuid") == id)return;
            // Trata pai tentando se finho
            const idDropzone = dropzone.getAttribute("data-uuid");

            if($(draggableElement).find("li[data-uuid=\""+idDropzone+"\"]").length != 0 )return;

            if(sub != null) sub.appendChild(draggableElement)
            else{// Gerar sub ul
               sub = document.createElement("ul");
               sub.appendChild(draggableElement);
               dropzone.appendChild(sub);
            }

            event.dataTransfer.clearData();
            UUID_ROW_DRAGDROP = "";
        }
        $(elem).find(".tarefa_dragdrop").css("display","none");
        event.preventDefault();
        event.stopPropagation();
    }catch(e){
        console.error(e);
    }
}