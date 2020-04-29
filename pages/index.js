import 'isomorphic-unfetch'
import Container from '../components/Container'
import {loadItems, randomLoad} from '../components/actions'
const Component = ({pageProps}) => {
  return <Container {...pageProps} />
}
Component.getInitialProps = async (req) => {
  const content = await loadItems()
  const randomP = await randomLoad()
  return {content, randomP}
}
export default Component