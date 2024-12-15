export default function Footer() {
    return (
        <footer className="footer">
            <div className="division">
                <span className="copyright">&copy; Palingenae { new Date().getFullYear() } - All right reserved.</span>
            </div>
            <div className="division -column">
                <a href="https://palingenae.be" className="link --ui">Main website</a>
            </div>
        </footer>
    )
}