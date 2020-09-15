export const markComplete = id => ({
    type: 'SET_COMPLETE',
    payload: {
        id
    }
});

export const markIncomplete = id => ({
    type: 'SET_INCOMPLETE',
    payload: {
        id
    }
});
