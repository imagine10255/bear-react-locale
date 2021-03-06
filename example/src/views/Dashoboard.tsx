import React from 'react';
import {useLocale} from 'bear-react-locale';
import {ELocales} from 'config/locale';

const Dashboard = () => {

    const {i18n, setLocale, locale} = useLocale();

    return <>


        <select
            onChange={(event) => setLocale((event.target.value) as ELocales)}
            value={locale}
        >
            <option>{ELocales.enUS}</option>
            <option>{ELocales.zhTW}</option>
            <option>{ELocales.jaJP}</option>
        </select>

        <p>{i18n('page.home.desc')}</p>

    </>;
};

export default Dashboard;
