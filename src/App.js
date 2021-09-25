import ContactCards from './ContactCards';
import useFetch from 'react-fetch-hook';

const App = () => {
    const url = 'https://randomuser.me/api';
    const { isLoading, data, error } = useFetch(url + '?results=200');
    data && console.log(data);

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
                <ContactCards />
            </section>
        </div>
    );
};

export default App;
