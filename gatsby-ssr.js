const React = require('react');
const Layout = require('./src/components/Layout').default;

function getIsDarkModeStored() {
  if (typeof localStorage === 'undefined') {
    return false;
  }

  return localStorage.getItem('isDarkMode') === 'true' ? true : false;
}

exports.wrapPageElement = ({ element, props }) => {
  const darkModeSessionStorage = getIsDarkModeStored();

  return <Layout {...{ ...props, darkModeSessionStorage }}>{element}</Layout>;
};
