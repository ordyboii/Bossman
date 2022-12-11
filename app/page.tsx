import Form from "./form";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Boss Juicy News</h1>
        <p>
          The latest <strong>juicy</strong> news from the Boss Store, Fenwicks.{" "}
          <br /> Presented to you from <strong>BOSSman</strong>
        </p>
      </div>
      <Form />
      <em>
        Be aware of your surroundings, you do not know who's talking to you as a
        friend or reporter!
      </em>
    </main>
  );
}
