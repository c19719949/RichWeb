const addnote = document.querySelector(".create_section");
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
    

});


function show_all_notes(){
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note) => {

                let list = `<li class = "note">
                <p>${note.note_title}</p>
                <span>${note.contents}</span>
        
        `;

        addnote.insertAdjacentHTML("afterend", list);
    });
}