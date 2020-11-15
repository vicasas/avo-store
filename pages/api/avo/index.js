import DB from '../../../db/'

const allAvos = async (req, res) => {
  try {
    const db = new DB()
    const allEntries = await db.getAll()
    const lenght = allEntries.length

    // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.status(200).json({ lenght, data: allEntries })
  } catch (e) {
    console.error(e)
    res.status(500).json({ length: 0, data: [], error: 'Something went wrong' })
  }
}

export default allAvos
