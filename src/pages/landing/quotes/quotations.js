import "./quotations.css";

export const quoteArray = [
  {
    id: 1,
    quote: "Speech is power: speech is to persuade, to convert, to compel.",
    author: "Ralph Waldo Emerson",
  },
  {
    id: 2,
    quote:
      "All speaking is public speaking, whether it’s to one person or a thousand.",
    author: "Roger Love",
  },
  {
    id: 3,
    quote:
      "If you’re not comfortable with public speaking – and nobody starts out comfortable; you have to learn how to be comfortable – practice.",
    author: "Hilary Clinton",
  },
  {
    id: 4,
    quote:
      "90% of how well the talk will go is determined before the speaker steps on the platform.",
    author: "Somers White",
  },
  {
    id: 5,
    quote:
      "If you can’t communicate and talk to other people and get across your ideas, you’re giving up your potential.",
    author: "Warren Buffet",
  },
];

export function Quotation({ id, quote, author }) {
  return (
    <>
      <div className="rectangle margin-top-sm flex-row flex-wrap" id={id}>
        <blockquote className="blockquote ">
          <p className="body-text-xlg">"{quote}"</p>
          <figcaption>
            {" "}
            <cite className="body-text-lg" title="Source Title">
              {" "}
              -- {author}{" "}
            </cite>
          </figcaption>
        </blockquote>
      </div>
    </>
  );
}
