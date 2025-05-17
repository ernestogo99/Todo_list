import { LucideFileText } from "lucide-react";

interface ItodoInput{
    description:string;
    handleChange: ()=> void;
    handleSubmit: ()=> void;
    isEditing:boolean;
}



export const TodoInput:React.FC<ItodoInput>=({description,handleChange,handleSubmit,isEditing})=>{
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <LucideFileText></LucideFileText>
                    </div>
                     <input type="text" value={description}  onChange={handleChange} placeholder="New todo"></input>
                </div>

                <button type="submit">
                    {isEditing ? "Edit task": "Add new Task"}
                </button>

               
            </form>
        </div>
    )
}


