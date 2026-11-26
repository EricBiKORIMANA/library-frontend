import { useState } from "react";
import LibraryButton from "./LibraryButton";
import LibraryHeader from "./LibraryHeader";

export default function LibraryMain(){
    const [count, setCount] = useState(0);

    function incrementNumber(){
        setCount(count+1);
    }
    return (
        <main className="w-full flex flex-col justify-center items-center">
            <LibraryHeader />
            <h2>WELCOMING PAGE</h2>
            <LibraryButton buttonAction={incrementNumber} buttonLabel={'Increment'} />
            <div>Increment value is {count}</div>
        </main>
    )
}