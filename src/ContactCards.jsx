import { v4 as uuidv4 } from 'uuid';

const ContactCards = ({ contactList }) => {
    contactList && console.log(contactList);

    return (
        <>
            {contactList?.map((contact) => (
                <figure
                    className='bg-gray-200 h-80 rounded-lg shadow-md pt-7'
                    key={uuidv4()}
                >
                    <img
                        src={contact.picture?.medium}
                        alt='user'
                        className='w-28 rounded-full mx-auto'
                    />
                    <figcaption className='text-center mt-5 text-gray-500'>
                        <p className='text-2xl text-gray-700 font-semibold mb-2'>
                            {contact.name?.first} {contact.name?.last}
                        </p>
                        <p>
                            <span className='font-medium'>email:</span>{' '}
                            {contact.email}
                        </p>
                        <p>
                            <span className='font-medium'>phone:</span>{' '}
                            {contact.phone}
                        </p>
                        <p>
                            <span className='font-medium'>city:</span>{' '}
                            {contact.location?.city}
                        </p>
                        <p>
                            <span className='font-medium'>country:</span>{' '}
                            {contact.location?.country}
                        </p>
                    </figcaption>
                </figure>
            ))}
        </>
    );
};

export default ContactCards;
