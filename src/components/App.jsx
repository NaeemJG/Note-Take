import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [note, addNote] = useState({
    title: '',
    content: ''
  });

  const [notes, allNotes] = useState([])

  const handleChange = event => {
    const { name, value } = event.target;
    addNote(prevValue => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }
    
    const submit = (event) => {
      allNotes(prevValue => {
        return [...prevValue, note]
      })
      event.preventDefault()
      addNote({
        title: '',
        content: ''
      })
    }

  const deleteButton = (id) => {
    allNotes(prevValue => {
      return prevValue.filter((note, index) => {
        return index !== id
      })
    })
  }


  return (
    <div>
      <Header />
      <CreateArea handleChange={handleChange} submit={submit} title={note.title} content={note.content}/>
      {notes.map((note,index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} delete={deleteButton}/>
      })}
      <Footer />
    </div>
  );
};

export default App;
