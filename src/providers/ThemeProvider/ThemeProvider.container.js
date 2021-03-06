import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

import RTLSupport from './RTLSupport';

export class ThemeProvider extends Component {
  render() {
    const { dir, children, darkThemeActive } = this.props;

    const lightTheme = createMuiTheme({
      typography: {},
      direction: dir
    });

    const darkTheme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          main: '#78909c'
        },
        secondary: amber
      },
      typography: {},
      direction: dir
    });

    return (
      <MuiThemeProvider theme={darkThemeActive ? darkTheme : lightTheme}>
        <RTLSupport>{children}</RTLSupport>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  dir: state.language.dir,
  darkThemeActive: state.app.displaySettings.darkThemeActive
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeProvider);
