import {serverSupabaseClient} from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const params = getQuery(event)
  let query = client.from('video_games_products')
    .select('*')

  if (params.order) {
    query = query.order(params.order)
  }

  if (params.limit) {
    query = query.limit(params.limit, {ascending: false})
  }

  const {data} = await query

  return data
})