import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="description"
                        content="Next JS GraphQL"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}