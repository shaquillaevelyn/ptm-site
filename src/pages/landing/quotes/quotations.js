import React from 'react';
import './quotations.css';

export const quoteArray = [
  {
    id: 1,
    quote: 'Speech is power: speech is to persuade, to convert, to compel.',
    author: 'Ralph Waldo Emerson',
  },
  {
    id: 2,
    quote: 'All speaking is public speaking, whether it’s to one person or a thousand.',
    author: 'Roger Love',

  },
  {
    id: 3,
    quote: 'If you’re not comfortable with public speaking – and nobody starts out comfortable; you have to learn how to be comfortable – practice.',
    author: 'Hilary Clinton',
  },
  {
    id: 4,
    quote: '90% of how well the talk will go is determined before the speaker steps on the platform.',
    author: 'Somers White',
  },
  {
    id: 5,
    quote: 'If you can’t communicate and talk to other people and get across your ideas, you’re giving up your potential.',
    author: 'Warren Buffet',
  },

  {
    id: 6,
    cta: 'Ready to take the leap?',
    cta1: 'Join us at out next meeting',
    cta2: 'and see why we are truly and club like no other!',
  },

];

export function Quotation({
  id, quote, author, cta, cta1, cta2,
}) {
  return (
    <>
      { id < 5 ? (
        <div className="rectangle margin-top-sm flex-row flex-wrap" id={id}>
          <blockquote className="blockquote ">
            <p className="body-text-xlg">
              "
              {quote}
              "
            </p>
            <figcaption>
              {' '}
              <cite className="body-text-lg" title="Source Title">
                {' '}
                --
                {author}
              </cite>
            </figcaption>
          </blockquote>
        </div>
      ) : (
        <div className="last-rectangle margin-top-sm flex-row flex-wrap" id={id}>
          <blockquote className="blockquote ">
            <p className="body-text-xlg">
              {cta}
            </p>

            {' '}
            <p className="body-text-lg" title="Source Title">
              {' '}
              {cta1}
              {' '}
            </p>
            <p className="body-text-lg" title="Source Title">
              {' '}
              {cta2}
              {' '}
            </p>
          </blockquote>

        </div>
      )}

    </>

  );
}
