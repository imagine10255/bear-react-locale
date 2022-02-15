import {TFormatMessage} from 'bear-locale';

declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface Window {
        i18n: TFormatMessage,
    }
}

// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {};