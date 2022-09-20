import { Box, styled } from "@mui/material";

import { useContext,useState,useEffect} from "react";


import Message from "./Message";
import Footer from "./Footer";
import { backGroundChatImage } from "../../../constants/data";

import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";

const Wrapper = styled(Box)`
  background-image: url(${backGroundChatImage});
  background-size: 50%;
`;

const Component = styled(Box)`
    height: 76vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding:1px 80px;
`;

const Messages = ({person, conversation}) => {

    const { account}=useContext(AccountContext);

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState('');
    const [newMessageFlag, setNewMessageFlag]=useState(false);

    useEffect(() => {
        const getMessageDetails = async () =>{
            let data = await getMessages(conversation._id);
            // console.log(data);
            setMessages(data);
        }
       conversation._id && getMessageDetails();
    },[person._id,conversation._id,newMessageFlag])

    const sendText = async (e) =>{
        // console.log(e);
        const code = e.keyCode || e.which;
        if(code === 13){
            let message ={
                senderId:account.sub,
                receiverId:person.sub,
                conversationId:conversation._id,
                type:'text',
                text:value
            }

            // console.log(message);
            await newMessage(message);

            setValue('');
            setNewMessageFlag(prev => !prev)
        }

    }

    return (
        <Wrapper>
            < Component>
             {
                
                  messages && messages.map(message =>{
                    return(
                      <Container>
                       <Message message={message}/>
                      </Container>
                    )
                })
             }
            </ Component>
            <Footer 
            sendText={sendText}
            setValue={setValue}
            value={value}
            />
        </Wrapper>

    )
}

export default Messages;