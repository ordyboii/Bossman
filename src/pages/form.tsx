import { useState } from "preact/hooks";

export default function Form() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className='info'>
        Thanks for requesting to join! Stay tuned for your first edition of
        juicy news.
      </p>
    );
  }

  return (
    <>
      <input
        type='email'
        placeholder='Your email'
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <a
        href={`mailto:bossjuicynews@outlook.com?subject=Request to join the Bossman's news from ${email}&body=Request to join`}
        className='submit'
        onClick={() => setSent(true)}
      >
        Request to join mailing list
      </a>
    </>
  );
}
