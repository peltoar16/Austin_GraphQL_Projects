import { Authors } from '../queries/queries';
import React, { useState } from "react";

const AddBooks = () => {
    const [formState, setFormState ] = useState({
        name: "",
        genre: "",
        authorId: ""
    });
    
    const DisplayAuthors = () => {
        Authors()
    }
    const submitForm = (e) => {
        e.preventDefault();
        console.log(formState);
    }
    const FormField = () => {
        return (
            <form id="add-book" onSubmit={ submitForm.bind(formState)}>
                <div className='field'>
                    <label>Book Name:</label>
                    <input type="text" onChange={(e) => setFormState({ name: e.target.value })}/>
                </div>
                <div className='field'>
                    <label>Genre:</label>
                    <input type='text' onChange={(e) => setFormState({ genre: e.target.value })}/>
                </div>
                <div className='field'>
                    <label>Author:</label>
                    <select onChange={(e) => setFormState({ authorId: e.target.value })}>
                        <option>Select Author</option>
                        { DisplayAuthors() }
                    </select>
                </div>
                <button>+</button>
            </form>
        )
    }
    return (
        FormField()
    );
};

export default AddBooks;