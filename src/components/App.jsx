import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function createNotes(entry) {
    return(
        <Note 
        key={entry.id}
        title={entry.title}
        content={entry.content}
        />
    );
}



function App() {
    return (
        <div>
            <Header />
            {notes.map(createNotes)}
            <Footer />
        </div>
    );
}

export default App;