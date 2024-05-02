import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function Sidebar(props) {
   const noteElement = props.notes.map((note, index) => (
      <div key={note.id}>
         <div
            className={`title ${note.id === props.currentNote.id ? "first-note selected" : ""}`}
            onClick={() => props.setCurrentNoteId(note.id)}>
            <h4 className="note-text">{note.body.split("\n")[0]}</h4>

            <button className="trash" onClick={() => props.deleteNote(note.id)}>
               <BsFillTrash3Fill />
            </button>
         </div>
      </div>
   ));

   return (
      <section className="pane sidebar">
         <div className="sidebar-header">
            <h3>Notes</h3>
            <button className="first-note addBtn" onClick={props.newNote}>
               +
            </button>
         </div>
         {noteElement}
      </section>
   );
}
