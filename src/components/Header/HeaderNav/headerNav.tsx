import { useState } from "react";
import type { NavItems } from "../HeaderType";
interface HeaderNavProps {
    item: NavItems[]
}
export const HeaderNav = ({ item }: HeaderNavProps) => {
    const [active, setActive] = useState("transaction");

    return (
        <div>
            <ul className="flex flex-col gap-1">
                {item.map(li => (
                    <li
                        key={li.id}
                        onClick={() => setActive(li.id)}
                        className={` font-semibold p-3 rounded-(--radius-md) transition-all duration-300 cursor-pointer [ -webkit-tap-highlight-color:transparent ] ${active === li.id ? "bg-accent/25 text-white" : "text-muted hover:bg-white/5"}`}>
                        <a href={li.href}>{li.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
