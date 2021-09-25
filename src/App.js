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
        if (!filterQuery) {
            setContactList(data?.results?.slice(0, 8));
        } else {
            const queryString = filterQuery.toLowerCase();
            const filteredData = data?.results?.filter((contact) => {
                const fullName = `${contact.name.first} ${contact.name.last}`;

                // if it's just one letter, return all names that start with it
                if (queryString.length === 1) {
                    const firstLetter = fullName.charAt(0).toLowerCase();
                    return firstLetter === queryString;
                } else {
                    return fullName.toLowerCase().includes(queryString);
                }
            });
            setContactList(filteredData);
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
                        onChange={(e) => setFilterQuery(e.target.value)}
                    />
                </form>
            </section>
            <section className='px-20 py-7 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {contactList?.length < 1 && <h2>User cannot be found</h2>}
                {isLoading ? (
                    <h2 className='text-blue-500'>Loading...</h2>
                ) : (
                    <ContactCards contactList={contactList} />
                )}
            </section>
        </div>
    );
};

export default App;
