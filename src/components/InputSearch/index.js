import React from "react";

const InputSearch = ({searchText, onChangeInput, onSubmit, onKeyPress }) => {

    return (
        <div class="mb-8 px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center">
            <button class="focus:outline-none"><i class="fa fa-search text-gray-500"></i></button>
            <input onKeyDown={onKeyPress} value={searchText} onChange={onChangeInput} type="search" class="w-full bg-transparent text-base focus:outline-none" placeholder="username/repository" />
            <button onClick={onSubmit} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Go!</button>
        </div>
    )
};

export default InputSearch;