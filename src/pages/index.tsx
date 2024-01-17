import PageExample from '@/components/Examples/PageExample'
import { GridBg } from '@/components/Backgrounds/GridBg'
import { TextReveal } from '@/components/TextEffects/TextReveal'

export default function Home() {
  return (
    <>
      <GridBg color='bg-white' size='lg'>
        <PageExample />
        <PageExample />
        <PageExample />
      </GridBg>
    </>
  )
}
