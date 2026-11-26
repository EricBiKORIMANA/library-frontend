import { Link } from "react-router";


export default function LibraryHeader(){
    const library = "Library Management system";
    const books = [
        {
            code: "SENG01",
            name: "Software Engineering",
            price: 90
        },{
            code: "SENG02",
            name: "Networking administration",
            price: 30
        },{
            code: "SENG03",
            name: "Master finance",
            price: 49
        },
    ];
    return (
        // <header className="flex flex-col gap-6 justify-center items-center">
        //     <h2 class="text-5xl font-extrabold uppercase">{library}</h2>
        //     <div>
        //         <p>This is the Library management for student</p>
        //     </div>
        //     <div>
        //         <ul class="list-decimal">
        //             { books.map(book=> 
        //                 <li key={book.code}>{book.code} {book.name} {book.price}</li> )
        //             }
        //         </ul>
        //     </div>
        //     <span>The total Price for { books.length } { books.length === 1 ? 'book' : 'books' } is { books.reduce((total, book)=> total + book.price ,0) } $</span>
        // </header>

        <nav className="flex justify-between items-center gap-4">
            <Link to="/">Sign out</Link>
            <Link to="/office">Office</Link>
            <Link to="/main">Main</Link>
        </nav>
    );
}