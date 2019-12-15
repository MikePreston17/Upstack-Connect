import Header from './header';

/*For theming*/
const pallete = {
  primary: {
    blue: "#4891dc",
    teal: "#32dac4",
    grey: "#555",
    white: "#FFFFFF"
  },
  secondary: {
    blue: "#ebb90d",
    grey: "#d2d2d2",
    eggshell: "#F8F8F8"
  }
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #4891dc',
  h1: {
    color: pallete.primary.grey
  }
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout;
