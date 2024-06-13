import React from "react";

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p> Also Check My Github :) </p>
                    <p className="field">
                        <a className="button is-small" href="https://github.com/justsehwag" title="View source code on GitHub">
                            <span className="icon is-small">
                                <i className="fab fa-github"></i>
                            </span>
                            <span>GitHub</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
