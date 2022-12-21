import React, {useEffect, useState} from 'react';
import './App.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {TableBlock} from "./components/TableBlock";
import {ButtonModalBlock} from "./components/ButtonModalBlock";
import {useActions} from "./hooks/useActions";

const App: React.FC = () => {
    const {items, loading} = useTypedSelector(state => state.item)
    const [selectedNames, setSelectedNames] = useState<string[]>([])
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const {fetchItems} = useActions()

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <div className="App">
            {!loading ?
                <TableBlock
                    items={items}
                    chooseNames={(names: string[]) => setSelectedNames(names)}
                    chooseIds={(ids: string[]) => setSelectedIds(ids)}
                /> : <h3>Идёт загрузка ...</h3>
            }
            <ButtonModalBlock selectedIds={selectedIds} selectedNames={selectedNames} />
        </div>
    );
}

export default App;
