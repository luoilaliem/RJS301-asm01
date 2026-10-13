import './Footer.css';
import footers from '../../data/footer.json';

const Footer = () => {
    return (
        <div className="footer">
            {footers.map((footer, index) => {
                return (
                    <ul className="footer-List" key={index}>
                        {footer.col_values.map((value, index) => {
                            return (
                                <li className="footer-List-Item" key={index}>
                                    {value}
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
        </div>
    );
};

export default Footer;