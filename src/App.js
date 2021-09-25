import ContactCards from './ContactCards';
import useFetch from 'react-fetch-hook';
import { useEffect, useState } from 'react';

const App = () => {
    const url = 'https://randomuser.me/api';
    const { isLoading, data, error } = useFetch(url + '?results=200');
    data && console.log(data);
    const [contactList, setContactList] = useState(null);
    const [filterQuery, setFilterQuery] = useState(null);

    useEffect(() => {
        if (filterQuery) {
            // use filterQuery here
        } else {
            setContactList(data?.results);
        }
    }, [data, filterQuery]);

    return (
        <div className='bg-gray-100'>
            <section>
                <form>
                    <input
                        type='text'
                        placeholder='Type Here...'
                        className='ml-20 mt-6 p-2 rounded-md'
                    />
                </form>
            </section>
            <section className='p-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <ContactCards contactList={contactList} />
            </section>
        </div>
    );
};

export default App;
