import { HeaderBrand } from "./HeaderBrand/headerBrand";
import { HeaderNav } from "./HeaderNav/headerNav";
import { HeaderBalance } from "./HeaderBalance/headerBalance";

import { useSelector } from "react-redux";
import { selectAvailableBalance } from "@/feature/available/available";


function Header() {
    const available = useSelector(selectAvailableBalance);

    return (
        <header className="bg-(--color-card) shadow-soft rounded-md border border-border">
            <div className="flex flex-col gap-5 p-3.5">
                <HeaderBrand />
                <HeaderNav/>
                <HeaderBalance Balance={available} />
            </div>
        </header>
    )
}

export default Header