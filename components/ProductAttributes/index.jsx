export default function ProductAttributes({ description, shape, hardiness, taste }) {
  return (
    <section className='container'>
      <h2 className='h5'>About this avocado</h2>
      <p>{description}</p>
      <table className="table table-bordered mt-4">
        <thead className='table-light'>
          <tr>
            <th scope="row" colSpan='3'>Attributes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shape</td>
            <td>{shape}</td>
          </tr>
          <tr>
            <td>Hardiness</td>
            <td>{hardiness}</td>
          </tr>
          <tr>
            <td>Taste</td>
            <td>{taste}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
