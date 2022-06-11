import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import Navbar from "../../components/Navbar";
import TableInfo from "../../components/TableInfo";

const RepositoryPage = (e) => {
    const { username, reponame } = useParams();

    const [repoInfo, setRepoInfo] = useState(null);

    useEffect(() => {
        if(!repoInfo && username && reponame){
            getInfoRepo(username, reponame)
        }
    }, [repoInfo, username, reponame]);


    const getInfoRepo = async (username, reponame) => {
        const response = await axios.get(`http://localhost:4000/api/repos/commits/${username}/${reponame}`);
        if(response.data && response.status === 200){
            console.log('data:' , response.data);
            setRepoInfo(response.data);
        }
    };

    return(
        <div>
            <Navbar />

            {(username && reponame) && repoInfo ?
            (
            <div className="flex items-center justify-center">
                <TableInfo repoCommits={repoInfo} />
            </div>
            ) :
            <div>
                No hay data...
            </div>
            }
        </div>
    )
    
};

export default RepositoryPage;