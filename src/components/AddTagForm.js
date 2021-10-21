import React, {useState} from 'react'

function AddTagForm({index, addTag}) {
    const [newTag, setNewTag] = useState("");

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTag(newTag, index);
                    setNewTag("");
                }}
            >
                <input
                    className="input"
                    placeholder="Add a tag"
                    type="text"
                    value={newTag}
                    onChange={e => {
                        setNewTag(e.target.value);
                    }}
                />
                <input className="submit-button" type="submit" />
            </form>
        </div>
    )
}

export default AddTagForm
