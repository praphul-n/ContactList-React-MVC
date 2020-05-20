const data = [
    {
        name: "Praphul",
        email: "pnangeelil@suyati.com",
    },
    {
        name: "Vishnu",
        email: "vrajendran@suyati.com",
    },
    {
        name: "Georgekutty",
        email: "ggeorge@suyati.comm",
    },
];


const ContactList = ({ contacts }) => {
    return <table className="contacts-table">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {contacts.map((contacts, i) => {
                return <tr key={i}>
                    <td>{contacts.name}</td>
                    <td>{contacts.email}</td>
                </tr>
            })}
        </tbody>
    </table>;
};

const contactManagement1 = <section id="contact-list">
    <h1>Contacts</h1>
    <ContactList contacts={data}>

    </ContactList>
</section>;


ReactDOM.render(
    contactManagement1,
    document.getElementById("react-container")
);

