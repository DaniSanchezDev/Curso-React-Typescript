import type { MenuItems } from "../types"

type MenuItemProps = {
    item : MenuItems
    addItem: (item: MenuItems) => void
}

function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full flex justify-between p-3"
    onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p className="font-black">€{item.price}</p>
    </button>
  )
}

export default MenuItem