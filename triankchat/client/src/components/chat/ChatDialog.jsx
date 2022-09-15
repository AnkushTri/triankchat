import { Dialog,Box,styled} from "@mui/material";

//component
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";

const Component=styled(Box)`
    display:flex;
`

const dialogStyle = {
    height: '95%',
    width: '100%',
    margin:'20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderReius:'0',
    boxShadow: 'none',
    overFlow: 'none',
}

const ChatDialog=()=>{
    return(
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
         <Component>
            <Box>
                <Menu/>
            </Box>
            <Box>
                <EmptyChat/>
            </Box>
         </Component> 
       </Dialog>
    )
}

export default ChatDialog;