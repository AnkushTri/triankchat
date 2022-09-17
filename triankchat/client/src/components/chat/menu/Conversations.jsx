

import { useEffect, useState,useContext} from "react";

import { Box, styled ,Divider} from "@mui/material";

import { getUsers } from "../../../service/api";
import {AccountContext} from "../../../context/AccountProvider"

//component
import Conversation from "./Conversation";

const Component=styled(Box)`
    height:81vh;
    overflow:overlay;
`;
const StyleDivider=styled(Divider)`
    margin:0 0 0 70px;
    backgroundcolor:#e9edef;
    opacity:.6;
`;

const Conversations = () => {

    const [users, setUsers] = useState([]);

    const {account}=useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);

        }
        fetchData();
    }, [])

    return (
        <Component>
            {
                users.map(user =>{

                    return (user.sub !== account.sub &&
                    <>
                    
                    <Conversation user={user}/>
                    <StyleDivider/>
                    </>
                    );
                
                })
            }
        </Component>
    )
}

export default Conversations;