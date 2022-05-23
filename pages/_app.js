import "../styles.css"
import "../pagestyles/login.css"
import "../components/button.css"
import "../components/textfield/textfield.css"

// This default export is required in a new `pages/_app.js` file.
export default function _app({ Component, pageProps }) {
  return <Component {...pageProps} />
}