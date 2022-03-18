import type { NextPage } from 'next'
import Link from '../src/components/Link'

type Props = {
  children: string,
  as: string
}


function Title({children, as}: Props) {
  const Tag: any = as;
  return (
    <>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  )
}

const Home: NextPage = () => {
  return (
    <>
    <Title as="h1">Alura Cases - Home</Title>
      <Link href='/faq'>
        Ir para a página do FAQ
      </Link>
    </>
  )
}

export default Home;
