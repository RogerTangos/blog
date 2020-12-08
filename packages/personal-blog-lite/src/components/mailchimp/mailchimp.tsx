import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';


type SignUpStatus = {
  success: boolean;
  msg: string;
};


const MailchimpTemplate = () => {
  const [email, setEmail] = useState('');
  const [mcResponse, setMcResponse] = useState<SignUpStatus | undefined>(undefined);

 
const handleSubmit = async (e: any) => {
    e.preventDefault();

    setMcResponse(undefined);

    if (!email) return;
    try {
      const response = await addToMailchimp(email, { FNAME: name });
      handleResult(response.result, response.msg);
    } catch (e) {
      setMcResponse({
        success: false,
        msg: "Something went wrong, please try again or let me know by emailing al@albertrcarter.com.",
      });
      console.error(e);
    }
  };

  const handleResult = (result: string, message: string) => {
    const success = result === "success";
    if (!success) {
      const msg = message.includes("already subscribed")
        ? "This email has already been subscribed."
        : 'Something went wrong, please let me know at al@albertrcarter.com.';
      setMcResponse({ success, msg });
    } else {
      setMcResponse({ success, msg: "Thank you for subscribing! Talk to you soon :)" });
    }
  };


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{minWidth: "15em"}}>
        <input type="text" name="email" placeholder="your@email" onChange={handleEmailChange} 
        style={{textAlign: "center", height: "2em", minWidth: "14em"}} />
      </label>
      <input type="submit" value="Subscribe"
        style={{backgroundColor: "#f73b98", color: "white", marginLeft: "1em", fontStyle: "bold", 
        height: "2em", minWidth: "5em", border: "white", borderRadius: "4px", cursor: "pointer"}}
        />
        <span style={{color: "#f73b98"}}><br />{mcResponse?.msg}</span>
    </form>
    
  );
};

export default MailchimpTemplate;
