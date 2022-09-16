
import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
    display:flex;
    justify-content:center;
`;

const Image = styled('img')({
    width: 180,
    height: 180,
    borderRadius: '50%',
    padding: '1.2rem 0'
})

const BoxWrapper = styled(Box)`
    background:#FFFFFF;
    padding:5px 13px 5px 20px;
    box-shadow:0px 1px 3px rgba(0,0,0,0.01);

    & :first-child{
        font-size:13px;
        color:#009688;
        font-weight:200;
    }
    & :last-child{
        margin:8px 0px;
        color:#4A4A4A;
    }
`;

const DiscriptionContainer=styled(Box)`
    padding: 15px 20px 28px 30px;
     
    & >p{
        font-size:13px;
        color:#8696a0;
    }
`;

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="dp" />
            </ImageContainer>

            <BoxWrapper>
                <Typography> Your name </Typography>
                <Typography> {account.name} </Typography>
            </BoxWrapper>
            <DiscriptionContainer>
            <Typography>
                This is not your username or pin. This name will be visible to your WhatsApp contacts.
            </Typography>
            </DiscriptionContainer>
            <BoxWrapper>
                <Typography> About </Typography>
                <Typography> ooo wow cool india </Typography>
            </BoxWrapper>

        </>
    )
}

export default Profile;