"use client";

import React from "react";

const FullPolicyPage: React.FC = () => {
  return (
    <section className="bg-lightGray min-h-screen px-6 sm:px-10 lg:px-20 py-12">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 sm:p-12">
        {/* Page Header */}
        <header className="text-center mb-8">
          <h1 className="text-deepBlue text-3xl sm:text-4xl font-extrabold mb-4">
            Policies and Guidelines
          </h1>
          <p className="text-mediumGray text-lg sm:text-xl">
            Please review our Privacy Policy, Terms & Conditions, and Refund Guidelines carefully.
          </p>
        </header>

        {/* Full Content */}
        <div className="text-darkGray leading-relaxed space-y-6">
          <section>
            <h2 className="text-deepBlue text-2xl font-bold mb-4">Privacy Policy</h2>
            <p>
              The terms "We" / "Us" / "Our"/”Company” individually and collectively refer to Fluentt English Live Education
              and the terms "You" /"Your" / "Yourself" refer to the users.
            </p>
            <p>
              This Privacy Policy is an electronic record in the form of an electronic contract formed under the
              Information Technology Act, 2000, and the rules made thereunder and the amended provisions pertaining to
              electronic documents/records in various statutes as amended by the Information Technology Act, 2000.
              This Privacy Policy does not require any physical, electronic, or digital signature.
            </p>
            {/* Add rest of the Privacy Policy here */}
          </section>

          <section>
            <h2 className="text-deepBlue text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p>
              The terms "We" / "Us" / "Our"/”Company” individually and collectively refer to Fluentt English Live Education,
              and the terms "Visitor” ”User” refer to the users.
            </p>
            <p>
              This page states the Terms and Conditions under which you (Visitor) may visit this website (“www.fluenttenglishlive.com”).
              Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to
              exit this site.
            </p>
            {/* Add rest of the Terms and Conditions here */}
          </section>

          <section>
            <h2 className="text-deepBlue text-2xl font-bold mb-4">Refund & Cancellation Policy</h2>
            <p>
              Our focus is complete customer satisfaction. In the event you are displeased with the services provided,
              we will refund your money, provided the reasons are genuine and proved after investigation.
            </p>
            <p>
              Customer satisfaction is our main priority. If we fail to provide services from our end, but the customer
              has paid for the service, then the customer will be liable to mention the same to us within 7 days.
            </p>
            {/* Add rest of the Refund & Cancellation Policy here */}
          </section>
        </div>
      </div>
    </section>
  );
};

export default FullPolicyPage;
