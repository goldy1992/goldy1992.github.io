export default function CodeEditorTitleBar() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex-none flex gap-1 p-2 bg-slate-500 rounded-t-lg flex-row">
                <div className="flex-none w-2.5 h-2.5 bg-red-600 rounded-full"/>
                <div className="flex-none w-2.5 h-2.5 bg-yellow-600 rounded-full"/>
                <div className="flex-none w-2.5 h-2.5 bg-green-600 rounded-full"/>
            </div>
        </div>
    )
}