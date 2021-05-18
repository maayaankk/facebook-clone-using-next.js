import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Facebook({
            clientId: '2958307551157549',
            clientSecret: '0367539e983c3c160b7b1743b279f30c',
        }),
    ]
});