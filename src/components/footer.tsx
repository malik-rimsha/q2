import Link from "next/link";

export default function Footer () {
    return (
        <div className="footer">
            <ul className="footer-button">
                <Link href={"terms-&-condition"}>
                <li>Terms & condition</li>
                </Link>
                <Link href={"privacy-policy"}>
                <li>Privacy Policy</li>
                </Link>
                <Link href={"career"}>
                <li>Career</li>
                </Link>
                <Link href={" press"}>
                <li>Press</li>
                </Link>
                <Link href={"blog"}>
                <li>Blog</li>
                </Link>

            </ul>

        </div>
    )
}