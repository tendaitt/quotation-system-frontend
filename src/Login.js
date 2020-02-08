import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link, CssBaseline, Avatar, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles(theme => ({

    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Copyright() {

    return (

        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright '}
            <Link color="inherit" href="https://www.tendaimudyiwa.com">Tendai Mudyiwa</Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Login() {

    const responseFacebook = (response) => {

        console.log(response);
    };

    const responseGoogle = (response) => {

        console.log(response);
    };

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={useStyles().paper}>
                <Avatar className={useStyles.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">Sign In</Typography>

                <FacebookLogin
                    appId = "myprecious"
                    fields= "name, email, picture"
                    callback = {responseFacebook}
                />

                <br/>
                <br/>

                <GoogleLogin
                    clientId = "myprecious"
                    buttonText= "Login"
                    onSuccess = {responseGoogle}
                    onFailure = {responseGoogle}
                />

            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}

export default Login;