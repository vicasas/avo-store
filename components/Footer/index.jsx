import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-4 mt-5 border-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3 mb-4 mb-sm-0'>
            <h6>Nosotros</h6>
            <Link href='/about'>
              <a>Conoce más</a>
            </Link>
          </div>
          <div className='col-sm-3 mb-4 mb-sm-0'>
            <h6>Servicios</h6>
            <Link href='/'>
              <a>Todos los productos</a>
            </Link>
          </div>
          <div className='col-sm-6'>
            <h6>Hecho para</h6>
            <p>La comunidad de desarrolladores JavaScript que usan <a href='https://nextjs.org/'>Next.js</a> con el fin de aprender este magnifico Framework.</p>
            <div className='d-flex'>
              <div className='mr-3'>
                <i className='mr-1'>icon</i>
                <a href='#!'>Twitter</a>
              </div>
              <div>
                <i className='mr-1'>icon</i>
                <a href="#!">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <p className='text-center m-0'>
          <small>Icons made by <a>Freepik</a> from <a>www.flaticon.com</a></small>
        </p>
        <p className='text-center m-0'>
          <small>Avocado images taken from <a>Avocado 101</a> at <a>California Avocado</a></small>
        </p>
      </div>
    </footer>
  )
}
