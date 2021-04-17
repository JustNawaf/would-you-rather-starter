const checkUser = (store:any) => (next:any) => (action:any) => {
    const state = store.getState();
    const { user } = state;

    if(user === null){
        return alert("Not Allowed");
    }

    return next(action);
};

export default checkUser;