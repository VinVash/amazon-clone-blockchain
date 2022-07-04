import Head from 'next/head'

import Sidebar from '../components/Sidebar';

const styles = {
	container: `h-full w-full flex bg-white`
}

export default function Home() {
  return (
    <div className={styles.container}>
 		<Head>
 			<title>Amazon Clone on Solana</title>
 		</Head>
 		<Sidebar />
 		{/*<Main />*/}
    </div>
  )
}
