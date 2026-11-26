
export default function LibraryButton({buttonLabel, buttonAction}){

    return ( 
        <div>
            <button onClick={buttonAction} className="cursor-pointer p-1 text-sm rounded-md bg-gray-400 hover:bg-gray-500 hover:text-white transition-all duration-150 border border-black">{buttonLabel}</button>
        </div>
    )
}