import { serviceWorker } from '../serviceWorker';

export const SET_COMPLETE = 'SET_COMPLETE';
export const SET_INCOMPLETE = 'SET_INCOMPLETE';

const markComplete = id => ({
    type: SET_COMPLETE,
    payload: {
        id
    }
});

const markIncomplete = id => ({
    type: SET_INCOMPLETE,
    payload: {
        id
    }
});

export const requestToggle = id => (dispatch, getState) => {
    if (getState().toDos.completedIds.includes(id)) {
        fetch('thisRequestIsStubbedByTheSW.com')
            .then(() => {
                const action = markIncomplete(id);
                dispatch(action);
                if (serviceWorker) {
                    serviceWorker.postMessage(action);
                }
            })
            .catch(console.error);
    } else {
        fetch('thisRequestIsStubbedByTheSW.com')
            .then(() => {
                const action = markComplete(id);
                dispatch(action);
                if (serviceWorker) {
                    serviceWorker.postMessage(action);
                }
            })
            .catch(console.error);
    }
};
