'use server';

const sendgrid_list_id = "32b5c6fd-c659-4adf-8e6f-204c2ddba254";


export const SubscribeToMailingList = async (email: string) => {
    try {
        // Send email to mailing list
        await fetch(`https://api.sendgrid.com/v3/marketing/contacts`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.SENDGRID_API_KEY!}`
                },
                body: JSON.stringify({
                    list_ids: [sendgrid_list_id],
                    contacts: [
                        {
                            email: email
                        }
                    ]
                })
            }
        );
    } catch (e) {
        console.log("ERROR : ");
        console.log(e);
    }

};