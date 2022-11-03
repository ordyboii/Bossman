import { useState } from "preact/hooks";

export default function Form() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className='info'>
        Thanks for requesting to join! If accepted, stay tuned for your first
        edition of juicy news.
      </p>
    );
  }

  return (
    <>
      <a
        href={`mailto:bossjuicynews@gmail.com?subject=Request to join the Bossman's news&body=Request to join the juciest of news`}
        className='submit'
        onClick={() => setSent(true)}
      >
        Send Request to Join
      </a>
    </>
  );
}
