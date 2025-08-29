import React from "react";
import { Link } from "react-router-dom";

const Vote = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16 px-6">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-yellow-600">
          How to Vote For Imisioluwa
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600">
          You can vote online, via mobile apps, or by SMS. Follow the guide
          below to support your favorite housemate!
        </p>
      </div>

      {/* Online Voting Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-10 border">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Online Voting (Website & Apps)
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <span className="font-semibold">Access the Platform:</span>{" "}
            Visit{" "}
            <a
              href="https://www.africamagic.tv/bigbrother"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 underline"
            >
              Africa Magic Website
            </a>{" "}
            or download the{" "}
            <a
              href="https://www.dstv.com/en/ng/get-dstv/mydstv-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 underline"
            >
              MyDStv App
            </a>{" "}
            /{" "}
            <a
              href="https://www.gotvafrica.com/en-ng/get-gotv/mygotv-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 underline"
            >
              MyGOtv App
            </a>
            .
          </li>
          <li>
            <span className="font-semibold">Register or Log In:</span> Complete
            the registration process by providing your details, including your
            phone number in international format.
          </li>
          <li>
            <span className="font-semibold">Verify Account:</span> Enter the OTP
            (One-Time Pin) sent to your phone to activate your account.
          </li>
          <li>
            <span className="font-semibold">Vote:</span> Log in, select your
            favorite housemate, enter the number of votes, and submit.
          </li>
        </ol>
      </div>

      {/* SMS Voting Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-10 border">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">SMS Voting</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <span className="font-semibold">Send the Message:</span> Text{" "}
            <span className="font-mono">vote [Housemate Name]</span> to{" "}
            <span className="font-bold">32052</span>.
          </li>
          <li>
            <span className="font-semibold">Vote Limit:</span> You can send up
            to <span className="font-bold">100 SMS votes</span>.
          </li>
          <li>
            <span className="font-semibold">Cost:</span> Each SMS costs{" "}
            <span className="font-bold">₦30</span>.
          </li>
        </ul>
      </div>

      {/* Voting Period */}
      <div className="max-w-3xl mx-auto bg-yellow-100 p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">
          Voting Period
        </h2>
        <p className="text-gray-700">
          Voting opens after the nomination show on{" "}
          <span className="font-semibold">Monday at 7:30 PM</span> and closes on{" "}
          <span className="font-semibold">Thursday at 9:00 PM</span>.
        </p>
      </div>

      {/* Important Considerations */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Important Considerations
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Subscription Benefits:</span> DStv
            and GOtv subscribers get additional free votes via their apps.
          </li>
          <li>
            <span className="font-semibold">Data Charges:</span> Online voting
            is free, but standard data charges apply.
          </li>
          <li>
            <span className="font-semibold">Vote Audit:</span> All votes are
            audited by an independent auditor to ensure fairness.
          </li>
        </ul>
      </div>

     
    </div>
  );
};

export default Vote;
