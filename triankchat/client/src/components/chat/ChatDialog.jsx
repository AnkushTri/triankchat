import { useContext } from "react";

import { Dialog,Box,styled} from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

//component
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";


const Component=styled(Box)`
    display:flex;
    left:0;
`;
const LeftComponent=styled(Box)`
    min-width:20rem;
    width:26rem;
`;
const RightComponent=styled(Box)`

    min-width: 300px;
    width:65%;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);

`;
const dialogStyle = {
    height: '94%',
    width: '100%',
    marginLeft: '0px',
    marginRight:'0px',
    marginTop:'20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}

const ChatDialog=()=>{

    const {person}=useContext(AccountContext);

    return(
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >
           
         <Component>
            <LeftComponent>
                <Menu/>
             </LeftComponent>
             <RightComponent>
                 { Object.keys(person).length ? <ChatBox/> : <EmptyChat/> }
            </RightComponent>
         </Component> 
       </Dialog>
    )
}

export default ChatDialog;