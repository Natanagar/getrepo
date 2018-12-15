function updateState(state, action){
    if(action.type === "INCREMENT"){
        return state + action.amount;
    } else if (
        action.type ==="DECREMENT"
    ) {
        return state - action.amount;
    }   else return state;
}

class Store{
    constructor(updateState, state){
        this._state = state;
        this._updateState = updateState;
        this._callbacks = [];
    }
    
    get state(){
        return this._state;
    }
    update(action){
        this._state=this._updateState(this._state, action)
        this._callbacks.forEach(callback=>callback())
    }

    subscribe(callback){
        this._callbacks.push(callback);
        return ()=>this._callbacks = this._callbacks.filter(cb => cb !== callback);
    }
}

const store = new Store(updateState, 0),
        incrementAction = {type : "INCREMENT", amount : 1},
        decrementAction = {type: "DECREMENT", amount : 1};
store.subscribe(()=>(console.log("State was changed", store.state)));
const unsubscribe = store.subscribe(()=>console.log('State changed 1', store.state))
store.subscribe(()=>console.log('State changed 2', store.state))
store.update(incrementAction)
//unsubscribe();
store.update(decrementAction)
store.update({})
export default Store;