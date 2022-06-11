import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import InputSearch from "../../components/InputSearch";
import ModalError from "../../components/ModalError";
import Navbar from "../../components/Navbar";

const Home = () => {
    // Use history navigate
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('');

    const onChangeInput = (e) => {
        setSearchText(e.target.value);
    };

    const onSubmit = () => {
        // Check if string cointains / and username/repository format
        if(searchText.includes('/')){
            navigate(`/repository/${searchText}`);
        } else{
            alert('Debes ////');
        }
    };

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onSubmit();
          }
    }

    return(
        <div>
            <ModalError />
            <Navbar />
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Inicio</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <h4>Search any repository of github to show his commits.</h4>
                <div className="flex items-center justify-center py-8 ">
                    <InputSearch 
                        searchText={searchText}
                        onChangeInput={onChangeInput}
                        onSubmit={onSubmit}
                        onKeyPress={onKeyPress}
                    />
                </div>
                </div>
            </main>
        </div>
    )
};

export default Home;