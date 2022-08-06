import {Form, useActionData} from "@remix-run/react"


export  async function action({request}) {

    const formData = await request.formData();

   console.log(formData.get('email'))
   console.log(formData.get('name'))
   console.log(formData.get('message'))

    return {
        ok: 'true'
    }
    
}


export default function Contact(){

const data = useActionData();

    return (

        <div>
        <h1>Contact us</h1>
         <h2>{data?.ok}</h2>
        <p>Please leave a message for us</p>

        <Form method="POST">
            <div>


            <label htmlFor="email">
                Email
                <input type="text" name="email" id="email" />
            </label>
            </div>
            <div>


            <label htmlFor="name">
                Name
                <input type="text" name="name" id="name" />
            </label>
            </div>
            <label htmlFor="message">
                Message
                <input type="text" name="message" id="message" />
            </label>
            <div>--------</div>
        <button type="submit">Send</button>
        </Form>
        
        </div>
    )
}