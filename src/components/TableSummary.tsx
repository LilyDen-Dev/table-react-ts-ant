import React from "react";
import Table from "antd/es/table";
import {ItemTypes} from "../types/itemTypes";

export const summary = (pageData: readonly ItemTypes[]): JSX.Element => {
    let totalVolume = 0
    let totalQty = 0

    pageData.forEach(({volume, qty}) => {
        totalVolume += volume
        totalQty += qty
    });

    return (
        <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={3}>
                Итог
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} colSpan={2}>
                {totalVolume}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} colSpan={4}>
                {totalQty}
            </Table.Summary.Cell>
        </Table.Summary.Row>
    )
}