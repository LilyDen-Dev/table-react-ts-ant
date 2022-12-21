import React, {useState} from "react";
import Table from "antd/es/table";
import {Space} from "antd";
import {ColumnsType} from "antd/lib/table";
import {ItemTypes} from "../types/itemTypes";
import {SearchBlock} from "./Search";
import {summary} from "./TableSummary";

const columns: ColumnsType<ItemTypes> = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Объём',
        dataIndex: 'volume',
        key: 'volume',
    },
    {
        title: 'Дата доставки',
        key: 'delivery_date',
        dataIndex: 'delivery_date',
        render: (_, record) => (
            new Date(record.delivery_date).toLocaleDateString()
        ),
    },
    {
        title: 'Количество',
        key: 'qty',
        dataIndex: 'qty',
    },
    {
        title: 'Стоимость',
        key: 'sum',
        dataIndex: 'sum',
    },
    {
        title: 'Валюта',
        key: 'currency',
        dataIndex: 'currency',
    },
    {
        title: 'Сумма',
        key: 'sum_qty',
        render: (_, record) => (
            <Space size="middle">
                {`${record.sum * record.qty} ${record.currency}`}
            </Space>
        ),
    },
]

interface TableBlockI {
    items: ItemTypes[],
    chooseNames: (names: string[]) => void
    chooseIds: (ids: string[]) => void
}

export const TableBlock = ({items, chooseNames, chooseIds}: TableBlockI): JSX.Element => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const [foundedItems, setFoundedItems] = useState<ItemTypes[]>(items)

    const onSelectChange = (newSelectedRowKeys: React.Key[], selectedRows: ItemTypes[]) => {
        setSelectedRowKeys(newSelectedRowKeys)
        chooseNames(selectedRows.map((row: { name: string; }) => row.name))
        chooseIds(selectedRows.map((row: { id: string; }) => row.id))
    }
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <>
            <SearchBlock items={items} retItems={(items: ItemTypes[]) => setFoundedItems(items)}/>
            <Table
                columns={columns}
                dataSource={foundedItems}
                rowSelection={rowSelection}
                pagination={false}
                summary={summary}
                rowKey="id"
            />
        </>
    )
}