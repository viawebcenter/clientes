import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'


export default function Renovacion() {
  return ( 

   <Layout>
       
        <Head>
            <title>Renovacion</title>
        </Head>     
          <h1>Renovación de Servicios</h1>     
      <h2>
          <Link href="/">
              <a className="inicio">Ir al Inicio</a>
          </Link>
      </h2> 
    
      </Layout>
 
  )
}

