
import {Box ,InputBase,styled} from "@mui/material";
import {EmojiEmotionsOutlined,AttachFileOutlined,Mic} from "@mui/icons-material";

const Container=styled(Box)`
// height:55px;
width:100%;
display:flex;
background:#ededed;
align-item:center;
padding:5px 5px;

& > *{
    margin:5px;
    color:#919191;
}
`;

const Serach=styled(Box)`
    background-color:#FFFFFF;
    border-radius:18px;
    Width:calc((85%-100px));
`;

const InputField=styled(InputBase)`
  width:100%;
  padding:18px;
  height:15px;
  padding-left:25px;
  font-size:14px;
`;

const ClipIcon=styled(AttachFileOutlined)`
    transform:rotate(40deg)
`;

const Footer = ({sendText,setValue,value}) =>{
    
    return(
        <Container>
            <EmojiEmotionsOutlined/>
            <ClipIcon />
            <Serach>
                <InputField
                placeholder="Type a message"
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => sendText(e)}
                value={value}
                />
            </Serach>
            <Mic/>
        </Container>
    )
}

export default Footer;