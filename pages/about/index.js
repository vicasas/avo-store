const avoFacts = [
  {
    title: 'Most avocados come from Mexico',
    content:
      'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.',
  },
  {
    title: 'The conquistadors were huge fans.',
    content:
      'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ',
  },
  {
    title: '“Avocado” wasn’t its original name.',
    content:
      'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”',
  },
  {
    title: 'It’s actually a fruit.',
    content:
      'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.',
  },
  {
    title: 'There’s a secret trick to ripening them up quick',
    content:
      'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.',
  },
]

export default function About() {
  return (
    <section className='container'>
      <h1 className='h3 text-center mb-3'>13 Surprising Facts About Avocados</h1>
      <figure className='text-center mt-4 mb-5'>
        <img className='img-fluid' src="/images/avocados.jpg" alt="Avocados on a table" />
        <figcaption className='mt-2'>
          Originally from{' '}
          <a target="_blank" href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/">
            Taste of Home
          </a>
        </figcaption>
      </figure>
      <ol className='m-0 p-0'>
        {avoFacts.map(({ title, content }) => (
          <li key={title} className='position-relative'>
            <h3 className='h5'>{title}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ol>
      <style jsx>{`
        ol {
          list-style: none;
          // Look ma! Responsive grid with no Media queries :)
          // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;
          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);
          // Boring stuff
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }
        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          padding-left: 50px;
          margin-bottom: 2rem;
        }
      `}</style>
    </section>
  )
}
