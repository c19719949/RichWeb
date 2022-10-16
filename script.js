const addnote = document.querySelector("#colour");
textspace = document.querySelector("#input");
addbutton = document.querySelector("#submit");
n_name = document.querySelector("input");
n_content = document.querySelector("textarea");
display = document.querySelector("#displaysection");


const notes = JSON.parse(localStorage.getItem("notes") || "[]");
show_all_notes();
addbutton.addEventListener("click", () => {

    let note_name = n_name.value,
    note_content = n_content.value
    ;
    if(note_name && note_content){
        //console.log("button clicked" + note_name +note_content);
        let info = {
            note_title: note_name,
            contents: note_content
        }

        
        notes.push(info); 
        localStorage.setItem("notes", JSON.stringify(notes));
        
    }
    show_all_notes();
    

});



function show_all_notes()
{
    if(!notes) return;
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note, index) => {

                let list = `<li class = "note" id = "rectangle" >
                <p>${note.note_title}</p>
                
                <textarea>${note.contents}</textarea>
                <button id = "deleteButton">Delete Note</button>

        
                `;
        //console.log("index" + index);
        addnote.insertAdjacentHTML("afterend", list);
        addDelete(index);
        addcolours();
        
        
    });
    addcolours();

}
function addDelete(index){
   // console.log("secondIndex"+index);
   
        //console.log("thirdIndex"+index);
        deleteBtn = document.querySelector("#deleteButton");
        deleteBtn.addEventListener("click", () => {
        deleteNote(index);
    });
    
}

function deleteNote(ID)
{
    //console.log(ID);
    notes.splice(ID, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    show_all_notes();
}

function addcolours(){
    colourbtng = document.getElementById("greenButton");
    colourbtnp = document.querySelector("#purpleButton");
    colourbtng.addEventListener("click", () => {
        document.getElementById("rectangle").style.backgroundColor = "green";
    });
    colourbtnp.addEventListener("click", () => {
        document.getElementById("rectangle").style.backgroundColor = "purple";
    });
}