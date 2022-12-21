import {ItemAction, ItemActionTypes, DataState} from "../../types/itemTypes";


const initialState: DataState = {
    items: [],
    loading: false,
    error: null
}

export const itemReducer = (state = initialState, action: ItemAction): DataState => {
    switch (action.type) {
        case ItemActionTypes.FETCH_ITEMS:
            return {loading: true, items: [], error: null}
        case ItemActionTypes.FETCH_ITEMS_SUCCESS:
            return {loading: false, items: action.payload, error: null}
        case ItemActionTypes.FETCH_ITEMS_ERROR:
            return {loading: false, items: [], error: action.payload}
        default:
            return state
    }
}