import { useState, useEffect } from "react";
import LibraryButton from "./LibraryButton";
import axios from "axios";
import LibraryHeader from "./LibraryHeader";

export default function Office() {
    const [officeName, setOfficeName] = useState("");
    const [officeNumber, setOfficeNumber] = useState("");
    const [offices, setOffices] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchOffices();
    }, []);

    async function fetchOffices() {
        try {
            const response = await axios.get("http://localhost:8082/api/offices");
            if (response.status === 200) {
                setOffices(response.data);
            } else if (response.status === 204) {
                setOffices([]);
            }
        } catch (error) {
            console.error("Error fetching offices:", error);
        }
    }

    

    async function saveOffice() {
        try {
            const response = await axios.post("http://localhost:8082/api/offices/save", {
                name: officeName,
                officeNumber: officeNumber
            });
            if (response.status === 200) {
                alert("Save successfully");
                setOfficeName("");
                setOfficeNumber("");
                fetchOffices();
            } else {
                alert("Office is not saved");
            }
        } catch (error) {
            alert("Office is not saved");
        }
    }

    async function deleteOfficeByNumber(numberToDelete = officeNumber) {
        try {
            const response = await axios.delete(`http://localhost:8082/api/offices/deleteByNumber/${numberToDelete}`);

            if (response.status === 200) {
                alert("Office deleted successfully");
                fetchOffices();
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert("Office not found");
            } else {
                alert("An error occurred while deleting the office.");
            }
        }
    }

    const filteredOffices = offices.filter((office) => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return true;

        const matchesName = (office.name || "").toLowerCase().includes(query);
        const matchesNumber = String(office.officeNumber ?? "").toLowerCase().includes(query);
        return matchesName || matchesNumber;
    });

    return (
        <div className="w-full flex flex-col justify-center items-start gap-6 px-4 pb-6 mt-6 border border-black rounded-md">
            <title>Office</title>

            <LibraryHeader />
            <span className="text-3xl uppercase">Save Office</span>
            <div className="grid grid-cols-1">
                <span className="uppercase">Office Name: </span>
                <input type="text" value={officeName} onChange={e => setOfficeName(e.target.value)} className="p-0.5 rounded-md px-2 border border-black"/>
            </div>
            <div className="grid grid-cols-1">
                <span className="uppercase">Office Number </span>
                <input type="number" value={officeNumber} onChange={e => setOfficeNumber(e.target.value)} className="p-0.5 rounded-md px-2 border border-black"/>
            </div>
            <LibraryButton buttonLabel={'SAVE'} buttonAction={saveOffice} />

            <div className="flex flex-col gap-4">
                <span className="text-3xl uppercase">Delete Office</span>
                <div className="grid grid-cols-1">
                    <span className="uppercase">Office Number </span>
                    <input type="number" value={officeNumber} onChange={e => setOfficeNumber(e.target.value)} className="p-0.5 rounded-md px-2 border border-black"/>
                </div>
                <LibraryButton buttonLabel={'DELETE'} buttonAction={() => deleteOfficeByNumber(officeNumber)} />
            </div>

            <div className="flex flex-col gap-4 w-full mt-4">
                <span className="text-3xl uppercase">Offices List</span>
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="Search by office name or number..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="p-1 rounded-md px-3 border border-black w-full max-w-md"/>
                    {searchQuery && (
                        <button type="button" onClick={() => setSearchQuery("")} className="px-3 py-1 border border-black rounded-md uppercase text-sm">Clear</button>
                    )}
                </div>

                <table className="w-full border-collapse border border-black text-left">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-black px-4 py-2">ID</th>
                            <th className="border border-black px-4 py-2">Office Name</th>
                            <th className="border border-black px-4 py-2">Office Number</th>
                            <th className="border border-black px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOffices.length > 0 ? (
                            filteredOffices.map((office,index) => (
                                <tr key={office.id}>
                                    <td className="border border-black px-4 py-2">{index+1}</td>
                                    <td className="border border-black px-4 py-2">{office.name}</td>
                                    <td className="border border-black px-4 py-2">{office.officeNumber}</td>
                                    <td className="border border-black px-4 py-2">
                                        <button type="button" onClick={() => deleteOfficeByNumber(office.officeNumber)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md uppercase text-sm cursor-pointer">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="border border-black px-4 py-2 text-center">
                                    No offices found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}