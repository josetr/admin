import { Order } from "@medusajs/medusa"
import { getCoreRowModel, useReactTable } from "@tanstack/react-table"
import React from "react"
import { FieldArrayWithId, useFieldArray } from "react-hook-form"
import { NestedForm } from "../../../../utils/nested-form"
import useItemsToReceiveColumns from "./items-to-receive-columns"
import ItemsToReceiveTable from "./items-to-receive-table"

export type ReceiveReturnItem = {
  item_id: string
  thumbnail?: string | null
  product_title: string
  variant_title: string
  sku?: string | null
  quantity: number
  original_quantity: number
  refundable?: number | null
  return: boolean
}

export type ItemsToReceiveFormType = {
  items: ReceiveReturnItem[]
}

export type ReceiveReturnObject = FieldArrayWithId<
  {
    __nested__: ItemsToReceiveFormType
  },
  "__nested__.items",
  "fieldId"
>

type Props = {
  form: NestedForm<ItemsToReceiveFormType>
  order: Order
}

const ItemsToReceiveForm = ({ form, order }: Props) => {
  const { control, path } = form

  const { fields } = useFieldArray({
    control,
    name: path("items"),
    keyName: "fieldId",
  })

  const columns = useItemsToReceiveColumns({
    form,
    orderCurrency: order.currency_code,
  })

  const tableInstance = useReactTable({
    data: fields,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="flex flex-col gap-y-xsmall">
      <h2 className="inter-base-semibold">Items to receive</h2>
      <ItemsToReceiveTable instance={tableInstance} />
    </div>
  )
}

export default ItemsToReceiveForm
