const stubCompleteRequest = id => Promise.resolve(true);

const stubIncompleteRequest = id => Promise.resolve(true);

const markComplete = id => ({
    type: 'SET_COMPLETE',
    payload: {
        id
    }
});

const markIncomplete = id => ({
    type: 'SET_INCOMPLETE',
    payload: {
        id
    }
});

export const requestComplete = id => dispatch => {
    stubCompleteRequest(id)
        .then(() => dispatch(markComplete(id)))
        .catch(console.error);
};

export const requestIncomplete = id => dispatch => {
    stubIncompleteRequest(id)
        .then(() => dispatch(markIncomplete(id)))
        .catch(console.error);
};
