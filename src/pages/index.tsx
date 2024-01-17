import PageExample from '@/components/Examples/PageExample'
import { Grid } from '@/components/Backgrounds/Grid'

export default function Home() {
  return (
    <>
      <Grid size='xl' color='#fff' gridColor='#00000030'>
        <PageExample />
        <PageExample />
        <PageExample />
      </Grid>
    </>
  )
}
