
import {Box,Typography,styled} from "@mui/material";
 

const Component=styled(Box)`
    display:flex;
    height:40px;
    padding:13px 0;
    cursor:pointer;
`;

const Image=styled('img')({
    height:50,
    width:50,
    borderRadius:'50%',
    padding:'0 14px',
    objectFit:'cover'
})

const Conversation = ({user}) => {
    return(
        <Component >
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>

            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>

        </Component>
    )
}

export default Conversation;