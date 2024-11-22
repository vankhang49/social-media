import Head from 'next/head';
import '../styles/global.scss';
import {ModalPicturesProvider, usePictures} from "@/core/contexts/ModalPicturesContext";
import {ModalsPictures} from "@/components/modals/ModalsPictures";
import { Provider } from 'react-redux';
import store from "@/core/redux/store";
import ChatContainer from "@/components/chatBox/ChatContainer";

const MyApp = ({ Component, pageProps }) => {
    return (
        <ModalPicturesProvider>
            <InnerApp Component={Component} pageProps={pageProps} />
        </ModalPicturesProvider>
    );
};

const InnerApp = ({ Component, pageProps }) => {
    const {
        isOpen,
        pictures,
        indexPicture,
        toggleIsOpenModal,
    } = usePictures();

    const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Default App Name';

    return (
        <Provider store={store}>
            <Head>
                <title>{appName}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <ModalsPictures
                isOpen={isOpen}
                onClose={() => toggleIsOpenModal(false)}
                listPictures={pictures}
                indexPicture={indexPicture}
            />
            <ChatContainer />
        </Provider>
    );
};

export default MyApp;
