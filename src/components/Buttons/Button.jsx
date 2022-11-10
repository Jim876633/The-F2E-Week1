import { Button } from "./Button.style";

export const SignupButton = ({ large }) => {
    if (large) {
        return <Button lg={large}>立即報名</Button>;
    }
    return (
        <Button title="signup" type="button" signup={true}>
            立即報名
        </Button>
    );
};

export const LoginButton = () => {
    return (
        <Button title="login" type="button">
            登入
        </Button>
    );
};
