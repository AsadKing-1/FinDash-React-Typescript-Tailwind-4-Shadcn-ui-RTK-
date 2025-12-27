import type { NavItems } from "../HeaderType";

const items: NavItems[] = [
  { id: "transaction", label: "💸 Transaction", href: "#transaction" },
  { id: "dashboard", label: "🏠 Dashboard", href: "#dashboard" },
  { id: "ai", label: "🤖 AI Assistant", href: "#ai" },
];

export const HeaderNav = () => {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        {items.map((li) => (
          <li
            key={li.id}
            className={` font-semibold p-3 rounded-(--radius-md) text-[15px] transition-all duration-150 cursor-pointer [ -webkit-tap-highlight-color:transparent ] active:bg-accent-2/60 active:translate-y-0.5`}
          >
            <a href={li.href}>{li.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
