import ContactCards from './ContactCards';

const App = () => {
    return (
        <div className='bg-gray-100'>
            <section>
                <form>
                    <input
                        type='text'
                        placeholder='Type Here...'
                        className='ml-20 mt-6 pl-2 rounded-md'
                    />
                </form>
            </section>
            <section>
                <ContactCards />
            </section>
        </div>
    );
};

export default App;
