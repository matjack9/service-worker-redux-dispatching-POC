import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestComplete, requestIncomplete } from './redux/toDosActions';

const ToDoItem = ({ id }) => {
    const dispatch = useDispatch();

    const toDosById = useSelector(state => state.toDos.byId);
    const completedIds = useSelector(state => state.toDos.completedIds);

    const toDo = toDosById[id];
    const isComplete = completedIds.includes(id);

    const toggle = () => {
        isComplete ? dispatch(requestIncomplete(id)) : dispatch(requestComplete(id));
    };

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    value={toDo}
                    checked={isComplete}
                    onChange={toggle}
                />
                {toDo}
            </label>
        </li>
    );
};

export default ToDoItem;
