import './styles/styles.css'

type Props = {
  Component: React.FC
  pageProps: any
}

const FenixApp: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default FenixApp
