import {Dispatch} from "redux";
import axios from "axios";
import {ItemAction, ItemActionTypes} from "../../types/itemTypes";
import {documents1, documents2} from "../store";

export const fetchItems = () => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_ITEMS})
            // const response = await axios.get('')
            setTimeout(() => {
                dispatch({type: ItemActionTypes.FETCH_ITEMS_SUCCESS, payload: [...documents1, ...documents2].sort(function(a, b){
                        let dateA: any = new Date(a.delivery_date);
                        let dateB: any = new Date(b.delivery_date);
                        return dateA-dateB
                    })})
            }, 500)
        } catch (e) {
            dispatch({type: ItemActionTypes.FETCH_ITEMS_ERROR, payload: "Произошла ошибка при загрузке данных"})
        }
    }
}

export const deleteItems = (ids: string[]) => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_ITEMS})
            const response = await axios.post('/cancel', {ids})
            dispatch({type: ItemActionTypes.FETCH_ITEMS_SUCCESS, payload: response.data}) // В ответе ожидаю получить новый список товаров
        } catch (e) {
            dispatch({type: ItemActionTypes.FETCH_ITEMS_ERROR, payload: "Произошла ошибка"})
        }
    }
}