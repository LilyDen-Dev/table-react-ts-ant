import React from 'react';
import { Input, Space } from 'antd';
import {ItemTypes} from "../types/itemTypes";

const { Search } = Input;

interface SearchBlockI {
    items: ItemTypes[],
    retItems: (filtered: ItemTypes[]) => void
}

export const SearchBlock = ({items, retItems}: SearchBlockI): JSX.Element => {
    const onSearch = (value: string) => {

        let arr: ItemTypes[] = []
        items.map((item) => {
            for(let [key, val] of Object.entries(item)) {
                if(val.toString().toLowerCase().includes(value.toLowerCase())) {
                    arr.push(item)
                    break
                }
            }
        })

        retItems(arr)
    };

    return (
        <Space direction="vertical">
            <Search placeholder="Поиск" onSearch={onSearch} enterButton/>
        </Space>
   )
}