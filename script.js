const addnote = document.querySelector(".create_section");
rectangles = document.querySelector(".note");
textspace = document.querySelector("#input");
addbutton = document.querySelector("#submit");
n_name = document.querySelector("input");
n_content = document.querySelector("textarea");
display = document.querySelector("#displaysection");
colourbtng = document.querySelector("#greenButton");
colourbtnp = document.querySelector("#purpleButton");
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

                let list = `<li class = "note">
                <p>${note.note_title}</p>
                
                <textarea>${note.contents}</textarea>
                <button id = "deleteButton">Delete Note</button>
                <button id = "greenButton">Set Colour To Green</button>
                <button id = "purpleButton">Set Colour To Purple</button>
        
        `;
        //console.log("index" + index);
        addnote.insertAdjacentHTML("afterend", list);
        addDelete(index);
      //  addcolours();
        
        
    });
    

}
function addDelete(index){
   // console.log("secondIndex"+index);
   
        //console.log("thirdIndex"+index);
        deleteBtn = document.querySelector("#deleteButton");
        deleteBtn.addEventListener("click", () => {
        //console.log("here"+index);
        //console.log(note.note_title);
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

// function addcolours()
// {
//    colourbtng.addEventListener("click", () => {
//         rectangles.style.backgroundcolor = 'green';
//    });
// }