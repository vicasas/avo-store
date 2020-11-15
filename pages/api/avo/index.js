import DB from '../../../db/'

const allAvos = async (req, res) => {
  try {
    console.log('init')
    const db = new DB()
    const allEntries = await db.getAll()
    const lenght = allEntries.length

    console.log(allEntries)

    // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ lenght, data: allEntries }))
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    )
  }
}

export default allAvos
