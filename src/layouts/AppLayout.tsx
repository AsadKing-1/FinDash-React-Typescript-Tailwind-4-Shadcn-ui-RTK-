import Header from "@/components/Header/Header";

export function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-(--color-bg) text-(--color-text) overflow-hidden">
            <div className="max-w-8xl mx-auto p-4 flex flex-col gap-6">
                <Header />
                <main>{children}</main>
            </div>
        </div>
    )
}