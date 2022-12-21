import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {useMemo} from "react";
import * as ActionCreators from "../store/action-creators"

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(ActionCreators, dispatch), [dispatch]);
}