import React from "react";

//const handleClickTheme = () =>  { alert('a'); }

class BtnChangeTheme extends React.Component {
  constructor(props) {
    super(props);

    let storageTheme = window.localStorage.getItem('AppTheme');
    let localTheme = (storageTheme==null) ? "" : storageTheme;

    this.state = {
      AppTheme: localTheme
    };
    

  }

  handleTheme() {
    if (this.state.AppTheme === "") {
      this.setState(
        {
          AppTheme: "themeBlack"
        },
        function() {
          document.body.classList.add("themeBlack");
          window.localStorage.setItem('AppTheme', 'themeBlack');
        }
      );
    } else {
      this.setState(
        {
          AppTheme: ""
        },
        function() {
          document.body.classList.remove("themeBlack");
          window.localStorage.setItem('AppTheme', '');
        }
      );
    }
  }

  handleClickTheme() {
    let fnHandleTheme = this.handleTheme.bind(this);
    fnHandleTheme();
    //this.VerifyAppTheme(this.state.AppTheme);
  }

  render() {
    const themeWhite = this.state.AppTheme === "";
    const txtThemeToChange = themeWhite ? "escuro" : "claro";
    //this.VerifyAppTheme(themeWhite);

    return (
      <div
        className={this.props.className}
        onClick={this.handleClickTheme.bind(this)}
      >
        Tema {txtThemeToChange}
      </div>
    );
  }
}

export default BtnChangeTheme;
