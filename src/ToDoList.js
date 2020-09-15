import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const toDosById = useSelector(state => state.toDos.byId);
    
    return (
        <main>
            <form>
                <ul>
                    {Object.keys(toDosById).map(id => <ToDoItem key={id} id={id}/>)}
                </ul>
            </form>
        </main>
    );
};

export default ToDoList;
