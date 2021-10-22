import React, {useState} from 'react'

function AddTagForm({index, addTag}) {
    const [newTag, setNewTag] = useState("");
    // on submit trigger addTag() in App.js, which populates the targeted students tag array
    return (
        <div>
            <form onSubmit={e => {e.preventDefault();addTag(newTag, index);setNewTag("");}}>
                <input className="input-form" placeholder="Add a tag" type="text" value={newTag} onChange={e => { setNewTag(e.target.value);}}/>
                <input className="submit-button" type ="submit" style={{display: "none" }}/>
            </form>
        </div>
    )
}

export default AddTagForm
