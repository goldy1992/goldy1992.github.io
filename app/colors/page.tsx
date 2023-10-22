import Box from "@mui/material/Box";


export default function Page() {
    return (
        <div className="flex flex-row flex-wrap items-start space-x-4 bg-background-dark">
            <div className='rounded bg-primary p-2 flex-none text-onPrimary'>Primary</div>
            <div className='rounded bg-onPrimary p-2 flex-none text-primary'>onPrimary</div>
            <div className='rounded bg-primaryContainer p-2 flex-none text-onPrimaryContainer'>primaryContainer</div>
            <div className='rounded bg-onPrimaryContainer p-2 flex-none text-primaryContainer'>onPrimaryContainer</div>
        </div>
    );
}