import React from 'react'
import Link from 'next/link'


class Header extends React.Component {

    render() {
        const title = this.props.title

        return (
            <>
                <Link href="/home">
                    <a> Home </a>
                </Link>

                <Link href="/about">
                    <a> About </a>
                </Link>

                <Link href="/portfolio">
                    <a> Portfolio </a>
                </Link>

                <Link href="/blogs">
                    <a> Blog </a>
                </Link>

                <Link href="/cv">
                    <a> CV </a>
                </Link>
            </>
        )
    }


}

export default Header