import React, { useState, useEffect } from 'react';
import { Container, Wrapper } from "./Layout";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        // Obfuscated email and phone number
        const user = 'contact';
        const domain = 'raphael-brisson.fr';
        const fullEmail = `${user}@${domain}`;

        const countryCode = '+33';
        const phoneNumber = '787679500';
        const fullPhone = `${countryCode}${phoneNumber}`;
        const formattedPhone = '07 87 67 95 00';

        setEmail(fullEmail);
        setPhone({ number: fullPhone, display: formattedPhone });
    }, []);

    return (
        <section id="contact" className="pt-[90px] md:pt-[150px]bg-white">
            <Container>
                <Wrapper className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-20">Me contacter</h2>
                    <div className="flex flex-col gap-4">
                        {phone && (
                            <p>
                                <a href={`tel:${phone.number}`} className="hover:text-accent transition-colors duration-300">
                                    {phone.display}
                                </a>
                            </p>
                        )}
                        {email && (
                            <p>
                                <a href={`mailto:${email}`} className="hover:text-accent transition-colors duration-300">
                                    {email}
                                </a>
                            </p>
                        )}
                    </div>
                </Wrapper>
            </Container>
            <hr />

        </section>
    );
};

export default Contact;