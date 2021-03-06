import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({req}) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent, stars: json.stargazers_count }
}


export default MyApp
