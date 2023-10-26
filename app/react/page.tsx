export default function TransitionPage() {


    const boxes = []
    const num_boxes = 100;
    for (let i = 0; i < num_boxes; i++) {
        let bg = i % 2 == 0 ? "bg-cyan-100" : "bg-cyan-300"
        boxes.push(<div className={bg + " w-100 h-100"}>{i}</div>)
    }
    return (
        <div className="flex flex-col">
            <div className="flex-none bg-red-200">My app bar</div>
            <div className="grid grid-cols-4 gap-4 p-4 items-center">
                {boxes}
            </div>
        </div>
    )
}