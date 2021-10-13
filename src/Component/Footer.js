import React from 'react';

const Footer = (abc) => {
    return (
        <div>
            <React.Fragment>
                <footer>
                    <hr />
                    <center>
                        <h4>&copy; Developer Manoj {abc.year} {abc.month}</h4>
                    </center>
                </footer>
            </React.Fragment>
        </div>
    )


}

export default Footer;