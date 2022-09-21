import { useEffect } from "react";
import {Box ,InputBase,styled} from "@mui/material";
import {EmojiEmotionsOutlined,AttachFileOutlined,Mic} from "@mui/icons-material";

import { uploadFile} from "../../../service/api";

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

const Footer = ({sendText,setValue,value,file,setFile,setImage}) =>{

    useEffect(() => {
        const getImage = async () => {
            if(file){
                const data= new FormData();
                data.append("name",file.name);
                data.append("file",file);
                let response=await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    },[file]);

    const onfileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name)
    }
    
    return(
        <Container>
            <EmojiEmotionsOutlined/>
            <label htmlFor="fileInput">
            <ClipIcon />
            </label>
            <input 
            type="file" 
            id="fileInput"
            style={{display:'none'}}
            onChange={(e)=>onfileChange(e)}
            />
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