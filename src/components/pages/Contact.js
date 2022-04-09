import{ init, send } from '@emailjs/browser';
import { useState } from "react";
import { Grid, TextField } from '@mui/material';
import { Image6, Image7, Background } from '../index';
import  "../../assets/css/style.css";

const Contact = () => {

    //入力内容をセットするuseStateを定義
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [message,setMessage] = useState("");
    const [isVisible, setVisibility] = useState(true);
    const [isVisible2, setVisibility2] = useState(false);

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
        console.log("push submit");
    }

    const updateVisibility = () => {
        setVisibility(false);
        setVisibility2(true);
    };

    return (
      <div className="contact-page">
        <Background
          backImg_1={Image7}
          backImg_2={Image6}
        />
        <p className="contact-top">Contact</p>
        <div className={isVisible ? 'visible' : 'invisible'}>
          <Grid container alignItems="center" justify="center">
              <Grid item xs={8}>
                  <form onSubmit={onSubmit}>
                      <TextField className="contact-name" type="text" required label="氏名(必須)" fullWidth margin="normal" onChange={onChangeName} value={name} />
                      <TextField className="contact-mail" type="text" required label="メールアドレス(必須)" fullWidth margin="normal" onChange={onChangeMail} value={mail}/>
                      <TextField className="contact-message" type="text" required label="お問い合わせ内容(必須)" fullWidth margin="normal" onChange={onChangeMessage} value={message}/>
                      <input className="contact-submit" type="submit" onClick={updateVisibility}/>
                  </form>
              </Grid>
          </Grid>
        </div>
        <div className={isVisible2 ? 'visible' : 'invisible'}>
          <Grid container alignItems="center" justify="center">
              <p>送信が完了しました。<br />
              ご連絡ありがとうございました。</p>
          </Grid>
        </div>
      </div>
    )
}
export default Contact;
