
import { Drawer, Typography,Box,styled} from "@mui/material";
import {ArrowBack} from '@mui/icons-material';
import Profile from "./Profile";


const Header=styled(Box)`
    display:flex;
    height:6rem;
    background:#008069;
    color:#FFFFFF;

    & > svg, & > p{
        margin-top:auto;
        padding:1rem;
        font-bold:600;
    }
    
`;

const Component=styled(Box)`
    background:#ededed;
    height:85%;
`;

const Text =styled(Typography)`
    font-size:18px;
`;

const drawerStyle={
    left:0,
    top:12,
    height:'95%',
    width:'26rem',
    boxShadow:'none'
}


const InfoDrawer=({open,setOpen})=>{           //props.open // {open:true,setOpen: function()}=props

    const handleClose=()=>{
        setOpen(false);
    }

    return(
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{sx:drawerStyle}}
            style={{zIndex:1500}}
        >
          <Header>
                <ArrowBack  onClick={()=>setOpen(false)}/>
                <Text>Profile</Text>
          </Header>
          <Component>
            <Profile/>
          </Component>
        </Drawer>
    )

}
 export default InfoDrawer;