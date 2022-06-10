import React from "react";
import Navbar from "../../components/Navbar";
import TableInfo from "../../components/TableInfo";

const Home = () => {

    return(
        <div>
            <Navbar />
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                
                {/* <TableInfo /> */}
                </div>
            </main>
        </div>
    )
};

export default Home;