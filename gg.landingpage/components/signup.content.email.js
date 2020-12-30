import React, {useState} from 'react';

const HR = () => <hr className="mt-8 border-gray-400" />;

const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
// console.log(emailRegex.test(email));
export default (props) => {
  const [email, updateEmail] = useState('');
  const [isValidEmail, updateIsValidEmail] = useState(true);
  const submit = () => {
    const validEmail = emailRegex.test(email);
    if (validEmail) {
      updateIsValidEmail(true);
      props.update(email);
    } else {
      updateIsValidEmail(false);
    }
  };

  return (
    <div>
      <HR />
      <div className="font-heading font-semibold mt-8 text-3xl">
          How can we get in touch with you?
      </div>
      <div className="font-paragraph mb-8 text-base text-gray-500">
          We will only use it to keep you posted when we release the app. No SPAM!
      </div>
      <div className="flex flex-row">
        <input
          onChange={(e) => updateEmail(e.target.value)}
          value={email}
          className={`border focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full rounded py-3 px-4 focus:outline-none
        ${isValidEmail == false ? 'border-red-400': 'border-gray-400'}`}
          placeholder="email address"
        />
        <button
          onClick={submit}
          className="
                w-32 mx-auto cursor-pointer
                ml-4 text-2xl bg-transparent text-gray-900 rounded shadow py-2 px-4 border border-gray-900
                transition duration-500 ease-in-out transform
            ">
              Submit
        </button>
      </div>
      {isValidEmail == false? <label className="text-xs text-red-600 mt-4"> Please enter a valid email</label>: ''}
    </div>

  );
};
