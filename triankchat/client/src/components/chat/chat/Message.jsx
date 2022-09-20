import { useContext } from "react";

import {Box ,Typography,styled} from "@mui/material";
import { formatDate } from "../../../utils/common-utils";

import { AccountContext } from "../../../context/AccountProvider";

const Our=styled(Box)`
background:#dcf8c6;
max-width:60%;
margin-left:auto;
padding:5px;
width:fit-content;
display:flex;
border-radius:10px;
word-break:break-word;
`;

const Wrapper=styled(Box)`
background:#FFFFFF;
max-width:60%;
padding:5px;
width:fit-content;
display:flex;
border-radius:10px;
word-break:break-word;
`;

const Text=styled(Typography)`
font-size:14px;
padding:0 25px 0 5px;

`;

const Time=styled(Typography)`
font-size:10px;
color:#919191;
margin-top:auto;
word-break:keep-all;
`;

const Message= ({message}) =>{

    const { account }=useContext(AccountContext);

    return(
        <>
        {
            account.sub===message.senderId ?

        <Our>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </Our>
          :
            <Wrapper>
                <Text>{message.text}</Text>
                <Time>{formatDate(message.createdAt)}</Time>
            </Wrapper>
        }
        </>
    )
}

export default Message;