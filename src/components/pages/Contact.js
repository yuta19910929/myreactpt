import{ init, send } from '@emailjs/browser';
import { useState } from "react";
import { TextField, Box, Button } from '@mui/material';
import { Image4 } from '../index';
import  "../../assets/css/style.css";

const Contact = () => {

    //入力内容をセットするuseStateを定義
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [message,setMessage] = useState("");
    const [isVisible, setVisibility] = useState(true);
    const [isVisible2, setVisibility2] = useState(false);
    const updateVisibility = () => {
      setVisibility(false);
      setVisibility2(true);
    };

    //送信ボタン操作時の動作
    const sendEmail = () => {
      const user_id = process.env.REACT_APP_USER_ID;
      const service_id = process.env.REACT_APP_SERVICE_ID;
      const template_id = process.env.REACT_APP_TEMPLATE_ID;

      if((user_id !== undefined) && (service_id !== undefined) && (template_id !== undefined))
        {
          //initメソッド初期化
          init(user_id);
          const template_param = {
              to_name: name,
              email: mail,
              message: message
          };
          send(service_id, template_id, template_param).then(() => {
              console.log("success to send email");
          })
        }
    }

    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const onChangeMail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMail(e.target.value);
    }
    const onChangeMessage = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }
    const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendEmail();
        updateVisibility();
    }

    return (
      <>
        <div className="contact-page">
          <Box sx={{
              mx: "auto",
              mt: 10,
              mb: 10,
              width: {sm:'50%', xs:'70%'} }}>
            <div className={isVisible ? 'visible' : 'invisible'}>
              <Box sx={{ width: {sm:'70%'},
                maxWidth: '100%',
                mx:'auto',
                mt:10,
                mb:10,
                textAlign:'center',
                p: 2 }}>
                  <h2>Contact</h2>
              </Box>
              <p>お問い合わせはこちらからお願いいたします。</p>
              <form onSubmit={onSubmit}>
                <TextField
                  className="contact-name"
                  type="text"
                  required label="氏名(必須)"
                  fullWidth margin="normal" onChange={onChangeName}
                  value={name} />
                <TextField
                  className="contact-mail"
                  type="text"
                  required label="メールアドレス(必須)" fullWidth margin="normal" onChange={onChangeMail}
                  value={mail} />
                <TextField
                  className="contact-message"
                  type="text"
                  required label="お問い合わせ内容(必須)" fullWidth margin="normal" onChange={onChangeMessage}
                  value={message}
                  multiline
                  rows={10}/>
                <Box sx={{ width: '100%', textAlign:'center' }}>
                  <Button
                    variant="contained"
                    className="contact-submit"
                    sx={{
                      width: '40%',
                      height: '50px',
                      mx:0,
                      mt:5 }}
                    type="submit">送信</Button>
                </Box>
              </form>
            </div>
            <div
              className={isVisible2 ? 'visible' : 'invisible'}>
              <Box
                alignItems="center">
                <h2>Contact</h2>
                <p>送信が完了しました。<br />
                ご連絡ありがとうございました。</p>
              </Box>
            </div>
          </Box>
        </div>
      </>
    )
}

export default Contact;
